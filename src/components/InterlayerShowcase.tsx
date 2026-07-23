import { useEffect, useState } from "react";

type Variant = {
  id: string;
  label: string;
  short: string;
  desc: string;
  render: () => JSX.Element;
};

// Shared laminate frame: two glass plies (top/bottom edges) sandwiching the interlayer.
// Sheet inner region: x [40..960], y [80..520]
const SHEET = { x: 40, y: 80, w: 920, h: 440 };

const GlassLaminate = ({ children }: { children: React.ReactNode }) => (
  <>
    {/* Top glass edge trim */}
    <rect x={SHEET.x} y={64} width={SHEET.w} height={14} fill="url(#glassEdge)" />
    <rect x={SHEET.x} y={78} width={SHEET.w} height={1.5} fill="hsl(220 30% 5% / 0.6)" />

    {/* Interlayer sheet (light grey, translucent) — face-on view */}
    <rect
      x={SHEET.x}
      y={SHEET.y}
      width={SHEET.w}
      height={SHEET.h}
      fill="url(#interlayerFill)"
    />

    {/* Interlayer content (patterns) — clipped to sheet */}
    <g clipPath="url(#sheetClip)">{children}</g>

    {/* Bottom glass edge trim */}
    <rect x={SHEET.x} y={520} width={SHEET.w} height={1.5} fill="hsl(220 30% 5% / 0.6)" />
    <rect x={SHEET.x} y={521.5} width={SHEET.w} height={14} fill="url(#glassEdge)" />
  </>
);

// Sinusoidal wiggle path across the sheet
const wigglePath = (y: number, amp = 2.2, wavelength = 14) => {
  const x0 = SHEET.x + 8;
  const x1 = SHEET.x + SHEET.w - 8;
  let d = `M ${x0} ${y}`;
  for (let x = x0; x <= x1; x += wavelength / 2) {
    const dir = ((x - x0) / (wavelength / 2)) % 2 < 1 ? 1 : -1;
    d += ` Q ${x + wavelength / 4} ${y + dir * amp}, ${x + wavelength / 2} ${y}`;
  }
  return d;
};

const HeatingPattern = () => {
  const lines = [];
  const pitch = 10; // ~1.5mm scaled
  for (let y = SHEET.y + 20; y < SHEET.y + SHEET.h - 20; y += pitch) {
    lines.push(
      <path
        key={y}
        d={wigglePath(y, 1.8, 12)}
        stroke="hsl(220 15% 8%)"
        strokeWidth={0.6}
        fill="none"
        opacity={0.85}
      />
    );
  }
  return (
    <>
      {lines}
      {/* Copper bus bars top/bottom of active zone */}
      <rect x={SHEET.x + 8} y={SHEET.y + 10} width={SHEET.w - 16} height={4} fill="#b06a2c" />
      <rect x={SHEET.x + 8} y={SHEET.y + SHEET.h - 14} width={SHEET.w - 16} height={4} fill="#b06a2c" />
    </>
  );
};

const WiperParkPattern = () => {
  const lines = [];
  const pitch = 8;
  const zoneY0 = SHEET.y + SHEET.h - 110;
  const zoneY1 = SHEET.y + SHEET.h - 20;
  for (let y = zoneY0; y < zoneY1; y += pitch) {
    lines.push(
      <path
        key={y}
        d={wigglePath(y, 1.6, 10)}
        stroke="hsl(220 15% 8%)"
        strokeWidth={0.6}
        fill="none"
        opacity={0.9}
      />
    );
  }
  return (
    <>
      {/* Zone outline hint */}
      <rect
        x={SHEET.x + 60}
        y={zoneY0 - 6}
        width={SHEET.w - 120}
        height={zoneY1 - zoneY0 + 12}
        fill="hsl(220 20% 12% / 0.15)"
        stroke="hsl(205 95% 55% / 0.25)"
        strokeDasharray="4 4"
        strokeWidth={0.5}
      />
      {lines}
      <rect x={SHEET.x + 60} y={zoneY0} width={SHEET.w - 120} height={3} fill="#b06a2c" />
      <rect x={SHEET.x + 60} y={zoneY1 - 3} width={SHEET.w - 120} height={3} fill="#b06a2c" />
    </>
  );
};

