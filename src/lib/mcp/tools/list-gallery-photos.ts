import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { interlayerPhotos } from "../../../data/interlayerPhotos";

const VARIANTS = [
  "heating",
  "wiper",
  "sensors",
  "antenna",
  "camera",
  "mesh",
  "ito",
] as const;

export default defineTool({
  name: "list_gallery_photos",
  title: "List gallery photos",
  description:
    "List the real-product photography used in the Fig.01 interlayer gallery, grouped by variant (heating, wiper, sensors, antenna, camera, mesh, ito). Returns image URLs and technical captions, and flags variants that currently have no photography.",
  inputSchema: {
    variant: z
      .enum(VARIANTS)
      .optional()
      .describe("Restrict to a single gallery variant. Omit to return all variants."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ variant }) => {
    const keys = variant ? [variant] : VARIANTS;
    const groups = keys.map((key) => {
      const photos = interlayerPhotos[key] ?? [];
      return {
        variant: key,
        photoCount: photos.length,
        hasPhotography: photos.length > 0,
        photos: photos.map((p) => ({ url: p.src, caption: p.caption })),
      };
    });

    return {
      content: [
        {
          type: "text" as const,
          text: groups
            .map((g) =>
              g.photoCount
                ? `${g.variant} (${g.photoCount})\n` +
                  g.photos.map((p) => `- ${p.caption}\n  ${p.url}`).join("\n")
                : `${g.variant} — no photography yet (schematic only)`,
            )
            .join("\n\n"),
        },
      ],
      structuredContent: { groups },
    };
  },
});
