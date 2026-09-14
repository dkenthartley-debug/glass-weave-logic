/**
 * Fine-line engineering graphics. No photography, no cartoon traces.
 * Conductors are drawn at hairline weight in graphite; enlarged detail is
 * handled with a labeled inset rather than thickening the conductor.
 */

export const STACK_NOTE =
  "Typical functional stack — schematic only. Not to scale. Final construction customer / program specific.";

/** Laminate cross-section, schematic. */
export const LaminateStack = ({ invert = false }: { invert?: boolean }) => {
  const line = invert ? "hsl(213 18% 78% / 0.5)" : "hsl(213 20% 80%)";
  const label = invert ? "hsl(213 18% 78%)" : "hsl(215 16% 42%)";
  const conductor = invert ? "hsl(210 20% 92%)" : "hsl(215 12% 26%)";
  const layers = [
    { y: 18, h: 26, name: "Glass" },
    { y: 44, h: 14, name: "Interlayer" },
    { y: 58, h: 12, name: "Functional interlayer — conductor plane" },
    { y: 70, h: 14, name: "Interlayer" },
    { y: 84, h: 26, name: "Glass" },
  ];
  return (
    <figure className="w-full">
      <svg viewBox="0 0 420 150" className="w-full h-auto" role="img" aria-label="Schematic laminate cross-section">
        {layers.map((l) => (
          <g key={l.name}>
            <rect x="10" y={l.y} width="250" height={l.h} fill="none" stroke={line} strokeWidth="0.75" />
            <line x1="262" y1={l.y + l.h / 2} x2="272" y2={l.y + l.h / 2} stroke={line} strokeWidth="0.5" />
            <text x="276" y={l.y + l.h / 2 + 2.5} fill={label} fontSize="6" fontFamily="JetBrains Mono, monospace">
              {l.name.toUpperCase()}
            </text>
          </g>
        ))}
        {/* hairline conductors in the functional plane */}
        {Array.from({ length: 42 }).map((_, i) => (
          <line
            key={i}
            x1={16 + i * 6}
            y1="59.5"
            x2={16 + i * 6}
            y2="68.5"
            stroke={conductor}
            strokeWidth="0.4"
            opacity="0.75"
          />
        ))}
        <line x1="10" y1="122" x2="260" y2="122" stroke={line} strokeWidth="0.5" />
        <text x="10" y="136" fill={label} fontSize="5.5" fontFamily="JetBrains Mono, monospace">
          BUSBAR / COLLECTION AT PERIMETER — ELECTRICAL EXIT AT EDGE
        </text>
      </svg>
      <figcaption className={`mono mt-4 leading-relaxed ${invert ? "text-silver/70" : "text-muted-foreground"}`}>
        {STACK_NOTE}
      </figcaption>
    </figure>
  );
};

/** Hairline conductor field with a labeled enlarged detail inset. */
export const ConductorField = ({ invert = false }: { invert?: boolean }) => {
  const line = invert ? "hsl(210 20% 92%)" : "hsl(215 12% 26%)";
  const frame = invert ? "hsl(213 18% 78% / 0.35)" : "hsl(213 20% 84%)";
  const label = invert ? "hsl(213 18% 78%)" : "hsl(215 16% 42%)";
  return (
    <svg viewBox="0 0 420 220" className="w-full h-auto" role="img" aria-label="Hairline conductor field with enlarged detail inset">
      <rect x="8" y="8" width="270" height="180" fill="none" stroke={frame} strokeWidth="0.75" />
      {Array.from({ length: 60 }).map((_, i) => (
        <line key={i} x1="14" y1={14 + i * 2.9} x2="272" y2={14 + i * 2.9} stroke={line} strokeWidth="0.35" opacity="0.6" />
      ))}
      <rect x="8" y="8" width="270" height="7" fill={frame} opacity="0.7" />
      <rect x="8" y="181" width="270" height="7" fill={frame} opacity="0.7" />
      <rect x="120" y="80" width="46" height="34" fill="none" stroke="hsl(22 92% 52%)" strokeWidth="0.75" />
      <line x1="166" y1="80" x2="300" y2="40" stroke={frame} strokeWidth="0.5" />
      <line x1="166" y1="114" x2="300" y2="150" stroke={frame} strokeWidth="0.5" />
      <rect x="300" y="40" width="110" height="110" fill="none" stroke={frame} strokeWidth="0.75" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1="304" y1={48 + i * 12} x2="406" y2={48 + i * 12} stroke={line} strokeWidth="0.7" />
      ))}
      <text x="300" y="164" fill={label} fontSize="6" fontFamily="JetBrains Mono, monospace">
        ENLARGED DETAIL — CONDUCTOR SPACING
      </text>
      <text x="8" y="204" fill={label} fontSize="6" fontFamily="JetBrains Mono, monospace">
        SCHEMATIC ONLY — NOT TO SCALE
      </text>
    </svg>
  );
};

/** Shielding electrical path chain. */
export const ShieldPath = ({ invert = false }: { invert?: boolean }) => {
  const steps = [
    "Conductive layer",
    "Perimeter collection",
    "Electrical exit / ground",
    "Frame",
    "Enclosure",
  ];
  return (
    <ol className="grid sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
      {steps.map((s, i) => (
        <li
          key={s}
          className={`p-5 ${invert ? "bg-navy-deep" : "bg-background"}`}
        >
          <div className="mono text-primary">{String(i + 1).padStart(2, "0")}</div>
          <div className={`mt-2 font-display text-sm font-semibold ${invert ? "text-background" : "text-foreground"}`}>
            {s}
          </div>
        </li>
      ))}
    </ol>
  );
};

/** Restrained thermal gradient band — used only where thermal behaviour is the subject. */
export const ThermalBand = () => (
  <div className="w-full">
    <div className="h-2 w-full" style={{ background: "var(--gradient-thermal)" }} />
    <div className="mono text-muted-foreground mt-3">Relative thermal gradient — illustrative only</div>
  </div>
);

/** HEAT + SENSE architecture chain. */
export const HeatSenseChain = () => {
  const blocks = ["Heater mat", "Sensor mat", "Electrical exits", "Interface"];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-silver/20">
      {blocks.map((b, i) => (
        <div key={b} className="bg-navy-deep/60 p-6 border border-silver/10">
          <div className="mono text-primary-glow">{String(i + 1).padStart(2, "0")}</div>
          <div className="mt-3 font-display text-base font-semibold text-background uppercase">{b}</div>
        </div>
      ))}
    </div>
  );
};
