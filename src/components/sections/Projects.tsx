import { ArrowUpRight } from "lucide-react";
import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/cn";

export function Projects() {
  const { projects } = resume;

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="05 · Projects"
        title="Selected work"
        description="Production systems I've designed and shipped — escrow payments, real-time messaging and a cleanly bounded microservice."
      />

      <div className="grid gap-5">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            delay={index * 90}
            className={cn(
              "group relative overflow-hidden rounded-2xl border bg-white p-6 transition-all hover:shadow-lg sm:p-7 dark:bg-slate-900/50",
              project.featured
                ? "border-brand-200 shadow-sm shadow-brand-500/5 dark:border-brand-500/30"
                : "border-slate-200 dark:border-slate-800",
            )}
          >
            {project.featured && (
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-accent-400"
              />
            )}

            <div className="flex items-start justify-between gap-4">
              <h3 className="text-balance text-lg font-semibold text-slate-900 sm:text-xl dark:text-white">
                {project.name}
              </h3>
              {project.featured && (
                <Pill variant="solid" className="shrink-0">
                  Flagship
                </Pill>
              )}
            </div>

            <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech}>
                  <Pill>{tech}</Pill>
                </li>
              ))}
            </ul>

            {project.links && project.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={15}
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
