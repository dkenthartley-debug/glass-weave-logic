/**
 * HLG V1 content model — six technology functions, solutions, markets.
 * Source of truth for navigation, homepage modules and detail pages.
 */

export type Tech = {
  code: "HEAT" | "SENSE" | "SHIELD" | "CONDUCT" | "SWITCH" | "CONNECT";
  slug: string;
  name: string;
  cardCopy: string;
  h1: string;
  lead: string;
  sections: { title: string; body?: string; bullets?: string[] }[];
  specs?: { label: string; value: string }[];
  closing?: string;
  cta?: { label: string; to: string };
  seoTitle: string;
  seoDescription: string;
};

export const technologies: Tech[] = [
  {
    code: "HEAT",
    slug: "electrically-heated-interlayers",
    name: "Electrically Heated Interlayers",
    cardCopy:
      "Fine-wire and transparent-conductor heating systems engineered around voltage, power density, geometry and thermal requirements.",
    h1: "Electrically heated interlayers",
    lead: "HLG engineers fine-wire and transparent-conductor heating systems for laminated glass. The heater is engineered around the electrical requirement — not adapted from a catalog part.",
    sections: [
      {
        title: "Engineered around the electrical requirement",
        body: "Heater architecture follows from the supply voltage, the power or thermal objective, the transparency geometry and the electrical interface available in the assembly.",
        bullets: [
          "Conductor architecture and wire selection",
          "Resistance and power distribution",
          "Busbar geometry and collection",
          "Lead routing and electrical exits",
          "Laminate stack compatibility",
        ],
      },
      {
        title: "Conductor formats",
        bullets: [
          "Embedded fine tungsten wire",
          "Transparent conductive coatings and films",
          "Fine conductive mesh architectures",
        ],
      },
      {
        title: "Validation",
        bullets: [
          "Electrical resistance and continuity verification",
          "Thermal imaging of new heater designs",
          "Temperature uniformity evaluation",
          "Optical evaluation while energized after prototype lamination, where required",
        ],
      },
    ],
    specs: [
      { label: "Voltage capability", value: "12–480 V" },
      { label: "Power density", value: "approx. 0.05–5.0 W/in²" },
      { label: "Tungsten capability", value: "14–61 µm" },
      { label: "Demonstrated production spacing", value: "0.5 mm" },
      { label: "Inspection", value: "100% of HLG-fabricated interlayers" },
    ],
    closing: "Your glass. Your electrical requirements. HLG engineers the heater.",
    seoTitle: "Electrically Heated Interlayers for Laminated Glass | HLG",
    seoDescription:
      "HLG engineers electrically heated interlayers for laminated glass: fine tungsten wire and transparent conductor heating from 12–480 V, approx. 0.05–5.0 W/in², busbars and electrical exits.",
  },
  {
    code: "SENSE",
    slug: "embedded-temperature-sensing",
    name: "Embedded Temperature Sensing",
    cardCopy:
      "Thin RTD sensor interlayers engineered for temperature feedback, control and over-temperature protection.",
    h1: "The sensor is required. How it is integrated matters.",
    lead: "HLG designs and manufactures thin RTD sensor interlayers for heated transparencies. Sensor placement, lead routing and electrical exits are engineered as part of the laminate architecture rather than treated as unrelated components.",
    sections: [
      {
        title: "What the sensor interlayer does",
        bullets: [
          "RTD placement at the locations that matter thermally",
          "Temperature feedback to the control system",
          "Over-temperature protection",
          "Multiple sensing locations where the application requires them",
        ],
      },
      {
        title: "Integration engineering",
        body: "A sensing element only performs as well as the way it reaches the outside of the laminate.",
        bullets: [
          "Sensor lead routing inside the stack",
          "Electrical exits and edge transitions",
          "Interaction between sensor mat and heater architecture",
          "Prelamination of the sensor interlayer where appropriate",
        ],
      },
      {
        title: "Matched heater + sensor systems",
        body: "HLG can produce the heater mat and a dedicated RTD sensor mat as a matched electrical and thermal system, engineered together, with validation after lamination.",
      },
    ],
    closing:
      "HLG has production aerospace heater and matching sensor-mat experience.",
    cta: { label: "Start a heater + sensor integration review", to: "/engineering-review" },
    seoTitle: "Embedded RTD Temperature Sensing Interlayers | HLG",
    seoDescription:
      "HLG designs thin RTD sensor interlayers for heated transparencies: sensor placement, multiple sensing locations, lead routing, electrical exits and matched heater + sensor systems.",
  },
  {
    code: "SHIELD",
    slug: "emi-rfi-shielding",
    name: "EMI/RFI Shielding",
    cardCopy:
      "Conductive interlayer architectures engineered around the complete electrical path from transparent shielding layer through perimeter collection and grounding.",
    h1: "EMI/RFI shielding is an electrical system, not simply a conductive piece of glass",
    lead: "The shielding layer is one element in a path. HLG engineers the conductive interlayer together with how current is collected at the perimeter and how it leaves the assembly.",
    sections: [
      {
        title: "The electrical path",
        body: "Conductive layer → perimeter collection → electrical exit / ground → frame → enclosure. A discontinuity anywhere in that path governs the result.",
      },
      {
        title: "What HLG engineers",
        bullets: [
          "Transparent shielding layer selection — fine mesh or conductive coating",
          "Perimeter collection geometry",
          "Grounding interface and electrical exit",
          "Laminate stack and edge treatment",
          "Manufacturing controls and inspection",
        ],
      },
      {
        title: "V1 disclosure",
        body: "Specific shielding attenuation values and compliance statements are program- and construction-dependent and are not published here. HLG discusses shielding performance under a mutual NDA in the context of a defined assembly.",
      },
    ],
    seoTitle: "EMI/RFI Shielding Interlayers for Laminated Glass | HLG",
    seoDescription:
      "HLG engineers EMI/RFI shielding interlayers as a complete electrical system: transparent conductive layer, perimeter collection, grounding interface and electrical exits.",
  },
  {
    code: "CONDUCT",
    slug: "transparent-conductive-films",
    name: "Transparent Conductors",
    cardCopy:
      "Embedded fine wire, conductive coatings, transparent films and mesh architectures selected around the required electrical and optical function.",
    h1: "Select the conductor around the function",
    lead: "No single transparent conductor is best for every application. Sheet resistance, optical requirements, geometry, current density and laminate compatibility all move the answer.",
    sections: [
      {
        title: "Embedded fine wire",
        body: "Mature, demonstrated HLG capability. Very fine tungsten conductors placed to a controlled geometry — high current capability with minimal optical footprint.",
      },
      {
        title: "ITO and conductive coatings",
        body: "Mature capability. Uniform area conduction and heating with no discrete conductor lines; sheet resistance governs achievable power.",
      },
      {
        title: "Fine conductive mesh",
        body: "Mature capability. Useful where area conduction and shielding continuity are both required.",
      },
      {
        title: "AgNW and emerging conductors",
        body: "Development stage. HLG evaluates silver nanowire and other emerging conductor systems on a development basis. These are not presented as mature HLG production capability.",
      },
    ],
    seoTitle: "Transparent Conductors for Laminated Glass — Wire, ITO, Mesh | HLG",
    seoDescription:
      "Embedded fine wire, ITO and conductive coatings, fine conductive mesh and emerging conductors — HLG selects the transparent conductor around the electrical and optical function.",
  },
  {
    code: "SWITCH",
    slug: "switchable-smart-glazing",
    name: "Switchable Glazing",
    cardCopy:
      "Integration of PDLC and other electrically controlled glazing technologies into laminate-ready assemblies.",
    h1: "Switchable glazing is a system, not simply a sheet of film",
    lead: "HLG focuses on integrating PDLC and other electrically controlled glazing technologies into laminate-ready assemblies, with the electrical interface engineered for the finished construction.",
    sections: [
      {
        title: "What HLG engineers",
        bullets: [
          "Film integration into the laminate stack",
          "Electrical interface, bus geometry and exits",
          "Edge treatment and perimeter detailing",
          "Alignment and dimensional control before lamination",
          "Manufacturing controls and inspection",
        ],
      },
      {
        title: "Technology-neutral",
        body: "HLG works with the switchable technology appropriate to the program. Electrochromic systems are not presented as mature HLG production capability.",
      },
    ],
    seoTitle: "PDLC & Switchable Glazing Integration for Laminates | HLG",
    seoDescription:
      "HLG integrates PDLC and electrically controlled glazing into laminate-ready assemblies — film integration, electrical interfaces, bus geometry, exits and manufacturing controls.",
  },
  {
    code: "CONNECT",
    slug: "integrated-antennas-laminated-glass",
    name: "Integrated Antennas",
    cardCopy:
      "Fine-wire and transparent-conductor antenna architectures engineered for reliable integration into laminated glass.",
    h1: "The RF engineer designs the antenna. HLG engineers how it becomes glass.",
    lead: "The customer or their RF specialist defines the antenna geometry and RF target. HLG translates that design into a manufacturable laminated-glass interlayer using transparent conductive film or embedded fine wire.",
    sections: [
      {
        title: "What HLG engineers",
        bullets: [
          "Conductor integration and placement accuracy",
          "Feed architecture",
          "Electrical exits and connector interface",
          "Laminate stack-up",
          "Manufacturing controls and inspection",
        ],
      },
      {
        title: "Scope",
        body: "HLG does not present itself as performing full RF antenna design unless specifically responsible for it in a program. The division of responsibility is defined at the start of an engineering review.",
      },
    ],
    seoTitle: "Integrated Antennas in Laminated Glass | HLG",
    seoDescription:
      "HLG turns antenna geometry into a manufacturable laminated-glass interlayer using fine wire or transparent conductive film — conductor integration, feed architecture and electrical exits.",
  },
];

