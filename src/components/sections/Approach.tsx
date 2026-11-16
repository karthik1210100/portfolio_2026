import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, principleIconName } from "@/components/ui/Icon";

export function Approach() {
  const { principles } = resume;

  return (
    <Section id="approach" muted>
      <SectionHeading
        eyebrow="02 · How I Engineer"
        title="Principles that keep quality high while moving fast"
        description="Shipping into a live, real-money system raises the cost of mistakes. These practices are how I move quickly without lowering the bar."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, index) => (
          <Reveal
            key={principle.title}
            delay={index * 80}
            className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-500/40"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-300">
              <Icon name={principleIconName(principle.icon)} size={22} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
              {principle.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {principle.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
