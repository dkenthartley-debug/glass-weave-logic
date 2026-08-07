import { PageHero, Section, Eyebrow } from "@/components/Section";
import { useState } from "react";
import { Mail, Building2, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import Seo, { orgSchema } from "@/components/Seo";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(150),
  email: z.string().trim().email("Enter a valid email address").max(255),
  role: z.string().trim().max(120).optional(),
  inquiry_type: z.string().trim().max(60),
  application_area: z.string().trim().max(60),
  message: z.string().trim().min(10, "Please describe the project").max(4000),
});

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = inquirySchema.safeParse({
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      role: fd.get("role") || undefined,
      inquiry_type: fd.get("type"),
      application_area: fd.get("area"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSending(true);
    const d = parsed.data;
    const { error } = await supabase.from("contact_inquiries").insert({
      name: d.name,
      company: d.company,
      email: d.email,
      role: d.role,
      inquiry_type: d.inquiry_type,
      application_area: d.application_area,
      message: d.message,
    });
    setSending(false);
    if (error) {
      toast.error("Could not send inquiry. Please email Hgil@Hotlineglassusa.com directly.");
      return;
    }
    setSent(true);
    toast.success("Inquiry received. HLG will be in touch.");
  };

  return (
    <>
      <Seo
        title="Contact HLG — Conductive, Heated & Shielded Glass Inquiries"
        description="Contact Hotlineglass USA to discuss conductive interlayers, heated laminated glass, aircraft sensor mats, and EMI/RFI shielding glass feasibility, samples, and production path."
        path="/contact"
        schema={orgSchema}
      />
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
                  <a href="mailto:Hgil@Hotlineglassusa.com" className="text-foreground hover:text-primary break-all">Hgil@Hotlineglassusa.com</a>
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
              onSubmit={handleSubmit}
              className="panel p-8 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Role / Title" name="role" />
              </div>
              <Select label="Inquiry Type" name="type" options={["Engineering", "Supplier Development", "Project Inquiry", "General"]} />
              <Select label="Application Area" name="area" options={["Aerospace", "Automotive", "Defense", "SCIF / TEMPEST", "Transportation", "Industrial", "ADAS / Variable Tint", "Other"]} />
              <div>
                <label className="mono text-muted-foreground block mb-2">Project Description</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-background border border-input px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Describe the glazing, the electrical function (heating, sensing, shielding, etc.), target environment, and stage (concept, prototype, production)."
                />
              </div>
              <button
                type="submit"
                disabled={sent || sending}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-colors disabled:opacity-60"
              >
                {sent ? <><CheckCircle2 size={18} /> Inquiry Sent</> : sending ? "Sending…" : <>Send Inquiry <Send size={16} /></>}
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
