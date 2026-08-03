import { useMemo, useState } from "react";
import { faqLibrary, faqTopics } from "@/data/resources";
import { PageHero, Section } from "@/components/Section";
import Seo, { breadcrumbSchema, faqSchema } from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Engineering Resources", path: "/engineering-resources" },
  { name: "FAQ Library", path: "/engineering-resources/faq" },
];

const FaqLibrary = () => {
  const [topic, setTopic] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      faqLibrary.filter(
        (f) =>
          (topic === "All" || f.topic === topic) &&
          (query.trim() === "" ||
            (f.q + f.a).toLowerCase().includes(query.trim().toLowerCase())),
      ),
    [topic, query],
  );

  return (
    <>
      <Seo
        title="Engineering FAQ Library — Heated & Conductive Glass | HLG"
        description="Detailed answers to engineering questions on heated laminated glass, embedded wire, resistance calculation, sensors, antennas, bus bars, shielding, and power distribution."
        path="/engineering-resources/faq"
        schema={[breadcrumbSchema(crumbs), faqSchema(faqLibrary)]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="FAQ Library"
        title="Engineering Questions About Conductive and Heated Glass"
        subtitle="Answers written for engineers evaluating electrically active laminated glass. The library expands as new application questions come in."
      />
      <Section>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            aria-label="Search FAQs"
            className="w-full md:max-w-sm bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <div className="flex flex-wrap gap-2">
            {["All", ...faqTopics].map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`mono text-[10px] px-3 py-2 border transition-colors ${
                  topic === t
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <Accordion type="single" collapsible>
          {filtered.map((f, i) => (
            <AccordionItem key={f.q} value={`lib-${i}`}>
              <AccordionTrigger className="text-left font-display">
                <span>
                  <span className="mono text-[10px] text-primary block mb-1">{f.topic}</span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filtered.length === 0 && (
          <p className="text-muted-foreground">No questions match that search yet — send it to us and we will answer it.</p>
        )}
      </Section>
    </>
  );
};

export default FaqLibrary;
