import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { markets, products } from "../../../data/products";
import { technologies } from "../../../data/technologies";

export default defineTool({
  name: "get_application_mapping",
  title: "Get application mapping",
  description:
    "Check how HLG markets, products, and technologies map to each other. Filter by market slug (automotive, aerospace, defense, architectural, transportation) or technology slug to see which products serve it and which technologies they use.",
  inputSchema: {
    market: z
      .string()
      .trim()
      .optional()
      .describe("Market slug or name, e.g. 'aerospace'. Omit for all markets."),
    technology: z
      .string()
      .trim()
      .optional()
      .describe("Technology slug or name fragment, e.g. 'embedded-wire-technology'. Omit for all."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ market, technology }) => {
    const m = market?.toLowerCase();
    const t = technology?.toLowerCase();

    const matchedMarkets = markets.filter(
      (x) => !m || x.slug.toLowerCase().includes(m) || x.name.toLowerCase().includes(m),
    );
    const matchedTech = technologies.filter(
      (x) => !t || x.slug.toLowerCase().includes(t) || x.name.toLowerCase().includes(t),
    );
    const techSlugs = new Set(matchedTech.map((x) => x.slug));
    const marketSlugs = new Set(matchedMarkets.map((x) => x.slug));

    const matchedProducts = products
      .filter((p) => (!m || marketSlugs.has(p.market)) && (!t || p.technologies.some((s) => techSlugs.has(s))))
      .map((p) => ({
        slug: p.slug,
        name: p.name,
        market: p.market,
        summary: p.summary,
        technologies: p.technologies,
      }));

    const payload = {
      markets: matchedMarkets.map((x) => ({
        slug: x.slug,
        name: x.name,
        blurb: x.blurb,
        products: matchedProducts.filter((p) => p.market === x.slug).map((p) => p.slug),
      })),
      technologies: matchedTech.map((x) => ({
        slug: x.slug,
        name: x.name,
        summary: x.summary,
        applications: x.applications,
        products: matchedProducts.filter((p) => p.technologies.includes(x.slug)).map((p) => p.slug),
      })),
      products: matchedProducts,
    };

    return {
      content: [
        {
          type: "text" as const,
          text:
            `Markets (${payload.markets.length}):\n` +
            payload.markets.map((x) => `- ${x.name} [${x.slug}] → ${x.products.length} products`).join("\n") +
            `\n\nTechnologies (${payload.technologies.length}):\n` +
            payload.technologies.map((x) => `- ${x.name} [${x.slug}] → ${x.products.length} products`).join("\n") +
            `\n\nProducts (${payload.products.length}):\n` +
            payload.products.map((p) => `- ${p.name} [${p.slug}] (${p.market})`).join("\n"),
        },
      ],
      structuredContent: payload,
    };
  },
});
