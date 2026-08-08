import { PageHero, Section, Eyebrow } from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import drumRoomLayup from "@/assets/drum-room-2-layup-line.jpg.asset.json";
import dispenseCells from "@/assets/cleanroom-dispense-cells.jpg.asset.json";
import leadAttach from "@/assets/cleanroom-lead-attach.jpg.asset.json";
import floorWide from "@/assets/cleanroom-production-floor-wide.jpg.asset.json";
import Seo, { orgSchema } from "@/components/Seo";

const facilityPhotos = [
  {
    src: floorWide.url,
    title: "Cleanroom production floor",
    caption:
      "Multiple gowned build cells operating in parallel across the controlled production floor.",
  },
  {
    src: dispenseCells.url,
    title: "Automated dispense cells",
    caption:
      "Gantry dispense stations running programmed paths over staged interlayer stacks for repeatable wire placement.",
  },
  {
    src: leadAttach.url,
    title: "Lead attach and in-process soldering",
    caption:
      "Leads and terminations attached at the layup table while the assembly is still flat and fully accessible.",
  },
  {
    src: drumRoomLayup.url,
    title: "Drum Room #2 — layup line",
    caption:
      "Full-length layup tables with glass staged alongside the interlayer drum for continuous stack build.",
  },
];



const About = () => (
  <>
    <Seo
      title={"About Hotlineglass USA (HLG) — Specialty Glass Technology"}
      description={"HLG develops conductive interlayers, embedded wire products, heater and sensor mats, and specialty films for advanced laminated glass manufacturers in aerospace, defense, and industrial markets."}
      path="/about"
      schema={orgSchema}
    />
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
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Eyebrow>Quality & Traceability</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Quality management and traceability built into production.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            HLG operates under a quality management system certified to ISO 9001. The certification
            applies to the way we document, control, and improve our design, production, inspection, and
            record-keeping processes — not to guarantees about any specific product performance or customer
            specification.
          </p>
          <p>
            Lot-number tracking and material traceability are part of our normal workflow, from raw
            interlayer through shipped component. Each production run carries identifiable lot
            information, so we can retrieve material history, process parameters, and inspection records
            for a specific batch when needed. This supports customers who must demonstrate supply-chain
            control, conformance, and accountability to their own end users or certifying bodies.
          </p>
          <p>
            For aerospace and defense programs, an ISO 9001-based system provides a common framework for
            process control, corrective action, and documentation that can work alongside OEM and
            prime-contractor quality systems. For SCIF, TEMPEST, and secure-facility contractors,
            repeatable, documented production helps support compliance with facility-specific material and
            installation requirements. For transportation and industrial OEMs, it can reduce qualification
            risk and make transitions from prototype to production more predictable.
          </p>
          <p>
            ISO 9001 certification is not a claim that every product meets every possible specification
            or is suitable for every application. It is a statement that our quality management processes
            are structured, audited, and capable of supporting the traceability and process control that
            demanding markets require.
          </p>
        </div>
      </div>
    </Section>

    <Section>
      <div className="max-w-3xl">
        <Eyebrow>Inside the Facility</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mt-3">
          Cleanroom production at Hotlineglass USA.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Conductive interlayers, heater mats, and sensor assemblies are built, inspected, and bagged in
          controlled cleanroom space. Gowning, dedicated layup tables, backlit inspection, and in-process
          electrical checks are part of the normal production flow.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-px bg-border mt-10">
        {facilityPhotos.map((p) => (
          <figure key={p.title} className="bg-background">
            <img
              src={p.src}
              alt={`${p.title} — Hotlineglass USA cleanroom`}
              loading="lazy"
              className="w-full aspect-[16/10] object-cover"
            />
            <figcaption className="p-6">
              <div className="font-display text-lg font-semibold text-primary">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/facility" className="inline-flex items-center gap-2 mono text-sm text-primary hover:text-primary-glow transition-colors">
          See the full facility <ArrowRight size={16} />
        </Link>
      </div>
    </Section>

    <Section className="bg-background border-y border-border">
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
