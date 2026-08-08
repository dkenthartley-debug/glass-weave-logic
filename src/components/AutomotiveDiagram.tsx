/**
 * Precision schematic of an automotive windshield showing four HLG products
 * in a single cutaway: heated camera zone, wiggle-wire heating field,
 * A-pillar transparent antenna, and a continuous heated wiper park.
 *
 * Every element is drawn geometrically (no raster artwork) so wire pitch,
 * amplitude and phase are exactly uniform.
 */

const W = 800;
const H = 620;

// Windshield outline
const OUTLINE =
  "M 110 480 L 200 95 Q 400 70 600 95 L 690 480 Q 400 514 110 480 Z";

// --- Wiggle-wire heating field -------------------------------------------
// Uniform vertical sinusoids: fixed pitch, amplitude and phase.
const WIRE_PITCH = 9; // px ~ 2.5 mm at diagram scale
const WIRE_AMP = 2.2;
const WIRE_PERIOD = 20;

function sineWire(x: number, yStart: number, yEnd: number, step = 4) {
  let d = "";
  for (let y = yStart; y <= yEnd; y += step) {
    const px = x + WIRE_AMP * Math.sin((2 * Math.PI * (y - yStart)) / WIRE_PERIOD);
    d += `${d ? " L" : "M"} ${px.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d;
}

const heatingWires: string[] = [];
for (let x = 168; x <= 632; x += WIRE_PITCH) {
  heatingWires.push(sineWire(x, 88, 500));
}

// --- Heated camera zone ---------------------------------------------------
const CAM = { x: 352, y: 92, w: 96, h: 58 };
const camWires: string[] = [];
for (let x = CAM.x + 4; x <= CAM.x + CAM.w - 4; x += 4.5) {
  camWires.push(sineWire(x, CAM.y + 4, CAM.y + CAM.h - 4, 3));
}

// --- Heated wiper park (bottom corner, automotive connector) ----------------
// Based on real PVB mat layout: single continuous wire, multiple passes in the
// bottom-left corner, entering and exiting a single automotive connector on
// the bottom edge.
const WIPER =
  "M 140 494 L 140 458 L 352 458 L 352 444 L 140 444 L 140 430 L 332 430 " +
  "L 332 416 L 140 416 L 140 402 L 312 402 L 312 388 L 140 388 L 140 494";

// --- Typical automotive connector on bottom edge ----------------------------
const CONNECTOR_W = 56;
const CONNECTOR_H = 22;
const CONN_X = 112;
const CONN_Y = 494;

// --- A-pillar transparent antenna ------------------------------------------
// Double-line trace bridged at the top, single wire exit to a 1-pin connector.
const ANT_A = "M 197 126 L 152 316";
const ANT_B = "M 208 129 L 163 319";
const ANT_BRIDGE = "M 197 126 Q 203 120 208 129";
const ANT_EXIT = "M 152 316 L 148 338";

export default function AutomotiveDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="-40 -10 880 660"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-label="Automotive windshield schematic showing heated camera zone, wiggle-wire heating field, A-pillar transparent antenna and continuous heated wiper park"
    >
      <defs>
        <clipPath id="hlg-glass-clip">
          <path d={OUTLINE} />
        </clipPath>
        <pattern id="hlg-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </pattern>
      </defs>

      <rect x="-40" y="-10" width="880" height="660" fill="hsl(var(--card))" />
      <rect x="-40" y="-10" width="880" height="660" fill="url(#hlg-grid)" />

      {/* Glass body */}
      <path d={OUTLINE} fill="hsl(var(--primary) / 0.05)" stroke="hsl(var(--foreground) / 0.45)" strokeWidth="1.6" />

      <g clipPath="url(#hlg-glass-clip)">
        {/* Wiggle-wire heating field */}
        <g stroke="hsl(var(--primary) / 0.35)" strokeWidth="0.65" fill="none">
          {heatingWires.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* Heated camera zone */}
        <g stroke="hsl(var(--primary) / 0.9)" strokeWidth="0.7" fill="none">
          {camWires.map((d, i) => (
            <path key={`c${i}`} d={d} />
          ))}
        </g>
        <rect
          x={CAM.x}
          y={CAM.y}
          width={CAM.w}
          height={CAM.h}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeDasharray="4 3"
        />

        {/* A-pillar transparent antenna */}
        <g stroke="hsl(var(--primary))" strokeWidth="1.4" fill="none" strokeLinecap="round">
          <path d={ANT_A} />
          <path d={ANT_B} />
          <path d={ANT_BRIDGE} />
          <path d={ANT_EXIT} />
        </g>
      </g>

      {/* Antenna connector (1-pin) */}
      <g>
        <rect x="138" y="338" width="20" height="12" rx="2" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.2" />
        <line x1="148" y1="350" x2="148" y2="356" stroke="hsl(var(--primary))" strokeWidth="1.2" />
      </g>

      {/* Heated wiper park — single continuous wire, bottom corner */}
      <path
        d={WIPER}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Automotive connector on bottom edge */}
      <g>
        {/* Connector body */}
        <rect
          x={CONN_X}
          y={CONN_Y}
          width={CONNECTOR_W}
          height={CONNECTOR_H}
          rx="4"
          fill="hsl(var(--card))"
          stroke="hsl(var(--primary))"
          strokeWidth="1.4"
        />
        {/* Sealing ribs */}
        <line x1={CONN_X + 10} y1={CONN_Y + 4} x2={CONN_X + 10} y2={CONN_Y + CONNECTOR_H - 4} stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
        <line x1={CONN_X + 20} y1={CONN_Y + 4} x2={CONN_X + 20} y2={CONN_Y + CONNECTOR_H - 4} stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
        <line x1={CONN_X + 30} y1={CONN_Y + 4} x2={CONN_X + 30} y2={CONN_Y + CONNECTOR_H - 4} stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
        <line x1={CONN_X + 40} y1={CONN_Y + 4} x2={CONN_X + 40} y2={CONN_Y + CONNECTOR_H - 4} stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
        {/* Wire exit to connector — two pins */}
        <line x1={CONN_X + 16} y1={CONN_Y + CONNECTOR_H} x2={CONN_X + 16} y2={CONN_Y + CONNECTOR_H + 12} stroke="hsl(var(--primary))" strokeWidth="1.4" />
        <line x1={CONN_X + 40} y1={CONN_Y + CONNECTOR_H} x2={CONN_X + 40} y2={CONN_Y + CONNECTOR_H + 12} stroke="hsl(var(--primary))" strokeWidth="1.4" />
        {/* Locking tab */}
        <rect x={CONN_X + 20} y={CONN_Y - 6} width={16} height={6} rx="1" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1" />
      </g>

      {/* Callouts */}
      <g
        stroke="hsl(var(--foreground) / 0.35)"
        strokeWidth="0.8"
        fill="none"
      >
        <path d="M 448 118 L 630 118" />
        <path d="M 620 250 L 660 250" />
        <path d="M 160 220 L 116 220" />
        <path d="M 300 428 L 120 560 L 210 560" />
        <path d="M 420 503 L 594 556" />
      </g>
      <g
        fill="hsl(var(--muted-foreground))"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="11"
        letterSpacing="0.08em"
      >
        <text x="636" y="114">01 / CAMERA ZONE HEAT</text>
        <text x="636" y="128" fill="hsl(var(--muted-foreground) / 0.7)">DENSE WIRE FIELD</text>

        <text x="666" y="246">02 / WIGGLE-WIRE HEAT</text>
        <text x="666" y="260" fill="hsl(var(--muted-foreground) / 0.7)">2.5 mm PITCH</text>

        <text x="110" y="216" textAnchor="end">03 / ANTENNA</text>
        <text x="110" y="230" textAnchor="end" fill="hsl(var(--muted-foreground) / 0.7)">A-PILLAR · 1-PIN</text>

        <text x="216" y="556">04 / HEATED WIPER PARK</text>
        <text x="216" y="570" fill="hsl(var(--muted-foreground) / 0.7)">CONTINUOUS SINGLE WIRE · 4 PASSES</text>

        <text x="600" y="564">2-PIN CONNECTOR</text>
      </g>

      {/* Frame label */}
      <g
        fill="hsl(var(--primary))"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="11"
        letterSpacing="0.12em"
      >
        <text x="-24" y="632">FIG. A / AUTOMOTIVE GLAZING — INTEGRATED PRODUCT SET</text>
      </g>
      <text
        x="824"
        y="632"
        textAnchor="end"
        fill="hsl(var(--muted-foreground) / 0.7)"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="11"
      >
        HLG · SCHEMATIC · NOT TO SCALE
      </text>
    </svg>
  );
}
