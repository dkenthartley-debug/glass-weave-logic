# Upgrade the HLG Engineering Schematics

## Scope
- Replace the current flat functional-interlayer stack with a dimensional cutaway that clearly shows two glass plies, interlayer films, an embedded hairline conductor plane, perimeter collection, and an edge electrical exit.
- Redesign the remaining generic diagrams as one coherent engineering-visual family: conductor detail, HEAT + SENSE architecture, shielding electrical path, and thermal evaluation.
- Update every page using these graphics so captions and labels match each diagram and no outdated schematic remains.

## Visual direction
- Deep-navy technical plates with subtle translucent glass layers, precise perspective, restrained electric-blue callouts, matte graphite conductors, and sparse orange emphasis only where it clarifies a selected detail.
- Fine, credible conductor geometry rather than thick traces. Enlarged inspection insets will reveal detail without misrepresenting the physical scale.
- Compact mobile compositions with labels kept inside the graphic and no overlaps or clipped text.

## Technical details
- Build the visuals as responsive SVG/React components so they stay crisp at every screen size and inherit the existing HLG color system.
- Keep the required “schematic only / not to scale / customer-program specific” qualification on laminate construction graphics.
- Give each graphic a useful accessible description and respect reduced-motion preferences.
- Use one shared visual frame and legend system across all pages.

## Validation
- Check every page that uses a schematic at desktop and phone widths.
- Verify labels, contrast, spacing, and technical meaning visually; correct any clipping or ambiguous details.
- Confirm the site builds cleanly after the replacement.
