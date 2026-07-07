import { PageHero, Section } from "@/components/Section";
import { CircuitBoard, Thermometer, Plane, Shield, Cpu, Radio, Layers, Workflow, FlaskConical, Wrench } from "lucide-react";

const groups = [
  {
    title: "Conductive Integration",
    icon: CircuitBoard,
    items: [
      "Embedded wire interlayers",
      "Antenna wire integration",
      "Conductive mesh integration",
      "ITO film and ITO glass handling",
      "Conductive bus bar integration",
      "Printed and patterned conductor support",
    ],
  },
  {
    title: "Transparent Heating",
    icon: Thermometer,
    items: [
      "Transparent heating systems",
      "Defrost and de-ice mat development",
      "Heater mats for laminated transparencies",
      "Power and bus bar routing concepts",
      "Heated glass for industrial environments",
    ],
  },
  {
    title: "Aerospace Sensors",
    icon: Plane,
    items: [
      "Aircraft windshield heater mats",
      "Sensor mats for transparencies",
      "Overheat protection sensor concepts",
      "Pre-lamination subassembly preparation",
      "Custom sensor mat development",
    ],
  },
  {
    title: "Shielding",
    icon: Shield,
    items: [
      "EMI / RFI shielding glass inserts",
      "SCIF and TEMPEST glazing support",
      "Conductive mesh encapsulation",
      "Bonded shielding subassemblies",
      "Window inserts for secure facilities",
    ],
  },
  {
    title: "Specialty Films",
    icon: Layers,
    items: [
      "Conductive film evaluation",
      "ITO film selection and handling",
      "Specialty film encapsulation",
      "Laser deletion / patterned conductive coatings",
      "Multi-layer film assemblies",
    ],
  },
  {
    title: "Process Development",
    icon: Workflow,
    items: [
      "Pre-lamination process development",
      "Material selection and feasibility",
      "Edge sealing and termination",
      "Iteration support with customer fabrication",
      "Prototype-to-production transition",
    ],
  },
];

const Capabilities = () => (
  <>
    <PageHero
      eyebrow="Capabilities"
      title="What HLG develops, integrates, and supplies"
      subtitle="A practical capability set focused on conductive interlayers, embedded wire, sensor and heater mats, shielding inserts, specialty films, and the pre-lamination process knowledge required to make them production-ready."
    />
    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="panel p-7 hover:border-primary/60 transition-colors">
            <g.icon className="text-primary" size={28} />
            <h3 className="font-display text-xl font-semibold mt-5">{g.title}</h3>
            <ul className="mt-5 space-y-3">
              {g.items.map((it) => (
                <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-px w-3 bg-primary/60 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Section className="bg-surface/50 border-y border-border">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <div className="mono text-primary mb-4"><span className="accent-bar" />Engagement Model</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">From feasibility conversation to repeatable supply</h2>
        </div>
        <div className="space-y-6">
          {[
            { i: FlaskConical, t: "Feasibility & Materials Review", d: "Discuss the target glazing, electrical function, environment, and process. Identify candidate materials and integration paths." },
            { i: Cpu, t: "Sample & Prototype Development", d: "Build representative interlayer or subassembly samples for evaluation in your lamination process." },
            { i: Wrench, t: "Iteration with Your Fabrication", d: "Refine geometry, bus bar termination, and pre-lamination preparation against your production line." },
            { i: Radio, t: "Production-Ready Supply", d: "Transition to repeatable supply of interlayers, films, mats, and subassemblies in a defined format." },
          ].map((s, idx) => (
            <div key={s.t} className="flex gap-5 border-l-2 border-primary/30 pl-5 hover:border-primary transition-colors">
              <div className="shrink-0">
                <div className="mono text-primary">{String(idx + 1).padStart(2, "0")}</div>
                <s.i className="text-foreground mt-2" size={22} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">{s.t}</h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </>
);

export default Capabilities;