export const getTech = (slug?: string) => technologies.find((t) => t.slug === slug);
export const techByCode = (code: Tech["code"]) => technologies.find((t) => t.code === code)!;

export type Solution = { id: string; name: string; body: string; bullets: string[] };

export const solutions: Solution[] = [
  {
    id: "functional-interlayer-integration",
    name: "Functional Interlayer Integration",
    body: "HLG combines electrical technologies into engineered, laminate-ready functional interlayer assemblies. The glass laminator laminates the glass; HLG integrates the function.",
    bullets: [
      "HEAT + SENSE — heating with integrated temperature feedback",
      "HEAT + CONDUCT — fine-wire or transparent-conductor heating architectures",
      "SHIELD + GROUND — transparent shielding with engineered perimeter collection and electrical exit",
      "CONNECT + CONDUCT — antenna geometry translated into a manufacturable interlayer",
      "SWITCH + CONNECT — electrical interfaces engineered around switchable glazing systems",
    ],
  },
  {
    id: "prelaminated-functional-assemblies",
    name: "Prelaminated Functional Assemblies",
    body: "Where appropriate, HLG can preintegrate multiple interlayer components before they reach the glass laminator — controlling alignment, electrical interfaces, conductor placement and exits.",
    bullets: [
      "Alignment control between functional layers",
      "Electrical interfaces established before lamination",
      "Conductor placement verified in-process",
      "Fewer variables introduced at the glass laminator",
    ],
  },
  {
    id: "busbar-engineering",
    name: "Busbar Engineering",
    body: "Current has to be collected and distributed before it can do useful work. Busbar geometry, material and placement are engineered with the conductor architecture, not after it.",
    bullets: [
      "Collection geometry matched to conductor architecture",
      "Current density and distribution",
      "Low-profile, realistically proportioned construction",
      "Termination and joint controls",
    ],
  },
  {
    id: "electrical-exit-leads",
    name: "Electrical Exit Leads",
    body: "The exit is where laminate architecture, electrical function and assembly all meet. HLG engineers lead routing, edge transitions and exit locations around the final construction.",
    bullets: [
      "Exit location engineered with the frame and assembly",
      "Lead routing inside the stack",
      "Edge transitions and sealing considerations",
      "Connector interface definition",
    ],
  },
];

