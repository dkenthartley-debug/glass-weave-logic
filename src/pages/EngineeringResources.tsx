import { Link } from "react-router-dom";
import { resources } from "@/data/resources";
import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, BookOpen, FileText, Notebook } from "lucide-react";

const kinds = [
  { kind: "Design Guide", icon: BookOpen, blurb: "Step-by-step engineering guidance for specifying conductive and heated laminated glass." },
  { kind: "White Paper", icon: FileText, blurb: "Comparative and analytical pieces on conductor selection, reliability, and system design." },
  { kind: "Application Note", icon: Notebook, blurb: "Sector-specific notes covering the constraints that shape real builds." },
] as const;

const EngineeringResources = () => (
  <>
    <Seo
      title="Engineering Resource Center — Heated & Conductive Glass Design Guides | HLG"
      description="Design guides, white papers, application notes, and an engineering FAQ library covering heated laminated glass, embedded wire, bus bar design, conductive films, and shielded glazing."
      path="/engineering-resources"
      schema={[orgSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Engineering Resources", path: "/engineering-resources" }])]}
    />
    <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Engineering Resources", path: "/engineering-resources" }]} />
    <PageHero
      eyebrow="Engineering Resource Center"
      title="Reference Material for Engineers Specifying Conductive Glass"
      subtitle="Design guides, white papers, application notes, and a growing FAQ library — written to answer real engineering questions before a project starts."
    />

    <Section>
      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/engineering-resources/faq" className="panel p-7 hover:border-primary/60 transition-colors">
          <div className="font-display text-xl font-semibold">FAQ Library</div>
          <p className="text-sm text-muted-foreground mt-3">
            Engineering questions on heated glass, embedded wire, sensors, shielding, bus bars, and power.
          </p>
          <span className="mono text-xs text-primary mt-4 inline-flex items-center gap-2">Browse FAQs <ArrowRight size={12} /></span>
        </Link>
        <Link to="/downloads" className="panel p-7 hover:border-primary/60 transition-colors">
          <div className="font-display text-xl font-semibold">Download Center</div>
          <p className="text-sm text-muted-foreground mt-3">
            Datasheets, design guides, drawing sets, and handling documentation available on request.
          </p>
          <span className="mono text-xs text-primary mt-4 inline-flex items-center gap-2">Open downloads <ArrowRight size={12} /></span>
        </Link>
        <Link to="/case-studies" className="panel p-7 hover:border-primary/60 transition-colors">
          <div className="font-display text-xl font-semibold">Case Studies</div>
          <p className="text-sm text-muted-foreground mt-3">
            Sanitized development stories from aerospace, defense, transit, marine, and automotive programs.
          </p>
          <span className="mono text-xs text-primary mt-4 inline-flex items-center gap-2">Read case studies <ArrowRight size={12} /></span>
        </Link>
      </div>
    </Section>

    {kinds.map(({ kind, icon: Icon, blurb }) => (
      <Section key={kind} className="border-t border-border">
        <div className="flex items-start gap-4 mb-8">
          <Icon className="text-primary mt-1" size={26} />
          <div>
            <h2 className="font-display text-3xl font-bold">{kind}s</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">{blurb}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {resources
            .filter((r) => r.kind === kind)
            .map((r) => (
              <div key={r.title} className="bg-background p-6">
                <div className="mono text-[10px] text-primary">{r.topic}</div>
                <h3 className="font-display font-semibold mt-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.summary}</p>
                <Link to="/contact" className="mono text-[10px] text-primary mt-3 inline-block">
                  Request this document
                </Link>
              </div>
            ))}
        </div>
      </Section>
    ))}
  </>
);

export default EngineeringResources;
