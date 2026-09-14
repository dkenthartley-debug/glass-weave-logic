import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero, Section, SectionHeading, CtaLink } from "@/components/Section";
import { LaminateStack } from "@/components/Graphics";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getMarket, markets, technologies } from "@/data/hlg";

export const MarketsIndex = () => {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Markets", path: "/markets" },
  ];
  return (
    <>
      <Seo
        title="Markets — Aerospace, Defense, Automotive, Rail, Off-Road, Architectural | HLG"
        description="HLG engineers functional interlayers for aerospace, defense, automotive, rail and transit, off-road and commercial equipment, and architectural and smart glass applications."
        path="/markets"
        schema={[orgSchema, breadcrumbSchema(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Markets"
        title="One interlayer platform. Very different requirements."
        subtitle="The six electrical functions are constant. Voltage, power density, environment, optical requirements and electrical interfaces are not."
      >
        <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
      </PageHero>
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {markets.map((m) => (
            <Link key={m.slug} to={`/markets/${m.slug}`} className="group bg-background p-8 hover:bg-surface transition-colors">
              <h2 className="font-display text-lg font-semibold uppercase group-hover:text-primary transition-colors">{m.name}</h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.blurb}</p>
              <ul className="mt-5 space-y-2">
                {m.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                    <span className="mt-2 h-px w-2.5 shrink-0 bg-primary" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export const MarketDetail = () => {
  const { slug } = useParams();
  const market = getMarket(slug);
  if (!market) return <Navigate to="/markets" replace />;
  const path = `/markets/${market.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Markets", path: "/markets" },
    { name: market.name, path },
  ];

  return (
    <>
      <Seo title={market.seoTitle} description={market.seoDescription} path={path} schema={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow={`Market · ${market.name}`}
        title={`${market.name} functional interlayers`}
        subtitle={market.blurb}
      >
        <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase">Typical requirements</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {market.bullets.map((b) => (
                <li key={b} className="text-muted-foreground flex gap-3 leading-relaxed">
                  <span className="mt-3 h-px w-3.5 shrink-0 bg-primary" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mt-14">How HLG engages</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Start with the electrical requirement — voltage, power or thermal objective, geometry, electrical
              interface, optical and environmental requirements. HLG engineers the conductor architecture, busbars,
              sensor placement, lead routing and electrical exits around it, produces the interlayer for prototype
              lamination, validates it, and moves to controlled production with 100% inspection.
            </p>
          </div>
          <aside className="lg:col-span-5 space-y-8">
            <div className="panel p-7">
              <div className="mono text-primary mb-5">Relevant functions</div>
              <ul className="divide-y divide-border">
                {technologies.map((t) => (
                  <li key={t.slug} className="py-3.5">
                    <Link to={`/technologies/${t.slug}`} className="flex items-baseline gap-4 group">
                      <span className="mono text-primary w-20">{t.code}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {t.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel p-7">
              <div className="mono text-primary mb-5">Laminate stack</div>
              <LaminateStack />
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          invert
          eyebrow="Next step"
          title="Let's engineer your next transparency."
          subtitle="Start with the performance requirement. HLG can help determine how the electrical functionality should be engineered into the laminate."
        />
        <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
      </Section>
    </>
  );
};
