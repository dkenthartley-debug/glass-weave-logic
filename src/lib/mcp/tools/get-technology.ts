import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getTech, technologies } from "../../../data/hlg";

export default defineTool({
  name: "get_technology",
  title: "Get technology detail",
  description:
    "Retrieve the full public engineering description for one HLG technology function by slug or code — e.g. 'electrically-heated-interlayers' or 'HEAT', 'embedded-temperature-sensing' or 'SENSE'. Returns headline, lead, all page sections with bullets, validated spec ranges, closing position, and the engineering-review CTA.",
  inputSchema: {
    slug: z
      .string()
      .trim()
      .min(1)
      .describe(
        "Technology slug or code, e.g. 'electrically-heated-interlayers', 'HEAT', 'embedded-temperature-sensing', 'SENSE'.",
      ),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const needle = slug.toLowerCase().replace(/\s+/g, "");
    const tech =
      getTech(needle) ??
      technologies.find(
        (t) =>
          t.slug.toLowerCase() === needle ||
          t.code.toLowerCase() === needle ||
          t.name.toLowerCase().replace(/\s+/g, "").includes(needle),
      );
    if (!tech) {
      const known = technologies.map((t) => `${t.code} [${t.slug}]`).join(", ");
      throw new ToolError(`No technology matching "${slug}". Known: ${known}`);
    }

    const payload = {
      code: tech.code,
      slug: tech.slug,
      name: tech.name,
      h1: tech.h1,
      lead: tech.lead,
      sections: tech.sections,
      specs: tech.specs ?? [],
      closing: tech.closing ?? null,
      cta: tech.cta ?? null,
      sitePath: `/technologies/${tech.slug}`,
    };

    return {
      content: [
        {
          type: "text" as const,
          text:
            `${payload.code} — ${payload.name}\n${payload.h1}\n\n${payload.lead}\n\n` +
            payload.sections
              .map((s) =>
                `## ${s.title}` +
                (s.body ? `\n${s.body}` : "") +
                (s.bullets?.length ? `\n- ${s.bullets.join("\n- ")}` : ""),
              )
              .join("\n\n") +
            (payload.specs.length
              ? `\n\nSpecs:\n${payload.specs.map((s) => `- ${s.label}: ${s.value}`).join("\n")}`
              : "") +
            (payload.closing ? `\n\n${payload.closing}` : ""),
        },
      ],
      structuredContent: payload,
    };
  },
});
