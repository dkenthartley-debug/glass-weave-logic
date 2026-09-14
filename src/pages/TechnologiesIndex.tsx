import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, CtaLink } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { technologies } from "@/data/hlg";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
];

const TechnologiesIndex = () => (
  <>
    <Seo
      title="Technologies — Heat, Sense, Shield, Conduct, Switch, Connect | HLG"
      description="Six electrical functions HLG engineers into laminated glass: electrically heated interlayers, embedded RTD temperature sensing, EMI/RFI shielding, transparent conductors, switchable glazing and integrated antennas."
      path="/technologies"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="Technologies"
      title="Six functions engineered into the laminate"
      subtitle="What electrical functionality can HLG integrate into laminated glass? These six functions are the platform. HLG engineers, integrates, validates and produces."
    >
      <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
    </PageHero>
    <Section>
      <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
        {technologies.map((t) => (
          <Link key={t.slug} to={`/technologies/${t.slug}`} className="group bg-background p-8 md:p-10 hover:bg-surface transition-colors">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-3xl font-bold text-primary">{t.code}</span>
              <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h2 className="font-display text-xl font-semibold mt-4 group-hover:text-primary transition-colors">{t.name}</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.cardCopy}</p>
          </Link>
        ))}
      </div>
    </Section>
  </>
);

export default TechnologiesIndex;
