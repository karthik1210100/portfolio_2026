import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { profile } = resume;

  return (
    <Section id="about">
      <SectionHeading eyebrow="01 · About" title="Product engineer who ships end-to-end" />
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            {profile.summary}
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Comfortable owning a feature's whole lifecycle: data model, API contract, UI,
            background jobs, tests, and deploy.
          </p>
        </Reveal>

        <Reveal className="md:col-span-2" delay={120}>
          <dl className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/40">
            {[
              { label: "Role", value: profile.title },
              { label: "Based in", value: profile.location },
              { label: "Focus", value: "Rails · React · TypeScript · Bun" },
              { label: "Workflow", value: "OpenSpec · TDD · AI-augmented" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-0.5 border-b border-slate-100 pb-3 last:border-0 last:pb-0 dark:border-slate-800"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {row.label}
                </dt>
                <dd className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
