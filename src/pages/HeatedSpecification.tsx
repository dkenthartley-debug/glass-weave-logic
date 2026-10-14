import Breadcrumbs from "@/components/Breadcrumbs";
import Seo, { breadcrumbSchema, techArticleSchema } from "@/components/Seo";
import { CtaLink, PageHero, Section } from "@/components/Section";
import { heatedSpecification as spec } from "@/data/heatedSpecification";

const path = "/specifications/s-03-heated-interlayer-voltage-range";
const crumbs = [{ name: "Home", path: "/" }, { name: "Technical Library", path: "/technical-library" }, { name: "S.03", path }];

export default function HeatedSpecification() {
  return <>
    <Seo title="S.03 — Heated Interlayers, 12–440 V DC | HLG" description={spec.overview} path={path} type="article" schema={[breadcrumbSchema(crumbs), techArticleSchema({ name: spec.title, description: spec.overview, path })]} />
    <Breadcrumbs items={crumbs} />
    <PageHero eyebrow="HLG Product Specifications · S.03 · Revision A" title={spec.title} subtitle={spec.overview} />
    <Section>
      <article className="max-w-4xl">
        <h2 className="font-display text-2xl font-semibold mb-4">Assembly specification</h2>
        <dl className="border-t border-border mb-10">
          {spec.fields.map(field => <div key={field.label} className="grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6 py-4 border-b border-border">
            <dt className="font-semibold text-sm">{field.label}</dt>
            <dd className="text-sm text-muted-foreground leading-relaxed">{field.value}</dd>
          </div>)}
        </dl>
        {[["Design scope", spec.design], ["Application-specific validation", spec.validation], ["Engineering inputs", spec.inputs]].map(([title, text]) => <section key={title} className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{title}</h2>
          <p className="text-muted-foreground leading-relaxed">{text}</p>
        </section>)}
        <CtaLink to="/engineering-review?document=S.03">Discuss Heating Requirements</CtaLink>
      </article>
    </Section>
  </>;
}