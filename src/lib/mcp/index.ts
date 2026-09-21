// ============= V1: rebuilt on the V1 data model (src/data/hlg.ts) =============
import { defineMcp } from "@lovable.dev/mcp-js";
import listTechnologies from "./tools/list-technologies";
import getTechnology from "./tools/get-technology";
import searchTechnicalLibrary from "./tools/search-technical-library";
import getApplicationMapping from "./tools/get-application-mapping";

export default defineMcp({
  name: "hlg-functional-interlayers",
  title: "Hotlineglass USA — Functional Interlayers",
  version: "1.0.0",
  instructions:
    "Public tools for Hotlineglass USA (HLG), a U.S. manufacturer of engineered functional interlayers for laminated glass. Use `list_technologies` for the six electrical functions HLG integrates (HEAT, SENSE, SHIELD, CONDUCT, SWITCH, CONNECT), `get_technology` for full detail on one function, `search_technical_library` for engineering-resource topic coverage (papers coming soon), and `get_application_mapping` to see how markets and integration solutions map to the six functions. All data is public website content.",
  tools: [listTechnologies, getTechnology, searchTechnicalLibrary, getApplicationMapping],
});
