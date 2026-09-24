// Approved HLG photography and approved engineering-visual concepts.
// Each entry is a CDN asset pointer plus the caption used on the site.

import heaterMatSection from "@/assets/photos/hlg-authentic-heater-wire-field-cool.jpg";
import connectorDualLead from "@/assets/photos/connector-dual-lead-busbar-exit.jpg.asset.json";
import connectorEdgeAttached from "@/assets/photos/connector-edge-attached-busbar.jpg.asset.json";
import connectorMoldedHarness from "@/assets/photos/connector-molded-two-pin-harness.jpg.asset.json";
import partMarking from "@/assets/photos/part-marking-traceability.jpg.asset.json";
import sensorMatSection from "@/assets/photos/hlg-rtd-sensor-mat-section-v2.png";
import itoFilmSection from "@/assets/photos/hlg-ito-conductive-film-section-v4.png";
import facilityCleanroomWide from "@/assets/photos/facility-cleanroom-wide.jpg";
import facilityWirePlacement from "@/assets/photos/facility-wire-placement.jpg";
import facilityLightTable from "@/assets/photos/facility-light-table-inspection.jpg";
import facilityThermalTest from "@/assets/photos/facility-thermal-test.jpg";
import facilityExterior from "@/assets/photos/facility-exterior-butler.jpg";
import facilityCleanroom2 from "@/assets/photos/facility-cleanroom-2.jpg";

export type HlgPhoto = {
  src: string;
  alt: string;
  caption: string;
  label?: string;
  note?: string;
};

export const heaterMatSectionPhoto: HlgPhoto = {
  src: heaterMatSection,
  alt: "Actual HLG heated interlayer showing closely spaced, consistently sinusoidal fine tungsten wire",
  caption:
    "Actual HLG heated interlayer — fine sinusoidal tungsten wire placed in a controlled, consistent pattern.",
  label: "Fine-wire heater architecture",
  note: "Actual HLG construction detail. Final conductor spacing and layout are program specific.",
};

export const sensorMatSectionPhoto: HlgPhoto = {
  src: sensorMatSection,
  alt: "Section of an HLG dual-zone RTD sensor mat showing fine serpentine wire embedded within a continuous translucent interlayer",
  caption:
    "Dual-zone RTD sensor mat — fine sensing wire embedded within the interlayer, with parallel lead routing and low-profile terminations.",
  label: "Embedded temperature sensing",
  note: "Representative engineering visual based on HLG sensor-mat construction. Wire is integrated within the interlayer rather than placed on its surface; final layouts are program specific.",
};

export const itoFilmPhoto: HlgPhoto = {
  src: itoFilmSection,
  alt: "Section of interlayer carrying a transparent conductive film with a subtle iridescent sheen and matching low-profile busbars along both opposing edges",
  caption:
    "Transparent conductive film on interlayer — a continuous coated film with low-profile busbar collection along both opposing edges.",
  label: "Conductive film",
  note: "Representative engineering visual. Film type, sheet resistance and busbar geometry are program specific.",
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

// ============= Facility photography (real HLG shots) =============

export const facilityLeadPhoto: HlgPhoto = {
  src: facilityCleanroomWide,
  alt: "Wide view of the HLG clean-room manufacturing environment in Butler, Pennsylvania",
  caption: "Clean-room manufacturing environment — Butler, Pennsylvania.",
  label: "HLG facility",
};

export const facilityManufacturingPhotos: HlgPhoto[] = [
  {
    src: facilityWirePlacement,
    alt: "Technician placing fine heater wire on the interlayer line at HLG",
    caption: "Fine wire placement on the interlayer line.",
    label: "Wire placement",
  },
  {
    src: facilityLightTable,
    alt: "Interlayer inspection at the light table at HLG",
    caption: "Interlayer inspection at the light table — part of 100% interlayer inspection.",
    label: "100% inspection",
  },
  {
    src: facilityThermalTest,
    alt: "Thermal evaluation of a heater design on the HLG test bench",
    caption: "Thermal evaluation of a new heater design on the test bench.",
    label: "Thermal validation",
  },
];

export const facilityAboutPhotos: HlgPhoto[] = [
  {
    src: facilityExterior,
    alt: "Exterior of the HLG facility in Butler, Pennsylvania",
    caption: "HLG — Butler, Pennsylvania. Engineered here. Manufactured here. Inspected here.",
    label: "Butler, Pennsylvania",
  },
  {
    src: facilityCleanroom2,
    alt: "Second view of the HLG clean-room processing environment",
    caption:
      "A precision temperature- and humidity-controlled clean-room environment designed for processing laminated-glass interlayer materials.",
    label: "Clean room",
  },
];
