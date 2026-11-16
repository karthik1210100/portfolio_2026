import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/layout/Navbar";
import { NAV_ITEMS } from "@/config/navigation";

describe("<Navbar />", () => {
  it("renders a link for every configured nav item", () => {
    render(<Navbar />);
    for (const item of NAV_ITEMS) {
      // label appears in both desktop and (hidden) mobile lists; getAllByRole
      const links = screen.getAllByRole("link", { name: item.label });
      expect(links.length).toBeGreaterThanOrEqual(1);
      expect(links[0]).toHaveAttribute("href", `#${item.id}`);
    }
  });

  it("provides a theme toggle button", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("button", { name: /switch to (light|dark) theme/i }),
    ).toBeInTheDocument();
  });
});
