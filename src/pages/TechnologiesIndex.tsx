import { Link } from "react-router-dom";
import { technologies } from "@/data/technologies";
import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight } from "lucide-react";

const TechnologiesIndex = () => (
  <>
    <Seo
      title="Conductive Glass Technologies — Embedded Wire, Heated Interlayers | HLG"
      description="Technical reference pages on embedded wire technology, heated and conductive interlayers, transparent conductive films, bus bars, sensor integration, and power distribution in laminated glass."
      path="/technologies"
      schema={[orgSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Technologies", path: "/technologies" }])]}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Technologies", path: "/technologies" }]} />
    <PageHero
      eyebrow="Technologies"
      title="Engineering Technologies for Electrically Conductive Glass"
      subtitle="Reference pages covering the conductor formats, materials, process steps, and design decisions behind heated, sensing, shielding, and antenna-capable laminated glass."
    />
    <Section>
      <div className="grid md:grid-cols-2 gap-px bg-border">
        {technologies.map((t) => (
          <Link
            key={t.slug}
            to={`/technologies/${t.slug}`}
            className="bg-background p-8 group hover:bg-surface/60 transition-colors"
          >
            <h2 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">{t.name}</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.summary}</p>
            <span className="mono text-primary mt-5 inline-flex items-center gap-2 text-xs">
              Read the reference <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  </>
);

export default TechnologiesIndex;