const AntennaPattern = () => {
  // Meander loop along left edge (A-pillar area)
  const x0 = SHEET.x + 30;
  const w = 40;
  const y0 = SHEET.y + 40;
  const y1 = SHEET.y + SHEET.h - 40;
  const step = 18;
  let d = `M ${x0} ${y0}`;
  let toggle = true;
  for (let y = y0; y < y1; y += step) {
    if (toggle) {
      d += ` L ${x0 + w} ${y} L ${x0 + w} ${y + step / 2}`;
    } else {
      d += ` L ${x0} ${y} L ${x0} ${y + step / 2}`;
    }
    toggle = !toggle;
  }
  return (
    <>
      <path d={d} stroke="hsl(220 15% 8%)" strokeWidth={1.2} fill="none" opacity={0.9} />
      {/* Feed point */}
      <circle cx={x0} cy={y0} r={3} fill="#b06a2c" />
      <rect x={x0 - 4} y={y0 - 8} width={12} height={4} fill="#b06a2c" />
    </>
  );
};

const HeatedCameraPattern = () => {
  // Small dense wiggle zone upper-center behind frit
  const cx = SHEET.x + SHEET.w / 2;
  const zoneW = 140;
  const zoneH = 90;
  const zx = cx - zoneW / 2;
  const zy = SHEET.y + 30;
  const lines = [];
  const pitch = 5;
  for (let y = zy + 6; y < zy + zoneH - 6; y += pitch) {
    const x0 = zx + 6;
    const x1 = zx + zoneW - 6;
    let d = `M ${x0} ${y}`;
    for (let x = x0; x <= x1; x += 6) {
      const dir = ((x - x0) / 6) % 2 < 1 ? 1 : -1;
      d += ` Q ${x + 1.5} ${y + dir * 1.2}, ${x + 3} ${y}`;
    }
    lines.push(
      <path key={y} d={d} stroke="hsl(220 15% 8%)" strokeWidth={0.55} fill="none" opacity={0.9} />
    );
  }
  return (
    <>
      {/* Black frit border hint */}
      <rect
        x={zx - 10}
        y={zy - 10}
        width={zoneW + 20}
        height={zoneH + 20}
        fill="hsl(220 25% 5% / 0.6)"
      />
      {/* Camera aperture */}
      <circle cx={cx} cy={zy + zoneH / 2} r={10} fill="hsl(220 30% 3%)" stroke="hsl(205 95% 55% / 0.4)" strokeWidth={0.6} />
      {lines}
    </>
  );
};

const ConductiveMeshPattern = () => {
  // 30° rotated crosshatch — very tight
  return (
    <g transform={`rotate(30 ${SHEET.x + SHEET.w / 2} ${SHEET.y + SHEET.h / 2})`}>
      <rect
        x={SHEET.x - 200}
        y={SHEET.y - 200}
        width={SHEET.w + 400}
        height={SHEET.h + 400}
        fill="url(#meshPattern)"
      />
    </g>
  );
};

const ItoPattern = () => (
  <>
    <rect
      x={SHEET.x}
      y={SHEET.y}
      width={SHEET.w}
      height={SHEET.h}
      fill="url(#itoIridescent)"
      opacity={0.75}
    />
    <rect
      x={SHEET.x}
      y={SHEET.y}
      width={SHEET.w}
      height={SHEET.h}
      fill="url(#itoSheen)"
      opacity={0.5}
    />
  </>
);

const ConductiveGlassPattern = () => (
  <>
    {/* Uniform faint bluish conductive coating on inner face */}
    <rect
      x={SHEET.x}
      y={SHEET.y}
      width={SHEET.w}
      height={SHEET.h}
      fill="hsl(200 60% 55% / 0.14)"
    />
    {/* Edge bus bar contacts */}
    <rect x={SHEET.x + 6} y={SHEET.y + 8} width={SHEET.w - 12} height={3} fill="#b06a2c" opacity={0.9} />
    <rect x={SHEET.x + 6} y={SHEET.y + SHEET.h - 11} width={SHEET.w - 12} height={3} fill="#b06a2c" opacity={0.9} />
    {/* Subtle sheen */}
    <rect x={SHEET.x} y={SHEET.y} width={SHEET.w} height={SHEET.h} fill="url(#glassSheen)" opacity={0.3} />
  </>
);

