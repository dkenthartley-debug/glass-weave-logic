import automotiveWindshield from "@/assets/automotive-windshield-clean.jpg";

type Marker = {
  n: number;
  label: string;
  /** position of the hotspot, in % of the image box */
  x: number;
  y: number;
};

const markers: Marker[] = [
  { n: 1, label: "Camera heat", x: 53, y: 22 },
  { n: 2, label: "Antenna", x: 87, y: 31 },
  { n: 3, label: "Wiggle wire heat", x: 24, y: 44 },
  { n: 4, label: "Wiper park heat", x: 58, y: 69 },
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
          alt="Automotive windshield showing potential locations for HLG camera heat, antenna, wiggle wire heat, and wiper park heat"
          loading="lazy"
          width={1280}
          height={960}
          className="w-full h-full object-cover"
        />

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

      <ol className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border p-5 sm:grid-cols-4">
        {markers.map((m) => (
          <li key={m.n} className="flex gap-2 text-[11px] leading-snug">
            <span className="mono mt-px shrink-0 text-primary">{String(m.n).padStart(2, "0")}</span>
            <span className="text-foreground">{m.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

