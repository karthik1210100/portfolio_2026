/**
 * Ordered list of page sections. The navbar, the active-section tracker and
 * the page layout all read from this one array, so adding or reordering a
 * section is a single edit that stays consistent everywhere.
 */
export interface NavItem {
  readonly id: string;
  readonly label: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { id: "about", label: "About" },
  { id: "approach", label: "Approach" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
