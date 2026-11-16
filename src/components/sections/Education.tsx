import { GraduationCap, BadgeCheck } from "lucide-react";
import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  const { education, certifications } = resume;

  return (
    <Section id="education" muted>
      <SectionHeading eyebrow="06 · Education & Certifications" title="Learning & credentials" />

      <div className="grid gap-10 md:grid-cols-2">
        {/* Education */}
        <div>
          <h3 className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <GraduationCap size={18} aria-hidden className="text-brand-500" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((item) => (
              <Reveal
                key={item.degree}
                className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40"
              >
                <p className="font-semibold text-slate-900 dark:text-white">{item.degree}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {item.institution}
                </p>
                <p className="mt-2 font-mono text-xs text-slate-400 dark:text-slate-500">
                  {item.year}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <BadgeCheck size={18} aria-hidden className="text-brand-500" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <span className="shrink-0 font-mono text-xs text-slate-400 dark:text-slate-500">
                    {item.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.issuer}</p>
                {item.note && (
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
                    {item.note}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
