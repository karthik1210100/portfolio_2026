import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";

export function Experience() {
  const { experience } = resume;

  return (
    <Section id="experience" muted>
      <SectionHeading
        eyebrow="04 · Experience"
        title="Where I've built"
        description="~3 years across two full-stack teams, progressing from trainee to owning production features on a real-money marketplace."
      />

      <ol className="relative space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800 sm:pl-8">
        {experience.map((job, index) => (
          <Reveal as="li" key={`${job.organization}-${job.role}`} delay={index * 100}>
            {/* Timeline node */}
            <span
              aria-hidden
              className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-500 dark:border-slate-950"
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {job.role}
              </h3>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                {job.start} – {job.end}
              </span>
            </div>
            <p className="font-medium text-brand-600 dark:text-brand-400">
              {job.organization}
            </p>
            {job.summary && (
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {job.summary}
              </p>
            )}

            <ul className="mt-4 space-y-2.5">
              {job.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                  />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            {job.stack && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <li key={tech}>
                    <Pill variant="outline">{tech}</Pill>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
