import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { libraryTopics } from "../../../data/hlg";
import { librarySeries } from "../../../data/library";
import { shieldingSpecification } from "../../../data/shieldingSpecification";

export default defineTool({
  name: "search_technical_library",
  title: "Search technical library",
  description:
    "Search HLG Technical Library papers, specifications and resource topics, including EMI/RFI shielding and SCIF applications. Draft specifications identify testing/results as TBD; they are not certification or measured-performance claims.",
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
    const documents = librarySeries.flatMap((series) => series.docs).filter((doc) =>
      !q || `${doc.id} ${doc.title} ${doc.summary}`.toLowerCase().includes(q),
    );
    const shieldingMatches = !q || JSON.stringify(shieldingSpecification).toLowerCase().includes(q);
    const status =
      "The library contains technical papers and specifications; additional topics are in preparation. S.02 is a draft with testing/results TBD. QS-1724 is available to customers on request only.";

    const text =
      (matches.length
        ? `HLG Technical Library — resource topics${query ? ` matching "${query}"` : ""}:\n` +
          matches.map((t) => `- ${t}`).join("\n")
        : `No library topics matching "${query}".`) +
      `\n\nDocuments:\n${documents.map((doc) => `- ${doc.id}: ${doc.title} (${doc.revision}) — ${doc.summary}`).join("\n")}` +
      (shieldingMatches ? `\n\nS.02 SCIF scope: ${shieldingSpecification.scif}\n${shieldingSpecification.qualification}` : "") +
      `\n\n${status}\nFull topic list:\n${libraryTopics.map((t) => `- ${t}`).join("\n")}`;

    return {
      content: [{ type: "text" as const, text }],
      structuredContent: {
        status: "papers-and-draft-specifications",
        query: query ?? null,
        matches,
        allTopics: libraryTopics,
        documents,
        shieldingSpecification: shieldingMatches ? shieldingSpecification : null,
      },
    };
  },
});
