import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  /** Small eyebrow label, e.g. "01 · Experience". */
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </Reveal>
  );
}
