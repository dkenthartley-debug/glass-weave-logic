import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { technologies } from "../../../data/hlg";

export default defineTool({
  name: "list_technologies",
  title: "List HLG technologies",
  description:
    "List the six electrical functions HLG engineers into laminated glass — HEAT (electrically heated interlayers), SENSE (embedded RTD temperature sensing), SHIELD (EMI/RFI shielding), CONDUCT (transparent conductors), SWITCH (switchable smart glazing), CONNECT (integrated antennas). Returns slug, headline, lead copy, validated spec ranges, and page path for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = technologies.map((t) => ({
      code: t.code,
      slug: t.slug,
      name: t.name,
      cardCopy: t.cardCopy,
      h1: t.h1,
      lead: t.lead,
      specs: t.specs ?? [],
      sitePath: `/technologies/${t.slug}`,
    }));

    return {
      content: [
        {
          type: "text" as const,
          text: items
            .map(
              (t) =>
                `${t.code} — ${t.name} [${t.slug}]\n${t.cardCopy}\nPage: ${t.sitePath}` +
                (t.specs.length
                  ? `\nSpecs: ${t.specs.map((s) => `${s.label}: ${s.value}`).join("; ")}`
                  : ""),
            )
            .join("\n\n"),
        },
      ],
      structuredContent: { count: items.length, technologies: items },
    };
  },
});
