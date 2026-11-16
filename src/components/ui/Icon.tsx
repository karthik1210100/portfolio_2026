import type { LucideIcon } from "lucide-react";
import {
  Bot,
  FlaskConical,
  Github,
  Globe,
  Linkedin,
  Mail,
  Phone,
  ScrollText,
  ShieldCheck,
  Target,
} from "lucide-react";
import type { PrincipleIcon } from "@/types/resume";

/**
 * Central icon registry. Data files reference icons by string key (keeping
 * them free of React imports); the UI resolves the key here. Adding an icon
 * is a one-line change in exactly one place.
 */
const REGISTRY = {
  // socials
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  globe: Globe,
  // principles
  spec: ScrollText,
  test: FlaskConical,
  ai: Bot,
  "blast-radius": Target,
  security: ShieldCheck,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof REGISTRY;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
  "aria-hidden"?: boolean;
}

export function Icon({
  name,
  className,
  size = 20,
  strokeWidth = 1.8,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  const Component = REGISTRY[name];
  return (
    <Component
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={ariaHidden}
    />
  );
}

/** Narrow helper so principle icons stay type-checked against the data. */
export function principleIconName(icon: PrincipleIcon): IconName {
  return icon;
}
