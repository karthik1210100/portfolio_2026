import { resume } from "@/data/resume";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const { profile } = resume;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-slate-900 dark:text-white">{profile.name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {profile.title} · {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
              aria-label={social.label}
              title={social.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-500/50 dark:hover:text-brand-300"
            >
              <Icon name={social.icon} size={18} />
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-5xl px-5 text-center text-xs text-slate-400 sm:px-8 dark:text-slate-600">
        © {year} {profile.name}. Built with React, TypeScript, Tailwind &amp; Bun.
      </p>
    </footer>
  );
}
