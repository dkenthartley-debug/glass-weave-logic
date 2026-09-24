/**
 * Fine-line engineering graphics. No photography, no cartoon traces.
 * Conductors are drawn at hairline weight in graphite; enlarged detail is
 * handled with a labeled inset rather than thickening the conductor.
 */

export const STACK_NOTE =
  "Typical functional stack — schematic only. Not to scale. Final construction customer / program specific.";

/** Stepped isometric laminate cross-section, schematic. */
export const LaminateStack = ({ invert = false }: { invert?: boolean }) => {
  const layers = [
    { n: "01", name: "Outer glass ply" },
    { n: "02", name: "Interlayer material" },
    { n: "03", name: "Embedded function plane" },
    { n: "04", name: "Interlayer material" },
    { n: "05", name: "Inner glass ply" },
  ];

  return (
    <figure className="w-full text-silver">
      <div className="relative overflow-hidden border border-silver/10 bg-navy-deep/45">
        <div className="absolute inset-0 grid-bg-fine opacity-25" aria-hidden />
        <svg
          viewBox="0 0 520 330"
          className="relative block h-auto w-full"
          role="img"
          aria-label="Exploded isometric schematic of a laminated glass stack with two glass plies, interlayer material, an embedded functional plane, perimeter collection and an edge electrical exit"
        >
          <defs>
            <linearGradient id="glassTop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="hsl(var(--silver))" stopOpacity="0.22" />
              <stop offset="0.55" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
              <stop offset="1" stopColor="hsl(var(--silver))" stopOpacity="0.14" />
            </linearGradient>
            <linearGradient id="glassEdge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="hsl(var(--primary-glow))" stopOpacity="0.25" />
              <stop offset="1" stopColor="hsl(var(--navy-deep))" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="filmTop" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="hsl(var(--silver))" stopOpacity="0.11" />
              <stop offset="0.5" stopColor="hsl(var(--primary))" stopOpacity="0.07" />
              <stop offset="1" stopColor="hsl(var(--silver))" stopOpacity="0.11" />
            </linearGradient>
            <clipPath id="functionPlaneClip">
              <polygon points="106,158 325,96 436,151 217,213" />
            </clipPath>
          </defs>

          <g className="schematic-layer schematic-layer-1">
            <polygon points="78,96 297,34 408,89 189,151" fill="url(#glassTop)" stroke="hsl(var(--silver))" strokeOpacity="0.55" />
            <polygon points="189,151 408,89 408,101 189,163" fill="url(#glassEdge)" stroke="hsl(var(--primary))" strokeOpacity="0.3" />
            <polygon points="78,96 189,151 189,163 78,108" fill="hsl(var(--primary))" fillOpacity="0.07" stroke="hsl(var(--silver))" strokeOpacity="0.24" />
            <circle cx="82" cy="91" r="10" fill="hsl(var(--navy-deep))" stroke="hsl(var(--primary-glow))" />
            <text x="82" y="94" textAnchor="middle" fill="hsl(var(--primary-glow))" fontSize="7" fontFamily="JetBrains Mono, monospace">01</text>
          </g>

          <g className="schematic-layer schematic-layer-2">
            <polygon points="92,132 311,70 422,125 203,187" fill="url(#filmTop)" stroke="hsl(var(--silver))" strokeOpacity="0.34" strokeDasharray="3 3" />
            <circle cx="96" cy="127" r="10" fill="hsl(var(--navy-deep))" stroke="hsl(var(--primary-glow))" />
            <text x="96" y="130" textAnchor="middle" fill="hsl(var(--primary-glow))" fontSize="7" fontFamily="JetBrains Mono, monospace">02</text>
          </g>

          <g className="schematic-layer schematic-layer-3">
            <polygon points="106,158 325,96 436,151 217,213" fill="hsl(var(--primary))" fillOpacity="0.055" stroke="hsl(var(--primary-glow))" strokeOpacity="0.7" />
            <g clipPath="url(#functionPlaneClip)" opacity="0.75">
              {Array.from({ length: 15 }).map((_, i) => {
                const y = 117 + i * 6.2;
                return (
                  <path
                    key={i}
                    d={`M 76 ${y} C 112 ${y - 7}, 150 ${y + 7}, 188 ${y} S 264 ${y - 7}, 302 ${y} S 378 ${y + 7}, 456 ${y}`}
                    fill="none"
                    stroke="hsl(var(--graphite))"
                    strokeWidth="0.6"
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </g>
            <path d="M 122 170 L 217 217 L 426 158" fill="none" stroke="hsl(var(--primary-glow))" strokeOpacity="0.7" strokeWidth="2.2" />
            <path className="schematic-current" d="M 426 158 C 452 164, 461 174, 484 175" fill="none" stroke="hsl(var(--primary-glow))" strokeWidth="1.2" strokeDasharray="5 5" />
            <circle cx="110" cy="153" r="10" fill="hsl(var(--navy-deep))" stroke="hsl(var(--accent))" />
            <text x="110" y="156" textAnchor="middle" fill="hsl(var(--accent))" fontSize="7" fontFamily="JetBrains Mono, monospace">03</text>
          </g>

          <g className="schematic-layer schematic-layer-4">
            <polygon points="120,196 339,134 450,189 231,251" fill="url(#filmTop)" stroke="hsl(var(--silver))" strokeOpacity="0.3" strokeDasharray="3 3" />
            <circle cx="124" cy="191" r="10" fill="hsl(var(--navy-deep))" stroke="hsl(var(--primary-glow))" />
            <text x="124" y="194" textAnchor="middle" fill="hsl(var(--primary-glow))" fontSize="7" fontFamily="JetBrains Mono, monospace">04</text>
          </g>

          <g className="schematic-layer schematic-layer-5">
            <polygon points="134,228 353,166 464,221 245,283" fill="url(#glassTop)" stroke="hsl(var(--silver))" strokeOpacity="0.48" />
            <polygon points="245,283 464,221 464,233 245,295" fill="url(#glassEdge)" stroke="hsl(var(--primary))" strokeOpacity="0.28" />
            <polygon points="134,228 245,283 245,295 134,240" fill="hsl(var(--primary))" fillOpacity="0.06" stroke="hsl(var(--silver))" strokeOpacity="0.2" />
            <circle cx="138" cy="223" r="10" fill="hsl(var(--navy-deep))" stroke="hsl(var(--primary-glow))" />
            <text x="138" y="226" textAnchor="middle" fill="hsl(var(--primary-glow))" fontSize="7" fontFamily="JetBrains Mono, monospace">05</text>
          </g>

          <path d="M 484 175 L 500 175" stroke="hsl(var(--primary-glow))" strokeWidth="0.8" />
          <circle cx="500" cy="175" r="2.5" fill="hsl(var(--primary-glow))" />
        </svg>
        <div className="absolute bottom-3 right-3 border border-primary/25 bg-navy-deep/90 px-3 py-2">
          <span className="mono text-primary-glow">Electrical exit at edge</span>
        </div>
      </div>

      <ol className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 sm:grid-cols-3">
        {layers.map((layer) => (
          <li key={layer.n} className="flex items-baseline gap-2 text-xs text-silver/70">
            <span className={`mono ${layer.n === "03" ? "text-accent" : "text-primary-glow"}`}>{layer.n}</span>
            <span>{layer.name}</span>
          </li>
        ))}
      </ol>
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
        ENLARGED DETAIL
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