export type Market = {
  slug: string;
  name: string;
  blurb: string;
  bullets: string[];
  seoTitle: string;
  seoDescription: string;
};

export const markets: Market[] = [
  {
    slug: "aerospace",
    name: "Aerospace",
    blurb:
      "Heated transparencies with integrated temperature sensing, engineered as one electrothermal system.",
    bullets: [
      "Heated transparencies",
      "RTD sensor mats",
      "Matched heater + sensor systems",
      "Electrical exits",
      "High-power-density applications",
      "Optical performance under electrical load",
    ],
    seoTitle: "Aerospace Functional Interlayers — Heated & RTD Sensing | HLG",
    seoDescription:
      "HLG engineers aerospace functional interlayers: electrically heated interlayers, embedded RTD sensor mats, matched heater + sensor systems, electrical exits and validation.",
  },
  {
    slug: "defense",
    name: "Defense",
    blurb: "Heated vehicle transparencies and specialty electrical architectures for demanding environments.",
    bullets: [
      "Heated vehicle transparencies",
      "De-ice / defog systems",
      "EMI/RFI integration",
      "Specialty electrical architectures",
    ],
    seoTitle: "Defense Heated & Shielded Functional Interlayers | HLG",
    seoDescription:
      "HLG engineers functional interlayers for defense glazing: heated vehicle transparencies, de-ice and defog systems, EMI/RFI integration and specialty electrical architectures.",
  },
  {
    slug: "automotive",
    name: "Automotive",
    blurb: "Fine-wire heating, localized sensor and camera heating, and embedded antenna architectures.",
    bullets: [
      "Heated windshields",
      "Wiper-park heating",
      "Camera / sensor heating",
      "Embedded antennas",
      "Fine-wire systems",
    ],
    seoTitle: "Automotive Heated Windshield & Antenna Interlayers | HLG",
    seoDescription:
      "HLG engineers automotive functional interlayers: heated windshields, wiper-park heating, camera and sensor heating zones, embedded antennas and fine-wire systems.",
  },
  {
    slug: "rail-transportation",
    name: "Rail & Transportation",
    blurb: "Operator visibility in weather, with heating engineered for large-format transparencies.",
    bullets: [
      "Heated windshields",
      "Operator visibility",
      "De-ice / defog systems",
      "Specialty functional glazing",
    ],
    seoTitle: "Rail & Transit Heated Windshield Interlayers | HLG",
    seoDescription:
      "HLG engineers heated interlayers for rail and transit transparencies — operator visibility, de-ice and defog systems, and specialty functional glazing.",
  },
  {
    slug: "off-road-commercial-equipment",
    name: "Off-Road & Commercial Equipment",
    blurb: "Cold-weather visibility for equipment cabs, including localized heated zones.",
    bullets: [
      "Windshield heating",
      "Wiper-park heating",
      "Localized heated zones",
      "Cold-weather visibility",
    ],
    seoTitle: "Off-Road & Commercial Equipment Heated Glazing | HLG",
    seoDescription:
      "HLG engineers heated interlayers for off-road and commercial equipment cabs: windshield heating, wiper-park heating and localized heated zones for cold-weather visibility.",
  },
  {
    slug: "architectural-smart-glass",
    name: "Architectural & Smart Glass",
    blurb: "Shielding, transparent conduction and switchable glazing for specialty building envelopes.",
    bullets: [
      "EMI/RFI shielding",
      "Transparent conductors",
      "PDLC integration",
      "Electrically heated glazing",
      "Specialty functional laminates",
    ],
    seoTitle: "Architectural & Smart Glass Functional Interlayers | HLG",
    seoDescription:
      "HLG engineers architectural functional interlayers: EMI/RFI shielding, transparent conductors, PDLC integration, electrically heated glazing and specialty functional laminates.",
  },
];

