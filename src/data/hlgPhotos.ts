// Approved HLG photography and approved engineering-visual concepts.
// Each entry is a CDN asset pointer plus the caption used on the site.

import heaterMatSection from "@/assets/photos/hlg-heater-architecture-real-composite.jpg.asset.json";
import connectorDualLead from "@/assets/photos/connector-dual-lead-busbar-exit.jpg.asset.json";
import connectorEdgeAttached from "@/assets/photos/connector-edge-attached-busbar.jpg.asset.json";
import connectorMoldedHarness from "@/assets/photos/connector-molded-two-pin-harness.jpg.asset.json";
import partMarking from "@/assets/photos/part-marking-traceability.jpg.asset.json";
import sensorMatSection from "@/assets/photos/hlg-rtd-sensor-mat-section-v2.png";

export type HlgPhoto = {
  src: string;
  alt: string;
  caption: string;
  label?: string;
  note?: string;
};

export const heaterMatSectionPhoto: HlgPhoto = {
  src: heaterMatSection.url,
  alt: "Actual HLG heated interlayer details showing consistently sinusoidal tungsten wire and a braided lead connected to a separate busbar segment",
  caption:
    "Actual HLG heater details — fine sinusoidal tungsten wire, low-profile busbar architecture and braided lead exit.",
  label: "Heater architecture",
  note: "Actual HLG construction details. Final conductor spacing, busbar geometry and electrical exits are program specific.",
};

export const sensorMatSectionPhoto: HlgPhoto = {
  src: sensorMatSection,
  alt: "Section of an HLG dual-zone RTD sensor mat showing fine serpentine wire embedded within a continuous translucent interlayer",
  caption:
    "Dual-zone RTD sensor mat — fine sensing wire embedded within the interlayer, with parallel lead routing and low-profile terminations.",
  label: "Embedded temperature sensing",
  note: "Representative engineering visual based on HLG sensor-mat construction. Wire is integrated within the interlayer rather than placed on its surface; final layouts are program specific.",
};

export const connectorPhotos: HlgPhoto[] = [
  {
    src: connectorDualLead.url,
    alt: "Two insulated leads terminated to copper busbar tabs at the edge of a wired interlayer",
    caption: "Dual lead termination to copper busbar tabs at the interlayer edge.",
    label: "Electrical exit",
  },
  {
    src: connectorEdgeAttached.url,
    alt: "Connector body attached directly to the edge of an electrified interlayer with copper busbar runs",
    caption: "Connector attached directly to the electrified interlayer, with busbar collection into the exit.",
    label: "Edge-attached connector",
  },
  {
    src: connectorMoldedHarness.url,
    alt: "Molded two-pin connector harness exiting an electrified interlayer edge",
    caption: "Molded two-pin harness — a stock interface; custom and customer-supplied connectors are also applied.",
    label: "Connector interface",
  },
];

export const traceabilityPhoto: HlgPhoto = {
  src: partMarking.url,
  alt: "Interlayer edge marked with part number P1-26134-5 and the Hotlineglass USA mark, next to a busbar run",
  caption:
    "Part marking applied to the interlayer — part number and HLG identification. Barcodes can be applied for lot-number traceability.",
  label: "Traceability",
};
