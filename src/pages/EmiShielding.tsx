import { PageHero, Section, Eyebrow } from "@/components/Section";
import img from "@/assets/emi-shielding.jpg";
import bulletinAsset from "@/assets/documents/emi-rfi-technical-bulletin.docx.asset.json";
import { Link } from "react-router-dom";
import { ArrowRight, Radio, Lock, Building2, Network, FileDown, Layers, Zap, Plug, CheckCircle2 } from "lucide-react";


const EmiShielding = () => (
  <>
    <PageHero
      eyebrow="03 / Solutions"
      title="EMI / RFI / SCIF Shielding Glass Inserts"
      subtitle="Conductive mesh and shielding subassembly concepts for SCIF rooms, TEMPEST programs, command centers, and secure facility window inserts."
    />

    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <img src={img} alt="Shielded glass mesh in a secure facility" loading="lazy" width={1200} height={800} className="w-full panel" />
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p className="text-foreground text-xl">
            Conductive mesh integration for windows that need to behave as part of a shielded envelope.
          </p>
          <p>
            HLG supports the development of EMI / RFI shielding glass inserts using laminated mesh layers,
            edge termination concepts, and bonded subassemblies designed to integrate with the larger
            shielded enclosure.
          </p>
          <p>
            We work with SCIF / TEMPEST integrators, security contractors, and shielded room builders
            on shielded window inserts that match the surrounding wall and frame approach.
          </p>
        </div>
      </div>
    </Section>

    <Section className="bg-surface/50 border-y border-border">
      <Eyebrow>Use Cases</Eyebrow>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-4">
        {[
          { i: Lock, t: "SCIF Rooms", d: "Window inserts that match the shielding intent of the surrounding secure envelope." },
          { i: Radio, t: "TEMPEST Glazing", d: "Conductive mesh integration concepts for emissions-controlled environments." },
          { i: Building2, t: "Command Centers", d: "Shielded glass concepts for operations rooms and sensitive facilities." },
          { i: Network, t: "Naval & Shelters", d: "Specialty glazing for shielded military shelters and command spaces." },
        ].map((x) => (
          <div key={x.t} className="bg-background p-7">
            <x.i className="text-primary" size={24} />
            <div className="font-display font-semibold text-lg mt-4">{x.t}</div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{x.d}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
        Shielding effectiveness depends on the full installation — frame, gasket, bonding, and surrounding
        enclosure. HLG focuses on the glass insert subassembly and works alongside the integrator on the
        broader system path.
      </p>
    </Section>

    <Section>
      <div className="panel p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-2xl md:text-3xl font-bold">Need a shielded window insert?</div>
          <p className="text-muted-foreground mt-2">Discuss mesh selection, geometry, termination, and integration with HLG.</p>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground hover:bg-primary-glow transition-colors">Discuss Shielding <ArrowRight size={18} /></Link>
      </div>
    </Section>
  </>
);

export default EmiShielding;
