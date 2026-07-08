import { PageHero, Section, Eyebrow } from "@/components/Section";
import { Plane, Shield, Lock, Building2, Truck, Factory, Eye, Layers, Car } from "lucide-react";

const groups = [
  {
    icon: Plane,
    title: "Aerospace",
    items: ["Aerospace transparencies", "Aircraft windshields", "Aircraft windows", "Heated windshield programs", "Sensor-instrumented transparencies"],
  },
  {
    icon: Car,
    title: "Automotive",
    items: ["Heated mats", "Heated camera areas", "Heated wiper parks", "Embedded automotive antenna", "PDLC and pre-laminated assemblies"],
  },
  {
    icon: Shield,
    title: "Defense",
    items: ["Defense glazing", "Transparent armor support", "Vehicle glazing programs", "Specialty laminated assemblies"],
  },
  {
    icon: Lock,
    title: "Secure Facilities",
    items: ["SCIF rooms", "TEMPEST environments", "Shielded window inserts", "Government and contractor facilities"],
  },
  {
    icon: Building2,
    title: "Command & Control",
    items: ["Command centers", "Operations spaces", "Sensitive briefing rooms"],
  },
  {
    icon: Truck,
    title: "Transportation",
    items: ["Specialty transportation glazing", "Rail and marine specialty glass", "Heated transportation transparencies"],
  },
  {
    icon: Factory,
    title: "Industrial",
    items: ["Industrial heated glass", "Process viewports and observation glazing", "Cold-environment glass systems"],
  },
  {
    icon: Eye,
    title: "ADAS & Sensing",
    items: ["ADAS-compatible glazing support", "Sensor-aware lamination", "Optical clearance for camera and emitter integration"],
  },
  {
    icon: Layers,
    title: "Switchable / Variable Tint",
    items: ["Variable-tint glass integration support", "Bus bar and edge termination", "Lamination support for switchable partners"],
  },
];

const Applications = () => (
  <>
    <PageHero
      eyebrow="Applications"
      title="Where HLG components are deployed"
      subtitle="Target applications across aerospace, defense, secure facilities, transportation, and industrial environments. HLG provides the conductive layer; customers build the finished glazing."
    />
    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {groups.map((g) => (
          <div key={g.title} className="bg-background p-7">
            <g.icon className="text-primary" size={26} />
            <div className="font-display text-lg font-semibold mt-4">{g.title}</div>
            <ul className="mt-4 space-y-2">
              {g.items.map((it) => (
                <li key={it} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                  <span className="text-primary/70">·</span>{it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Section className="bg-surface/50 border-y border-border">
      <Eyebrow>Customer Profiles</Eyebrow>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {[
          ["Advanced Glazing Manufacturers", "Integrating HLG interlayers and films into laminated glass production."],
          ["Aerospace Suppliers", "Building heated windshields, instrumented windows, and sensor-enabled transparencies."],
          ["Defense Programs", "Specifying conductive glass elements for vehicle, shelter, and facility glazing."],
          ["SCIF & Security Contractors", "Sourcing shielded window inserts for secure facility builds."],
          ["Transportation Glazing Companies", "Adding heated and sensor-enabled functions to specialty transportation glass."],
          ["Industrial OEMs", "Integrating heated and electrically active glass into industrial systems."],
        ].map(([t, d]) => (
          <div key={t} className="panel p-6">
            <div className="font-display font-semibold text-lg">{t}</div>
            <p className="text-muted-foreground mt-2 text-sm">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  </>
);

export default Applications;
