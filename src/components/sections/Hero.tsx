import { ArrowDown, Download, MapPin } from "lucide-react";
import { resume } from "@/data/resume";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";

export function Hero() {
  const { profile } = resume;

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      {/* Decorative backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid text-slate-900 opacity-[0.07] dark:text-white dark:opacity-[0.06]" />
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-600/20" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="reveal" data-visible="true">
          <Pill variant="outline" className="gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Open to product &amp; full-stack roles
          </Pill>

          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            {profile.name}
          </h1>

          <p className="mt-4 max-w-2xl text-lg font-medium text-slate-700 sm:text-xl dark:text-slate-200">
            {profile.title} —{" "}
            <span className="text-gradient">Spec-driven, Test-first, AI-augmented</span>
          </p>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <MapPin size={15} aria-hidden /> {profile.location}
          </p>

          {/* Stat chips */}
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-4">
            {profile.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-white/60 p-3 dark:border-slate-800 dark:bg-slate-900/40"
              >
                <dt className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.value}
                </dt>
                <dd className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              View projects
              <ArrowDown size={16} aria-hidden />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${profile.resumeFileName}`}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500/60 dark:hover:text-brand-300"
            >
              <Download size={16} aria-hidden />
              Download résumé
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
            >
              Get in touch
            </a>

            <div className="ml-1 flex items-center gap-1.5">
              {profile.socials
                .filter((s) => s.icon === "github" || s.icon === "linkedin")
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                  >
                    <Icon name={social.icon} size={20} />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
