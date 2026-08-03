import { Link } from "react-router-dom";
import { markets, productsByMarket } from "@/data/products";
import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";

const ProductsIndex = () => (
  <>
    <Seo
      title="Products — Heated, Conductive & Shielded Glass Solutions | HLG"
      description="Dedicated product pages for heated windshield interlayers, aircraft heater and sensor mats, heated transparent armor, EMI and SCIF window inserts, and transportation glazing."
      path="/products"
      schema={[orgSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])]}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }]} />
    <PageHero
      eyebrow="Products"
      title="Conductive Interlayer Products by Application"
      subtitle="Each solution has its own engineering page covering the build, the design drivers, typical specifications, and the questions engineers ask before specifying it."
    />
    {markets.map((m) => (
      <Section key={m.slug} className="border-b border-border last:border-b-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold">{m.name}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">{m.blurb}</p>
          </div>
          <Link to={`/markets/${m.slug}`} className="mono text-xs text-primary">
            View market overview
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {productsByMarket(m.slug).map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="bg-background p-6 hover:bg-surface/60 transition-colors group">
              <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    ))}
  </>
);

export default ProductsIndex;
