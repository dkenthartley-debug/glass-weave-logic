import { Link, Navigate, useParams } from "react-router-dom";
import { markets, productsByMarket, getMarket } from "@/data/products";
import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const MarketsIndex = () => (
  <>
    <Seo
      title="Markets — Aerospace, Defense, Automotive & Secure Facilities | HLG"
      description="Conductive interlayer and heated glass solutions for aerospace transparencies, defense glazing, automotive and ADAS glass, secure facility windows, and transportation glazing."
      path="/markets"
      schema={[orgSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Markets", path: "/markets" }])]}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Markets", path: "/markets" }]} />
    <PageHero
      eyebrow="Markets"
      title="Markets Served by HLG Conductive Interlayers"
      subtitle="Electrically active glazing requirements differ sharply by sector. These pages group the products and design drivers relevant to each."
    />
    <Section>
      <div className="grid md:grid-cols-2 gap-px bg-border">
        {markets.map((m) => (
          <Link key={m.slug} to={`/markets/${m.slug}`} className="bg-background p-8 hover:bg-surface/60 transition-colors group">
            <h2 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">{m.name}</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.blurb}</p>
            <div className="mono text-[10px] text-primary mt-4">{productsByMarket(m.slug).length} product pages</div>
          </Link>
        ))}
      </div>
    </Section>
  </>
);

export const MarketDetail = () => {
  const { slug } = useParams();
  const market = getMarket(slug);
  if (!market) return <Navigate to="/markets" replace />;
  const items = productsByMarket(market.slug);
  const path = `/markets/${market.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Markets", path: "/markets" },
    { name: market.name, path },
  ];

  return (
    <>
      <Seo
        title={`${market.name} Glazing Solutions | Hotlineglass USA`}
        description={market.blurb}
        path={path}
        schema={[breadcrumbSchema(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero eyebrow="Market" title={`${market.name} Conductive Glass Solutions`} subtitle={market.blurb} />
      <Section>
        <h2 className="font-display text-2xl font-bold mb-8">Products for {market.name.toLowerCase()}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="bg-background p-6 hover:bg-surface/60 transition-colors group">
              <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};
