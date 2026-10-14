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

const photo = (asset: { url: string }, label: string, caption: string, note?: string): HlgPhoto => ({
  src: asset.url, label, caption, alt: caption, note,
});
const protectedNote = "Customer-identifying information intentionally obscured.";

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