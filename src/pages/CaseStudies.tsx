import { caseStudies } from "@/data/resources";
import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Case Studies", path: "/case-studies" },
];

const CaseStudies = () => (
  <>
    <Seo
      title="Case Studies — Heated & Conductive Glass Development | HLG"
      description="Sanitized engineering case studies covering aircraft heater and sensor mats, combined heated and shielded vehicle windows, transit and rail de-icing, marine terminations, and ADAS camera zones."
      path="/case-studies"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="Case Studies"
      title="Engineering Development Stories"
      subtitle="Sanitized accounts of real development work — the constraint that drove the design, the approach taken, and what was delivered. Customer identities and program details are withheld."
    />
    <Section>
      <div className="space-y-px bg-border">
        {caseStudies.map((c) => (
          <article key={c.slug} className="bg-background p-8 md:p-10">
            <div className="mono text-[10px] text-primary">{c.sector}</div>
            <h2 className="font-display text-2xl font-bold mt-2">{c.title}</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-6">
              <div>
                <h3 className="mono text-xs text-foreground">Challenge</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.challenge}</p>
              </div>
              <div>
                <h3 className="mono text-xs text-foreground">Approach</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.approach}</p>
              </div>
              <div>
                <h3 className="mono text-xs text-foreground">Outcome</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.outcome}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <Link to="/contact" className="inline-flex px-6 py-3 bg-primary text-primary-foreground hover:bg-primary-glow transition-colors">
          Discuss a similar requirement
        </Link>
      </div>
    </Section>
  </>
);

export default CaseStudies;
