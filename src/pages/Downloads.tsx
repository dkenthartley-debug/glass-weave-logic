import { downloads } from "@/data/resources";
import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { FileDown } from "lucide-react";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Downloads", path: "/downloads" },
];

const Downloads = () => (
  <>
    <Seo
      title="Download Center — Datasheets, Design Guides & Drawings | HLG"
      description="Request datasheets, design guides, white papers, drawing sets, handling documentation, and electrical verification checklists for conductive interlayers and heated laminated glass."
      path="/downloads"
      schema={[orgSchema, breadcrumbSchema(crumbs)]}
    />
    <Breadcrumbs items={crumbs} />
    <PageHero
      eyebrow="Download Center"
      title="Datasheets, Design Guides and Technical Documentation"
      subtitle="Engineering documentation for conductive interlayers, heater and sensor mats, bus bar design, and shielded inserts. Documents are released on request while the library is being published."
    />
    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {downloads.map((d) => (
          <div key={d.title} className="bg-background p-6 flex flex-col">
            <FileDown className="text-primary" size={20} />
            <h2 className="font-display font-semibold mt-4">{d.title}</h2>
            <div className="mono text-[10px] text-muted-foreground mt-2">
              {d.kind} · {d.audience}
            </div>
            <Link to="/contact" className="mono text-[10px] text-primary mt-4">
              Request document
            </Link>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-8 max-w-2xl">
        Some documentation covers defense and secure facility applications and is released after a short review of the
        request. Tell us the application and we will send what is relevant.
      </p>
    </Section>
  </>
);

export default Downloads;
