import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  /** Fraction of the element that must be visible before revealing. */
  threshold?: number;
  /** Margin around the root, e.g. "0px 0px -10% 0px" to trigger a bit early. */
  rootMargin?: string;
  /** Reveal only once and then stop observing (default true). */
  once?: boolean;
}

/**
 * Lightweight scroll-reveal built on IntersectionObserver — no animation
 * library. Returns a ref to attach and a boolean for whether it's in view.
 * Respects `prefers-reduced-motion` by revealing immediately.
 *
 *   const { ref, isVisible } = useReveal();
 *   <div ref={ref} data-visible={isVisible} />
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
): { ref: React.RefObject<T | null>; isVisible: boolean } {
  const { threshold = 0.15, rootMargin = "0px 0px -8% 0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
