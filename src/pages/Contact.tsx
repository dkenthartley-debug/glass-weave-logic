import { PageHero, Section, Eyebrow } from "@/components/Section";
import { useState } from "react";
import { Mail, Building2, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discuss a conductive glass, heated glass, sensor, or shielding requirement"
        subtitle="Contact HLG to discuss feasibility, materials, samples, and production path. We respond to engineering, supplier development, and project inquiries."
      />

      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Eyebrow>Inquiry Types</Eyebrow>
              <ul className="space-y-4 mt-4">
                {[
                  ["Engineering", "Feasibility, materials, geometry, termination, lamination compatibility."],
                  ["Supplier Development", "Qualification discussions, sample programs, repeatable supply path."],
                  ["Project Inquiries", "Program-specific scoping for aerospace, defense, SCIF, transportation, industrial."],
                ].map(([t, d]) => (
                  <li key={t} className="panel p-5">
                    <div className="font-display font-semibold">{t}</div>
                    <p className="text-sm text-muted-foreground mt-1">{d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <div>
                  <div className="mono text-primary">Email</div>
                  <a href="mailto:engineering@hotlineglass.com" className="text-foreground hover:text-primary">engineering@hotlineglass.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="text-primary" size={20} />
                <div>
                  <div className="mono text-primary">Company</div>
                  <div className="text-foreground">Hotlineglass USA · HLG</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Inquiry received. HLG will be in touch.");
              }}
              className="panel p-8 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Role / Title" name="role" />
              </div>
              <Select label="Inquiry Type" name="type" options={["Engineering", "Supplier Development", "Project Inquiry", "General"]} />
              <Select label="Application Area" name="area" options={["Aerospace", "Defense", "SCIF / TEMPEST", "Transportation", "Industrial", "ADAS / Variable Tint", "Other"]} />
              <div>
                <label className="mono text-muted-foreground block mb-2">Project Description</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-background border border-input px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Describe the glazing, the electrical function (heating, sensing, shielding, etc.), target environment, and stage (concept, prototype, production)."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-colors disabled:opacity-60"
              >
                {sent ? <><CheckCircle2 size={18} /> Inquiry Sent</> : <>Send Inquiry <Send size={16} /></>}
              </button>
              <p className="text-xs text-muted-foreground">HLG describes target applications and development capabilities. Specific approvals, certifications, and performance guarantees remain program-dependent.</p>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

const Field = ({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) => (
  <div>
    <label className="mono text-muted-foreground block mb-2">{label}{required && <span className="text-primary">*</span>}</label>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full bg-background border border-input px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
    />
  </div>
);

const Select = ({ label, name, options }: { label: string; name: string; options: string[] }) => (
  <div>
    <label className="mono text-muted-foreground block mb-2">{label}</label>
    <select
      name={name}
      className="w-full bg-background border border-input px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
    >
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  </div>
);

export default Contact;
