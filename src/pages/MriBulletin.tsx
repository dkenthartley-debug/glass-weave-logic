import Breadcrumbs from "@/components/Breadcrumbs";
import Figure from "@/components/Figure";
import Seo, { breadcrumbSchema, techArticleSchema } from "@/components/Seo";
import { CtaLink, PageHero, Section } from "@/components/Section";
import { mriBulletin as b, mriSuitePhoto } from "@/data/mriBulletin";
const tb003pdf = "/documents/HLG-TB-003.pdf";

const crumbs = [{ name: "Home", path: "/" }, { name: "Technical Library", path: "/technical-library" }, { name: "TB-003", path: b.path }];

export default function MriBulletin() {
  return <>
    <Seo title="TB-003 — RF-Shielded MRI Windows & Medical Imaging Glazing | HLG" description={b.overview} path={b.path} type="article" schema={[breadcrumbSchema(crumbs), techArticleSchema({ name: b.title, description: b.overview, path: b.path })]} />
    <Breadcrumbs items={crumbs} />
    <PageHero eyebrow="HLG Technical Bulletins · TB-003 · Revision A" title={b.title} subtitle={b.overview} />
    <Section>
      <article className="max-w-4xl">
        <a href={tb003pdf.url} download className="mono text-accent inline-block mb-8 hover:underline">Download TB-003 PDF →</a>
        <Figure photo={mriSuitePhoto} aspect="aspect-[16/10]" className="mb-10" />
        {b.sections.map(s => <section key={s.title} className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{s.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{s.text}</p>
        </section>)}
        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{b.applicationsTitle}</h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground list-disc pl-5">
            {b.applications.map(a => <li key={a}>{a}</li>)}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">{b.specNote}</p>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">{b.note.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{b.note.text}</p>
        </section>
        <CtaLink to="/engineering-review?document=TB-003">Discuss an MRI Window Project</CtaLink>
      </article>
    </Section>
  </>;
}
