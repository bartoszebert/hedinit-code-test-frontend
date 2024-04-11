import { fireEvent, render, screen } from "@testing-library/react";
import AppLink from "@/app/components/AppLink";
import { AppRouterContextProviderMock } from "../utils/app-router-context-provider-mock";

const mockLink = {
  href: "/",
  title: "Home",
};

describe("AppLink", () => {
  describe("Render", () => {
    it("renders without crashing when passed full link data", () => {
      render(<AppLink {...mockLink} />);
      const linkElement = screen.getByRole("link");
      expect(linkElement).toBeInTheDocument();
    });

    it("renders without crashing when passed no href", () => {
      render(<AppLink title={mockLink.title} />);
      const pElement = screen.getByText("Unavailable");
      expect(pElement).toBeInTheDocument();
    });

    it("renders without crashing when passed no href and no title", () => {
      render(<AppLink />);
      const pElement = screen.getByText("Unavailable");
      expect(pElement).toBeInTheDocument();
    });

    it("renders without crashing when passed no title", () => {
      render(<AppLink href={mockLink.href} />);
      const linkElement = screen.getByRole("link");
      const defaultTitle = screen.getByText("View Details");
      expect(linkElement).toBeInTheDocument();
      expect(defaultTitle).toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("navigates to the correct link", () => {
      render(<AppLink {...mockLink} />);
      const linkElement = screen.getByRole("link");
      expect(linkElement).toHaveAttribute("href", mockLink.href);
    });

    it("fires the correct event when clicking the link", () => {
      const push = jest.fn();
      render(
        <AppRouterContextProviderMock router={{ push }}>
          <AppLink {...mockLink} />
        </AppRouterContextProviderMock>
      );
      const linkElement = screen.getByRole("link", {
        name: mockLink.title,
      });

      fireEvent.click(linkElement);
      expect(push).toHaveBeenCalledWith(mockLink.href, { scroll: true });
    });
  });
});
