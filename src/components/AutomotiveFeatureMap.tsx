import automotiveWindshield from "@/assets/automotive-windshield-features.jpg";

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
  { id: "A", label: "Camera heat", x: 55, y: 28, side: "right" },
  { id: "B", label: "Antenna", x: 93, y: 40, side: "left" },
  { id: "C", label: "Wiggle wire heat", x: 26, y: 45, side: "right" },
  { id: "D", label: "Wiper park heat", x: 44, y: 68, side: "right" },
  { id: "E", label: "Connectors", x: 9, y: 61, side: "right" },
];

export default function AutomotiveFeatureMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src={automotiveWindshield}
        alt="Automotive windshield showing heated camera area, embedded antenna, heated wiper park, wiggle wire heating field, and bus bar connector locations"
        loading="lazy"
        width={1024}
        height={768}
        className="w-full h-full object-cover"
      />

      {/* readability wash */}
      <div className="absolute inset-0 bg-background/25" />

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
          <span className="mono text-[9px] uppercase tracking-wide whitespace-nowrap bg-background/80 border border-primary/30 text-foreground px-1.5 py-0.5">
            {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}
