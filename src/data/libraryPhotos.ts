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

const photo = (asset: { url: string }, label: string, caption: string, note?: string): HlgPhoto => ({
  src: asset.url, label, caption, alt: caption, note,
});
const protectedNote = "Customer-identifying information intentionally obscured.";

export const antennaCapacitancePhoto = photo(capacitance, "Antenna capacitance measurement", "HLG antenna mat connected to instruments for capacitance measurement.", "Historical inspection photograph; no acceptance criterion or performance result is implied.");
export const interlayerInspectionPhoto = photo(inspectionHandling, "Interlayer inspection and handling", "Gloved handling of an HLG interlayer at the inspection table, with embedded wire and an edge connector visible.");

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

export const inspectionPhotos = [
  photo(station, "Instrumented inspection station", "HLG heater evaluation station with independently positioned power supplies and instrument connections."),
  photo(supplyA, "Power supply — test station", "Power supply and electrical connections at one side of the heater evaluation station."),
  photo(supplyB, "Power supply — alternate view", "Alternate view of the power supply and connections used during heater evaluation."),
  photo(logger, "Temperature data logging", "Multi-channel temperature logger, room-condition readout and elapsed-time display at the inspection station."),
  photo(overhead, "Heater evaluation — overhead view", "Overhead view of the instrumented heater evaluation setup."),
  photo(thermal, "Thermal camera evaluation", "Thermal camera image of the heated parts during evaluation.", "Historical test image; no numerical performance or acceptance result is implied."),
  photo(film, "Busbar connection check", "Temperature-sensitive film used to check wire-to-busbar connections before placing the glass cap.", "Photograph extracted from HLG’s inspection presentation."),
];