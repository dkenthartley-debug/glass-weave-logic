import { PageHero, Section, SectionHeading, CtaLink } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { libraryTopics } from "@/data/hlg";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technical Library", path: "/technical-library" },
];

const TechnicalLibrary = () => (
  <>
    <Seo
      title="HLG Technical Library — Functional Interlayer Engineering Resources"
      description="The HLG Technical Library covers heated interlayer engineering, embedded RTD sensing, power density, busbar engineering, electrical exits, transparent conductors, EMI/RFI shielding, antenna integration and validation."
      path="/technical-library"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="Engineering resources"
      title="HLG Technical Library"
      subtitle="HLG maintains an expanding library of engineering resources covering the design and integration of electrical functionality into laminated glass."
    />

    <Section>
      <div className="border border-accent/40 bg-accent/5 px-6 py-6">
        <div className="mono text-accent">Technical papers and application notes coming soon.</div>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-2xl">
          Papers are being prepared for release. To discuss a specific engineering topic before publication, start an
          engineering review — technical detail is shared under a mutual NDA where appropriate.
        </p>
      </div>

      <SectionHeading eyebrow="Coverage" title="Topics in preparation" align="left" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {libraryTopics.map((t, i) => (
          <div key={t} className="bg-background p-6">
            <div className="mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
            <div className="font-display text-base font-semibold mt-2">{t}</div>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
        <CtaLink to="/engineering-review#nda" variant="outline">HLG Mutual NDA</CtaLink>
      </div>
    </Section>
  </>
);

export default TechnicalLibrary;
