import automotiveWindshield from "@/assets/automotive-windshield-clean.jpg";

const MARKERS = [
  { n: 1, label: "Camera / ADAS heat", x: 45, y: 24 },
  { n: 2, label: "Embedded antenna", x: 74, y: 27 },
  { n: 3, label: "Wiggle wire heat", x: 40, y: 45 },
  { n: 4, label: "Wiper park heat", x: 30, y: 65 },
];

export default function AutomotiveFeatureMap({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="relative">
        <img
          src={automotiveWindshield}
          alt="Automotive windshield with product locations"
          loading="lazy"
          width={1280}
          height={960}
          className="w-full h-full object-cover"
        />
        {MARKERS.map((m) => (
          <div
            key={m.n}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-mono font-semibold ring-2 ring-background/70 shadow-lg">
              {m.n}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-border pt-4 mt-4">
        {MARKERS.map((m) => (
          <div key={m.n} className="flex items-start gap-2">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-[10px] font-mono font-semibold">
              {m.n}
            </span>
            <span className="text-xs text-muted-foreground leading-snug">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
