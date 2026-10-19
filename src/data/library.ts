
export type LibraryDoc = {
  id: string;
  title: string;
  revision: string;
  summary: string;
  pdf?: string;
  path?: string;
  /** Display order group: core hierarchy first, supporting collections after. */
  /** Available to customers on request only — no public download. */
  requestOnly?: boolean;
};

export type LibrarySeries = {
  code: "TB" | "QS" | "TA" | "AG" | "ER" | "S";
  name: string;
  scope: string;
  purpose: string;
  docs: LibraryDoc[];
};


export const librarySeries: LibrarySeries[] = [
  {
    code: "TB",
    name: "HLG Technical Bulletins",
    scope: "TB Series",
    purpose:
      "Engineering principles and application guidance for electrically active laminated transparencies.",
    docs: [
      {
        id: "TB-001",
        title: "Optical Performance Under Electrical Load",
        revision: "Revision A",
        summary:
          "Why dynamic optical qualification under electrical load should be part of every heated transparency approval process.",
        pdf: "/documents/HLG-TB-001.pdf",
        path: "/technical-bulletins/tb-001-optical-performance-under-electrical-load",
      },
      {
        id: "TB-002",
        title: "Engineered EMI/RFI Shielding Glass for Data Centers, SCIFs & Federal Facilities",
        revision: "Revision A",
        summary:
          "Shielded glazing as a complete electrical assembly: conductive layers, engineered busbars and connector systems, 100% electrical inspection, and Architectural EMI/RFI Security applications including SCIF and TEMPEST-related projects.",
        pdf: "/documents/HLG-TB-002.pdf",
        path: "/technical-bulletins/tb-002-emi-rfi-shielding-glass",
      },
      {
        id: "TB-003",
        title: "RF-Shielded Windows for MRI Suites & Medical Imaging",
        revision: "Revision A",
        summary:
          "Engineered RF-shielded MRI observation windows: shielding layers, perimeter grounding, optical clarity for patient viewing and 100% inspection, built to the customer, equipment or architectural supplied specification.",
        pdf: "/documents/HLG-TB-003.pdf",
        path: "/technical-bulletins/tb-003-mri-rf-shielded-windows",
      },
    ],
  },
  {
    code: "S",
    name: "HLG Product Specifications",
    scope: "S Series",
    purpose:
      "Material and assembly configurations for HLG conductive interlayers, heater mats, sensor mats and shielding assemblies.",
    docs: [
      {
        id: "S.02",
        title: "EMI/RFI Shielding Interlayer Assemblies",
        revision: "Draft for review",
        summary:
          "Engineered fine copper mesh and printed-copper assemblies for EMI/RFI shielding, including SCIF applications. 80 OPI mesh option; testing and results TBD.",
        path: "/specifications/s-02-emi-rfi-scif-shielding",
      },
      {
        id: "S.03",
        title: "Current Heated Interlayer Voltage Range",
        revision: "Revision A",
        summary:
          "Current heated interlayer voltage range: 12 V to 440 V DC.",
        path: "/specifications/s-03-heated-interlayer-voltage-range",
      },
      {
        id: "S.04",
        title: "Custom Embedded Sensor Mats",
        revision: "Revision A",
        summary:
          "Fine sensing wire embedded into the interlayer, with custom placement and layouts supporting lower-stress laminate construction.",
        path: "/specifications/s-04-sensor-mat-custom-layouts",
      },
      {
        id: "S.05",
        title: "Thermal Validation",
        revision: "Draft for review",
        summary:
          "Confirmed thermal imaging and temperature uniformity evaluation methods; application-specific measurements and acceptance results TBD.",
        path: "/specifications/s-05-thermal-validation",
      },
    ],
  },
  {
    code: "QS",
    name: "HLG Qualification Standards",
    scope: "QS Series",
    purpose:
      "Evaluation and acceptance methodology for energized transparent systems.",
    docs: [
      {
        id: "HLG-QS-1724",
        title: "Optical Performance Under Electrical Load — Public Overview",
        revision: "Revision A",
        summary:
          "Purpose, scope, engineering principle, and methodology behind the HLG standard for evaluating optical behavior in the energized condition.",
        requestOnly: true,
        path: "/qualification-standards/hlg-qs-1724",
      },
    ],
  },
  {
    code: "TA",
    name: "HLG Technical Articles & White Papers",
    scope: "TA / WP Series",
    purpose:
      "Deeper engineering discussions. Public article summaries are open; full white papers are available to customers on request.",
    docs: [
      {
        id: "TA-001",
        title: "Preserving ATPD-2352 Revision U Durability in Operational Service",
        revision: "Revision A",
        summary:
          "Summary article: embedded laminate temperature sensing and closed-loop heater control for heated transparent armor windshields.",
        path: "/technical-articles/ta-001-atpd-2352-embedded-sensing",
      },
      {
        id: "WP-001",
        title: "Ensuring ATPD-2352 Revision U Durability Gains Are Preserved in Operational Service — Full White Paper",
        revision: "16 pages",
        summary:
          "The complete white paper, including the operational thermal envelope appendix.",
        requestOnly: true,
      },
    ],
  },
  {
    code: "AG",
    name: "HLG Application Guides",
    scope: "AG Series",
    purpose:
      "Supporting collection. Design guidance for engineers and OEMs specifying embedded-conductor heated, sensing, and shielded transparencies.",
    docs: [
      {
        id: "AG-001",
        title: "Designing Heated Laminated Glass",
        revision: "Revision A",
        summary:
          "Requirement-first design sequence: voltage, power density, conductor format, bus bars, zoning, sensing, and the validation path.",
        pdf: "/documents/HLG-AG-001.pdf",
      },
    ],
  },
  {
    code: "ER",
    name: "HLG Engineering Reports",
    scope: "ER Series",
    purpose:
      "Supporting collection. Sample qualification reports demonstrating the output format of the HLG proprietary evaluation platform.",
    docs: [
      {
        id: "ER-001",
        title: "Sample Qualification Report — Energized Optical Evaluation",
        revision: "Revision A",
        summary:
          "Illustrative report structure covering article configuration, test conditions, reported measurements, and delivered contents.",
        pdf: "/documents/HLG-ER-001.pdf",
      },
    ],
  },
];
