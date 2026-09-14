import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Eyebrow, CtaLink } from "@/components/Section";
import { ConductorField, HeatSenseChain, LaminateStack } from "@/components/Graphics";
import Seo, { orgSchema, breadcrumbSchema } from "@/components/Seo";
import { libraryTopics, markets, processSteps, qualityProof, solutions, technologies } from "@/data/hlg";

const Home = () => (
  <>
    <Seo
      title="Hotlineglass USA — Engineered Functional Interlayers for Laminated Glass"
      description="HLG engineers and manufactures electrically functional interlayers for laminated glass: heating, RTD temperature sensing, EMI/RFI shielding, transparent conductors, switchable glazing and integrated antennas. Butler, Pennsylvania. ISO 9001:2015."
      path="/"
      schema={[orgSchema, breadcrumbSchema([{ name: "Home", path: "/" }])]}
    />

    {/* 1 — HERO */}
    <section className="relative overflow-hidden border-b border-border bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-y-0 right-0 w-1/2 hairline-field-light opacity-70 hidden lg:block" aria-hidden />
      <div className="container relative py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>Hotlineglass USA</Eyebrow>
            <h1 className="font-display text-[2.1rem] sm:text-5xl lg:text-[3.65rem] font-bold uppercase leading-[1.03] tracking-tight">
              Engineered functional interlayers for advanced laminated glass
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              HLG engineers and manufactures electrically functional interlayer systems that integrate heating,
              temperature sensing, transparent conductors, EMI/RFI shielding, switchable glazing and antenna
              technologies into laminated transparencies.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink to="/technologies">Explore Technologies</CtaLink>
              <CtaLink to="/engineering-review" variant="outline">Start an Engineering Review</CtaLink>
            </div>
            <dl className="mt-12 grid sm:grid-cols-3 gap-px bg-border border border-border">
              {[
                ["Engineered in", "Butler, Pennsylvania"],
                ["Quality system", "ISO 9001:2015"],
                ["Inspection", "100% interlayer inspection"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-5">
                  <dt className="mono text-muted-foreground">{k}</dt>
                  <dd className="font-display text-sm font-semibold mt-2 uppercase">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="panel p-6 md:p-8">
              <div className="mono text-primary mb-5">Functional interlayer — schematic</div>
              <LaminateStack />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 2 — SIX TECHNOLOGIES */}
    <Section tone="gray">
      <SectionHeading
        eyebrow="Six functions. One integration partner."
        title="Put electrical function into the laminate."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {technologies.map((t) => (
          <Link
            key={t.slug}
            to={`/technologies/${t.slug}`}
            className="group bg-background p-8 hover:bg-surface transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-display text-2xl font-bold text-primary tracking-tight">{t.code}</span>
              <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-display text-lg font-semibold mt-4 group-hover:text-primary transition-colors">
              {t.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.cardCopy}</p>
          </Link>
        ))}
      </div>
    </Section>

    {/* 3 — HEAT + SENSE */}
    <section className="relative bg-navy-deep text-silver overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark" aria-hidden />
      <div className="container relative py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-6">
            <Eyebrow invert>Heat + Sense</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase leading-[1.05] text-background">
              Heat the glass. Know its temperature.
            </h2>
            <p className="mt-7 text-lg text-silver/80 leading-relaxed">
              HLG can engineer the heating and temperature-sensing functions as a matched interlayer system. For
              applications requiring temperature feedback, multiple RTD sensing locations can be integrated into a
              dedicated sensor mat and engineered together with the heater architecture.
            </p>
            <p className="mt-5 text-silver/70 leading-relaxed">
              This is particularly relevant for aerospace and other controlled electrothermal applications where
              heater performance and temperature feedback must operate as one system.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink to="/technologies/electrically-heated-interlayers">Explore HEAT</CtaLink>
              <CtaLink to="/technologies/embedded-temperature-sensing" variant="outline-invert">Explore SENSE</CtaLink>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="mono text-primary-glow mb-4">System architecture</div>
              <HeatSenseChain />
            </div>
            <div className="border border-silver/15 p-6">
              <ConductorField invert />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 4 — INTEGRATE */}
    <Section>
      <SectionHeading
        eyebrow="Integrate"
        title="The glass laminator laminates the glass. HLG integrates the function."
        subtitle="HLG can combine electrical technologies into engineered, laminate-ready functional interlayer assemblies."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {[
          ["Heat + Sense", "Heating with integrated temperature feedback."],
          ["Heat + Conduct", "Fine-wire or transparent-conductor heating architectures."],
          ["Shield + Ground", "Transparent shielding with engineered perimeter collection and electrical exit."],
          ["Connect + Conduct", "Antenna geometry translated into a manufacturable interlayer."],
          ["Switch + Connect", "Electrical interfaces engineered around switchable glazing systems."],
        ].map(([t, d]) => (
          <div key={t} className="bg-background p-7">
            <div className="mono text-primary">{t}</div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{d}</p>
          </div>
        ))}
        <div className="bg-surface p-7">
          <div className="mono text-accent">Prelaminated functional assemblies</div>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Where appropriate, HLG can preintegrate multiple interlayer components before they reach the glass
            laminator — controlling alignment, electrical interfaces, conductor placement and exits.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <CtaLink to="/solutions">Explore Integration</CtaLink>
      </div>
    </Section>

    {/* 5 — ENGINEERING */}
    <Section tone="gray">
      <SectionHeading
        eyebrow="Engineering"
        title="Start with the electrical requirement. Engineer the interlayer around it."
      />
      <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
        {processSteps.map((s) => (
          <li key={s.n} className="bg-background p-7">
            <div className="font-display text-3xl font-bold text-primary/25">{s.n}</div>
            <h3 className="font-display text-base font-semibold uppercase mt-3">{s.title}</h3>
            <ul className="mt-4 space-y-2">
              {s.items.map((i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-primary mt-2 h-px w-2.5 shrink-0 bg-primary" aria-hidden />
                  {i}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
      </div>
    </Section>

    {/* 6 — MANUFACTURING & QUALITY */}
    <Section>
      <div className="grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Manufacturing & quality"
            title="Engineered here. Manufactured here. Inspected here."
            subtitle="HLG manufactures functional interlayers in Butler, Pennsylvania in a controlled clean-room manufacturing environment. Every interlayer fabricated by HLG receives 100% inspection before release."
          />
          <CtaLink to="/engineering-quality">Engineering &amp; Quality</CtaLink>
        </div>
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {qualityProof.map((q) => (
              <div key={q.title} className="bg-background p-7">
                <div className="mono text-primary">{q.title}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{q.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    {/* 7 — MARKETS */}
    <Section tone="gray">
      <SectionHeading
        eyebrow="Markets"
        title="One interlayer platform. Very different requirements."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {markets.map((m) => (
          <Link key={m.slug} to={`/markets/${m.slug}`} className="group bg-background p-8 hover:bg-surface transition-colors">
            <h3 className="font-display text-lg font-semibold uppercase group-hover:text-primary transition-colors">
              {m.name}
            </h3>
            <ul className="mt-4 space-y-2">
              {m.bullets.map((b) => (
                <li key={b} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                  <span className="text-primary mt-2 h-px w-2.5 shrink-0 bg-primary" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </Section>

    {/* 8 — TECHNICAL LIBRARY */}
    <Section>
      <div className="grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Engineering resources"
            title="HLG Technical Library"
            subtitle="HLG maintains an expanding library of engineering resources covering the design and integration of electrical functionality into laminated glass."
          />
          <div className="border border-accent/40 bg-accent/5 px-6 py-5">
            <div className="mono text-accent">Technical papers and application notes coming soon.</div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="mono text-muted-foreground mb-5">Topics</div>
          <div className="flex flex-wrap gap-2">
            {libraryTopics.map((t) => (
              <span key={t} className="border border-border bg-surface px-3.5 py-2 text-sm text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <CtaLink to="/technical-library" variant="outline">Technical Library</CtaLink>
          </div>
        </div>
      </div>
    </Section>

    {/* 9 — FINAL CTA */}
    <section className="relative bg-gradient-navy text-silver overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark" aria-hidden />
      <div className="container relative py-24 md:py-32 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold uppercase leading-[1.05] text-background max-w-4xl mx-auto">
          Let's engineer your next transparency.
        </h2>
        <p className="mt-6 text-lg text-silver/80 max-w-2xl mx-auto leading-relaxed">
          Start with the performance requirement. HLG can help determine how the electrical functionality should be
          engineered into the laminate.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <CtaLink to="/engineering-review">Start an Engineering Review</CtaLink>
          <CtaLink to="/engineering-review#nda" variant="outline-invert">Download HLG Mutual NDA</CtaLink>
        </div>
        <div className="mono text-silver/50 mt-12">
          {solutions.length} solution paths · {technologies.length} technology functions · {markets.length} markets
        </div>
      </div>
    </section>
  </>
);

export default Home;
