import type { HlgPhoto } from "@/data/hlgPhotos";
import heaterMat from "@/assets/library/20260115_074911.jpg.asset.json";
import barcode from "@/assets/library/20260130_143810.jpg.asset.json";
import matA from "@/assets/library/IMG_20260130_102442638.jpg.asset.json";
import wireA from "@/assets/library/IMG_20260130_102545637.jpg.asset.json";
import matB from "@/assets/library/IMG_20260130_104024853.jpg.asset.json";
import wireB from "@/assets/library/IMG_20260130_104127002.jpg.asset.json";
import matC from "@/assets/library/IMG_20260202_133305743.jpg.asset.json";
import wireC from "@/assets/library/IMG_20260202_133358679.jpg.asset.json";
import station from "@/assets/library/inspection-station.jpg.asset.json";
import supplyA from "@/assets/library/inspection-power-supply-a.jpg.asset.json";
import supplyB from "@/assets/library/inspection-power-supply-b.jpg.asset.json";
import logger from "@/assets/library/inspection-data-logger.jpg.asset.json";
import overhead from "@/assets/library/inspection-overhead.jpg.asset.json";
import thermal from "@/assets/library/inspection-thermal-profile.jpg.asset.json";
import film from "@/assets/library/inspection-busbar-thermal-film.jpg.asset.json";
import antennaMat from "@/assets/library/20261008_063700.jpg.asset.json";
import antennaWindshield from "@/assets/library/20240509_130046.jpg.asset.json";
import singleAntenna from "@/assets/library/20261008_063709.jpg.asset.json";
import connectorDetail from "@/assets/library/20170606_090858.jpg.asset.json";
import antennaTable from "@/assets/library/20170720_095642.jpg.asset.json";
import capacitance from "@/assets/library/20170720_101627.jpg.asset.json";
import antennaPrepared from "@/assets/library/20200311_154920.jpg.asset.json";
import fullAntennaWindow from "@/assets/library/20240509_130039.jpg.asset.json";
import inspectionHandling from "@/assets/library/20170606_090935.jpg.asset.json";
import shieldPatternMonitor from "@/assets/library/shield-pattern-magnified-monitor.jpg.asset.json";
import shopWide from "@/assets/library/20230808_122846.jpg.asset.json";
import shopTable from "@/assets/library/20230808_123117-2.jpg.asset.json";
import shopEquipment from "@/assets/library/20230808_123143-2.jpg.asset.json";
import shopEnclosure from "@/assets/library/20230808_123328-2.jpg.asset.json";
import shopLine from "@/assets/library/20230808_152126-2.jpg.asset.json";
import fordGt from "@/assets/vehicles/ford-gt.jpg.asset.json";
import fordGtFront from "@/assets/vehicles/ford-gt-front.jpg.asset.json";
import fordRanger from "@/assets/vehicles/ford-ranger.jpg.asset.json";
import mercedesS from "@/assets/vehicles/mercedes-s-class.jpg.asset.json";
import mercedesSRear from "@/assets/vehicles/mercedes-s-class-rear.jpg.asset.json";
import wiperMatFull from "@/assets/library/wiper-park-mat-full.jpg.asset.json";
import wiperConnectorBarcode from "@/assets/library/wiper-park-connector-barcode.jpg.asset.json";
import wiperWireConnectors from "@/assets/library/wiper-park-wire-connectors.jpg.asset.json";
import wiperMatWide from "@/assets/library/wiper-park-mat-wide.jpg.asset.json";

const photo = (asset: { url: string }, label: string, caption: string, note?: string): HlgPhoto => ({
  src: asset.url, label, caption, alt: caption, note,
});
const protectedNote = "Customer-identifying information intentionally obscured.";

export const shieldPatternInspectionPhoto = photo(
  shieldPatternMonitor,
  "SHIELD — magnified pattern evaluation",
  "Monitor view of a magnified pattern in laminated glass or polycarbonate, currently under testing for advanced EMI/RFI shielding with greatly reduced moiré as a development objective.",
  "Development testing in progress; no verified shielding or moiré-reduction performance result is implied.",
);

export const recentShopPhotos = [
  photo(shopWide, "Clean-room production floor", "Wide view of the HLG clean room, with technicians working at interlayer processing tables."),
  photo(shopTable, "Interlayer preparation area", "Long work table and material-handling equipment in the HLG clean room."),
  photo(shopEquipment, "Processing equipment and work tables", "Alternate view of the HLG processing equipment, preparation tables and clean-room work area."),
  photo(shopEnclosure, "Clean-room enclosure", "Exterior view of the enclosed clean-room area within the HLG shop."),
  photo(shopLine, "Interlayer processing line", "HLG interlayer processing equipment and the adjoining preparation table."),
];

