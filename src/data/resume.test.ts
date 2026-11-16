import { describe, expect, it } from "vitest";
import { resume } from "@/data/resume";
import { NAV_ITEMS } from "@/config/navigation";

/**
 * The content model is the product's single source of truth, so we guard its
 * integrity with tests rather than trusting manual review. These catch the
 * realistic failure modes of editing a data file: an empty field, a broken
 * link, a duplicate, or a section that silently became empty.
 */
describe("resume data contract", () => {
  const { profile } = resume;

  it("has a complete profile", () => {
    expect(profile.name).toBeTruthy();
    expect(profile.title).toBeTruthy();
    expect(profile.summary.length).toBeGreaterThan(80);
    expect(profile.highlights.length).toBeGreaterThanOrEqual(1);
  });

  it("exposes a valid, non-empty email", () => {
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("has social links that are well-formed and unique", () => {
    expect(profile.socials.length).toBeGreaterThanOrEqual(2);
    const hrefs = profile.socials.map((s) => s.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    for (const social of profile.socials) {
      expect(social.handle).toBeTruthy();
      expect(social.href).toMatch(/^(https?:|mailto:|tel:)/);
    }
  });

  it("populates every content section", () => {
    expect(resume.principles.length).toBeGreaterThanOrEqual(3);
    expect(resume.skills.length).toBeGreaterThanOrEqual(3);
    expect(resume.experience.length).toBeGreaterThanOrEqual(1);
    expect(resume.projects.length).toBeGreaterThanOrEqual(1);
    expect(resume.education.length).toBeGreaterThanOrEqual(1);
    expect(resume.certifications.length).toBeGreaterThanOrEqual(1);
  });

  it("has no empty skill groups or duplicate skills within a group", () => {
    for (const group of resume.skills) {
      expect(group.category).toBeTruthy();
      expect(group.items.length).toBeGreaterThan(0);
      expect(new Set(group.items).size).toBe(group.items.length);
    }
  });

  it("gives every experience entry a role, org and at least one achievement", () => {
    for (const job of resume.experience) {
      expect(job.role).toBeTruthy();
      expect(job.organization).toBeTruthy();
      expect(job.achievements.length).toBeGreaterThan(0);
      expect(job.achievements.every((a) => a.trim().length > 0)).toBe(true);
    }
  });

  it("gives every project a description, tech list and valid links", () => {
    for (const project of resume.projects) {
      expect(project.name).toBeTruthy();
      expect(project.description.length).toBeGreaterThan(20);
      expect(project.tech.length).toBeGreaterThan(0);
      for (const link of project.links ?? []) {
        expect(link.href).toMatch(/^https?:\/\//);
        expect(link.label).toBeTruthy();
      }
    }
  });

  it("marks exactly one flagship project", () => {
    const featured = resume.projects.filter((p) => p.featured);
    expect(featured.length).toBe(1);
  });
});

describe("navigation config", () => {
  it("has unique section ids", () => {
    const ids = NAV_ITEMS.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every nav item a label", () => {
    expect(NAV_ITEMS.every((item) => item.label.length > 0)).toBe(true);
  });
});
