import { Link, Navigate, useParams } from "react-router-dom";
import { getProduct, getMarket, technologies } from "@/data/products-helpers";
import { Section, Eyebrow } from "@/components/Section";
import Seo, { breadcrumbSchema, faqSchema, productSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProduct(slug);
  if (!product) return <Navigate to="/products" replace />;
  const market = getMarket(product.market);

  const path = `/products/${product.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: market?.name ?? "Market", path: `/markets/${product.market}` },
    { name: product.name, path },
  ];

  return (
    <>
      <Seo
        title={`${product.name} — ${market?.name} | Hotlineglass USA`}
        description={product.summary}
        path={path}
        schema={[
          productSchema({
            name: product.name,
            description: product.summary,
            path,
            category: market?.name ?? "Conductive laminated glass",
          }),
          breadcrumbSchema(crumbs),
          faqSchema(product.faqs),
        ]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="relative border-b border-border bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container relative py-16 md:py-20">
          <Eyebrow>{market?.name}</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-4xl leading-[1.05]">
            {product.name}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">{product.summary}</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-[1fr_300px] gap-14">
          <article className="space-y-14">
            <div>
              <h2 className="font-display text-2xl font-bold">Overview</h2>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed text-lg">
                {product.overview.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Engineering highlights</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-muted-foreground border border-border p-4">
                    <span className="mt-2 h-px w-3 bg-primary/70 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Typical specification</h2>
              <p className="text-xs text-muted-foreground mt-2">
                Indicative configuration data for early design discussion. Final specification is developed with the
                customer against the actual aperture, supply, and environment.
              </p>
              <table className="mt-5 w-full border border-border text-sm">
                <tbody>
                  {product.specs.map((s) => (
                    <tr key={s.label} className="border-b border-border last:border-b-0">
                      <th scope="row" className="text-left mono text-xs text-primary p-4 align-top w-1/3">
                        {s.label}
                      </th>
                      <td className="p-4 text-muted-foreground">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Frequently asked questions</h2>
              <Accordion type="single" collapsible className="mt-4">
                {product.faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`p-faq-${i}`}>
                    <AccordionTrigger className="text-left font-display">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </article>

          <aside className="space-y-8 lg:sticky lg:top-24 self-start">
            <div className="panel p-6">
              <div className="mono text-primary text-xs">Underlying technologies</div>
              <ul className="mt-4 space-y-2 text-sm">
                {product.technologies
                  .map((t) => technologies.find((x) => x.slug === t))
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
              <div className="font-display font-semibold">Specify this product</div>
              <p className="text-sm text-muted-foreground mt-2">
                Share the aperture, glass build, supply voltage, and function target for a feasibility review.
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

export default ProductDetail;
