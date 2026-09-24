import { PageHero, Section, SectionHeading, CtaLink } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { libraryTopics } from "@/data/hlg";
import { librarySeries } from "@/data/library";

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
      {librarySeries.map((series) => (
        <div key={series.code} className="mb-14 last:mb-0">
          <SectionHeading eyebrow={series.scope} title={series.name} align="left" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl -mt-6 mb-8">{series.purpose}</p>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {series.docs.map((doc) => (
              <div key={doc.id} className="bg-background p-6 flex flex-col">
                <div className="mono text-muted-foreground">
                  {doc.id} · {doc.revision}
                </div>
                <div className="font-display text-base font-semibold mt-2">{doc.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{doc.summary}</p>
                {doc.pdf && (
                  <a
                    href={`https://glass-weave-logic.lovable.app${doc.pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="mono text-accent mt-4 inline-block hover:underline"
                  >
                    Download PDF →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="border border-accent/40 bg-accent/5 px-6 py-6 mt-14">
        <div className="mono text-accent">Additional technical papers and application notes in preparation.</div>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-2xl">
          The library is expanding. To discuss a specific engineering topic before publication, start an
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
