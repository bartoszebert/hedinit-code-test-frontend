import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "@/app/components/Filter";

const mockHandleFilterChange = jest.fn();

describe("Filter", () => {
  it("renders without crashing", () => {
    render(<Filter handleFilterChange={mockHandleFilterChange} />);

    const filterLabel = screen.getByText("Filter:");
    const combobox = screen.getByRole("combobox");

    expect(filterLabel).toBeInTheDocument();
    expect(combobox).toBeInTheDocument();
  });

  it("calls handleFilterChange on selecting an option", () => {
    render(<Filter handleFilterChange={mockHandleFilterChange} />);

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "PB" } });

    expect(mockHandleFilterChange).toHaveBeenCalledTimes(1);
  });
});
