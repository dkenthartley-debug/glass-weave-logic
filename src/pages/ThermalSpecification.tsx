import Breadcrumbs from "@/components/Breadcrumbs";
import Seo, { breadcrumbSchema, techArticleSchema } from "@/components/Seo";
import { CtaLink, PageHero, Section } from "@/components/Section";
import { thermalSpecification as spec } from "@/data/thermalSpecification";

const path = "/specifications/s-05-thermal-validation";
const crumbs = [{ name: "Home", path: "/" }, { name: "Technical Library", path: "/technical-library" }, { name: "S.05", path }];

export default function ThermalSpecification() {
  return <>
    <Seo title="S.05 — Thermal Validation | HLG" description={spec.overview} path={path} type="article" schema={[breadcrumbSchema(crumbs), techArticleSchema({ name: spec.title, description: spec.overview, path })]} />
    <Breadcrumbs items={crumbs} />
    <PageHero eyebrow="HLG Product Specifications · S.05 · Draft for review" title={spec.title} subtitle={spec.overview} />
    <Section tone="navy" className="paper-dark">
      <article className="max-w-4xl">
        <p className="mono text-accent mb-8">{spec.status}</p>
        {spec.sections.map(section => <section key={section.title} className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{section.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{section.text}</p>
        </section>)}
        <a href="/documents/HLG-S-05-draft.pdf" download className="mono text-accent inline-block mb-8 hover:underline">Download S.05 spec sheet →</a>
        <div><CtaLink to="/engineering-review?document=S.05">Discuss Thermal Validation</CtaLink></div>
      </article>
    </Section>
  </>;
}