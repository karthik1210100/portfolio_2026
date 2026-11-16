import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";

export function Skills() {
  const { skills } = resume;

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="03 · Skills"
        title="Technical toolkit"
        description="Grouped by where they sit in the stack — from language and framework down to payments, infra and security."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal
            key={group.category}
            delay={(index % 2) * 80}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Pill>{item}</Pill>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
