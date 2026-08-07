import { defineMcp } from "@lovable.dev/mcp-js";
import searchTechnicalLibrary from "./tools/search-technical-library";
import getDocument from "./tools/get-document";
import listGalleryPhotos from "./tools/list-gallery-photos";
import getApplicationMapping from "./tools/get-application-mapping";

export default defineMcp({
  name: "hlg-glass-innovations",
  title: "HLG Glass Innovations",
  version: "0.1.0",
  instructions:
    "Public tools for Hotlineglass USA (HLG). Use `search_technical_library` to find TB/QS/AG/ER documents, `get_document` to fetch a specific bulletin or standard with its PDF URL, `list_gallery_photos` to browse real-product interlayer photography and captions, and `get_application_mapping` to check how markets, products, and technologies relate. All data is public website content.",
  tools: [searchTechnicalLibrary, getDocument, listGalleryPhotos, getApplicationMapping],
});
