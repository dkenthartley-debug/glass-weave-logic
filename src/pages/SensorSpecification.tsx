import Breadcrumbs from "@/components/Breadcrumbs";
import Seo, { breadcrumbSchema, techArticleSchema } from "@/components/Seo";
import { CtaLink, PageHero, Section } from "@/components/Section";
import { sensorSpecification as spec } from "@/data/sensorSpecification";

const path = "/specifications/s-04-sensor-mat-custom-layouts";
const crumbs = [{ name: "Home", path: "/" }, { name: "Technical Library", path: "/technical-library" }, { name: "S.04", path }];

export default function SensorSpecification() {
  return <>
    <Seo title="S.04 — Custom Embedded Sensor Mats | HLG" description={spec.overview} path={path} type="article" schema={[breadcrumbSchema(crumbs), techArticleSchema({ name: spec.title, description: spec.overview, path })]} />
    <Breadcrumbs items={crumbs} />
    <PageHero eyebrow="HLG Product Specifications · S.04 · Revision A" title={spec.title} subtitle={spec.overview} />
    <Section>
      <article className="max-w-4xl">
        {spec.sections.map(section => <section key={section.title} className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{section.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{section.text}</p>
        </section>)}
        <CtaLink to="/engineering-review?document=S.04">Discuss Sensor Requirements</CtaLink>
      </article>
    </Section>
  </>;
}