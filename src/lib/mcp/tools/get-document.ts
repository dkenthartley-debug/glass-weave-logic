import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { librarySeries } from "../../../data/library";
import { resources } from "../../../data/resources";

export default defineTool({
  name: "get_document",
  title: "Get document / bulletin PDF",
  description:
    "Retrieve a single HLG library document by id (e.g. TB-001, HLG-QS-1724, AG-001, ER-001) including its downloadable PDF URL, revision, summary, and on-site page path. Also lists other published resources when no id matches.",
  inputSchema: {
    id: z
      .string()
      .trim()
      .min(1)
      .describe("Document identifier, e.g. 'TB-001', 'HLG-QS-1724', 'AG-001', 'ER-001'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const needle = id.toLowerCase().replace(/\s+/g, "");
    for (const s of librarySeries) {
      const doc = s.docs.find(
        (d) => d.id.toLowerCase().replace(/\s+/g, "") === needle,
      );
      if (doc) {
        const related = resources
          .filter((r) => r.href === doc.pdf)
          .map((r) => ({ title: r.title, kind: r.kind, topic: r.topic }));
        const payload = {
          id: doc.id,
          series: s.code,
          seriesName: s.name,
          seriesPurpose: s.purpose,
          title: doc.title,
          revision: doc.revision,
          summary: doc.summary,
          pdfUrl: doc.pdf,
          sitePath: doc.path ?? null,
          relatedResources: related,
        };
        return {
          content: [
            {
              type: "text" as const,
              text: `${payload.id} — ${payload.title} (${payload.revision})\nSeries: ${payload.seriesName}\n\n${payload.summary}\n\nPDF: ${payload.pdfUrl}${payload.sitePath ? `\nPage: ${payload.sitePath}` : ""}`,
            },
          ],
          structuredContent: payload,
        };
      }
    }
    const known = librarySeries.flatMap((s) => s.docs.map((d) => d.id)).join(", ");
    throw new ToolError(`No document with id "${id}". Known ids: ${known}`);
  },
});
