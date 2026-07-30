// Real-product photography for the Fig.01 gallery.
//
// Each key matches a variant id in InterlayerShowcase.tsx. Drop real photos in
// (imported from src/assets or a CDN .asset.json url) and the matching tile
// will automatically swap from the schematic drawing to the photo set.
//
// Example:
//   import heaterZone from "@/assets/photos/heater-zone.jpg";
//   heating: [{ src: heaterZone, caption: "21 µm tungsten heater zone, pre-lamination" }]

export type InterlayerPhoto = {
  src: string;
  caption: string;
};

export const interlayerPhotos: Record<string, InterlayerPhoto[]> = {
  heating: [],
  wiper: [],
  antenna: [],
  camera: [],
  sensors: [],
  mesh: [],
  ito: [],
  "conductive-glass": [],
};
