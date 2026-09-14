import { PageHero, Section, SectionHeading, CtaLink } from "@/components/Section";
import { LaminateStack } from "@/components/Graphics";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { solutions } from "@/data/hlg";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
];

const Solutions = () => (
  <>
    <Seo
      title="Solutions — Functional Interlayer Integration & Prelaminated Assemblies | HLG"
      description="HLG solutions: functional interlayer integration, prelaminated functional assemblies, busbar engineering and electrical exit leads for advanced laminated glass."
      path="/solutions"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="Integrate"
      title="The glass laminator laminates the glass. HLG integrates the function."
      subtitle="HLG can combine electrical technologies into engineered, laminate-ready functional interlayer assemblies — engineered, integrated, validated and produced."
    >
      <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
    </PageHero>

    <Section>
      <div className="grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-7 space-y-16">
          {solutions.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl md:text-3xl font-bold uppercase">{s.name}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
              <ul className="mt-6 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
                    <span className="mt-2 h-px w-3 shrink-0 bg-primary" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <aside className="lg:col-span-5">
          <div className="panel p-7 lg:sticky lg:top-24">
            <div className="mono text-primary mb-5">What HLG does with the technologies</div>
            <ol className="divide-y divide-border">
              {["Engineer", "Integrate", "Validate", "Produce"].map((v, i) => (
                <li key={v} className="py-4 flex items-baseline gap-4">
                  <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display font-semibold uppercase">{v}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <LaminateStack />
            </div>
          </div>
        </aside>
      </div>
    </Section>

    <Section tone="navy">
      <SectionHeading
        invert
        eyebrow="Next step"
        title="Bring the requirement, not the design."
        subtitle="You do not need to have the interlayer designed. Start with the performance requirement and HLG can determine how the electrical function should be engineered into the laminate."
      />
      <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
    </Section>
  </>
);

export default Solutions;
