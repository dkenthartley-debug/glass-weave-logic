import { ReactNode } from "react";

export const Section = ({
  children,
  className = "",
  id,
}: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container">{children}</div>
  </section>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div className="mono text-primary mb-4">
    <span className="accent-bar" />
    {children}
  </div>
);

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] text-foreground">{title}</h2>
    {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
}: { eyebrow: string; title: string; subtitle: string }) => (
  <section className="relative border-b border-border bg-gradient-hero overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute inset-x-0 bottom-0 edge-line" />
    <div className="container relative py-20 md:py-28">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
        {title}
      </h1>
      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">{subtitle}</p>
    </div>
  </section>
);
