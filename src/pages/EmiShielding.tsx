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

    <Section className="border-b border-border">
      <Eyebrow>Technical Bulletin</Eyebrow>
      <div className="grid lg:grid-cols-3 gap-10 mt-4">
        <div className="lg:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Engineered EMI/RFI Shielding Glass for Data Centers, SCIFs &amp; Federal Facilities
          </h2>
          <p>
            Hotlineglass USA engineers transparent EMI/RFI shielding glazing systems as complete electrical
            assemblies rather than simply laminating conductive films into glass. The multi-layer architecture
            integrates conductive films, engineered busbars, proprietary connector systems, and controlled
            lamination processes to deliver consistent electrical performance, long-term durability, and
            verifiable quality.
          </p>
          <p>
            Shielding performance depends on the complete electrical path — conductive layers, busbars,
            connectors, grounding strategy, and manufacturing quality — not just the sheet resistance of a film.
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-border mt-2">
            {[
              { i: Layers, t: "Multi-Layer Architecture", d: "Multiple conductive layers, transparent films or meshes, precision conductive interlayers, and redundant electrical pathways." },
              { i: Zap, t: "Engineered Busbars", d: "Improved current collection, reduced contact resistance, lower voltage gradients, and better shielding uniformity." },
              { i: Plug, t: "Proprietary Connectors", d: "Low resistance, mechanical durability, corrosion resistance, simplified installation, and reliable grounding." },
              { i: CheckCircle2, t: "100% Electrical Inspection", d: "Designs support verification of every lite: continuity, resistance, busbar integrity, connector and ground-path validation." },
            ].map((x) => (
              <div key={x.t} className="bg-background p-6">
                <x.i className="text-primary" size={22} />
                <div className="font-display font-semibold mt-3 text-foreground">{x.t}</div>
                <p className="text-sm mt-2 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
          <p>
            <span className="text-foreground font-medium">Applications:</span> AI data centers, federal
            facilities, SCIFs, TEMPEST projects, military command centers, aerospace, secure laboratories,
            financial institutions, telecommunications, and other mission-critical infrastructure.
          </p>
          <p className="text-xs">
            Actual shielding effectiveness depends on the complete installed system, including glazing
            construction, framing, grounding, installation methods, and project-specific testing. HLG engineers
            complete shielding solutions to support specified performance objectives.
          </p>
        </div>
        <aside className="panel p-7 h-fit">
          <div className="mono text-[10px] text-primary">Technical Bulletin</div>
          <div className="font-display text-lg font-semibold mt-2">
            Engineered EMI/RFI Shielding Glass
          </div>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Data centers, SCIFs, and federal facilities — architecture, busbars, connectors, and inspection.
          </p>
          <a
            href={bulletinAsset.url}
            download
            className="mt-5 inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground hover:bg-primary-glow transition-colors text-sm"
          >
            <FileDown size={16} /> Download Bulletin
          </a>
        </aside>
      </div>
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
