import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Contact() {
  const { profile } = resume;

  return (
    <Section id="contact">
      <Reveal className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-center sm:p-14 dark:border-brand-500/20">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-200">
          07 · Contact
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let's build something solid.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-brand-100">
          I'm open to product and full-stack engineering roles. The fastest way to reach me
          is email — I usually reply within a day.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-transform hover:scale-[1.02]"
          >
            <Icon name="mail" size={18} aria-hidden={false} />
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="inline-flex items-center gap-2 text-sm text-brand-100 transition-colors hover:text-white"
            >
              <Icon name={social.icon} size={18} />
              <span>{social.handle}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
