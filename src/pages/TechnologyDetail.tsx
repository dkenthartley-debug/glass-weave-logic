import { Link, useParams, Navigate } from "react-router-dom";
import { getTechnology, technologies } from "@/data/technologies";
import { Section, Eyebrow } from "@/components/Section";
import Seo, { breadcrumbSchema, faqSchema, techArticleSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, FileDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TechnologyDetail = () => {
  const { slug } = useParams();
  const tech = getTechnology(slug);
  if (!tech) return <Navigate to="/technologies" replace />;

  const path = `/technologies/${tech.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Technologies", path: "/technologies" },
    { name: tech.name, path },
  ];

  return (
    <>
      <Seo
        title={`${tech.name} — Engineering Reference | Hotlineglass USA`}
        description={tech.summary}
        path={path}
        type="article"
        schema={[
          techArticleSchema({ name: tech.h1, description: tech.summary, path }),
          breadcrumbSchema(crumbs),
          faqSchema(tech.faqs),
        ]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="relative border-b border-border bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container relative py-16 md:py-24">
          <Eyebrow>Technology Reference</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-4xl leading-[1.05]">
            {tech.h1}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">{tech.summary}</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-[1fr_280px] gap-14">
          <article className="space-y-16">
            <div>
              <h2 className="font-display text-2xl font-bold">Overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{tech.definition}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Engineering advantages</h2>
              <ul className="mt-5 space-y-3">
                {tech.advantages.map((a) => (
                  <li key={a} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-3 h-px w-4 bg-primary/70 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Design considerations</h2>
              <div className="mt-5 grid md:grid-cols-2 gap-px bg-border">
                {tech.design.map((d) => (
                  <div key={d.t} className="bg-background p-6">
                    <h3 className="font-display font-semibold">{d.t}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Materials</h2>
              <dl className="mt-5 divide-y divide-border border-y border-border">
                {tech.materials.map((m) => (
                  <div key={m.t} className="py-4 grid md:grid-cols-[220px_1fr] gap-2">
                    <dt className="mono text-primary text-xs pt-1">{m.t}</dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">{m.d}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Manufacturing process</h2>
              <ol className="mt-5 space-y-5">
                {tech.process.map((p, i) => (
                  <li key={p.t} className="flex gap-5 border-l-2 border-primary/30 pl-5">
                    <div className="mono text-primary shrink-0">{String(i + 1).padStart(2, "0")}</div>
                    <div>
                      <h3 className="font-display font-semibold">{p.t}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Performance characteristics</h2>
              <p className="text-xs text-muted-foreground mt-2">
                Values below are design targets and typical ranges used as a starting point for development, not
                guaranteed performance. Final values are established with the customer on representative samples.
              </p>
              <div className="mt-5 border border-border">
                {tech.performance.map((p) => (
                  <div key={p.label} className="grid md:grid-cols-3 gap-2 p-4 border-b border-border last:border-b-0">
                    <div className="mono text-xs text-primary">{p.label}</div>
                    <div className="font-display font-semibold text-sm">{p.value}</div>
                    <div className="text-xs text-muted-foreground">{p.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Applications</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {tech.applications.map((a) => (
                  <span key={a} className="mono text-xs border border-border px-3 py-2 text-muted-foreground">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Frequently asked questions</h2>
              <Accordion type="single" collapsible className="mt-4">
                {tech.faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </article>

          <aside className="space-y-8 lg:sticky lg:top-24 self-start">
            <div className="panel p-6">
              <div className="mono text-primary text-xs">Downloads</div>
              <ul className="mt-4 space-y-3">
                {tech.downloads.map((d) => (
                  <li key={d.title} className="text-sm">
                    <div className="flex gap-2 text-foreground">
                      <FileDown size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{d.title}</span>
                    </div>
                    <div className="mono text-[10px] text-muted-foreground ml-6 mt-1">{d.kind} · request access</div>
                  </li>
                ))}
              </ul>
              <Link to="/technical-library" className="mono text-xs text-primary mt-5 inline-flex items-center gap-2">
                Download center <ArrowRight size={12} />
              </Link>
            </div>

            <div className="panel p-6">
              <div className="mono text-primary text-xs">Related technologies</div>
              <ul className="mt-4 space-y-2 text-sm">
                {tech.related
                  .map((r) => technologies.find((t) => t.slug === r))
                  .filter(Boolean)
                  .map((t) => (
                    <li key={t!.slug}>
                      <Link to={`/technologies/${t!.slug}`} className="text-muted-foreground hover:text-primary">
                        {t!.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="panel p-6">
              <div className="font-display font-semibold">Discuss this technology</div>
              <p className="text-sm text-muted-foreground mt-2">
                Send us the aperture, supply, and function target and we will review feasibility.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground text-sm hover:bg-primary-glow transition-colors"
              >
                Contact engineering <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
};

export default TechnologyDetail;
