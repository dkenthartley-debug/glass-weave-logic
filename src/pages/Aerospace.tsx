import { Link } from "react-router-dom";
import { PageHero, Section, SectionHeading, CtaLink, Eyebrow } from "@/components/Section";
import { ConductorField, HeatSenseChain, LaminateStack, ThermalBand } from "@/components/Graphics";
import Seo, { breadcrumbSchema, orgSchema, techArticleSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Markets", path: "/markets" },
  { name: "Aerospace", path: "/markets/aerospace" },
];

const blocks = [
  {
    title: "Heated interlayers",
    body: "Fine-wire heater architectures engineered around aircraft electrical and thermal requirements — voltage, power density, geometry, electrical interface and optical performance under electrical load.",
  },
  {
    title: "Matched heater + sensor systems",
    body: "HLG can produce the heater mat and a dedicated RTD sensor mat as a matched electrical and thermal system. HLG has production aerospace heater and matching sensor-mat experience.",
  },
  {
    title: "Electrical interfaces",
    body: "Busbars, lead routing, edge transitions and exits are engineered around the final laminate architecture rather than adapted to it afterwards.",
  },
  {
    title: "Validation",
    body: "Electrical resistance, continuity and thermal behavior are verified through the development process, including thermal imaging and temperature uniformity evaluation.",
  },
];

const Aerospace = () => (
  <>
    <Seo
      title="Aerospace Functional Interlayers — Heated & RTD Sensing | HLG"
      description="HLG engineers aerospace functional interlayers for transparency manufacturers: electrically heated interlayers, embedded RTD sensor mats, matched heater + sensor systems, electrical exits and validation."
      path="/markets/aerospace"
      type="article"
      schema={[
        orgSchema,
        breadcrumbSchema(crumbs),
        techArticleSchema({
          name: "Aerospace functional interlayers",
          description:
            "Electrically heated interlayers and integrated RTD temperature-sensing systems engineered for aerospace transparencies.",
          path: "/markets/aerospace",
        }),
      ]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="Aerospace functional interlayers"
      title="Electrical function engineered into the transparency."
      subtitle="HLG engineers functional interlayers for aerospace transparency manufacturers, including electrically heated interlayers and integrated temperature-sensing systems."
    >
      <CtaLink to="/engineering-review">Start an Aerospace Engineering Review</CtaLink>
    </PageHero>

    {/* Embedded RTD sensors — headline treatment */}
    <section className="relative bg-navy-deep text-silver overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark" aria-hidden />
      <div className="container relative py-24 md:py-32 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-6">
          <Eyebrow invert>Embedded RTD sensors</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase leading-[1.05] text-background">
            The sensor is required. How it is integrated matters.
          </h2>
          <p className="mt-7 text-lg text-silver/80 leading-relaxed">
            Sensor location, lead routing, electrical exits and heater interaction can be engineered as part of the
            laminate architecture rather than treated as unrelated components.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink to="/technologies/embedded-temperature-sensing">Explore SENSE</CtaLink>
            <CtaLink to="/technologies/electrically-heated-interlayers" variant="outline-invert">Explore HEAT</CtaLink>
          </div>
        </div>
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="mono text-primary-glow mb-4">Matched system architecture</div>
            <HeatSenseChain />
          </div>
          <div className="border border-silver/15 p-6">
            <ConductorField invert />
          </div>
        </div>
      </div>
    </section>

    <Section>
      <SectionHeading eyebrow="Capabilities" title="What HLG engineers for aerospace transparencies" />
      <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
        {blocks.map((b) => (
          <div key={b.title} className="bg-background p-8">
            <h3 className="font-display text-lg font-semibold uppercase">{b.title}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{b.body}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section tone="gray">
      <div className="grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Heater capability"
            title="Validated capability ranges"
            subtitle="Aerospace programs are defined by their own requirements. These are HLG's demonstrated capability ranges for heated interlayer engineering."
          />
          <dl className="divide-y divide-border border-y border-border">
            {[
              ["Voltage capability", "12–480 V"],
              ["Power density", "approx. 0.05–5.0 W/in²"],
              ["Tungsten capability", "14–61 µm"],
              ["Demonstrated production spacing", "0.5 mm"],
              ["Inspection", "100% of HLG-fabricated interlayers"],
              ["Quality system", "ISO 9001:2015"],
            ].map(([k, v]) => (
              <div key={k} className="py-4 flex justify-between gap-6">
                <dt className="text-sm text-muted-foreground">{k}</dt>
                <dd className="font-display text-sm font-semibold text-right">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
            Program approvals, qualification statements and performance values are program-specific and addressed
            within a defined program scope.
          </p>
        </div>
        <div className="lg:col-span-6 space-y-8">
          <div className="panel p-7">
            <div className="mono text-primary mb-5">Laminate stack</div>
            <LaminateStack />
          </div>
          <div className="panel p-7">
            <div className="mono text-primary mb-5">Thermal evaluation</div>
            <ThermalBand />
          </div>
        </div>
      </div>
    </Section>

    <Section tone="navy">
      <SectionHeading
        invert
        eyebrow="Next step"
        title="Start an aerospace engineering review."
        subtitle="Bring the electrical and thermal requirement. HLG can determine how the heater and sensing functions should be engineered into the transparency."
      />
      <div className="flex flex-wrap gap-3">
        <CtaLink to="/engineering-review">Start an Aerospace Engineering Review</CtaLink>
        <CtaLink to="/engineering-review#nda" variant="outline-invert">HLG Mutual NDA</CtaLink>
      </div>
      <div className="mt-10">
        <Link to="/markets" className="mono text-primary-glow">All markets</Link>
      </div>
    </Section>
  </>
);

export default Aerospace;
