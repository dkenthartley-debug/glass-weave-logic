import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { markets, solutions, technologies } from "../../../data/hlg";

export default defineTool({
  name: "get_application_mapping",
  title: "Get application mapping",
  description:
    "Check how HLG markets (Aerospace, Defense, Automotive, Rail & Transportation, Off-Road & Commercial Equipment, Architectural & Smart Glass), integration solutions, and the six technology functions (HEAT, SENSE, SHIELD, CONDUCT, SWITCH, CONNECT) map to each other. Filter by market slug or technology slug/code.",
  inputSchema: {
    market: z
      .string()
      .trim()
      .optional()
      .describe("Market slug or name fragment, e.g. 'aerospace', 'rail'. Omit for all markets."),
    technology: z
      .string()
      .trim()
      .optional()
      .describe("Technology slug or code fragment, e.g. 'HEAT', 'electrically-heated-interlayers'. Omit for all."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ market, technology }) => {
    const m = market?.toLowerCase();
    const t = technology?.toLowerCase();

    const matchedMarkets = markets.filter(
      (x) => !m || x.slug.toLowerCase().includes(m) || x.name.toLowerCase().includes(m),
    );
    const matchedTech = technologies.filter(
      (x) =>
        !t ||
        x.slug.toLowerCase().includes(t) ||
        x.code.toLowerCase().includes(t) ||
        x.name.toLowerCase().includes(t),
    );

    const payload = {
      markets: matchedMarkets.map((x) => ({
        slug: x.slug,
        name: x.name,
        blurb: x.blurb,
        requirements: x.bullets,
        sitePath: x.slug === "aerospace" ? "/markets/aerospace" : `/markets?market=${x.slug}`,
      })),
      technologies: matchedTech.map((x) => ({
        code: x.code,
        slug: x.slug,
        name: x.name,
        lead: x.lead,
        sitePath: `/technologies/${x.slug}`,
      })),
      solutions: solutions.map((s) => ({
        id: s.id,
        name: s.name,
        body: s.body,
        bullets: s.bullets,
      })),
    };

    return {
      content: [
        {
          type: "text" as const,
          text:
            `Markets (${payload.markets.length}):\n` +
            payload.markets.map((x) => `- ${x.name} [${x.slug}] — ${x.blurb}`).join("\n") +
            `\n\nTechnologies (${payload.technologies.length}):\n` +
            payload.technologies.map((x) => `- ${x.code} — ${x.name} [${x.slug}]`).join("\n") +
            `\n\nIntegration solutions (${payload.solutions.length}):\n` +
            payload.solutions.map((s) => `- ${s.name} — ${s.body}`).join("\n"),
        },
      ],
      structuredContent: payload,
    };
  },
});
