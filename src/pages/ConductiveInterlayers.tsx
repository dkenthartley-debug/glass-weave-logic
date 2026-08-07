import { PageHero, Section, Eyebrow } from "@/components/Section";
import img from "@/assets/conductive-interlayer.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo, { orgSchema } from "@/components/Seo";

const ConductiveInterlayers = () => (
  <>
    <Seo
      title={"Conductive Interlayers — Embedded Wire, Mesh & ITO | HLG"}
      description={"Embedded wire interlayers, conductive mesh, ITO film, and printed conductor formats engineered to survive lamination and perform in production laminated glass."}
      path="/conductive-interlayers"
      schema={orgSchema}
    />
    <PageHero
      eyebrow="01 / Solutions"
      title="Conductive Interlayers for Laminated Glass"
      subtitle="Embedded wire, conductive mesh, ITO film, and bus bar integration engineered to survive lamination and deliver repeatable electrical performance."
    />
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p className="text-foreground text-xl">
            HLG develops interlayer-format conductors that integrate directly into a customer's laminated glass build.
          </p>
          <p>
            Embedded wire interlayers, conductive mesh, transparent conductive oxide films, and printed
            conductor patterns can all be incorporated as part of a pre-lamination subassembly. The result
            is an electrically active layer that behaves as part of the glass.
          </p>
          <p>
            Each integration path involves trade-offs in transparency, sheet resistance, geometry, bus bar
            termination, and lamination compatibility. HLG helps customers choose and refine the right
            combination for the target glazing.
          </p>
        </div>
        <div className="relative">
          <img src={img} alt="Conductive interlayer with bus bar" loading="lazy" width={1200} height={800} className="w-full panel" />
          <div className="absolute -bottom-4 -right-4 panel p-4 mono text-xs">
            <div className="text-primary">Format</div>
            <div className="text-foreground mt-1">Pre-lamination subassembly</div>
          </div>
        </div>
      </div>
    </Section>

    <Section className="bg-surface/50 border-y border-border">
      <Eyebrow>Integration Paths</Eyebrow>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-4">
        {[
          { t: "Embedded Wire", d: "Fine conductor wire routed and held within the interlayer for heating, sensing, or shielding functions." },
          { t: "Conductive Mesh", d: "Woven or expanded metal mesh laminated between glass plies for shielding and current distribution." },
          { t: "ITO Film & Glass", d: "Transparent conductive oxide film or coated glass integrated into the lamination stack." },
          { t: "Bus Bar Systems", d: "Edge termination and conductor routing engineered for the target geometry and power profile." },
        ].map((x) => (
          <div key={x.t} className="bg-background p-7">
            <div className="font-display font-semibold text-lg">{x.t}</div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{x.d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <Eyebrow>Target Functions</Eyebrow>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {[
          ["Heating", "Defrost, de-ice, and elevated-temperature glazing for aerospace, transportation, and industrial environments."],
          ["Sensing", "Sensor mats and overheat protection layers integrated into the transparency stack."],
          ["Shielding", "Conductive grids and meshes for EMI / RFI attenuation across the glazing aperture."],
        ].map(([t, d]) => (
          <div key={t} className="panel p-7">
            <div className="font-display text-xl font-semibold text-primary">{t}</div>
            <p className="text-muted-foreground mt-3">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary-glow transition-colors">Discuss an Interlayer <ArrowRight size={16} /></Link>
        <Link to="/capabilities" className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary hover:text-primary transition-colors">View Capabilities</Link>
      </div>
    </Section>
  </>
);

export default ConductiveInterlayers;
