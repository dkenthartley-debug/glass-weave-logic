import { PageHero, Section, SectionHeading, CtaLink } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Figure from "@/components/Figure";
import type { HlgPhoto } from "@/data/hlgPhotos";
import {
  connectorPhotos, facilityAboutPhotos, facilityManufacturingPhotos, facilityProcessPhotos,
  heaterMatSectionPhoto, itoFilmPhoto, sensorMatSectionPhoto, shieldMeshPhoto, traceabilityPhoto,
} from "@/data/hlgPhotos";
import {
  airportTugPhoto, antennaPhotos, dualAntennaPhoto, fullHeaterMatPhoto, heaterDetails, legacyCleanRoomPhoto,
  railEvaluationPhotos, railPhotos, straightHeaterPhotos, wiggleHeaterPhoto, wiggleScalePhoto, wiperParkPhotos,
} from "@/data/legacyPhotos";
import pdlcVideo from "@/assets/videos/pdlc-film-on-off.mp4.asset.json";
import { barcodeTraceabilityPhoto, inspectionPhotos, recentHeaterPhotos, recentAntennaPhotos, antennaCapacitancePhoto, interlayerInspectionPhoto, shieldPatternInspectionPhoto, recentShopPhotos, recentWiperParkPhotos, vehicleApplicationPhotos } from "@/data/libraryPhotos";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Photo Gallery", path: "/photo-gallery" },
];

const groups: { id: string; eyebrow: string; title: string; photos: HlgPhoto[] }[] = [
  { id: "heat", eyebrow: "HEAT", title: "Heated interlayers", photos: [fullHeaterMatPhoto, ...recentHeaterPhotos, heaterMatSectionPhoto, ...heaterDetails, wiggleScalePhoto, wiggleHeaterPhoto, ...straightHeaterPhotos, ...wiperParkPhotos.slice(1), ...recentWiperParkPhotos] },
  { id: "sense", eyebrow: "SENSE", title: "Temperature sensing", photos: [sensorMatSectionPhoto, ...railPhotos, ...railEvaluationPhotos] },
  { id: "shield-conduct", eyebrow: "SHIELD · CONDUCT", title: "Shielding and conductive film", photos: [shieldPatternInspectionPhoto, shieldMeshPhoto, itoFilmPhoto] },
  { id: "connect", eyebrow: "CONNECT", title: "Connectors, antennas and traceability", photos: [...recentAntennaPhotos, barcodeTraceabilityPhoto, ...connectorPhotos, traceabilityPhoto, ...antennaPhotos, dualAntennaPhoto] },
  { id: "applications", eyebrow: "Applications", title: "Installed applications", photos: [airportTugPhoto, ...vehicleApplicationPhotos] },
  { id: "facility", eyebrow: "Facility", title: "Butler, Pennsylvania facility", photos: [...recentShopPhotos, legacyCleanRoomPhoto, ...facilityManufacturingPhotos, ...facilityProcessPhotos, ...facilityAboutPhotos] },
  { id: "quality-inspection", eyebrow: "Quality & inspection", title: "Inspection and thermal evaluation", photos: [interlayerInspectionPhoto, antennaCapacitancePhoto, barcodeTraceabilityPhoto, ...inspectionPhotos] },
];

const unique = (list: HlgPhoto[]) => list.filter((p, i) => list.findIndex((q) => q.src === p.src) === i);

const PhotoGallery = () => (
  <>
    <Seo
      title="Photo Gallery — Actual HLG Interlayers, Connectors and Facility | HLG"
      description="Photographs of actual Hotlineglass USA heated interlayers, temperature-sensing mats, shielding, connectors and clean-room facility in Butler, Pennsylvania."
      path="/photo-gallery"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="Resources"
      title="Photo Gallery"
      subtitle="Actual HLG construction, grouped by function. Final geometry for every program is customer specific."
    >
      <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
    </PageHero>
    {groups.map((g, i) => (
      <Section key={g.id} id={g.id} tone={i % 2 ? "gray" : "light"}>
        <SectionHeading eyebrow={g.eyebrow} title={g.title} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {unique(g.photos).map((p) => (
            <Figure key={p.src} photo={p} fit="contain" aspect="aspect-[4/3]" matte={vehicleApplicationPhotos.includes(p)} />
          ))}
        </div>
      </Section>
    ))}
    <Section id="switch" tone={groups.length % 2 ? "gray" : "light"}>
      <SectionHeading eyebrow="SWITCH" title="Switchable PDLC film" />
      <div className="max-w-3xl">
        <video
          src={pdlcVideo.url}
          controls
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full rounded-lg border border-border bg-card"
        />
        <p className="mt-3 text-sm text-muted-foreground">
          PDLC switchable film transitioning between opaque and clear states. Actual HLG material; switching
          performance is program specific.
        </p>
      </div>
    </Section>
  </>
);

export default PhotoGallery;
