import tb001 from "@/assets/documents/hlg-tb-001.pdf.asset.json";
import qs1724 from "@/assets/documents/hlg-qs-1724.pdf.asset.json";
import ag001 from "@/assets/documents/hlg-ag-001.pdf.asset.json";
import er001 from "@/assets/documents/hlg-er-001.pdf.asset.json";

export type LibraryDoc = {
  id: string;
  title: string;
  revision: string;
  summary: string;
  pdf: string;
  path?: string;
};

export type LibrarySeries = {
  code: "TB" | "QS" | "AG" | "ER";
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
      "Educational papers on industry challenges and engineering concepts affecting electrically active transparent systems.",
    docs: [
      {
        id: "TB-001",
        title: "Optical Performance Under Electrical Load",
        revision: "Revision A",
        summary:
          "Why dynamic optical qualification under electrical load should be part of every heated transparency approval process.",
        pdf: tb001.url,
        path: "/technical-bulletins/tb-001-optical-performance-under-electrical-load",
      },
    ],
  },
  {
    code: "QS",
    name: "HLG Qualification Standards",
    scope: "QS Series",
    purpose:
      "Public overviews of the Hotlineglass qualification philosophy and the standards used to evaluate energized transparent systems.",
    docs: [
      {
        id: "HLG-QS-1724",
        title: "Optical Performance Under Electrical Load — Public Overview",
        revision: "Revision A",
        summary:
          "Purpose, scope, engineering principle, and methodology behind the HLG standard for evaluating optical behavior in the energized condition.",
        pdf: qs1724.url,
        path: "/qualification-standards/hlg-qs-1724",
      },
    ],
  },
  {
    code: "AG",
    name: "HLG Application Guides",
    scope: "AG Series",
    purpose:
      "Design guidance for engineers and OEMs specifying embedded-conductor heated, sensing, and shielded transparencies.",
    docs: [
      {
        id: "AG-001",
        title: "Designing Heated Laminated Glass",
        revision: "Revision A",
        summary:
          "Requirement-first design sequence: voltage, power density, conductor format, bus bars, zoning, sensing, and the validation path.",
        pdf: ag001.url,
      },
    ],
  },
  {
    code: "ER",
    name: "HLG Engineering Reports",
    scope: "ER Series",
    purpose:
      "Sample qualification reports demonstrating the output format of the HLG proprietary evaluation platform.",
    docs: [
      {
        id: "ER-001",
        title: "Sample Qualification Report — Energized Optical Evaluation",
        revision: "Revision A",
        summary:
          "Illustrative report structure covering article configuration, test conditions, reported measurements, and delivered contents.",
        pdf: er001.url,
      },
    ],
  },
];
