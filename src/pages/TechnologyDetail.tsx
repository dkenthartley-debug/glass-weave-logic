import { Navigate, useParams, Link } from "react-router-dom";
import { PageHero, Section, SectionHeading, CtaLink, Eyebrow } from "@/components/Section";
import { ConductorField, LaminateStack, ShieldPath, ThermalBand } from "@/components/Graphics";
import Seo, { breadcrumbSchema, techArticleSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getTech, technologies } from "@/data/hlg";
import Figure from "@/components/Figure";
import { connectorPhotos, heaterMatSectionPhoto, sensorMatSectionPhoto } from "@/data/hlgPhotos";

const TechnologyDetail = () => {
  const { slug } = useParams();
  const tech = getTech(slug);
  if (!tech) return <Navigate to="/technologies" replace />;

  const path = `/technologies/${tech.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Technologies", path: "/technologies" },
    { name: tech.name, path },
  ];
  const others = technologies.filter((t) => t.slug !== tech.slug);

  return (
    <>
      <Seo
        title={tech.seoTitle}
        description={tech.seoDescription}
        path={path}
        type="article"
        schema={[
          breadcrumbSchema(crumbs),
          techArticleSchema({ name: `${tech.code} — ${tech.name}`, description: tech.seoDescription, path }),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero eyebrow={`${tech.code} · ${tech.name}`} title={tech.h1} subtitle={tech.lead}>
        <CtaLink to={tech.cta?.to ?? "/engineering-review"}>{tech.cta?.label ?? "Start an Engineering Review"}</CtaLink>
      </PageHero>

      {tech.code === "SENSE" && (
        <section className="border-b border-border bg-surface">
          <div className="container py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span className="mono text-primary">HLG growth technology</span>
            <p className="text-sm text-muted-foreground">
              A newly featured HLG capability for integrating temperature feedback directly within the laminate.
            </p>
          </div>
        </section>
      )}

      <Section>
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7 space-y-12">
            {tech.sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-2xl font-bold uppercase">{s.title}</h2>
                {s.body && <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>}
                {s.bullets && (
                  <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
                        <span className="mt-2 h-px w-3 shrink-0 bg-primary" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {tech.code === "SHIELD" && (
              <div>
                <Eyebrow>Electrical path</Eyebrow>
                <ShieldPath />
              </div>
            )}
            {tech.code === "HEAT" && (
              <>
                <Figure photo={heaterMatSectionPhoto} aspect="aspect-[16/10]" />
                <ThermalBand />
              </>
            )}
            {tech.code === "SENSE" && (
              <div className="space-y-5">
                <Figure photo={sensorMatSectionPhoto} aspect="aspect-[16/10]" />
                <p className="border-l-2 border-primary pl-5 text-sm text-muted-foreground leading-relaxed">
                  The sensing wire is encapsulated within the interlayer material—not applied as a separate RTD on
                  top of it.
                </p>
              </div>
            )}
            {tech.code === "CONNECT" && (
              <div className="grid sm:grid-cols-2 gap-6">
                {connectorPhotos.slice(0, 2).map((p) => (
                  <Figure key={p.src} photo={p} />
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-5 space-y-8">
            {tech.specs && (
              <div className="panel p-7">
                <div className="mono text-primary mb-5">Validated capability</div>
                <dl className="divide-y divide-border">
                  {tech.specs.map((s) => (
                    <div key={s.label} className="py-3.5 flex justify-between gap-6">
                      <dt className="text-sm text-muted-foreground">{s.label}</dt>
                      <dd className="font-display text-sm font-semibold text-right">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {tech.code !== "SENSE" && (
              <div className="panel p-7">
                <div className="mono text-primary mb-5">Conductor detail</div>
                <ConductorField />
              </div>
            )}
            <div className="panel p-7">
              <div className="mono text-primary mb-5">Laminate stack</div>
              <LaminateStack />
            </div>
          </aside>
        </div>
      </Section>

      {tech.closing && (
        <section className="bg-navy-deep">
          <div className="container py-20 md:py-24">
            <p className="font-display text-2xl md:text-4xl font-bold uppercase text-background max-w-4xl leading-[1.1]">
              {tech.closing}
            </p>
            <div className="mt-9">
              <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
            </div>
          </div>
        </section>
      )}

      <Section tone="gray">
        <SectionHeading eyebrow="Technologies" title="Other functions" />
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-border border border-border">
          {others.map((t) => (
            <Link key={t.slug} to={`/technologies/${t.slug}`} className="bg-background p-6 hover:bg-surface transition-colors">
              <div className="font-display text-xl font-bold text-primary">{t.code}</div>
              <div className="text-sm text-muted-foreground mt-2">{t.name}</div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default TechnologyDetail;
