import { PageHero, Section, Eyebrow } from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo, { orgSchema } from "@/components/Seo";

const films = [
  { t: "ITO Film", d: "Transparent conductive oxide film handled and incorporated into laminated stacks for heating, sensing, and shielding functions." },
  { t: "ITO Glass", d: "Transparent conductive oxide-coated glass selection and integration into laminated subassemblies." },
  { t: "Conductive Mesh", d: "Woven and expanded mesh formats encapsulated between glass plies or films." },
  { t: "Patterned Conductive Coatings", d: "Laser deletion and patterning concepts to shape conductive areas, antenna geometries, and zoned heaters." },
  { t: "Specialty Film Encapsulation", d: "Multi-layer encapsulation of conductive and functional films inside interlayer assemblies." },
  { t: "Transparent Antenna Concepts", d: "Concept-stage transparent antenna geometries using patterned conductive layers in laminated glass." },
  { t: "ADAS Glazing Support", d: "Integration support for laminated glass that interacts with sensors, cameras, and emitters." },
  { t: "Variable-Tint Support", d: "Subassembly and bus bar integration support for switchable and variable-tint glass partners." },
];

const SpecialtyFilms = () => (
  <>
    <Seo
      title={"Specialty Films — ITO, Mesh & Film Encapsulation | HLG"}
      description={"Specialty conductive film formats, ITO film and glass, patterned coatings, and film encapsulation for electrically active laminated glass systems."}
      path="/specialty-films"
      schema={orgSchema}
    />
    <PageHero
      eyebrow="04 / Solutions"
      title="Specialty Films & Coatings"
      subtitle="Transparent conductors, patterned coatings, and specialty film encapsulation that turn a laminated glass build into an electrically active system."
    />

    <Section>
      <div className="max-w-3xl text-muted-foreground text-lg leading-relaxed space-y-5">
        <p className="text-foreground text-xl">
          Films are how transparency and conductivity coexist in modern laminated glass.
        </p>
        <p>
          HLG works across ITO film and glass, conductive mesh, patterned conductive coatings, and
          specialty encapsulation methods to build the electrical layer customers need inside the
          glazing — from heating and sensing to shielding and transparent antenna concepts.
        </p>
      </div>
    </Section>

    <Section className="border-t border-border">
      <Eyebrow>Film & Coating Set</Eyebrow>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-4">
        {films.map((f, i) => (
          <div key={f.t} className="bg-background p-7 hover:bg-surface transition-colors">
            <div className="mono text-primary">F.{String(i + 1).padStart(2, "0")}</div>
            <div className="font-display font-semibold text-lg mt-3">{f.t}</div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section className="bg-surface/50 border-y border-border">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <Eyebrow>Process Notes</Eyebrow>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Conductive films behave very differently inside a real lamination cycle than they do on the bench.
            HLG focuses on the prep, handling, edge termination, and pre-lamination steps that make a film-based
            stack repeatable in production.
          </p>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary-glow transition-colors">Talk Films <ArrowRight size={16} /></Link>
      </div>
    </Section>
  </>
);

export default SpecialtyFilms;