export const getMarket = (slug?: string) => markets.find((m) => m.slug === slug);

export const processSteps = [
  {
    n: "01",
    title: "Define",
    items: [
      "Voltage",
      "Power / thermal objective",
      "Geometry",
      "Electrical interface",
      "Optical requirements",
      "Environmental requirements",
    ],
  },
  {
    n: "02",
    title: "Engineer",
    items: [
      "Conductor architecture",
      "Resistance",
      "Power distribution",
      "Busbars",
      "Sensor placement",
      "Lead routing",
      "Electrical exits",
      "Laminate stack",
    ],
  },
  {
    n: "03",
    title: "Prototype",
    items: ["HLG produces the engineered functional interlayer for prototype lamination."],
  },
  {
    n: "04",
    title: "Validate",
    items: [
      "Electrical testing",
      "Resistance and continuity",
      "Thermal imaging",
      "Temperature uniformity",
      "Optical evaluation where required",
    ],
  },
  {
    n: "05",
    title: "Produce",
    items: ["Controlled manufacturing", "Documented design", "Traceability", "100% inspection"],
  },
];

export const qualityProof = [
  { title: "ISO 9001:2015", body: "Certified quality management system." },
  { title: "100% inspection", body: "Every HLG-fabricated interlayer." },
  { title: "Design control", body: "New electrical designs are documented and controlled." },
  { title: "Thermal validation", body: "New heater designs are thermally evaluated." },
  { title: "Traceability", body: "Manufacturing and inspection records maintained through production." },
  {
    title: "Clean-room processing",
    body: "Temperature- and humidity-controlled processing environment designed for laminated-glass interlayer materials.",
  },
];

export const libraryTopics = [
  "Heated interlayer engineering",
  "Embedded RTD sensing",
  "Power density",
  "Busbar engineering",
  "Electrical exits",
  "Transparent conductors",
  "EMI/RFI shielding",
  "Antenna integration",
  "PDLC",
  "Sensor heating",
  "Wiper-park heating",
  "Optical performance",
  "Validation",
];
