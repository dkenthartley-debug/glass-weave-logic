import type { HlgPhoto } from "@/data/hlgPhotos";

/**
 * Consistent presentation for real HLG photography:
 * hairline frame, mono label, restrained caption below the image.
 */
const Figure = ({
  photo,
  invert = false,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  photo: HlgPhoto;
  invert?: boolean;
  className?: string;
  aspect?: string;
}) => (
  <figure
    className={`border ${invert ? "border-silver/15 bg-navy-deep" : "border-border bg-surface"} ${className}`}
  >
    {photo.label && (
      <figcaption className={`mono px-5 pt-5 ${invert ? "text-primary-glow" : "text-primary"}`}>
        {photo.label}
      </figcaption>
    )}
    <div className={`m-5 overflow-hidden border ${invert ? "border-silver/10" : "border-border"}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className={`w-full ${aspect} object-cover`}
      />
    </div>
    <div className="px-5 pb-5">
      <p className={`text-sm leading-relaxed ${invert ? "text-silver/80" : "text-muted-foreground"}`}>
        {photo.caption}
      </p>
      {photo.note && (
        <p className={`mono mt-3 ${invert ? "text-silver/45" : "text-muted-foreground/70"}`}>{photo.note}</p>
      )}
    </div>
  </figure>
);

export default Figure;
