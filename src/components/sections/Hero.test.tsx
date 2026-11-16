import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/Hero";
import { resume } from "@/data/resume";

describe("<Hero />", () => {
  it("renders the candidate name as the top-level heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(resume.profile.name);
  });

  it("renders a stat chip for every highlight", () => {
    render(<Hero />);
    for (const highlight of resume.profile.highlights) {
      expect(screen.getByText(highlight.label)).toBeInTheDocument();
    }
  });

  it("links the primary CTA to the projects section", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: /view projects/i });
    expect(cta).toHaveAttribute("href", "#projects");
  });

  it("exposes an email contact action", () => {
    render(<Hero />);
    const mail = screen.getByRole("link", { name: /get in touch/i });
    expect(mail).toHaveAttribute("href", `mailto:${resume.profile.email}`);
  });

  it("offers a downloadable résumé with the configured filename", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /download résumé/i });
    expect(link).toHaveAttribute("href", resume.profile.resumeUrl);
    expect(link).toHaveAttribute("download", resume.profile.resumeFileName);
  });
});
