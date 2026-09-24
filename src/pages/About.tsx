import { PageHero, Section, SectionHeading, CtaLink } from "@/components/Section";
import { LaminateStack } from "@/components/Graphics";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { technologies } from "@/data/hlg";
import Figure from "@/components/Figure";
import { facilityAboutPhotos } from "@/data/hlgPhotos";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About HLG", path: "/about" },
];

const flow = [
  "Customer requirement",
  "HLG electrical / interlayer engineering",
  "Prototype",
  "Validation",
  "Production",
];

const About = () => (
  <>
    <Seo
      title="About Hotlineglass USA — U.S. Functional Interlayer Manufacturer | HLG"
      description="Hotlineglass USA is a U.S. manufacturer of engineered functional interlayers for laminated glass — heating, temperature sensing, transparent conductors, EMI/RFI shielding, switchable glazing and integrated antennas. Butler, Pennsylvania."
      path="/about"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="About HLG"
      title="We engineer the part between the glass."
      subtitle="Hotlineglass USA is a U.S. manufacturer of engineered functional interlayers for laminated glass."
    >
      <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
    </PageHero>

    <Section>
      <div className="grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-7">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded around electrically heated interlayer technology, HLG has expanded its engineering and
            manufacturing capabilities to integrate multiple electrical functions into laminated transparencies.
          </p>
          <h2 className="font-display text-2xl font-bold uppercase mt-12">Today those capabilities include</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-px bg-border border border-border">
            {technologies.map((t) => (
              <li key={t.slug} className="bg-background p-5">
                <div className="mono text-primary">{t.code}</div>
                <div className="text-sm text-muted-foreground mt-2">{t.name}</div>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-muted-foreground leading-relaxed">
            HLG operates from Butler, Pennsylvania and supports development from initial electrical requirements
            through engineering, prototyping, validation and controlled production. The company is ISO 9001:2015
            certified and operates a precision temperature- and humidity-controlled clean-room environment designed
            for processing laminated-glass interlayer materials.
          </p>
        </div>
        <aside className="lg:col-span-5">
          <div className="panel p-7">
            <div className="mono text-primary mb-5">Functional interlayer — schematic</div>
            <LaminateStack />
          </div>
        </aside>
      </div>
    </Section>

    <Section tone="gray">
      <SectionHeading eyebrow="How work moves" title="Requirement to production" />
      <ol className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-border border border-border">
        {flow.map((f, i) => (
          <li key={f} className="bg-background p-7">
            <div className="mono text-primary">{String(i + 1).padStart(2, "0")}</div>
            <div className="font-display text-base font-semibold uppercase mt-3 leading-snug">{f}</div>
          </li>
        ))}
      </ol>
    </Section>

    <Section tone="navy">
      <p className="text-lg text-silver/80 leading-relaxed max-w-3xl">
        HLG does not need to manufacture the finished window to add substantial value.
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-background leading-[1.05] mt-6 max-w-4xl">
        Our specialty is engineering the functionality that goes inside it.
      </h2>
      <div className="mt-10">
        <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
      </div>
    </Section>
  </>
);

export default About;
