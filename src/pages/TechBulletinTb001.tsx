import { Link } from "react-router-dom";
import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Zap, Eye, Activity, ShieldCheck, FileText, Award } from "lucide-react";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Engineering Resources", path: "/engineering-resources" },
  { name: "Technical Bulletin", path: "/technical-bulletins/tb-001-optical-performance-under-electrical-load" },
];

const bulletins = [
  {
    title: "Engineering Principle",
    body: "If a transparency is intended to operate under electrical load, its optical performance should be qualified under electrical load. This principle is the foundation of Hotlineglass Qualification Standard HLG-QS-1724.",
  },
  {
    title: "Executive Summary",
    body: "Electrically heated transparent systems are standard across defense, aerospace, rail, marine, emergency response, heavy equipment, and specialty transportation. Yet most optical qualification is still performed with the system unpowered. Traditional standards evaluate glass quality, but they do not characterize how a transparency performs while carrying current and generating heat. As heating systems become more sophisticated, dynamic optical qualification should become part of the engineering approval process.",
  },
  {
    title: "The Industry Challenge",
    body: "An electrically heated transparency is an integrated electro-optical system: substrates, interlayers, embedded conductors, transparent coatings, busbars, connectors, power distribution, and thermal management. During operation, electrical current and heat can alter optical behavior in ways that are not visible during static inspection — and that behavior may vary during warm-up, steady-state, and cool-down.",
  },
  {
    title: "Static Optics vs. Optical Performance Under Electrical Load",
    body: "Static inspection asks whether the laminate is free of cosmetic defects, meets manufacturing requirements, and has acceptable image distortion before installation. Energized qualification asks different questions: Does image quality remain stable as the heater energizes? Do thermal gradients affect operator vision? Do conductor patterns influence critical viewing zones? Does performance change during warm-up, and is it repeatable across cycles? These cannot always be answered by static inspection alone.",
  },
  {
    title: "Why It Matters",
    body: "In mission-critical systems, operator vision is directly tied to operational effectiveness: military combat vehicles, transparent armor, aircraft and helicopter transparencies, naval bridge windows, high-speed rail, emergency response vehicles, mining and construction equipment, and autonomous systems. Qualification under representative operating conditions adds engineering confidence.",
  },
  {
    title: "A Shift in Qualification Philosophy",
    body: "Transparent systems have historically been qualified as passive materials. Modern heated transparencies should be treated as active electro-optical systems. Qualification must consider the interaction of optical, electrical, and thermal performance — not as independent characteristics, but as combined behavior during operation.",
  },
  {
    title: "Introducing HLG-QS-1724",
    body: "Hotlineglass Qualification Standard HLG-QS-1724 establishes a repeatable engineering methodology for evaluating electrically heated transparent systems before, during, and after energized operation. It supplements existing industry standards by addressing optical behavior that occurs while electrical power is applied. The methodology incorporates proprietary laboratory techniques, synchronized optical, thermal, and electrical measurements, advanced imaging methods, and engineering analytics developed by Hotlineglass USA.",
  },
  {
    title: "Recommended Engineering Practice",
    body: "For electrically heated transparent systems, Hotlineglass recommends that energized optical qualification be incorporated into the engineering approval process alongside applicable ASTM, SAE, ISO, MIL-STD, and customer-specific requirements. It should be considered during product development, design verification, first article inspection, supplier qualification, manufacturing validation, engineering change evaluation, failure investigation, and competitive benchmarking.",
  },
  {
    title: "Conclusion",
    body: "Static optical inspection remains essential. But for transparencies designed to operate under electrical load, evaluating optical performance during energized operation provides engineering insight that cannot be obtained through conventional inspection alone. If a transparency is intended to operate under electrical load, its optical performance should be qualified under electrical load.",
  },
];

const highlights = [
  { icon: Eye, label: "Optical", desc: "Evaluate transmission, haze, and distortion while energized." },
  { icon: Zap, label: "Electrical", desc: "Correlate heater current with observed optical behavior." },
  { icon: Activity, label: "Thermal", desc: "Capture thermal gradients during warm-up and steady-state." },
  { icon: ShieldCheck, label: "Qualification", desc: "Supplement ASTM, SAE, ISO, MIL-STD, and customer tests." },
];

const TechBulletinTb001 = () => (
  <>
    <Seo
      title="TB-001 Optical Performance Under Electrical Load | HLG"
      description="Technical bulletin TB-001: why dynamic optical qualification under electrical load should be part of every heated transparency approval process, including HLG-QS-1724."
      path="/technical-bulletins/tb-001-optical-performance-under-electrical-load"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="HLG Technical Bulletin TB-001 · Revision A"
      title="Optical Performance Under Electrical Load"
      subtitle="Why dynamic optical qualification should be part of every heated transparency approval process."
    />

    <Section>
      <div className="max-w-3xl mx-auto">
        <div className="panel p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-6">
            <div>
              <div className="mono text-[10px] text-primary">Document</div>
              <div className="font-medium mt-1">HLG Technical Bulletin TB-001</div>
              <div className="text-sm text-muted-foreground">Revision A</div>
            </div>
            <div className="text-left sm:text-right">
              <div className="mono text-[10px] text-primary">Basis</div>
              <div className="font-medium mt-1">HLG-QS-1724</div>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="border border-border p-4">
                <h.icon className="text-primary" size={20} />
                <div className="font-display font-semibold mt-3 text-sm">{h.label}</div>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {bulletins.map((b, i) => (
              <div key={b.title}>
                <div className="flex items-center gap-3">
                  <span className="mono text-[10px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-display text-xl font-semibold">{b.title}</h2>
                </div>
                <p className="text-muted-foreground mt-3 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-display text-lg font-semibold">HLG-QS-1724 qualification standard</div>
                <p className="text-sm text-muted-foreground mt-1">
                  TB-001 is based on the HLG-QS-1724 engineering framework. Read the public overview for the full qualification philosophy.
                </p>
              </div>
              <Link
                to="/qualification-standards/hlg-qs-1724"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                <Award size={16} /> Read HLG-QS-1724
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
);

export default TechBulletinTb001;
