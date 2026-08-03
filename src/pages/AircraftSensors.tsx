import { PageHero, Section, Eyebrow } from "@/components/Section";
import img from "@/assets/aircraft-sensor.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Thermometer, AlertTriangle, Activity, Layers } from "lucide-react";

const AircraftSensors = () => (
  <>
    <PageHero
      eyebrow="02 / Solutions"
      title="Aircraft Sensors & Heated Glass"
      subtitle="Heater mats, sensor mats, and overheat protection components for laminated aircraft transparencies — built around the realities of windshield fabrication."
    />

    <Section>
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 order-2 lg:order-1 space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p className="text-foreground text-xl">
            Aircraft transparencies depend on electrically active layers performing inside a demanding lamination.
          </p>
          <p>
            HLG develops heater mat and sensor mat subassemblies intended for integration into laminated aircraft
            windshields and cabin windows. We work with the customer's stack-up, bus bar location, and termination
            strategy to deliver a pre-lamination layer that lands cleanly in the build.
          </p>
          <p>
            Overheat protection sensor concepts can be included as part of the same subassembly, sharing
            termination geometry and supporting the customer's controller approach.
          </p>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
          <img src={img} alt="Aircraft windshield cross-section" loading="lazy" width={1200} height={800} className="w-full panel" />
        </div>
      </div>
    </Section>

    <Section className="bg-surface/50 border-y border-border">
      <Eyebrow>Component Set</Eyebrow>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-4">
        {[
          { i: Thermometer, t: "Heater Mats", d: "Embedded conductor heater layers sized to the transparency aperture and power budget." },
          { i: Activity, t: "Sensor Mats", d: "Distributed sensing layers for temperature monitoring across the transparency." },
          { i: AlertTriangle, t: "Overheat Protection", d: "Sensor concepts supporting overheat detection within the laminated stack." },
          { i: Layers, t: "Pre-Lamination Subassemblies", d: "Combined heater, sensor, and bus bar layers prepared for the customer's lamination process." },
        ].map((x) => (
          <div key={x.t} className="bg-background p-7">
            <x.i className="text-primary" size={24} />
            <div className="font-display font-semibold text-lg mt-4">{x.t}</div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{x.d}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
        HLG describes target applications and development capabilities. Final airworthiness, qualification, and
        approvals remain with the program and its certified supply chain.
      </p>
    </Section>

    <Section>
      <div className="panel p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-2xl md:text-3xl font-bold">Optical performance under electrical load?</div>
          <p className="text-muted-foreground mt-2">
            Read HLG Technical Bulletin TB-001 on why energized optical qualification should be part of every heated transparency approval process.
          </p>
        </div>
        <Link to="/technical-bulletins/tb-001-optical-performance-under-electrical-load" className="inline-flex items-center gap-2 px-6 py-4 bg-surface border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">Read TB-001 <ArrowRight size={18} /></Link>
      </div>
    </Section>

    <Section className="bg-surface/50 border-y border-border">
      <div className="panel p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-2xl md:text-3xl font-bold">Aerospace transparency program?</div>
          <p className="text-muted-foreground mt-2">Talk to HLG about heater, sensor, and bus bar integration paths.</p>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground hover:bg-primary-glow transition-colors">Contact Engineering <ArrowRight size={18} /></Link>
      </div>
    </Section>
  </>
);

export default AircraftSensors;
