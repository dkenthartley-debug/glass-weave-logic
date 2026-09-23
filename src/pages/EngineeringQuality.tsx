import { PageHero, Section, SectionHeading, CtaLink } from "@/components/Section";
import { ThermalBand } from "@/components/Graphics";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { processSteps, qualityProof } from "@/data/hlg";
import Figure from "@/components/Figure";
import { traceabilityPhoto } from "@/data/hlgPhotos";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Engineering & Quality", path: "/engineering-quality" },
];

const EngineeringQuality = () => (
  <>
    <Seo
      title="Engineering & Quality — ISO 9001:2015, 100% Inspection | HLG"
      description="HLG manufactures functional interlayers in Butler, Pennsylvania in a controlled clean-room environment: ISO 9001:2015, 100% interlayer inspection, design control, thermal validation and traceability."
      path="/engineering-quality"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="Manufacturing & quality"
      title="Engineered here. Manufactured here. Inspected here."
      subtitle="HLG manufactures functional interlayers in Butler, Pennsylvania in a controlled clean-room manufacturing environment. Every interlayer fabricated by HLG receives 100% inspection before release."
    >
      <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
    </PageHero>

    <Section>
      <SectionHeading eyebrow="Proof points" title="How the work is controlled" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {qualityProof.map((q) => (
          <div key={q.title} className="bg-background p-8">
            <div className="mono text-primary">{q.title}</div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{q.body}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center mt-14">
        <Figure photo={traceabilityPhoto} aspect="aspect-[16/9]" />
        <div>
          <h2 className="font-display text-2xl font-bold uppercase">Part marking and lot traceability</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Interlayers can carry part number and HLG identification marking, and barcodes can be applied for lot
            number traceability and tracking through production.
          </p>
        </div>
      </div>
    </Section>

    <Section tone="gray">
      <SectionHeading
        eyebrow="Engineering"
        title="Start with the electrical requirement. Engineer the interlayer around it."
      />
      <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
        {processSteps.map((s) => (
          <li key={s.n} className="bg-background p-7">
            <div className="font-display text-3xl font-bold text-primary/25">{s.n}</div>
            <h2 className="font-display text-base font-semibold uppercase mt-3">{s.title}</h2>
            <ul className="mt-4 space-y-2">
              {s.items.map((i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="mt-2 h-px w-2.5 shrink-0 bg-primary" aria-hidden />
                  {i}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>

    <Section>
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <SectionHeading
            eyebrow="Validation"
            title="What gets verified"
            subtitle="Validation is part of development, not an afterthought at the end of it."
          />
          <ul className="space-y-3">
            {[
              "Electrical resistance and continuity verification",
              "Thermal imaging of new heater designs",
              "Temperature uniformity evaluation",
              "Optical distortion and performance evaluation while a transparency is energized, after prototype lamination",
              "Documented engineering records for new heater designs",
            ].map((v) => (
              <li key={v} className="text-muted-foreground flex gap-3 leading-relaxed">
                <span className="mt-3 h-px w-3.5 shrink-0 bg-primary" aria-hidden />
                {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-8">
          <div className="mono text-primary mb-6">Thermal evaluation</div>
          <ThermalBand />
          <p className="text-sm text-muted-foreground mt-8 leading-relaxed">
            HLG supports process engineering, prototyping, validation and production. Specific approvals,
            qualifications and performance values are program-dependent and are addressed within a defined program
            scope.
          </p>
        </div>
      </div>
    </Section>

    <Section tone="navy">
      <SectionHeading invert eyebrow="Engineering resources" title="HLG Technical Library" subtitle="Technical papers and application notes covering heated interlayer engineering, embedded RTD sensing, busbars, electrical exits, shielding and validation." />
      <CtaLink to="/technical-library">Technical Library</CtaLink>
    </Section>
  </>
);

export default EngineeringQuality;
