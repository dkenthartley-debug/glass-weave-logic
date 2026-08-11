import { useParams, Navigate } from "react-router-dom";
import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";

type SpecContent = {
  title: string;
  subtitle: string;
  eyebrow: string;
  sections: { t: string; d: string }[];
};

const specContent: Record<string, SpecContent> = {
  "s-02-emi-rfi-scif-shielding": {
    title: "EMI/RFI SCIF Shielding",
    subtitle: "Fine copper mesh to printed copper interlayers ready to laminate.",
    eyebrow: "S.02 / Product Specification",
    sections: [
      {
        t: "Conductor formats",
        d: "HLG supplies shielding interlayers using fine copper mesh, printed copper conductors, and specialty conductive films. The format is selected against the target frequency range, attenuation requirement, and optical budget.",
      },
      {
        t: "Ready-to-laminate subassemblies",
        d: "Shielding layers are integrated into the interlayer so the finished laminate can be built on the customer's qualified lamination cycle. Bus bar, grounding tab, and lead exit locations are defined per part.",
      },
      {
        t: "Applications",
        d: "SCIF, TEMPEST, command center, and secure facility glazing where controlled electromagnetic attenuation is required. Program-specific attenuation targets are validated against the built article.",
      },
    ],
  },
  "s-03-heated-interlayer-voltage-range": {
    title: "Current Heated Interlayer Voltage Range",
    subtitle: "Voltage span supported by HLG embedded-conductor heating subassemblies.",
    eyebrow: "S.03 / Product Specification",
    sections: [
      {
        t: "Electrical range",
        d: "Current heated interlayer voltage range: 12 V to 440 V DC. The operating voltage is selected to match the customer's available supply, harness current capacity, and clearing requirement.",
      },
      {
        t: "Design basis",
        d: "Circuit resistance, conductor geometry, and bus bar configuration are engineered against the target voltage and power density. 12 V designs are common for mobile and automotive systems; higher voltages are used for large apertures and faster clearing.",
      },
      {
        t: "Validation",
        d: "Each design is verified for resistance, current draw, and thermal behavior under representative operating conditions. Validation is performed on samples built to the production geometry.",
      },
    ],
  },
  "s-04-sensor-mat-custom-layouts": {
    title: "Sensor Mats — Custom Layouts for Accurate Placement and Lower-Stress Laminates",
    subtitle: "Sensor mats engineered for accurate placement and reduced laminate stress.",
    eyebrow: "S.04 / Product Specification",
    sections: [
      {
        t: "Custom layout",
        d: "Sensor conductor patterns are defined per part geometry for accurate placement of the sensing element within the transparency. Layout is coordinated with the glass fabricator's bending and edge details.",
      },
      {
        t: "Lower-stress design",
        d: "Conductor geometry, termination, and interlayer preparation are tuned to reduce residual stress in the finished laminate. This supports long-term reliability in heated aircraft and armor transparencies.",
      },
      {
        t: "Applications",
        d: "Overheat protection sensors, temperature feedback elements, and heater-control mats for aerospace, defense, and industrial laminated glass.",
      },
    ],
  },
  "s-05-thermal-validation": {
    title: "Thermal Validation",
    subtitle: "Each design is thermally tested in-house for thermal uniformity.",
    eyebrow: "S.05 / Product Specification",
    sections: [
      {
        t: "In-house testing",
        d: "Every engineered design is thermally tested in-house using multi-channel data logging and calibrated thermocouples. Testing covers warm-up, steady-state, and cool-down behavior.",
      },
      {
        t: "Thermal uniformity",
        d: "Temperature maps are recorded across the active area to verify uniformity against the design target. Hot spots, cold bands, and edge effects are identified and addressed before production release.",
      },
      {
        t: "Deliverables",
        d: "Test output includes logged temperature data, uniformity metrics, and documented design iteration feedback. Program-specific reports are issued confidentially to the requesting organization.",
      },
    ],
  },
};

const SpecificationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const spec = slug ? specContent[slug] : undefined;

  if (!spec) {
    return <Navigate to="/technical-library" replace />;
  }

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Engineering Standards & Technical Library", path: "/technical-library" },
    { name: spec.title, path: `/specifications/${slug}` },
  ];

  return (
    <>
      <Seo
        title={`${spec.title} | Hotlineglass USA`}
        description={spec.subtitle}
        path={`/specifications/${slug}`}
        schema={[orgSchema, breadcrumbSchema(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero eyebrow={spec.eyebrow} title={spec.title} subtitle={spec.subtitle} />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {spec.sections.map((section) => (
            <div key={section.t} className="panel p-6">
              <h2 className="font-display text-lg font-semibold">{section.t}</h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{section.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default SpecificationDetail;
