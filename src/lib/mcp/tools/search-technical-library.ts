import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { libraryTopics } from "../../../data/hlg";

export default defineTool({
  name: "search_technical_library",
  title: "Search technical library",
  description:
    "Search the HLG Technical Library coverage by keyword. The V1 library is a framework: HLG maintains an expanding library of engineering resources covering the design and integration of electrical functionality into laminated glass, and technical papers and application notes are coming soon. Returns matching resource topics; no papers are published yet.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .optional()
      .describe("Keyword matched against resource topics, e.g. 'busbar', 'RTD', 'EMI'. Omit to list all topics."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase() ?? "";
    const matches = libraryTopics.filter((t) => !q || t.toLowerCase().includes(q));
    const status =
      "TECHNICAL PAPERS AND APPLICATION NOTES COMING SOON — the V1 Technical Library is framework only; no papers are published yet.";

    const text =
      (matches.length
        ? `HLG Technical Library — resource topics${query ? ` matching "${query}"` : ""}:\n` +
          matches.map((t) => `- ${t}`).join("\n")
        : `No library topics matching "${query}".`) +
      `\n\n${status}\nFull topic list:\n${libraryTopics.map((t) => `- ${t}`).join("\n")}`;

    return {
      content: [{ type: "text" as const, text }],
      structuredContent: {
        status: "coming-soon",
        query: query ?? null,
        matches,
        allTopics: libraryTopics,
      },
    };
  },
});
