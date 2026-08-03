import { PageHero, Section, Eyebrow } from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => (
  <>
    <PageHero
      eyebrow="About HLG"
      title="Specialty interlayers, embedded wire, and electrically active glass components"
      subtitle="Hotlineglass USA (HLG) develops and supplies the conductive layer of advanced laminated glass systems. We are not a commodity glass fabricator — we focus on the elements that make a transparency electrically active."
    />

    <Section>
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Eyebrow>Positioning</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            The integration layer between glass and electrical function.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            HLG supplies specialty interlayers, conductive films, embedded wire products, sensor mats,
            heater mats, bus bar systems, and production-ready laminated glass subassemblies.
          </p>
          <p>
            Our customers are advanced glazing manufacturers, aerospace suppliers, defense programs,
            SCIF and security contractors, transportation glazing companies, and industrial OEMs.
          </p>
          <p>
            We help these customers integrate electrical capability into laminated glass systems in a
            practical, repeatable, production-ready format — not as a one-off lab project.
          </p>
          <p>
            HLG operates under an ISO 9001 certified quality management system, with lot-number tracking
            and traceability built into our production workflow.
          </p>
        </div>
      </div>
    </Section>

    <Section className="bg-surface/50 border-y border-border">
      <Eyebrow>What We Value</Eyebrow>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-4">
        {[
          ["Practical", "We work the way engineering teams work. Real materials, real lamination cycles, real tolerances."],
          ["Technical", "Conductors, interlayers, bus bars, films, and process — discussed at the level your engineers need."],
          ["Credible", "Careful about claims. We describe target applications and development capabilities, not guarantees."],
          ["Integration-Focused", "Our success is measured by whether our components survive your process and perform in the field."],
        ].map(([t, d]) => (
          <div key={t} className="bg-background p-7">
            <div className="font-display text-lg font-semibold text-primary">{t}</div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <div className="panel p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-2xl md:text-3xl font-bold">Start a conversation with HLG.</div>
          <p className="text-muted-foreground mt-2">Feasibility, materials, samples, or production path — we are happy to talk.</p>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground hover:bg-primary-glow transition-colors">Contact HLG <ArrowRight size={18} /></Link>
      </div>
    </Section>
  </>
);

export default About;
