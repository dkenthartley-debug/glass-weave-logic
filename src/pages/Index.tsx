import { Link } from "react-router-dom";
import { ArrowRight, Zap, Plane, ShieldCheck, Layers, Radio, Thermometer, Cpu, Workflow, CircuitBoard, Wrench } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import heroImg from "@/assets/hero-glass.jpg";
import interlayerImg from "@/assets/conductive-interlayer.jpg";
import aircraftImg from "@/assets/aircraft-sensor.jpg";
import emiImg from "@/assets/emi-shielding.jpg";

const solutions = [
  {
    to: "/conductive-interlayers",
    title: "Conductive Interlayers",
    desc: "Embedded wire, conductive mesh, ITO film and bus bar integration engineered for laminated glass.",
    img: interlayerImg,
    icon: Layers,
    tag: "01 / Interlayers",
  },
  {
    to: "/aircraft-sensors",
    title: "Aircraft Sensors & Heated Glass",
    desc: "Windshield heater mats, overheat protection sensors, and sensor mat subassemblies for transparencies.",
    img: aircraftImg,
    icon: Plane,
    tag: "02 / Aerospace",
  },
  {
    to: "/emi-shielding",
    title: "EMI / RFI / SCIF Shielding",
    desc: "Shielded glass insert concepts and conductive mesh integration for SCIF and TEMPEST glazing.",
    img: emiImg,
    icon: ShieldCheck,
    tag: "03 / Defense",
  },
];

const applications = [
  "Aerospace transparencies",
  "Aircraft windshields & windows",
  "Defense glazing",
  "Transparent armor",
  "SCIF rooms & secure facilities",
  "Command centers",
  "Naval & military shelters",
  "Specialty transportation glazing",
  "Industrial heated glass",
  "ADAS & sensor-enabled glazing",
  "Switchable & variable-tint glass",
  "Specialty laminated assemblies",
];

const capabilities = [
  { icon: CircuitBoard, label: "Embedded wire interlayers" },
  { icon: Thermometer, label: "Transparent heating & defrost" },
  { icon: Radio, label: "EMI / RFI shielding inserts" },
  { icon: Cpu, label: "Conductive bus bar integration" },
  { icon: Zap, label: "Heater & sensor mats" },
  { icon: Layers, label: "ITO film & ITO glass" },
  { icon: Workflow, label: "Laser deletion / patterning" },
  { icon: Wrench, label: "Prototype to production" },
];

const why = [
  { n: "01", t: "Practical Process Knowledge", d: "Real-world experience with the steps that determine whether an electrically active interlayer survives lamination and performs in the field." },
  { n: "02", t: "Laminated Glass Experience", d: "Material selection, edge sealing, bus bar routing, and pre-lamination preparation that matches your fabrication line." },
  { n: "03", t: "Conductive Integration", d: "Embedded wire, mesh, ITO and printed conductors integrated into a repeatable subassembly format." },
  { n: "04", t: "Prototype to Production", d: "Feasibility samples, iteration, and a development path toward repeatable, production-ready supply." },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-navy-deep">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>

        <div className="container relative py-24 md:py-36 lg:py-44">
          <div className="max-w-4xl animate-fade-up">
            <Eyebrow>HLG · Specialty Glass Technology</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              Conductive Interlayers <span className="text-primary">&</span> Specialty Films
              <span className="block text-steel font-medium text-3xl md:text-4xl lg:text-5xl mt-4">for Advanced Laminated Glass Systems</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              HLG develops and supplies specialty interlayers, embedded wire products, conductive films,
              sensor mats, and electrically active glass components that help customers build heated,
              shielded, sensing, and specialty laminated glass systems in a practical, repeatable,
              production-ready format.
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

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-3xl">
              {[
                ["Aerospace", "Transparencies"],
                ["Defense", "Shielding"],
                ["SCIF", "TEMPEST"],
                ["Industrial", "Heated Glass"],
              ].map(([a, b]) => (
                <div key={a} className="bg-navy-deep p-4">
                  <div className="mono text-primary">{a}</div>
                  <div className="text-sm text-muted-foreground mt-1">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 edge-line" />
      </section>

      {/* WHAT WE DO */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>What HLG Does</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              We help customers integrate <span className="text-primary">electrical capability</span> into laminated glass systems.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              HLG is not a commodity glass fabricator. We develop and supply specialty interlayers,
              conductive films, embedded wire products, sensor mats, heater mats, bus bar systems,
              and production-ready laminated glass subassemblies.
            </p>
            <p>
              Our customers include advanced glazing manufacturers, aerospace suppliers, defense programs,
              SCIF and security contractors, transportation glazing companies, and industrial OEMs that
              need conductive, embedded, engineered solutions that survive lamination and perform in the field.
            </p>
          </div>
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section className="bg-surface/50 border-y border-border">
        <SectionHeading
          eyebrow="Core Solutions"
          title="Three integration paths into advanced glass"
          subtitle="Specialty subassemblies and films engineered to drop into your laminated glass process."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group panel relative overflow-hidden hover:border-primary/60 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-4 left-4 mono text-primary">{s.tag}</div>
                <s.icon className="absolute top-4 right-4 text-primary/80" size={22} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-primary mono">
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
          eyebrow="Markets & Applications"
          title="Where HLG components are used"
          subtitle="Target applications across aerospace, defense, secure facilities, and specialty transportation glazing."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
          {applications.map((a, i) => (
            <div key={a} className="bg-background p-5 hover:bg-surface transition-colors group">
              <div className="mono text-primary/70 text-[10px]">A.{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">{a}</div>
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
            subtitle="We work the way engineering teams actually work — practical, technical, repeatable."
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {capabilities.map((c) => (
            <div key={c.label} className="bg-background p-6 flex flex-col gap-4 hover:bg-surface transition-colors">
              <c.icon className="text-primary" size={26} />
              <div className="text-sm font-medium">{c.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/capabilities" className="mono text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
            Full capability list <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border bg-surface">
        <div className="panel p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg-fine opacity-30" />
          <div className="absolute -top-px left-0 right-0 edge-line" />
          <div className="relative grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <Eyebrow>Engineering & Project Inquiries</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                Have a conductive glass, heated glass, sensor, or shielding requirement?
              </h2>
              <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
                Contact HLG to discuss feasibility, materials, samples, and production path.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-colors">
                Contact HLG <ArrowRight size={18} />
              </Link>
              <Link to="/capabilities" className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                Review Capabilities
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Index;
