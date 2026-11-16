/**
 * Tiny class-name joiner. Filters falsy values so components can write
 * conditional classes inline without pulling in a dependency.
 *
 *   cn("base", isActive && "active", undefined) // -> "base active"
 */
export type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