export const antennaCapacitancePhoto = photo(capacitance, "100% electrical inspection", "All mats are 100% inspected for electrical function against the customer-supplied specification or, when designed by HLG, the Hotlineglass specification.");
export const interlayerInspectionPhoto = photo(inspectionHandling, "100% inspection before shipping", "Every mat is 100% inspected for defects and debris before shipping. Both surfaces of every interlayer are rolled with a tack roller before packing.");

export const recentAntennaPhotos = [
  photo(connectorDetail, "Connector detail", "Close-up of an HLG electrical exit showing contact pads and fine-wire connections."),
  photo(antennaTable, "Full antenna mat", "HLG windshield antenna mat on the work table with embedded elements and electrical exits."),
  photo(antennaPrepared, "Antenna mat — embedded wire", "Actual HLG antenna interlayer with fine embedded antenna wire and edge connectors."),
  photo(fullAntennaWindow, "Full antenna windshield", "Finished windshield incorporating an HLG antenna interlayer."),
  antennaCapacitancePhoto,
  photo(antennaMat, "Antenna interlayer mat", "Actual HLG antenna mat showing fine embedded antenna elements and electrical exits."),
  photo(antennaWindshield, "Windshield — antennas at both A-pillars", "Finished windshield with an antenna at each A-pillar."),
  photo(singleAntenna, "Single antenna and barcode", "Single embedded antenna with an electrical exit connector and barcode label."),
];

export const barcodeTraceabilityPhoto = photo(
  barcode,
  "Connector and 2D barcode traceability",
  "Heated mat with electrical exit leads, HLG part marking and a 2D barcode label for full ISO traceability through quality and inspection.",
);

export const recentHeaterPhotos = [
  photo(heaterMat, "Heated mat and electrical exits", "Actual HLG heated interlayer with edge busbars and insulated electrical exit leads."),
  photo(matA, "Heated interlayer — full mat", "Full heated mat with fine-wire field and edge busbar collection.", protectedNote),
  photo(wireA, "Wiggle-wire detail", "Fine sinusoidal heater wire photographed with a measuring scale."),
  photo(matB, "Heated mat — busbars and leads", "Heated interlayer showing edge busbars and routed electrical exit leads.", protectedNote),
  photo(wireB, "Wiggle-wire inspection detail", "Close-up of the actual wiggle-wire pattern and measuring scale."),
  photo(matC, "Heated mat at the work table", "Full heated mat at the HLG work table, with edge busbars and exit leads.", protectedNote),
  photo(wireC, "Fine sinusoidal wire pattern", "Actual fine wiggle-wire pattern within the interlayer, shown with a measuring scale."),
];

export const vehicleApplicationPhotos = [
  photo(fordGt, "Ford GT", "Ford GT — a vehicle application using HLG product."),
  photo(fordGtFront, "Ford GT — front view", "Ford GT front view — a vehicle application using HLG product."),
  photo(fordRanger, "Ford Ranger", "Ford Ranger — a vehicle application using HLG product."),
  photo(mercedesS, "Mercedes-Benz S-Class", "Mercedes-Benz S-Class — a vehicle application using HLG product."),
  photo(mercedesSRear, "Mercedes-Benz S-Class — rear window", "Mercedes-Benz S-Class rear window view — a vehicle application using HLG product."),
];

export const recentWiperParkPhotos = [
  photo(wiperMatFull, "Wiper-park heated interlayer — full mat", "Full windshield interlayer with a localized heated wiper-park area along the lower edge and its electrical exit."),
  photo(wiperConnectorBarcode, "Wiper-park connectors and 2D barcode", "Wiper-park heater wire termination with dual connectors and an HLG part label with 2D barcode for lot traceability."),
  photo(wiperWireConnectors, "Wiper-park heater wire and connectors", "Fine wiper-park heating wire routed along the interlayer edge, terminated to dual electrical exit connectors with HLG part marking and 2D barcode."),
  photo(wiperMatWide, "Wiper-park heated interlayer — wide view", "Wide view of a windshield interlayer with the heated wiper-park area and electrical exit leads."),
];

export const inspectionPhotos = [
  photo(station, "Instrumented inspection station", "HLG heater evaluation station with independently positioned power supplies and instrument connections."),
  photo(supplyA, "Power supply — test station", "Power supply and electrical connections at one side of the heater evaluation station."),
  photo(supplyB, "Power supply — alternate view", "Alternate view of the power supply and connections used during heater evaluation."),
  photo(logger, "Temperature data logging", "Multi-channel temperature logger, room-condition readout and elapsed-time display at the inspection station."),
  photo(overhead, "Heater evaluation — overhead view", "Overhead view of the instrumented heater evaluation setup."),
  photo(thermal, "Thermal camera evaluation", "Thermal camera image of the heated parts during evaluation.", "Historical test image; no numerical performance or acceptance result is implied."),
  photo(film, "Busbar connection check", "Temperature-sensitive film used to check wire-to-busbar connections before placing the glass cap.", "Photograph extracted from HLG’s inspection presentation."),
];