// Real-product photography for the Fig.01 gallery.
//
// Each key matches a variant id in InterlayerShowcase.tsx. Drop real photos in
// (imported from src/assets or a CDN .asset.json url) and the matching tile
// will automatically swap from the schematic drawing to the photo set.

import heaterWireMacro from "@/assets/photos/heater-wire-macro.png.asset.json";
import heaterWireDrape from "@/assets/photos/heater-wire-drape.jpg.asset.json";
import aircraftHeaterConnectors from "@/assets/photos/aircraft-heater-connectors-busbar-leads.jpeg.asset.json";
import heaterLotTracking from "@/assets/photos/heater-lot-tracking.jpg.asset.json";
import sensorDoubleMat from "@/assets/photos/sensor-double-mat.jpg.asset.json";
import wiperParkHeaterZone from "@/assets/photos/wiper-park-heater-zone.jpg.asset.json";
import wiperParkConnectorTraceability from "@/assets/photos/wiper-park-connector-traceability.jpg.asset.json";

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

      src: aircraftHeaterConnectors.url,
      caption: "Aircraft heated interlayer edge — copper bus bar, connectors and braided lead exits",
    },
    {
      src: heaterLotTracking.url,
      caption: "Heated interlayer with lot-number tracking and branded edge — part of HLG's ISO 9001 traceability system",
    },
  ],
  wiper: [
    {
      src: wiperParkHeaterZone.url,
      caption: "Wiper park heater zone — tungsten wire field, dual bus bar contacts, and silver terminal pads on a laminated aircraft transparency",
    },
    {
      src: wiperParkConnectorTraceability.url,
      caption: "Close-up of wiper park heater edge — connector termination, bus bar contacts, and HLG traceability identifier with part number P1-24134-50",
    },
  ],
  antenna: [],
  camera: [],
  sensors: [
    {
      src: sensorDoubleMat.url,
      caption: "Dual serpentine sensor mats on interlayer — silver terminal pads with copper lead runs",
    },
  ],
  mesh: [],
  ito: [],
  "conductive-glass": [],
};
