import { Link } from "react-router-dom";
import {
  ArrowRight,
  Plane,
  ShieldCheck,
  Layers,
  Radio,
  Thermometer,
  Cpu,
  Workflow,
  CircuitBoard,
  Wrench,
  Zap,
  FileText,
  ClipboardCheck,
  FlaskConical,
  Wand2,
  Rocket,
  BookOpen,
  Antenna,
  Car,
  Truck,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import Seo, { orgSchema } from "@/components/Seo";
import interlayerImg from "@/assets/conductive-interlayer.jpg";
import aircraftImg from "@/assets/aircraft-sensor.jpg";
import emiImg from "@/assets/emi-shielding.jpg";
import automotiveImg from "@/assets/automotive-glass.jpg";
import offroadImg from "@/assets/offroad-heated-glass.jpg";
import thermalTest from "@/assets/heater-mat-thermal-test.jpg.asset.json";
import AutomotiveDiagram from "@/components/AutomotiveDiagram";

const solutions: Array<{
  to: string;
  title: string;
  desc: string;
  items: string[];
  img: string;
  diagram?: boolean;
  icon: LucideIcon;
  tag: string;
}> = [
  {
    to: "/technologies#interlayers",
    title: "Conductive Interlayers",
    desc: "Embedded wire, conductive mesh, ITO film, and bus bar integration engineered to survive lamination and perform in the field.",
    items: ["Embedded wire interlayers", "Conductive mesh & ITO film", "Bus bar integration", "Pre-lamination subassemblies"],
    img: interlayerImg,
    icon: Layers,
    tag: "01 / Interlayers",
  },
  {
    to: "/technologies#aircraft",
    title: "Aircraft Sensors & Heated Glass",
    desc: "Windshield heater mats, overheat protection sensor concepts, and sensor mat subassemblies for aerospace transparencies.",
    items: ["Windshield heater mats", "Sensor mat subassemblies", "Overheat protection concepts", "Lot-traceable builds"],
    img: aircraftImg,
    icon: Plane,
    tag: "02 / Aerospace",
  },
  {
    to: "/technologies#security-defense",
    title: "Security & Defense Systems",
    desc: "Heated mats, antenna systems, sensor mats, EMI / RFI / SCIF / TEMPEST shielding, PDLC, and pre-laminated assemblies for defense and secure facility glazing.",
    items: [
      "Heated mats",
      "Antenna systems",
      "Sensor mats",
      "EMI / RFI / SCIF / TEMPEST shielding",
      "PDLC",
      "Pre-laminated assemblies",
    ],
    img: emiImg,
    icon: ShieldCheck,
    tag: "03 / Security and Defense",
  },
  {
    to: "/technologies#automotive",
    title: "Automotive Glass Products",
    desc: "Heated mats, heated camera areas, heated wiper parks, embedded antenna, PDLC, and pre-laminated assemblies for automotive glazing programs.",
    items: ["Heated mats & camera areas", "Heated wiper parks", "Embedded antenna", "PDLC", "Pre-laminated assemblies"],
    img: automotiveImg,
    diagram: true,
    icon: Car,
    tag: "04 / Automotive",
  },
  {
    to: "/markets/off-road-commercial",
    title: "Off-Road & Commercial Equipment",
    desc: "Complete heated laminated glass — not just the interlayer — for airport tugs, snow removal equipment, commercial boats, and recreational vehicles.",
    items: [
      "Airport ground support & tugs",
      "Snow removal equipment",
      "Commercial boats & workboats",
      "Recreational vehicles",
      "Finished heated glass or interlayer",
    ],
    img: offroadImg,
    icon: Truck,
    tag: "05 / Off-Road & Commercial",
  },
];

const applications = [
  "Aerospace Transparencies",
  "Automotive Glass Products",
  "SCIF / Secure Facilities",
  "Transparent Armor",
  "Transportation Glass",
  "Medical Imaging Rooms",
  "Industrial Heated Glass",
  "ADAS & Sensor-Enabled Glazing",
  "Airport Ground Support Equipment",
  "Snow Removal Equipment",
  "Commercial Boats & Workboats",
  "Recreational Vehicles",
];

const why = [
  {
    n: "01",
    t: "Laminated Glass Process Knowledge",
    d: "Practical understanding of interlayer behavior, edge sealing, and pre-lamination preparation across production lines.",
  },
  {
    n: "02",
    t: "Conductive Integration Experience",
    d: "Embedded wire, mesh, ITO, and printed conductors integrated into repeatable, drop-in subassembly formats.",
  },
  {
    n: "03",
    t: "Prototype-to-Production Support",
    d: "Feasibility samples, iteration, and a development path toward repeatable, production-ready supply.",
  },
  {
    n: "04",
    t: "Practical Manufacturing Focus",
    d: "We work the way engineering and manufacturing teams actually work — technical, honest, and process-driven.",
  },
];

const capabilities = [
  { icon: CircuitBoard, label: "Embedded wire interlayers" },
  { icon: Antenna, label: "Antenna wire integration" },
  { icon: Thermometer, label: "Transparent heating" },
  { icon: Zap, label: "Sensor mats" },
  { icon: Cpu, label: "Bus bar integration" },
  { icon: Layers, label: "Conductive films" },
  { icon: Radio, label: "EMI shielding layers" },
  { icon: Wand2, label: "Laser deletion / patterned coatings" },
  { icon: Workflow, label: "Pre-lamination development" },
  { icon: FlaskConical, label: "Custom sample builds" },
  { icon: Rocket, label: "Production path planning" },
];

const process = [
  { n: "01", t: "Specification Review", icon: ClipboardCheck },
  { n: "02", t: "Material Selection", icon: Layers },
  { n: "03", t: "Prototype Build", icon: Wrench },
  { n: "04", t: "Electrical / Optical Testing", icon: FlaskConical },
  { n: "05", t: "Qualification Support", icon: ShieldCheck },
  { n: "06", t: "Production Launch", icon: Rocket },
];

const resources = [
  { t: "Heated Glass Design Guide", d: "Bus bar routing, power density, and lamination considerations for electrically heated laminated glass." },
  { t: "Conductive Interlayer Overview", d: "Embedded wire, mesh, ITO film, and printed conductor formats for advanced laminated glass." },
  { t: "EMI Shielding Glass Primer", d: "Mesh integration concepts and construction options for SCIF and secure facility glazing." },
  { t: "Aircraft Sensor Application Brief", d: "Heater mat and sensor mat subassembly development for aerospace transparencies." },
];

const specs = [
  { v: "±0.5", u: "mm", l: "Wire placement tolerance", d: "Typical embedded wire positional accuracy in interlayer format." },
  { v: "100", u: "openings/in", l: "Shielding mesh density", d: "Fine copper mesh construction for EMI / RFI / SCIF applications." },
  { v: "12–48", u: "V DC", l: "Heater operating range", d: "Common bus bar voltage range for transparent heating subassemblies." },
  { v: ">85", u: "% VLT", l: "Optical transmission target", d: "Development target for conductive interlayer visible light transmission." },
  { v: "6", u: "step process", l: "Prototype to production", d: "Structured path from specification review through repeatable supply." },
  { v: "5", u: "integration paths", l: "Interlayer · Aero · Defense · Auto · Off-Road", d: "Core solution families supported across advanced glazing programs." },
];

const Index = () => {
  return (
    <>
      <Seo
        title="Conductive Interlayers & Specialty Films for Laminated Glass | HLG"
        description="Hotlineglass USA develops embedded wire interlayers, heater and sensor mats, bus bar systems, conductive films, and EMI/RFI shielding subassemblies for advanced laminated glass."
        path="/"
        schema={orgSchema}
      />
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-navy-deep">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep to-[hsl(205_80%_14%/0.5)]" />

        <div className="container relative py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <Eyebrow>HLG · Specialty Glass Technology</Eyebrow>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Conductive Interlayers <span className="text-primary">&</span> Specialty Films
                <span className="block text-steel font-medium text-2xl md:text-3xl lg:text-4xl mt-4">
                  for Advanced Laminated Glass Systems
                </span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                HLG helps customers integrate electrical, thermal, sensing, and shielding capability
                into laminated glass through practical, repeatable, production-ready interlayer and
                specialty film solutions.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary-glow transition-colors shadow-glow"
                >
                  Discuss a Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/capabilities"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border bg-surface/50 text-foreground font-medium tracking-wide hover:border-primary hover:text-primary transition-colors"
                >
                  View Capabilities
                </Link>
              </div>
            </div>

            {/* Capability index panel */}
            <div className="lg:col-span-5">
              <div className="panel relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-fine opacity-20" />
                <div className="relative p-7 border-b border-border flex items-baseline justify-between">
                  <div className="mono text-primary text-[10px]">Capability Index</div>
                  <div className="mono text-muted-foreground text-[10px]">HLG / 2026</div>
                </div>
                <ul className="relative divide-y divide-border/70">
                  {capabilities.slice(0, 8).map((c, i) => (
                    <li key={c.label} className="flex items-center gap-4 px-7 py-3.5">
                      <span className="mono text-primary/60 text-[10px] w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <c.icon className="text-primary shrink-0" size={16} />
                      <span className="text-sm text-foreground/90 leading-snug">{c.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative p-7 border-t border-border bg-surface/40">
                  <Link
                    to="/technical-library"
                    className="mono text-primary inline-flex items-center gap-2 hover:gap-3 transition-all text-xs"
                  >
                    Engineering Standards &amp; Technical Library <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 edge-line" />
      </section>

      {/* SPEC STRIP */}
      <section className="border-b border-border bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-fine opacity-20" />
        <div className="container relative py-10 md:py-14">
          <div className="flex items-baseline justify-between mb-6">
            <Eyebrow>Engineering Signals</Eyebrow>
            <div className="mono text-muted-foreground text-[10px]">
              Typical target ranges · development / integration
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {specs.map((s, i) => (
              <div
                key={s.l}
                className="bg-navy-deep p-5 md:p-6 flex flex-col gap-2 hover:bg-surface/60 transition-colors group"
              >
                <div className="mono text-primary/70 text-[10px]">
                  S.{String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-2xl md:text-3xl font-bold tabular-nums text-foreground group-hover:text-primary transition-colors">
                    {s.v}
                  </span>
                  <span className="mono text-[10px] text-muted-foreground uppercase">{s.u}</span>
                </div>
                <div className="text-xs font-medium text-foreground/90 leading-snug">{s.l}</div>
                <div className="text-[11px] text-muted-foreground leading-snug">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WHAT HLG DOES */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>What HLG Does</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Specialty subassemblies for <span className="text-primary">advanced laminated glass</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 text-muted-foreground leading-relaxed text-lg">
            <p>
            Hotlineglass USA develops and supplies specialty interlayers, embedded wire products,
            antenna wire products, conductive films, sensor mats, heater mats, bus bar systems,
            PDLC, pre-laminated assemblies, and production-ready laminated glass subassemblies
            for advanced glazing applications.
            </p>
          </div>
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section className="bg-surface/50 border-y border-border">
        <SectionHeading
          eyebrow="Core Solutions"
          title="Five integration paths into advanced glass"
          subtitle="Specialty subassemblies, films, and finished heated laminates developed to drop into your glazing process — from interlayer format through complete glass parts."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group panel relative overflow-hidden hover:border-primary/60 transition-colors flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                {s.diagram ? (
                  <AutomotiveDiagram className="w-full h-full object-contain" />
                ) : (
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                )}
                {!s.diagram && (
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                )}
                <div className="absolute top-4 left-4 mono text-primary">{s.tag}</div>
                <s.icon className="absolute top-4 right-4 text-primary/80" size={22} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-border/70 pt-5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-[13px] text-foreground/85 leading-snug">
                      <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-2 text-primary mono">
                  Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* APPLICATIONS */}
      <Section>
        <SectionHeading
          eyebrow="Applications"
          title="Where HLG components are used"
          subtitle="Target applications across aerospace, defense, secure facilities, automotive, and off-road and commercial equipment glazing — interlayer subassemblies through complete heated glass."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {applications.map((a, i) => (
            <div key={a} className="bg-background p-6 hover:bg-surface transition-colors group">
              <div className="mono text-primary/70 text-[10px]">A.{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-3 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {a}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY HLG */}
      <Section className="bg-gradient-hero border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-fine opacity-20" />
        <div className="relative">
          <SectionHeading
            eyebrow="Why HLG"
            title="Operator-driven, integration-focused"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {why.map((w) => (
              <div key={w.n} className="bg-navy-deep p-7">
                <div className="mono text-primary">{w.n}</div>
                <div className="mt-4 font-display text-lg font-semibold">{w.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TECHNICAL CAPABILITIES */}
      <Section>
        <SectionHeading
          eyebrow="Technical Capabilities"
          title="Components, materials, and process knowledge"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
          {capabilities.map((c) => (
            <div
              key={c.label}
              className="bg-background p-6 flex flex-col gap-4 hover:bg-surface transition-colors"
            >
              <c.icon className="text-primary" size={24} />
              <div className="text-sm font-medium leading-snug">{c.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/capabilities"
            className="mono text-primary inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Full capability list <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* ENGINEERING PROCESS */}
      <Section className="bg-surface/50 border-y border-border">
        <SectionHeading
          eyebrow="Engineering Process"
          title="From specification to production"
          subtitle="A structured development path from concept feasibility through repeatable supply."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {process.map((p) => (
            <div key={p.n} className="bg-background p-6 relative">
              <div className="flex items-center justify-between">
                <span className="mono text-primary">{p.n}</span>
                <p.icon className="text-primary/70" size={18} />
              </div>
              <div className="mt-5 text-sm font-medium leading-snug">{p.t}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* RESOURCES PREVIEW */}
      <Section>
        <SectionHeading
          eyebrow="Resources"
          title="Technical briefs & design references"
          subtitle="Overviews of the constructions, materials, and integration paths HLG works with."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((r, i) => (
            <div
              key={r.t}
              className="panel p-6 group hover:border-primary/60 transition-colors flex gap-5"
            >
              <div className="shrink-0 h-12 w-12 grid place-items-center border border-border bg-surface group-hover:border-primary/60 group-hover:text-primary transition-colors">
                {i % 2 === 0 ? <FileText size={20} /> : <BookOpen size={20} />}
              </div>
              <div className="flex-1">
                <div className="mono text-primary/70 text-[10px]">R.{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-2 font-display text-lg font-semibold group-hover:text-primary transition-colors">
                  {r.t}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="border-t border-border bg-surface">
        <div className="panel p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg-fine opacity-30" />
          <div className="absolute -top-px left-0 right-0 edge-line" />
          <div className="relative grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <Eyebrow>Engineering & Project Inquiries</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                Have a conductive, heated, sensing, or shielding glass requirement?
              </h2>
              <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
                HLG can help evaluate materials, construction, sample builds, testing paths, and
                production feasibility.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-colors"
              >
                Discuss a Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact?type=review"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Request Technical Review
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};


export default Index;
