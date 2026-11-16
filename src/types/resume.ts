/**
 * Typed content model for the portfolio.
 *
 * Everything the UI renders is derived from a single `Resume` object, so the
 * site has one source of truth. Changing a job title, adding a project, or
 * reordering skills is a data edit — never a component edit. The compiler
 * guarantees the data stays shaped the way the components expect.
 */

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  /** Icon key resolved by the UI layer (keeps data free of React imports). */
  readonly icon: "github" | "linkedin" | "mail" | "phone" | "globe";
  /** Short, copy-friendly handle shown next to the icon. */
  readonly handle: string;
}

export interface Profile {
  readonly name: string;
  readonly title: string;
  /** One-line value proposition, used in the hero. */
  readonly tagline: string;
  readonly location: string;
  readonly email: string;
  readonly phone: string;
  /**
   * Résumé PDF filename in /public. The actual URL is built at runtime from
   * `import.meta.env.BASE_URL` so it stays correct under a GitHub Pages
   * project subpath as well as at the domain root.
   */
  readonly resumeFileName: string;
  readonly summary: string;
  /** Short, scannable highlights rendered as hero stat chips. */
  readonly highlights: readonly Highlight[];
  readonly socials: readonly SocialLink[];
}

export interface Highlight {
  readonly value: string;
  readonly label: string;
}

/** A named practice from the "How I Engineer" section. */
export interface Principle {
  readonly title: string;
  readonly description: string;
  readonly icon: PrincipleIcon;
}

export type PrincipleIcon =
  | "spec"
  | "test"
  | "ai"
  | "blast-radius"
  | "security";

export interface SkillGroup {
  readonly category: string;
  readonly items: readonly string[];
}

export interface ExperienceItem {
  readonly role: string;
  readonly organization: string;
  readonly start: string;
  readonly end: string;
  readonly location?: string;
  readonly summary?: string;
  readonly achievements: readonly string[];
  readonly stack?: readonly string[];
}

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
}

export interface ProjectItem {
  readonly name: string;
  readonly description: string;
  readonly tech: readonly string[];
  readonly links?: readonly ProjectLink[];
  /** Marks the flagship project for emphasis in the grid. */
  readonly featured?: boolean;
}

export interface EducationItem {
  readonly degree: string;
  readonly institution: string;
  readonly year: string;
}

export interface CertificationItem {
  readonly title: string;
  readonly issuer: string;
  readonly year: string;
  readonly note?: string;
}

export interface Resume {
  readonly profile: Profile;
  readonly principles: readonly Principle[];
  readonly skills: readonly SkillGroup[];
  readonly experience: readonly ExperienceItem[];
  readonly projects: readonly ProjectItem[];
  readonly education: readonly EducationItem[];
  readonly certifications: readonly CertificationItem[];
}
