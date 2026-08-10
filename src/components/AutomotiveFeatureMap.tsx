import automotiveWindshield from "@/assets/automotive-windshield-clean.jpg";

type Marker = {
  id: string;
  label: string;
  /** position of the hotspot, in % of the image box */
  x: number;
  y: number;
  /** which side the label sits on relative to the dot */
  side?: "left" | "right";
};

const markers: Marker[] = [
  { id: "A", label: "Camera heat", x: 50, y: 22, side: "right" },
  { id: "B", label: "Antenna", x: 93, y: 30, side: "left" },
  { id: "C", label: "Wiggle wire heat", x: 20, y: 46, side: "right" },
  { id: "D", label: "Wiper park heat", x: 42, y: 72, side: "right" },
  { id: "E", label: "Connectors", x: 8, y: 62, side: "right" },
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

export default function AutomotiveFeatureMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src={automotiveWindshield}
        alt="Automotive windshield showing vertical wiggle wire heating field, heated camera area, embedded antenna, heated wiper park, and bus bar connector locations"
        loading="lazy"
        width={1280}
        height={960}
        className="w-full h-full object-cover"
      />

      {/* readability wash */}
      <div className="absolute inset-0 bg-background/30" />

      {/* conductive wire schematic overlay */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* vertical wiggle wire field */}
        <g stroke="hsl(var(--primary))" strokeWidth={0.18} fill="none" opacity={0.55}>
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
          x={46}
          y={16.5}
          width={13}
          height={9}
          fill="hsl(var(--primary))"
          fillOpacity={0.12}
          stroke="hsl(var(--primary))"
          strokeWidth={0.25}
          strokeDasharray="1.2 0.9"
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

        {/* connector pads, lower left */}
        <g fill="hsl(var(--primary))" opacity={0.9}>
          <rect x={11} y={60} width={2.6} height={1.6} />
          <rect x={11} y={63} width={2.6} height={1.6} />
        </g>
      </svg>

      {markers.map((m) => (
        <div
          key={m.id}
          className="absolute flex items-center gap-1.5"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            transform: `translate(${m.side === "left" ? "-100%" : "0"}, -50%)`,
            flexDirection: m.side === "left" ? "row-reverse" : "row",
          }}
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary ring-2 ring-primary/25" />
          </span>
          <span className="mono text-[9px] uppercase tracking-wide whitespace-nowrap bg-background/85 border border-primary/30 text-foreground px-1.5 py-0.5">
            {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}
