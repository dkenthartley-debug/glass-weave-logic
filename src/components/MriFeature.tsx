import Figure from "@/components/Figure";
import { CtaLink, Section, SectionHeading } from "@/components/Section";
import { mriBulletin, mriSuitePhoto } from "@/data/mriBulletin";

/** Front-and-centre MRI window feature, shared by SHIELD and the Medical & MRI market. */
const MriFeature = () => (
  <Section tone="gray" id="mri-windows">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <SectionHeading eyebrow="Medical & MRI RF shielding" title="RF-shielded MRI windows" />
        <p className="text-muted-foreground leading-relaxed">
          MRI windows keep outside RF noise out of the scan room while giving technologists a clear view of the
          patient. HLG engineers the shielding layer, perimeter grounding and laminate as one assembly, built to the
          customer, equipment or architectural supplied specification.
        </p>
        <ul className="mt-6 space-y-2">
          {mriBulletin.applications.slice(0, 5).map((a) => (
            <li key={a} className="text-sm text-muted-foreground flex gap-3">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-primary" aria-hidden />{a}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">Switchable privacy:</span> HLG integrates SWITCH switchable privacy film with RF shielding in one laminated MRI window, clear to private at the flip of a switch. Each combined configuration is engineered and validated per customer, equipment or architectural supplied spec.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaLink to={mriBulletin.path}>Read TB-003</CtaLink>
          <CtaLink to="/engineering-review?document=TB-003">Discuss an MRI Window Project</CtaLink>
          <CtaLink to="/markets/medical-mri" variant="outline">Medical &amp; MRI market</CtaLink>
        </div>
      </div>
      <Figure photo={mriSuitePhoto} aspect="aspect-[16/10]" />
    </div>
  </Section>
);

export default MriFeature;
