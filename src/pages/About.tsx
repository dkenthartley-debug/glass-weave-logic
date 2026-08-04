import { PageHero, Section, Eyebrow } from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import cleanroomFloor from "@/assets/cleanroom-lamination-floor.jpg.asset.json";
import cleanroomLightTable from "@/assets/cleanroom-light-table-inspection.jpg.asset.json";
import cleanroomBagging from "@/assets/cleanroom-vacuum-bagging.jpg.asset.json";
import cleanroomPrep from "@/assets/cleanroom-interlayer-prep.jpg.asset.json";
import drumRoomLayup from "@/assets/drum-room-2-layup-line.jpg.asset.json";
import drumRoomDrum from "@/assets/drum-room-2-interlayer-drum.jpg.asset.json";
import drumRoomBay from "@/assets/drum-room-2-exterior-bay.jpg.asset.json";
import drumRoomMasterRoll from "@/assets/drum-room-2-master-roll.jpg.asset.json";

const facilityPhotos = [
  {
    src: cleanroomFloor.url,
    title: "Interlayer layup floor",
    caption:
      "Controlled-environment layup tables where interlayer, wire mats, and film stacks are built up before lamination.",
  },
  {
    src: cleanroomLightTable.url,
    title: "Light table inspection & electrical check",
    caption:
      "Backlit inspection of a heater mat with in-process continuity and resistance measurement before the assembly moves forward.",
  },
  {
    src: cleanroomPrep.url,
    title: "Interlayer prep and bus bar work",
    caption:
      "Trimming, bus bar placement, and lead attachment on interlayer assemblies ahead of stack build.",
  },
  {
    src: cleanroomBagging.url,
    title: "Vacuum bagging",
    caption:
      "Assemblies bagged and sealed for the de-air and autoclave cycle — the step that determines optical and bond quality.",
  },
  {
    src: drumRoomLayup.url,
    title: "Drum Room #2 — layup line",
    caption:
      "Cleanroom Drum Room #2: full-length layup tables with glass staged alongside the interlayer drum for continuous stack build.",
  },
  {
    src: drumRoomMasterRoll.url,
    title: "Drum Room #2 — master roll and stack layout",
    caption:
      "Master interlayer roll feeding the layup table, with taped layout references marking cut lines and stack positions.",
  },
  {
    src: drumRoomDrum.url,
    title: "Drum Room #2 — interlayer drum station",
    caption:
      "Temperature- and humidity-controlled interlayer drum with automated traverse for repeatable sheet pull and cutting.",
  },
  {
    src: drumRoomBay.url,
    title: "Cleanroom envelope and material bay",
    caption:
      "Exterior of the cleanroom envelope inside the production building — staging, glass handling, and controlled material transfer.",
  },
];



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
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Eyebrow>Quality & Traceability</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            ISO 9001 certified quality management for demanding markets.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            HLG operates under an ISO 9001 certified quality management system. Certification means our
            processes for design, production, inspection, and record-keeping are documented, repeatable,
            and independently audited — a baseline requirement for suppliers in aerospace, defense, and
            secure-facility markets.
          </p>
          <p>
            Lot-number tracking and traceability are built into our workflow from raw interlayer through
            shipped component. Each part carries an identifiable lot number, so material history,
            process parameters, and inspection records can be retrieved for a specific production run.
            This is critical for customers who must demonstrate supply-chain control, conformance, and
            accountability to their own end users.
          </p>
          <p>
            For aerospace and defense programs, ISO 9001 provides a common language around process control
            and corrective action that fits alongside OEM and prime-contractor quality systems. For SCIF,
            TEMPEST, and secure-facility contractors, documented, repeatable production supports
            compliance with facility-specific material and installation requirements. For transportation
            and industrial OEMs, it means fewer surprises during qualification and more predictable
            transitions from prototype to production.
          </p>
          <p>
            The certification does not by itself guarantee a particular performance level or specification
            compliance. It does give customers a structured, auditable foundation for the quality and
            traceability their programs require.
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