const SensorsPattern = () => {
  // Square serpentine sensor mat: parallel vertical traces joined by hairpin
  // turns at alternating top/bottom, with two terminal tabs at the bottom
  // corners and copper lead wires exiting toward the sheet edges.
  const padSize = 320;
  const cx = SHEET.x + SHEET.w / 2;
  const cy = SHEET.y + SHEET.h / 2;
  const x0 = cx - padSize / 2;
  const y0 = cy - padSize / 2;
  const x1 = x0 + padSize;
  const y1 = y0 + padSize;

  const pitch = 12;
  const inset = 12;
  const topY = y0 + inset;
  const botY = y1 - inset;

  // Continuous serpentine path
  let d = `M ${x0 + inset} ${botY}`;
  let x = x0 + inset;
  let goingUp = true;
  while (x + pitch <= x1 - inset) {
    if (goingUp) {
      d += ` L ${x} ${topY}`;
      const nx = x + pitch;
      d += ` A ${pitch / 2} ${pitch / 2} 0 0 1 ${nx} ${topY}`;
      d += ` L ${nx} ${botY}`;
      x = nx;
    } else {
      const nx = x + pitch;
      d += ` A ${pitch / 2} ${pitch / 2} 0 0 0 ${nx} ${botY}`;
      x = nx;
    }
    goingUp = !goingUp;
  }

  const padW = 20;
  const padH = 14;
  const leftPadX = x0 - 6;
  const rightPadX = x1 - padW + 6;
  const padY = botY + 10;

  return (
    <>
      {/* Faint mat substrate */}
      <rect
        x={x0 - 8}
        y={y0 - 8}
        width={padSize + 16}
        height={padSize + 16}
        fill="hsl(210 15% 90% / 0.10)"
        stroke="hsl(205 40% 60% / 0.20)"
        strokeWidth={0.4}
      />
      {/* Serpentine trace */}
      <path
        d={d}
        stroke="hsl(210 18% 55%)"
        strokeWidth={1.1}
        fill="none"
        opacity={0.92}
        strokeLinecap="round"
      />
      {/* Terminal tabs */}
      <rect x={leftPadX} y={padY} width={padW} height={padH} fill="hsl(220 15% 35%)" stroke="hsl(210 20% 72%)" strokeWidth={0.5} />
      <rect x={rightPadX} y={padY} width={padW} height={padH} fill="hsl(220 15% 35%)" stroke="hsl(210 20% 72%)" strokeWidth={0.5} />
      {/* Copper lead wires */}
      <path
        d={`M ${leftPadX + padW / 2} ${padY + padH} Q ${leftPadX - 50} ${padY + padH + 50}, ${SHEET.x + 20} ${SHEET.y + SHEET.h - 20}`}
        stroke="#b06a2c"
        strokeWidth={1.4}
        fill="none"
      />
      <path
        d={`M ${rightPadX + padW / 2} ${padY + padH} Q ${rightPadX + 50} ${padY + padH + 50}, ${SHEET.x + SHEET.w - 20} ${SHEET.y + SHEET.h - 20}`}
        stroke="#b06a2c"
        strokeWidth={1.4}
        fill="none"
      />
    </>
  );
};

const variants: Variant[] = [
  { id: "heating", label: "Heating", short: "Transparent heater grid", desc: "~21 µm black tungsten wire, sinusoidal wiggle at ~1–2 mm pitch, terminated on copper bus bars.", render: () => <HeatingPattern /> },
  { id: "wiper", label: "Wiper Park", short: "Localized heated zone", desc: "Dense wire wiggle confined to wiper rest zone, driven by dedicated bus bar pair.", render: () => <WiperParkPattern /> },
  { id: "antenna", label: "Antenna", short: "Embedded meander", desc: "~44 µm black-coated copper meander along the A-pillar edge with feed point at the top corner.", render: () => <AntennaPattern /> },
  { id: "camera", label: "Heated Camera", short: "Camera zone de-ice", desc: "~44 µm black-coated copper wire in a compact patch behind the black frit around the forward camera.", render: () => <HeatedCameraPattern /> },
  { id: "sensors", label: "Sensors", short: "Serpentine sensor mat", desc: "Square serpentine trace laid on a translucent carrier with two terminal tabs at the bottom corners and copper lead wires exiting to the edge — typical overheat / temperature sensor element laminated into the interlayer.", render: () => <SensorsPattern /> },
  { id: "mesh", label: "Conductive Mesh", short: "Shielding weave", desc: "Black-coated copper mesh, ~100 openings/in, oriented ~30° off-axis to suppress moiré.", render: () => <ConductiveMeshPattern /> },
  { id: "ito", label: "ITO Film", short: "Transparent conductive film", desc: "Sputtered ITO on PET carrier — near-clear with a subtle bronze-to-blue iridescent shift at angle.", render: () => <ItoPattern /> },
  { id: "conductive-glass", label: "Conductive Glass", short: "TCO-coated ply", desc: "Transparent conductive oxide coating deposited directly on a glass ply, contacted at the edges.", render: () => <ConductiveGlassPattern /> },
];

