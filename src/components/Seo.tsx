import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://glass-weave-logic.lovable.app";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hotlineglass USA",
  alternateName: "HLG",
  url: SITE_URL,
  description:
    "Engineering electrically conductive interlayers, embedded wire, heated laminated glass, sensor integration, and EMI/RF shielding glass for advanced glazing systems.",
  logo: `${SITE_URL}/logo.png`,
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const techArticleSchema = (opts: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "TechnicalArticle",
  headline: opts.name,
  description: opts.description,
  url: `${SITE_URL}${opts.path}`,
  publisher: { "@type": "Organization", name: "Hotlineglass USA" },
});

export const productSchema = (opts: {
  name: string;
  description: string;
  path: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: opts.name,
  description: opts.description,
  url: `${SITE_URL}${opts.path}`,
  category: opts.category,
  brand: { "@type": "Brand", name: "Hotlineglass USA" },
  manufacturer: { "@type": "Organization", name: "Hotlineglass USA" },
});

const Seo = ({ title, description, path, type = "website", schema }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const blocks = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(b)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
