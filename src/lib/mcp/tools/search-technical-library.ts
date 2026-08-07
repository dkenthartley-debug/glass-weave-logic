import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { librarySeries } from "../../../data/library";

export default defineTool({
  name: "search_technical_library",
  title: "Search technical library",
  description:
    "Search the HLG Engineering Standards & Technical Library (TB, QS, AG, ER series) by keyword and/or series code. Returns matching document ids, titles, revisions, summaries, PDF URLs, and site paths.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .optional()
      .describe("Keyword matched against document id, title, and summary. Omit to list everything."),
    series: z
      .enum(["TB", "QS", "AG", "ER"])
      .optional()
      .describe("Restrict results to one series: TB (technical bulletins), QS (qualification standards), AG (application guides), ER (engineering reports)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, series }) => {
    const q = query?.toLowerCase() ?? "";
    const results = librarySeries
      .filter((s) => !series || s.code === series)
      .flatMap((s) =>
        s.docs
          .filter(
            (d) =>
              !q ||
              `${d.id} ${d.title} ${d.summary}`.toLowerCase().includes(q),
          )
          .map((d) => ({
            id: d.id,
            series: s.code,
            seriesName: s.name,
            title: d.title,
            revision: d.revision,
            summary: d.summary,
            pdfUrl: d.pdf,
            sitePath: d.path ?? null,
          })),
      );

    return {
      content: [
        {
          type: "text" as const,
          text: results.length
            ? results
                .map(
                  (r) =>
                    `${r.id} (${r.series}, ${r.revision}) — ${r.title}\n${r.summary}\nPDF: ${r.pdfUrl}${r.sitePath ? `\nPage: ${r.sitePath}` : ""}`,
                )
                .join("\n\n")
            : "No matching documents.",
        },
      ],
      structuredContent: { count: results.length, results },
    };
  },
});
