import Breadcrumbs from "@/components/Breadcrumbs";
import Seo, { breadcrumbSchema, techArticleSchema } from "@/components/Seo";
import { CtaLink, PageHero, Section } from "@/components/Section";
import { emiBulletin as b } from "@/data/emiBulletin";
const tb002pdf = "/documents/HLG-TB-002.pdf";

const path = "/technical-bulletins/tb-002-emi-rfi-shielding-glass";
const crumbs = [{ name: "Home", path: "/" }, { name: "Technical Library", path: "/technical-library" }, { name: "TB-002", path }];

export default function EmiBulletin() {
  return <>
    <Seo title="TB-002 — EMI/RFI Shielding Glass for Data Centers, SCIFs & Federal Facilities | HLG" description={b.overview} path={path} type="article" schema={[breadcrumbSchema(crumbs), techArticleSchema({ name: b.title, description: b.overview, path })]} />
    <Breadcrumbs items={crumbs} />
    <PageHero eyebrow="HLG Technical Bulletins · TB-002 · Revision A" title={b.title} subtitle={b.overview} />
    <Section tone="navy" className="paper-dark">
      <article className="max-w-4xl">
        <a href={tb002pdf} download className="mono text-accent inline-block mb-8 hover:underline">Download TB-002 PDF →</a>
        {b.sections.map(s => <section key={s.title} className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{s.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{s.text}</p>
        </section>)}
        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{b.applicationsTitle}</h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground list-disc pl-5">
            {b.applications.map(a => <li key={a}>{a}</li>)}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">{b.tempestNote}</p>
        </section>
        {[b.advantage, b.note].map(s => <section key={s.title} className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{s.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{s.text}</p>
        </section>)}
        <CtaLink to="/engineering-review?document=TB-002">Discuss a Shielding Project</CtaLink>
      </article>
    </Section>
  </>;
}
