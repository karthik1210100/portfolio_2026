import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PillProps {
  children: ReactNode;
  className?: string;
  /** Visual emphasis. "solid" for the hero / featured contexts. */
  variant?: "soft" | "outline" | "solid";
}

const VARIANTS: Record<NonNullable<PillProps["variant"]>, string> = {
  soft: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300",
  outline:
    "border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300",
  solid: "bg-brand-600 text-white dark:bg-brand-500",
};

/** Small rounded label used for skills, tech tags and stat chips. */
export function Pill({ children, className, variant = "soft" }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
