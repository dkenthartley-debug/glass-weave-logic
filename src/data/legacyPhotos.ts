import type { HlgPhoto } from "@/data/hlgPhotos";
import wire1 from "@/assets/legacy/3-sub-1.png.asset.json";
import wire2 from "@/assets/legacy/3-sub-2.png.asset.json";
import wire3 from "@/assets/legacy/3-sub-3.png.asset.json";
import zoned from "@/assets/legacy/3Main.jpg.asset.json";
import rear from "@/assets/legacy/4-Main-.jpg.asset.json";
import straight from "@/assets/legacy/4-sub-2.png.asset.json";
import straightExit from "@/assets/legacy/4-sub-3.png.asset.json";
import wiper1 from "@/assets/legacy/5-sub-1-1024x609.jpg.asset.json";
import wiper2 from "@/assets/legacy/5-sub-2.jpg.asset.json";
import vehicle from "@/assets/legacy/6-Main.jpg.asset.json";
import antenna from "@/assets/legacy/6-sub-1-1024x642.jpg.asset.json";
import antennaWindow from "@/assets/legacy/6-sub-2.jpg.asset.json";
import wiggle from "@/assets/legacy/7-sub-1.jpg.asset.json";
import tug from "@/assets/legacy/Cab-1.png.asset.json";
import cleanRoom from "@/assets/legacy/Clean-Room-1-scaled.jpg.asset.json";
import dualAntenna from "@/assets/legacy/Inspection-Table-1024x577.jpg.asset.json";
import railInstalled from "@/assets/legacy/Rail-1_compressed.png.asset.json";
import railWindow from "@/assets/legacy/Rail-2--770x1024.jpg.asset.json";
import railTest from "@/assets/legacy/Testing-1024x481.jpg.asset.json";
import railThermal from "@/assets/legacy/Thermal-Imaging_cropped-1024x481.png.asset.json";

function photo(src: string, label: string, caption: string): HlgPhoto {
  return { src, label, caption, alt: caption };
}

export const heaterDetails = [
  photo(wire1.url, "Fine-wire heating", "Sinusoidal fine-wire windshield heating. The original photograph identifies 29 µm wire at 2.9 mm spacing for this example."),
  photo(wire2.url, "Wire detail", "Close-up of the sinusoidal heating-wire pattern."),
  photo(wire3.url, "Busbar detail", "Fine heating wire meeting the busbar at the interlayer edge."),
];
export const zonedHeaterPhoto = photo(zoned.url, "Three heated areas · five connectors", "Windshield heater mat with separate driver and passenger heating zones, an additional heated wiper-park area, and five connectors.");
export const straightHeaterPhotos = [
  photo(rear.url, "Heated rear window", "Installed rear window with straight fine-wire heating."),
  photo(straight.url, "Straight fine wire", "Parallel straight fine heating wires within the interlayer."),
  photo(straightExit.url, "Wire collection", "Straight fine heating wires and their busbar connection detail."),
];
export const wiggleHeaterPhoto = photo(wiggle.url, "Sinusoidal heating wire", "Additional HLG interlayer detail showing the fine sinusoidal heating-wire pattern.");
export const wiperParkPhotos = [
  zonedHeaterPhoto,
  photo(wiper1.url, "Wiper-park heating", "Windshield interlayer incorporating a localized heated wiper-park area."),
  photo(wiper2.url, "Wiper-park detail", "Localized wiper-park heater with its electrical exit."),
];
export const antennaPhotos = [
  photo(antenna.url, "Antenna interlayer", "Automotive windshield antenna mat before integration into the finished window."),
  photo(antennaWindow.url, "Finished windshield", "The finished automotive windshield incorporating the antenna mat shown alongside."),
  photo(vehicle.url, "Installed application", "The vehicle using the antenna-equipped windshield shown in this sequence."),
];
export const dualAntennaPhoto = photo(dualAntenna.url, "Dual windshield antennas", "Windshield antenna mat on the light table, with an antenna at each A-pillar.");
export const airportTugPhoto = photo(tug.url, "Airport tug", "Heated windshield installed in an airport tug.");
export const legacyCleanRoomPhoto = photo(cleanRoom.url, "Clean-room processing", "Actual HLG clean-room production environment.");
export const railPhotos = [
  photo(railInstalled.url, "Rail application", "Rail vehicle with heated windows incorporating temperature sensors."),
  photo(railWindow.url, "Heater + temperature sensing", "The same rail-window design shown separately, combining glass heating and temperature sensing."),
];
export const railEvaluationPhotos = [
  photo(railTest.url, "Rail-window evaluation", "Instrumented evaluation setup for the same heated rail-window design."),
  photo(railThermal.url, "Thermal inspection", "Thermal image recorded during evaluation of the same heated rail-window design. Colors show the thermal distribution, not a published performance rating."),
];