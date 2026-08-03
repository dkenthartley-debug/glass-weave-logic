import { Link } from "react-router-dom";
import { librarySeries } from "@/data/library";
import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, FileDown, FileStack, Award, BookOpen, ClipboardList } from "lucide-react";

const seriesIcon = {
  TB: FileStack,
  QS: Award,
  AG: BookOpen,
  ER: ClipboardList,
} as const;

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Engineering Standards & Technical Library", path: "/technical-library" },
];

const TechnicalLibrary = () => (
  <>
    <Seo
      title="Engineering Standards & Technical Library | Hotlineglass USA"
      description="HLG Technical Bulletins, Qualification Standards, Application Guides, and Engineering Reports for electrically active laminated glass — downloadable PDFs for engineers and OEMs."
      path="/technical-library"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="Engineering Standards & Technical Library"
      title="Defining Engineering Practice in Electrically Active Transparent Systems"
      subtitle="A controlled library of Hotlineglass technical bulletins, qualification standards, application guides, and sample engineering reports — published so engineers, OEMs, and program teams can work from a common technical basis."
    />

    <Section>
      <div className="grid md:grid-cols-4 gap-px bg-border">
        {librarySeries.map((s) => {
          const Icon = seriesIcon[s.code];
          return (
            <a key={s.code} href={`#${s.code}`} className="bg-background p-6 hover:bg-card transition-colors">
              <Icon className="text-primary" size={22} />
              <div className="mono text-[10px] text-primary mt-4">{s.scope}</div>
              <div className="font-display font-semibold mt-1">{s.name}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.purpose}</p>
            </a>
          );
        })}
      </div>
    </Section>

    {librarySeries.map((s) => {
      const Icon = seriesIcon[s.code];
      return (
        <Section key={s.code} className="border-t border-border">
          <div id={s.code} className="scroll-mt-24 flex items-start gap-4 mb-8">
            <Icon className="text-primary mt-1" size={26} />
            <div>
              <div className="mono text-[10px] text-primary">{s.scope}</div>
              <h2 className="font-display text-3xl font-bold mt-1">{s.name}</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">{s.purpose}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {s.docs.map((d) => (
              <div key={d.id} className="bg-background p-6">
                <div className="mono text-[10px] text-primary">{d.id} · {d.revision}</div>
                <h3 className="font-display font-semibold mt-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d.summary}</p>
                <div className="flex items-center gap-4 mt-4">
                  <a href={d.pdf} download className="mono text-[10px] text-primary inline-flex items-center gap-2">
                    <FileDown size={12} /> Download PDF
                  </a>
                  {d.path && (
                    <Link to={d.path} className="mono text-[10px] text-primary inline-flex items-center gap-2">
                      Read online <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>
      );
    })}

    <Section className="border-t border-border">
      <div className="panel p-8 max-w-3xl">
        <h2 className="font-display text-2xl font-bold">Requesting Documents and Program-Specific Reports</h2>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
          Library documents are published for engineering information. Program-specific qualification reports are
          issued confidentially to the requesting organization. Contact HLG to discuss evaluation scope, sample
          articles, and the applicable standard revision.
        </p>
        <Link to="/contact" className="mono text-xs text-primary mt-5 inline-flex items-center gap-2">
          Discuss a project <ArrowRight size={12} />
        </Link>
      </div>
    </Section>
  </>
);

export default TechnicalLibrary;
