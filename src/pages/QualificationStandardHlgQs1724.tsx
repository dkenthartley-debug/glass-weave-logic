import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Zap, Eye, Activity, ShieldCheck, FileText, Award, Microscope, ClipboardCheck } from "lucide-react";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Engineering Resources", path: "/engineering-resources" },
  { name: "Qualification Standard", path: "/qualification-standards/hlg-qs-1724" },
];

const scopeItems = [
  "Laminated safety glass",
  "Heated windshields",
  "Transparent armor",
  "Aerospace transparencies",
  "Rail glazing",
  "Marine glazing",
  "Heavy equipment glazing",
  "Hybrid glass/polymer systems",
  "Other electrically functional transparent assemblies",
];

const evaluationAreas = [
  "Dynamic optical stability",
  "Optical performance during heater operation",
  "Thermal uniformity",
  "Optical repeatability",
  "Critical viewing zones",
  "Recovery following power removal",
  "Comparative product performance",
  "Manufacturing consistency",
];

const applications = [
  "Defense",
  "Aerospace",
  "Rail",
  "Marine",
  "Heavy equipment",
  "Commercial transportation",
  "Transparent armor",
  "Autonomous vehicle technologies",
  "Advanced transparent electronic systems",
];

const methodology = [
  "Controlled laboratory procedures",
  "Calibrated imaging systems",
  "Optical Measurement Integrity (OMI™)",
  "Automated optical analysis",
  "Synchronized thermal and electrical measurements",
  "Proprietary engineering analytics",
  "Controlled reporting methods",
];

const highlights = [
  { icon: Eye, label: "Optical", desc: "Qualify performance under energized conditions, not just static inspection." },
  { icon: Zap, label: "Electrical", desc: "Evaluate behavior while current is applied across the operating cycle." },
  { icon: Activity, label: "Thermal", desc: "Correlate thermal performance with optical stability." },
  { icon: ShieldCheck, label: "Complementary", desc: "Adds to existing industry and customer qualification standards." },
];

const QualificationStandardHlgQs1724 = () => (
  <>
    <Seo
      title="HLG-QS-1724 Qualification Standard | Optical Performance Under Electrical Load | HLG"
      description="Public overview of HLG-QS-1724, Hotlineglass proprietary qualification standard for evaluating optical performance of electrically heated transparent systems under electrical load."
      path="/qualification-standards/hlg-qs-1724"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="HLG-QS-1724 · Public Overview · Revision A"
      title="Optical Performance Under Electrical Load"
      subtitle="Hotlineglass Qualification Standard for evaluating the optical performance of electrically heated transparent systems during energized operation."
    />

    <Section>
      <div className="max-w-3xl mx-auto">
        <div className="panel p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-6">
            <div>
              <div className="mono text-[10px] text-primary">Document</div>
              <div className="font-medium mt-1">HLG-QS-1724</div>
              <div className="text-sm text-muted-foreground">Hotlineglass Qualification Standard</div>
            </div>
            <div className="text-left sm:text-right">
              <div className="mono text-[10px] text-primary">Status</div>
              <div className="font-medium mt-1">Public Overview</div>
              <div className="text-sm text-muted-foreground">Revision A</div>
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

          <div className="mt-10 space-y-10">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-primary" size={20} />
                <h2 className="font-display text-xl font-semibold">Purpose</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                HLG-QS-1724 establishes a proprietary engineering framework for qualifying the optical performance of electrically heated transparent systems during energized operation. The standard recognizes that conventional optical inspection methods evaluate transparent materials under static conditions and may not fully characterize performance while electrical power is applied.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="text-primary" size={20} />
                <h2 className="font-display text-xl font-semibold">Scope</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HLG-QS-1724 applies to electrically heated transparent systems including:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {scopeItems.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-l-2 border-primary pl-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-primary" size={20} />
                <h2 className="font-display text-xl font-semibold">Engineering Principle</h2>
              </div>
              <p className="text-foreground font-medium leading-relaxed">
                If a transparency is intended to operate under electrical load, its optical performance should be qualified under electrical load.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="text-primary" size={20} />
                <h2 className="font-display text-xl font-semibold">Qualification Philosophy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  HLG-QS-1724 considers a heated transparency to be an integrated electro-optical system. Qualification extends beyond traditional inspection by evaluating optical behavior throughout the energized operating cycle.
                </p>
                <p>
                  The methodology complements existing qualification standards by considering the interaction between optical performance, thermal performance, and electrical performance under representative operating conditions.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-primary" size={20} />
                <h2 className="font-display text-xl font-semibold">Typical Evaluation Areas</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HLG-QS-1724 may include engineering evaluation of:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {evaluationAreas.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-primary" size={20} />
                <h2 className="font-display text-xl font-semibold">Typical Applications</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The qualification methodology is intended to support:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {applications.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-primary" size={20} />
                <h2 className="font-display text-xl font-semibold">Relationship to Existing Standards</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HLG-QS-1724 is intended to complement—not replace—existing industry standards governing:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                {[
                  "Glass quality",
                  "Lamination",
                  "Optical inspection",
                  "Environmental durability",
                  "Defrost and de-icing performance",
                  "Customer qualification requirements",
                ].map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The standard addresses an additional engineering consideration: optical performance while the transparency is operating under electrical load.
              </p>
            </section>

            <section className="bg-muted/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="text-primary" size={20} />
                <h2 className="font-display text-xl font-semibold">Proprietary Methodology</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HLG-QS-1724 incorporates proprietary engineering methods developed by Hotlineglass USA. The complete qualification system includes:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                {methodology.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Detailed procedures, software, algorithms, calibration methods, scoring methodologies, and qualification criteria are confidential and are not publicly distributed.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="text-primary" size={20} />
                <h2 className="font-display text-xl font-semibold">Engineering Services</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hotlineglass USA provides confidential engineering support for:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Product qualification",
                  "Supplier qualification",
                  "Comparative benchmarking",
                  "Prototype evaluation",
                  "Failure investigations",
                  "Design verification",
                  "Product development",
                ].map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-primary" size={20} />
                <h2 className="font-display text-xl font-semibold">Engineering Statement</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                HLG-QS-1724 provides an engineering framework for evaluating optical performance under electrical load, enabling manufacturers and system integrators to better understand the operational behavior of electrically heated transparent systems.
              </p>
            </section>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-display text-lg font-semibold">Related technical bulletin</div>
                <p className="text-sm text-muted-foreground mt-1">
                  TB-001 explains why dynamic optical qualification under electrical load should be part of every heated transparency approval process.
                </p>
              </div>
              <Link
                to="/technical-bulletins/tb-001-optical-performance-under-electrical-load"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                <FileText size={16} /> Read TB-001
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
);

export default QualificationStandardHlgQs1724;
