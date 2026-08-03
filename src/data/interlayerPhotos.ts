// Real-product photography for the Fig.01 gallery.
//
// Each key matches a variant id in InterlayerShowcase.tsx. Drop real photos in
// (imported from src/assets or a CDN .asset.json url) and the matching tile
// will automatically swap from the schematic drawing to the photo set.

import heaterWireMacro from "@/assets/photos/heater-wire-macro.png.asset.json";
import heaterWireDrape from "@/assets/photos/heater-wire-drape.jpg.asset.json";
import aircraftHeaterTightPitch from "@/assets/photos/aircraft-heater-tight-pitch.png.asset.json";

export type InterlayerPhoto = {
  src: string;
  caption: string;
};

export const interlayerPhotos: Record<string, InterlayerPhoto[]> = {
  heating: [
    {
      src: heaterWireMacro.url,
      caption: "Sinusoidal tungsten heater wire on interlayer — macro, pre-lamination",
    },
    {
      src: heaterWireDrape.url,
      caption: "Wired interlayer roll stock showing wire pitch and drape",
    },
    {
      src: aircraftHeaterTightPitch.url,
      caption: "Aircraft heated interlayer — sub-1 mm wire pitch, pre-lamination face view",
    },
  ],
  wiper: [],
  antenna: [],
  camera: [],
  sensors: [],
  mesh: [],
  ito: [],
  "conductive-glass": [],
};
