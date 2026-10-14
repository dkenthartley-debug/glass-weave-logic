import Breadcrumbs from "@/components/Breadcrumbs";
import Seo, { breadcrumbSchema, techArticleSchema } from "@/components/Seo";
import { CtaLink, PageHero, Section } from "@/components/Section";
import { shieldingSpecification as spec } from "@/data/shieldingSpecification";

const path = "/specifications/s-02-emi-rfi-scif-shielding";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technical Library", path: "/technical-library" },
  { name: "S.02", path },
];

export default function ShieldingSpecification() {
  return (
    <>
      <Seo
        title="S.02 — EMI/RFI Shielding Interlayers for SCIF Applications | HLG"
        description={`${spec.overview} Engineered assemblies for SCIF and secure-facility glazing; 80 OPI mesh and printed-copper options. Testing and results TBD.`}
        path={path}
        type="article"
        schema={[breadcrumbSchema(crumbs), techArticleSchema({ name: spec.title, description: spec.scif, path })]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero eyebrow="HLG Product Specifications · S.02" title={spec.title} subtitle={spec.overview} />
      <Section>
        <article className="max-w-4xl">
          <p className="mono text-accent mb-8">{spec.status}</p>
          <h2 className="font-display text-2xl font-semibold mb-4">SCIF and secure-facility applications</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">{spec.scif}</p>
          <h2 className="font-display text-2xl font-semibold mb-4">Proposed assembly specification</h2>
          <dl className="border-t border-border mb-10">
            {spec.fields.map((field) => (
              <div key={field.label} className="grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6 py-4 border-b border-border">
                <dt className="font-semibold text-sm">{field.label}</dt>
                <dd className="text-sm text-muted-foreground leading-relaxed">{field.value}</dd>
              </div>
            ))}
          </dl>
          {[
            ["Assembly engineering", spec.engineering],
            ["Qualification plan", spec.qualification],
            ["Application inputs and film selection", spec.inputs],
          ].map(([title, text]) => (
            <section key={title} className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-3">{title}</h2>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </section>
          ))}
          <CtaLink to="/engineering-review?document=S.02">Discuss Shielding Requirements</CtaLink>
        </article>
      </Section>
    </>
  );
}