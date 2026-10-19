import Breadcrumbs from "@/components/Breadcrumbs";
import Seo, { breadcrumbSchema, techArticleSchema } from "@/components/Seo";
import { CtaLink, PageHero, Section } from "@/components/Section";
import { atpdArticle as a } from "@/data/atpdArticle";

const path = "/technical-articles/ta-001-atpd-2352-embedded-sensing";
const crumbs = [{ name: "Home", path: "/" }, { name: "Technical Library", path: "/technical-library" }, { name: a.id, path }];

export default function AtpdArticle() {
  return <>
    <Seo title={`${a.id} — ${a.title} | HLG`} description={a.overview} path={path} type="article" schema={[breadcrumbSchema(crumbs), techArticleSchema({ name: a.title, description: a.overview, path })]} />
    <Breadcrumbs items={crumbs} />
    <PageHero eyebrow={`HLG Technical Articles · ${a.id} · ${a.revision}`} title={a.title} subtitle={a.subtitle} />
    <Section tone="navy" className="paper-dark">
      <article className="max-w-4xl">
        <p className="text-muted-foreground leading-relaxed mb-10">{a.overview}</p>
        {a.sections.map(s => <section key={s.title} className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{s.title}</h2>
          {s.paragraphs.map(p => <p key={p} className="text-muted-foreground leading-relaxed mb-3">{p}</p>)}
          {s.bullets && <ul className="list-disc pl-6 text-muted-foreground space-y-1">{s.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
        </section>)}
        <div className="border border-accent/40 bg-accent/5 px-6 py-5 mb-8">
          <p className="text-sm text-muted-foreground leading-relaxed">{a.fullPaperNote}</p>
        </div>
        <a href="/documents/HLG-TA-001.pdf" download className="mono text-accent inline-block mb-8 hover:underline">Download TA-001 article →</a>
        <div className="flex flex-wrap gap-3">
          <CtaLink to={`/engineering-review?document=${a.fullPaperId}`}>Request the Full White Paper</CtaLink>
        </div>
      </article>
    </Section>
  </>;
}
