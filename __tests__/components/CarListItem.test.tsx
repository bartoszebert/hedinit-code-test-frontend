import { fireEvent, render, screen } from "@testing-library/react";
import CarListItem from "@/app/components/CarListItem"; // Adjust the import path as necessary
import { ICarItem } from "@/app/interfaces/ICarItem";
import { AppRouterContextProviderMock } from "../utils/app-router-context-provider-mock";

const mockCar: ICarItem = {
  id: "1",
  link: { href: "/cars/1", title: "link one" },
  vehicleType: "PB",
  brand: "Toyota",
  title: "Corolla",
};

describe("CarListItem", () => {
  describe("Render", () => {
    it("shows correctly the brand", () => {
      render(<CarListItem car={mockCar} />);
      const brandElement = screen.getByText(mockCar.brand);
      expect(brandElement).toBeInTheDocument();
    });

    it("shows correctly the title element", () => {
      render(<CarListItem car={mockCar} />);
      const titleElement = screen.getByText(mockCar.title);
      expect(titleElement).toBeInTheDocument();
    });

    it("shows correctly the type element", () => {
      render(<CarListItem car={mockCar} />);
      const typeElement = screen.getByText(`Car Type: ${mockCar.vehicleType}`);
      expect(typeElement).toBeInTheDocument();
    });

    it("shows correctly the link element", () => {
      render(<CarListItem car={mockCar} />);
      const linkElement = screen.getByRole("link", {
        name: mockCar.link.title,
      });
      expect(linkElement).toBeInTheDocument();
    });

    it("navigates to the correct link", () => {
      render(<CarListItem car={mockCar} />);
      const linkElement = screen.getByRole("link", {
        name: mockCar.link.title,
      });
      expect(linkElement).toHaveAttribute("href", mockCar.link.href);
    });

    it("shows the correct image alt text", () => {
      render(<CarListItem car={mockCar} />);
      const imageElement = screen.getByRole("img");
      expect(imageElement).toHaveAttribute("alt", mockCar.title);
    });
  });
  
  describe("Behavior", () => {
    it("fires the correct event when clicking the link", () => {
      const push = jest.fn();
      render(
        <AppRouterContextProviderMock router={{ push }}>
          <CarListItem car={mockCar} />
        </AppRouterContextProviderMock>
      );
      const linkElement = screen.getByRole("link", {
        name: mockCar.link.title,
      });

      fireEvent.click(linkElement);
      expect(push).toHaveBeenCalledWith(mockCar.link.href, { scroll: true });
    });
  });
});