const InterlayerShowcase = () => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % variants.length), 3000);
    return () => clearInterval(id);
  }, [paused]);

  const v = variants[idx];

  return (
    <div
      className="panel p-3 md:p-4 relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between mb-3 px-2 pt-1">
        <div className="mono text-primary text-xs">FIG.01 / Interlayer Library</div>
        <div className="mono text-muted-foreground text-[10px]">
          {String(idx + 1).padStart(2, "0")} / {String(variants.length).padStart(2, "0")}
        </div>
      </div>

      <div className="relative overflow-hidden border border-border bg-navy-deep">
        <svg viewBox="0 0 1000 600" className="w-full h-auto block" role="img" aria-label={`Laminate cross-section: ${v.label}`}>
          <defs>
            <clipPath id="sheetClip">
              <rect x={SHEET.x} y={SHEET.y} width={SHEET.w} height={SHEET.h} />
            </clipPath>
            <linearGradient id="glassEdge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(200 30% 70% / 0.35)" />
              <stop offset="50%" stopColor="hsl(200 30% 55% / 0.15)" />
              <stop offset="100%" stopColor="hsl(200 30% 70% / 0.35)" />
            </linearGradient>
            <linearGradient id="interlayerFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(210 10% 78% / 0.22)" />
              <stop offset="50%" stopColor="hsl(210 10% 82% / 0.30)" />
              <stop offset="100%" stopColor="hsl(210 10% 78% / 0.22)" />
            </linearGradient>
            <linearGradient id="glassSheen" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(200 60% 90% / 0)" />
              <stop offset="50%" stopColor="hsl(200 60% 90% / 0.35)" />
              <stop offset="100%" stopColor="hsl(200 60% 90% / 0)" />
            </linearGradient>
            <pattern id="meshPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 6 0 M 0 0 L 0 6" stroke="hsl(220 15% 8%)" strokeWidth="0.5" opacity="0.8" />
            </pattern>
            <linearGradient id="itoIridescent" x1="0" y1="0" x2="1" y2="0.4">
              <stop offset="0%" stopColor="hsl(28 60% 55%)" />
              <stop offset="30%" stopColor="hsl(50 70% 60%)" />
              <stop offset="55%" stopColor="hsl(0 60% 55%)" />
              <stop offset="80%" stopColor="hsl(210 70% 55%)" />
              <stop offset="100%" stopColor="hsl(28 60% 55%)" />
            </linearGradient>
            <linearGradient id="itoSheen" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(200 80% 85% / 0)" />
              <stop offset="50%" stopColor="hsl(200 80% 90% / 0.5)" />
              <stop offset="100%" stopColor="hsl(200 80% 85% / 0)" />
            </linearGradient>
          </defs>

          <GlassLaminate>{v.render()}</GlassLaminate>

          {/* Layer callouts — face-on view */}
          <g className="mono" fill="hsl(215 15% 60%)" fontSize="10">
            <text x={SHEET.x - 6} y={74} textAnchor="end">GLASS EDGE</text>
            <text x={SHEET.x - 6} y={SHEET.y + SHEET.h / 2 + 3} textAnchor="end">INTERLAYER · face view</text>
            <text x={SHEET.x - 6} y={531} textAnchor="end">GLASS EDGE</text>
          </g>
        </svg>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
      </div>

      {/* Caption */}
      <div className="mt-4 px-2">
        <div className="flex items-baseline justify-between gap-4">
          <div className="font-display text-lg font-semibold text-foreground">{v.label}</div>
          <div className="mono text-[10px] text-primary/80 uppercase">{v.short}</div>
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed min-h-[2.5rem]">
          {v.desc}
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-3 px-2 pb-1 flex flex-wrap gap-1.5">
        {variants.map((vv, i) => (
          <button
            key={vv.id}
            onClick={() => {
              setIdx(i);
              setPaused(true);
            }}
            className={`mono text-[10px] px-2.5 py-1.5 border transition-colors ${
              i === idx
                ? "border-primary text-primary bg-primary/10"
                : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
            }`}
          >
            {String(i + 1).padStart(2, "0")} · {vv.label}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-2 px-2 pb-1 flex items-center gap-3">
        <div className="mono text-[10px] text-muted-foreground">
          {paused ? "PAUSED" : "AUTO · 3S"}
        </div>
        <div className="flex-1 h-px bg-border relative overflow-hidden">
          <div
            key={`${idx}-${paused}`}
            className="absolute inset-y-0 left-0 bg-primary"
            style={{
              width: paused ? `${((idx + 1) / variants.length) * 100}%` : "100%",
              animation: paused ? "none" : "interlayer-progress 3s linear",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes interlayer-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default InterlayerShowcase;
