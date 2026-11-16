import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  /** Render as a different element (e.g. "li", "section"). Default "div". */
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms, for lists that cascade in. */
  delay?: number;
}

/**
 * Declarative scroll-reveal wrapper around `useReveal`. Keeps the animation
 * concern out of every section component — they just wrap content in <Reveal>.
 */
export function Reveal({ children, as: Tag = "div", className, delay = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-visible={isVisible}
      className={cn("reveal", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
