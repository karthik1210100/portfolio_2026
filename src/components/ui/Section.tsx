import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Adds a faint alternating background band for visual rhythm. */
  muted?: boolean;
}

/** Consistent vertical rhythm + max width for every page section. */
export function Section({ id, children, className, muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-20 sm:py-24",
        muted && "bg-white dark:bg-slate-900/40",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
