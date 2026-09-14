import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Section = ({
  children,
  className = "",
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "gray" | "navy";
}) => {
  const toneClass =
    tone === "navy"
      ? "bg-navy-deep text-silver"
      : tone === "gray"
        ? "bg-surface"
        : "bg-background";
  return (
    <section id={id} className={`relative py-20 md:py-28 ${toneClass} ${className}`}>
      <div className="container relative">{children}</div>
    </section>
  );
};

export const Eyebrow = ({ children, invert = false }: { children: ReactNode; invert?: boolean }) => (
  <div className={`mono mb-4 ${invert ? "text-primary-glow" : "text-primary"}`}>
    <span className={`inline-block h-px w-10 align-middle mr-3 ${invert ? "bg-primary-glow" : "bg-primary"}`} />
    {children}
  </div>
);

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
}) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}>
    {eyebrow && <Eyebrow invert={invert}>{eyebrow}</Eyebrow>}
    <h2
      className={`font-display text-3xl md:text-5xl font-bold leading-[1.05] uppercase ${
        invert ? "text-background" : "text-foreground"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-5 text-lg leading-relaxed ${invert ? "text-silver" : "text-muted-foreground"}`}>{subtitle}</p>
    )}
  </div>
);

/** Light technical page hero with hairline grid + restrained gradient. */
export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) => (
  <section className="relative border-b border-border bg-gradient-hero overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
    <div className="absolute inset-x-0 bottom-0 edge-line" aria-hidden />
    <div className="container relative py-20 md:py-28">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05] uppercase">
        {title}
      </h1>
      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">{subtitle}</p>
      {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
    </div>
  </section>
);

export const CtaLink = ({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-invert";
}) => (
  <Link
    to={to}
    className={
      variant === "primary" ? "btn-primary" : variant === "outline" ? "btn-outline" : "btn-outline-invert"
    }
  >
    {children} <ArrowRight size={15} />
  </Link>
);
