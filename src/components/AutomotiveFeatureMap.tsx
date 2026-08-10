import automotiveWindshield from "@/assets/automotive-windshield-clean.jpg";

type Marker = {
  n: number;
  label: string;
  detail: string;
  /** position of the hotspot, in % of the image box */
  x: number;
  y: number;
};

const markers: Marker[] = [
  { n: 1, label: "Top bus bar", detail: "Tinned copper bus, interlayer-embedded feed", x: 52, y: 18 },
  { n: 2, label: "Camera / ADAS heat zone", detail: "Discrete heated aperture at sensor pod", x: 57.5, y: 21.5 },
  { n: 3, label: "Rain / light sensor window", detail: "Wire-free optical clear area", x: 47, y: 27 },
  { n: 4, label: "Embedded antenna element", detail: "Isolated from heater circuit", x: 91, y: 31 },
  { n: 5, label: "Wiggle wire heat field", detail: "21 µm tungsten, 2.5 mm vertical pitch", x: 24, y: 44 },
  { n: 6, label: "HUD / optical zone", detail: "Wire density managed for distortion control", x: 36, y: 57 },
  { n: 7, label: "Wiper park heat", detail: "Serpentine band along lower edge", x: 60, y: 68 },
  { n: 8, label: "Bottom bus bar", detail: "Return path, balanced current density", x: 80, y: 70.2 },
  { n: 9, label: "Connectors & leads", detail: "Soldered terminations, strain-relieved exit", x: 9.5, y: 62 },
  { n: 10, label: "Frit / obscuration band", detail: "Bus bar and lead concealment", x: 86, y: 17 },
];

/** Glass viewing area (in % of the image box) that the wire field covers */
const FIELD = { left: 12, right: 92, top: 18, bottom: 70 };

/** Vertical sinusoidal ("wiggle") wire run, drawn in the 0-100 SVG space */
function wiggleWire(x: number, top: number, bottom: number) {
  const amp = 0.55;
  const period = 5;
  let d = `M ${x} ${top}`;
  for (let y = top; y < bottom; y += period) {
    const half = Math.min(period / 2, bottom - y);
    d += ` q ${amp} ${half / 2} 0 ${half}`;
    const y2 = y + half;
    if (y2 >= bottom) break;
    const half2 = Math.min(period / 2, bottom - y2);
    d += ` q ${-amp} ${half2 / 2} 0 ${half2}`;
  }
  return d;
}

const wireXs = Array.from(
  { length: Math.floor((FIELD.right - FIELD.left) / 2.6) + 1 },
  (_, i) => FIELD.left + i * 2.6,
);

export default function AutomotiveFeatureMap({
  className = "",
  variant = "compact",
}: {
  className?: string;
  variant?: "compact" | "full";
}) {
  return (
    <div className={className}>
      <div className="relative">
        <img
          src={automotiveWindshield}
          alt="Automotive windshield feature map: vertical wiggle wire heating field, top and bottom bus bars, heated camera and ADAS zone, rain sensor window, embedded antenna, HUD zone, heated wiper park, connectors, and frit band"
          loading="lazy"
          width={1280}
          height={960}
          className="w-full h-full object-cover"
        />

        {/* readability wash */}
        <div className="absolute inset-0 bg-background/35" />

        {/* conductive wire schematic overlay */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* vertical wiggle wire field */}
          <g stroke="hsl(var(--primary))" strokeWidth={0.18} fill="none" opacity={0.5}>
            {wireXs.map((x) => (
              <path key={x} d={wiggleWire(x, FIELD.top + 1.5, FIELD.bottom - 1.5)} />
            ))}
          </g>

          {/* top and bottom bus bars */}
          <g fill="hsl(var(--primary))" opacity={0.85}>
            <rect x={FIELD.left - 0.6} y={FIELD.top} width={FIELD.right - FIELD.left + 1.2} height={0.9} />
            <rect x={FIELD.left - 0.6} y={FIELD.bottom - 0.9} width={FIELD.right - FIELD.left + 1.2} height={0.9} />
          </g>

          {/* camera heat zone */}
          <rect
            x={51}
            y={19.5}
            width={12}
            height={8}
            fill="hsl(var(--primary))"
            fillOpacity={0.12}
            stroke="hsl(var(--primary))"
            strokeWidth={0.25}
            strokeDasharray="1.2 0.9"
          />

          {/* rain / light sensor clear window */}
          <circle
            cx={46}
            cy={27}
            r={2.6}
            fill="hsl(var(--background))"
            fillOpacity={0.45}
            stroke="hsl(var(--primary))"
            strokeWidth={0.22}
            strokeDasharray="0.9 0.7"
          />

          {/* HUD / optical zone */}
          <rect
            x={26}
            y={52}
            width={20}
            height={11}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={0.22}
            strokeDasharray="1.6 1.2"
            opacity={0.7}
          />

          {/* wiper park serpentine band */}
          <path
            d={(() => {
              const y0 = 69.5;
              let d = `M 14 ${y0}`;
              for (let x = 14; x < 86; x += 6) {
                d += ` L ${x + 3} ${y0 + 3} L ${x + 6} ${y0}`;
              }
              return d;
            })()}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={0.3}
            opacity={0.8}
          />

          {/* antenna element, upper right, isolated from heater field */}
          <g stroke="hsl(var(--primary))" strokeWidth={0.28} fill="none" opacity={0.9}>
            <path d="M 88 30 v 9 M 88 30 h 5 M 88 34.5 h 5 M 88 39 h 5" />
          </g>

          {/* connector pads and lead exit, lower left */}
          <g stroke="hsl(var(--primary))" strokeWidth={0.25} fill="none" opacity={0.9}>
            <path d="M 12.3 61 v -21 M 12.3 64 v 5" />
          </g>
          <g fill="hsl(var(--primary))" opacity={0.9}>
            <rect x={11} y={60} width={2.6} height={1.6} />
            <rect x={11} y={63} width={2.6} height={1.6} />
          </g>
        </svg>

        {markers.map((m) => (
          <span
            key={m.n}
            className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-semibold text-primary-foreground ring-2 ring-background/70 mono"
            style={{ left: `${m.x}%`, top: `${m.y}%`, transform: "translate(-50%, -50%)" }}
            aria-hidden="true"
          >
            {m.n}
          </span>
        ))}
      </div>

      <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-border p-5">
        {markers.map((m) => (
          <li key={m.n} className="flex gap-2 text-[11px] leading-snug">
            <span className="mono mt-px shrink-0 text-primary">{String(m.n).padStart(2, "0")}</span>
            <span>
              <span className="text-foreground">{m.label}</span>
              {variant === "full" && <span className="block text-muted-foreground">{m.detail}</span>}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
