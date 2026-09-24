/**
 * Fine-line engineering graphics. No photography, no cartoon traces.
 * Conductors are drawn at hairline weight in graphite; enlarged detail is
 * handled with a labeled inset rather than thickening the conductor.
 */

export const STACK_NOTE =
  "Typical functional stack — schematic only. Not to scale. Final construction customer / program specific.";

/** Stepped isometric laminate cross-section, schematic. */
export const LaminateStack = ({ invert = false }: { invert?: boolean }) => {
  return (
    <figure className="w-full text-silver">
      <div className="relative overflow-hidden border border-silver/10 bg-navy-deep/45">
        <div className="absolute inset-0 grid-bg-fine opacity-15" aria-hidden />
        <svg
          viewBox="0 0 600 400"
          className="relative block h-auto w-full"
          role="img"
          aria-label="Clearly labeled exploded schematic showing an embedded electrical function enclosed between two interlayer films and two glass plies"
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
              <stop offset="0" stopColor="hsl(var(--primary-glow))" stopOpacity="0.13" />
              <stop offset="0.5" stopColor="hsl(var(--silver))" stopOpacity="0.08" />
              <stop offset="1" stopColor="hsl(var(--primary-glow))" stopOpacity="0.13" />
            </linearGradient>
            <clipPath id="functionPlaneClip">
              <polygon points="80,205 315,139 435,199 200,265" />
            </clipPath>
          </defs>

          <g className="schematic-layer schematic-layer-1">
            <polygon points="54,76 289,10 409,70 174,136" fill="url(#glassTop)" stroke="hsl(var(--silver))" strokeOpacity="0.85" strokeWidth="1.2" />
            <polygon points="174,136 409,70 409,85 174,151" fill="url(#glassEdge)" stroke="hsl(var(--primary-glow))" strokeOpacity="0.45" />
            <polygon points="54,76 174,136 174,151 54,91" fill="hsl(var(--primary))" fillOpacity="0.1" stroke="hsl(var(--silver))" strokeOpacity="0.35" />
          </g>

          <g className="schematic-layer schematic-layer-2">
            <polygon points="67,143 302,77 422,137 187,203" fill="url(#filmTop)" stroke="hsl(var(--primary-glow))" strokeOpacity="0.52" strokeDasharray="4 3" />
          </g>

          <g className="schematic-layer schematic-layer-3">
            <polygon points="80,205 315,139 435,199 200,265" fill="hsl(var(--accent))" fillOpacity="0.08" stroke="hsl(var(--accent))" strokeOpacity="0.95" strokeWidth="1.5" />
            <g clipPath="url(#functionPlaneClip)" opacity="0.9">
              {Array.from({ length: 12 }).map((_, i) => {
                const y = 159 + i * 7.2;
                return (
                  <path
                    key={i}
                    d={`M 58 ${y} C 92 ${y - 5}, 126 ${y + 5}, 160 ${y} S 228 ${y - 5}, 262 ${y} S 330 ${y + 5}, 364 ${y} S 432 ${y - 5}, 466 ${y}`}
                    fill="none"
                    stroke="hsl(var(--silver))"
                    strokeWidth="0.75"
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </g>
            <path d="M 96 213 L 200 265 L 426 202" fill="none" stroke="hsl(var(--accent))" strokeOpacity="0.9" strokeWidth="2.3" />
            <path className="schematic-current" d="M 426 202 C 456 206, 462 220, 486 221" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeDasharray="5 5" />
          </g>

          <g className="schematic-layer schematic-layer-4">
            <polygon points="93,267 328,201 448,261 213,327" fill="url(#filmTop)" stroke="hsl(var(--primary-glow))" strokeOpacity="0.52" strokeDasharray="4 3" />
          </g>

          <g className="schematic-layer schematic-layer-5">
            <polygon points="106,329 341,263 461,323 226,389" fill="url(#glassTop)" stroke="hsl(var(--silver))" strokeOpacity="0.85" strokeWidth="1.2" />
            <polygon points="226,389 461,323 461,337 226,399" fill="url(#glassEdge)" stroke="hsl(var(--primary-glow))" strokeOpacity="0.45" />
          </g>

          <g fontFamily="JetBrains Mono, monospace" fontSize="9">
            <path d="M 356 48 L 478 48" stroke="hsl(var(--silver))" strokeOpacity="0.65" />
            <circle cx="356" cy="48" r="2.5" fill="hsl(var(--silver))" />
            <text x="487" y="51" fill="hsl(var(--silver))">OUTER GLASS</text>

            <path d="M 369 118 L 478 118" stroke="hsl(var(--primary-glow))" strokeOpacity="0.8" />
            <circle cx="369" cy="118" r="2.5" fill="hsl(var(--primary-glow))" />
            <text x="487" y="121" fill="hsl(var(--primary-glow))">INTERLAYER</text>

            <path d="M 382 185 L 478 185" stroke="hsl(var(--accent))" strokeOpacity="0.95" />
            <circle cx="382" cy="185" r="3" fill="hsl(var(--accent))" />
            <text x="487" y="181" fill="hsl(var(--accent))" fontWeight="700">EMBEDDED</text>
            <text x="487" y="193" fill="hsl(var(--accent))" fontWeight="700">FUNCTION</text>

            <path d="M 395 251 L 478 251" stroke="hsl(var(--primary-glow))" strokeOpacity="0.8" />
            <circle cx="395" cy="251" r="2.5" fill="hsl(var(--primary-glow))" />
            <text x="487" y="254" fill="hsl(var(--primary-glow))">INTERLAYER</text>

            <path d="M 408 316 L 478 316" stroke="hsl(var(--silver))" strokeOpacity="0.65" />
            <circle cx="408" cy="316" r="2.5" fill="hsl(var(--silver))" />
            <text x="487" y="319" fill="hsl(var(--silver))">INNER GLASS</text>

            <path d="M 486 221 L 516 221 L 516 237" fill="none" stroke="hsl(var(--accent))" strokeOpacity="0.9" />
            <text x="487" y="250" fill="hsl(var(--silver))" fontSize="7">EDGE EXIT</text>
          </g>
        </svg>
      </div>
      <p className="mt-4 border-l border-accent pl-3 text-sm leading-relaxed text-silver/85">
        The electrical function is engineered into the laminate—not applied to the finished glass surface.
      </p>
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
