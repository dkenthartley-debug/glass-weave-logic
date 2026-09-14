import { useState } from "react";
import { CheckCircle2, FileText, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { PageHero, Section, SectionHeading, Eyebrow } from "@/components/Section";
import Seo, { breadcrumbSchema, orgSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Engineering Review", path: "/engineering-review" },
];

const FUNCTIONS = ["Heat", "Sense", "Shield", "Conduct", "Switch", "Connect", "Multiple"];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  company: z.string().trim().min(1, "Company is required").max(160),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(60).optional(),
  functions: z.array(z.string()).min(1, "Select at least one function"),
  application: z.string().trim().max(160).optional(),
  voltage: z.string().trim().max(120).optional(),
  power_target: z.string().trim().max(160).optional(),
  max_current: z.string().trim().max(120).optional(),
  dimensions: z.string().trim().max(160).optional(),
  construction: z.string().trim().max(240).optional(),
  exit_location: z.string().trim().max(200).optional(),
  sensor_requirements: z.string().trim().max(400).optional(),
  annual_volume: z.string().trim().max(120).optional(),
  description: z.string().trim().min(10, "Please describe the requirement").max(4000),
  nda_required: z.string().max(10),
});

const EngineeringReview = () => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone") || undefined,
      functions: fd.getAll("functions").map(String),
      application: fd.get("application") || undefined,
      voltage: fd.get("voltage") || undefined,
      power_target: fd.get("power_target") || undefined,
      max_current: fd.get("max_current") || undefined,
      dimensions: fd.get("dimensions") || undefined,
      construction: fd.get("construction") || undefined,
      exit_location: fd.get("exit_location") || undefined,
      sensor_requirements: fd.get("sensor_requirements") || undefined,
      annual_volume: fd.get("annual_volume") || undefined,
      description: fd.get("description"),
      nda_required: fd.get("nda_required") ?? "No",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSending(true);
    const d = parsed.data;

    let drawing_path: string | null = null;
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        setSending(false);
        toast.error("Drawing must be 25 MB or smaller.");
        return;
      }
      const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const key = `${crypto.randomUUID()}-${safe}`;
      const { error: upErr } = await supabase.storage.from("engineering-review-uploads").upload(key, file);
      if (upErr) {
        setSending(false);
        toast.error("Could not upload the drawing. Please try again or email it directly.");
        return;
      }
      drawing_path = key;
    }

    const { error } = await supabase.from("engineering_reviews").insert({
      name: d.name,
      company: d.company,
      email: d.email,
      phone: d.phone ?? null,
      functions: d.functions,
      application: d.application ?? null,
      voltage: d.voltage ?? null,
      power_target: d.power_target ?? null,
      max_current: d.max_current ?? null,
      dimensions: d.dimensions ?? null,
      construction: d.construction ?? null,
      exit_location: d.exit_location ?? null,
      sensor_requirements: d.sensor_requirements ?? null,
      annual_volume: d.annual_volume ?? null,
      description: d.description,
      nda_required: d.nda_required === "Yes",
      drawing_path,
    });
    setSending(false);
    if (error) {
      toast.error("Could not submit. Please email Hgil@Hotlineglassusa.com directly.");
      return;
    }
    setSent(true);
    toast.success("Engineering review request received. HLG will respond shortly.");
  };

  return (
    <>
      <Seo
        title="Start an Engineering Review — Functional Glass Requirement | HLG"
        description="Have a functional glass requirement? You do not need to have the interlayer designed. Submit voltage, power, geometry and electrical interface requirements and HLG will engineer the interlayer around them."
        path="/engineering-review"
        schema={[orgSchema, breadcrumbSchema(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Engineering review"
        title="Have a functional glass requirement?"
        subtitle="You do not need to have the interlayer designed. Start with the performance requirement."
      />

      <Section>
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="panel p-7 md:p-9 space-y-8">
              <fieldset className="space-y-5">
                <legend className="mono text-primary mb-4">Contact</legend>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" />
                </div>
              </fieldset>

              <fieldset>
                <legend className="mono text-primary mb-4">Function needed</legend>
                <div className="grid sm:grid-cols-2 gap-3">
                  {FUNCTIONS.map((f) => (
                    <label key={f} className="flex items-center gap-3 border border-border px-4 py-3 cursor-pointer hover:border-primary transition-colors">
                      <input type="checkbox" name="functions" value={f} className="accent-primary h-4 w-4" />
                      <span className="mono text-foreground">{f}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="space-y-5">
                <legend className="mono text-primary mb-4">Requirement</legend>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Application / Market" name="application" />
                  <Field label="Operating voltage" name="voltage" />
                  <Field label="Target power or thermal requirement" name="power_target" />
                  <Field label="Maximum current" name="max_current" />
                  <Field label="Transparency dimensions" name="dimensions" />
                  <Field label="Glass / laminate construction" name="construction" />
                  <Field label="Electrical exit location" name="exit_location" />
                  <Field label="Expected annual volume" name="annual_volume" />
                </div>
                <TextArea label="Sensor requirements" name="sensor_requirements" rows={3} placeholder="RTD count, sensing locations, control or over-temperature requirements." />
                <TextArea
                  label="Project description"
                  name="description"
                  required
                  rows={5}
                  placeholder="Describe the transparency, the electrical function required, the environment and the stage of the program."
                />
              </fieldset>

              <fieldset className="space-y-5">
                <legend className="mono text-primary mb-4">Drawing &amp; NDA</legend>
                <div>
                  <label className="mono text-muted-foreground block mb-2">Drawing upload — DXF / DWG / PDF / STEP</label>
                  <input
                    type="file"
                    accept=".dxf,.dwg,.pdf,.step,.stp,.igs,.iges"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    className="w-full border border-input px-4 py-3 text-sm text-muted-foreground file:mono file:mr-4 file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-foreground"
                  />
                </div>
                <div>
                  <label className="mono text-muted-foreground block mb-2">NDA required</label>
                  <div className="flex gap-3">
                    {["Yes", "No"].map((v, i) => (
                      <label key={v} className="flex items-center gap-3 border border-border px-5 py-3 cursor-pointer hover:border-primary transition-colors">
                        <input type="radio" name="nda_required" value={v} defaultChecked={i === 1} className="accent-primary h-4 w-4" />
                        <span className="mono">{v}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </fieldset>

              <button type="submit" disabled={sent || sending} className="btn-primary w-full disabled:opacity-60">
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Review Request Sent
                  </>
                ) : sending ? (
                  "Submitting…"
                ) : (
                  <>
                    Start Engineering Review <Send size={16} />
                  </>
                )}
              </button>
              <p className="text-xs text-muted-foreground leading-relaxed">
                HLG describes engineering and manufacturing capabilities. Program approvals, qualifications and
                performance values are program-specific.
              </p>
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-8">
            <div id="nda" className="panel p-7 scroll-mt-28">
              <Eyebrow>HLG Mutual NDA</Eyebrow>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Technical detail — conductor architecture, sensor placement, program requirements — is exchanged under
                a mutual non-disclosure agreement. Request the HLG Mutual NDA and it will be returned for signature.
              </p>
              <a
                href="mailto:Hgil@Hotlineglassusa.com?subject=Request%20HLG%20Mutual%20NDA"
                className="btn-outline w-full mt-6"
              >
                <FileText size={16} /> Request HLG Mutual NDA
              </a>
            </div>

            <div className="panel p-7">
              <Eyebrow>Schedule technical discussion</Eyebrow>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prefer to talk it through first? Request a technical discussion with HLG engineering.
              </p>
              <a
                href="mailto:Hgil@Hotlineglassusa.com?subject=Schedule%20Technical%20Discussion"
                className="btn-outline w-full mt-6"
              >
                Schedule Technical Discussion
              </a>
            </div>

            <div className="panel p-7">
              <div className="mono text-primary mb-4">What happens next</div>
              <ol className="divide-y divide-border">
                {[
                  "HLG reviews the electrical and thermal requirement.",
                  "Open questions are resolved directly with your engineering team.",
                  "HLG proposes a conductor and interlayer architecture.",
                  "Prototype interlayers are produced for lamination and validation.",
                ].map((s, i) => (
                  <li key={s} className="py-3.5 flex gap-4 text-sm text-muted-foreground">
                    <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          invert
          eyebrow="Engineered in Butler, Pennsylvania"
          title="Let's engineer your next transparency."
          subtitle="ISO 9001:2015 · 100% interlayer inspection · clean-room processing"
        />
        <a href="mailto:Hgil@Hotlineglassusa.com" className="btn-outline-invert">
          Hgil@Hotlineglassusa.com
        </a>
      </Section>
    </>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="mono text-muted-foreground block mb-2">
      {label}
      {required && <span className="text-accent ml-1">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      className="w-full bg-background border border-input px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
    />
  </div>
);

const TextArea = ({
  label,
  name,
  rows = 4,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) => (
  <div>
    <label htmlFor={name} className="mono text-muted-foreground block mb-2">
      {label}
      {required && <span className="text-accent ml-1">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      rows={rows}
      required={required}
      placeholder={placeholder}
      className="w-full bg-background border border-input px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
    />
  </div>
);

export default EngineeringReview;
