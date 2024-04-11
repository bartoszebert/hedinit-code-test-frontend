import {
  render,
  screen,
  within,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRouterContextProviderMock } from "../utils/app-router-context-provider-mock";
import CarList from "@/app/components/CarList";
import { jest } from "@jest/globals";
import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";

const mockCarList = [
  {
    id: "f589f424-9015-43b5-97aa-54ffbe8773b2",
    link: {
      href: "/cars/14",
      title: "Car14",
    },
    title: "Bugatti Chiron Sport 280",
    brand: "Bugatti",
    vehicleType: "PB",
  },
  {
    id: "8210b77e-f634-4ac3-b3c5-2a4fc0c5d30a",
    link: {
      href: "/cars/15",
      title: "Car15",
    },
    title: "Bentley Continental GT 300",
    brand: "Bentley",
    vehicleType: "SU",
  },
  {
    id: "cd3688a0-95d4-42b2-a6f5-9c0dc5e6a045",
    link: {
      href: "/cars/16",
      title: "Car16",
    },
    title: "Rolls-Royce Phantom 320",
    brand: "Rolls-Royce",
    vehicleType: "PB",
  },
  {
    id: "f21ab249-2b0c-43da-bf44-79a7e7de1614",
    link: {
      href: "/cars/17",
      title: "Car17",
    },
    title: "Aston Martin DBS Superleggera 340",
    brand: "Aston Martin",
    vehicleType: "PB",
  },
  {
    id: "28be99c1-d81c-4c4b-ae04-82af7eefbd50",
    link: {
      href: "/cars/18",
      title: "Car18",
    },
    title: "Maserati GranTurismo 360",
    brand: "Maserati",
    vehicleType: "SU",
  },
];

const push = jest.fn();

describe("CarList", () => {
  it("renders the correct number of CarListItem components", async () => {
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <CarList carList={mockCarList} />
      </AppRouterContextProviderMock>
    );
    const listItems = screen.getAllByRole("article");
    expect(listItems.length).toBe(mockCarList.length);
  });

  it("filters car items based on the PB filter", async () => {
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <CarList carList={mockCarList} />
      </AppRouterContextProviderMock>
    );

    const select = screen.getByRole("combobox");
    await waitFor(async () => {
      await userEvent.selectOptions(select, ["PB"]);
    });

    const filteredItems = screen.getAllByText("Car Type: PB", { exact: false });
    expect(filteredItems.length).toBe(3);
  });

  it("filters car items based on the SU filter", async () => {
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <CarList carList={mockCarList} />
      </AppRouterContextProviderMock>
    );

    const select = screen.getByRole("combobox");
    await waitFor(async () => {
      await userEvent.selectOptions(select, ["SU"]);
    });

    const filteredItems = screen.getAllByText("Car Type: SU", { exact: false });
    expect(filteredItems.length).toBe(2);
  });

  it("updates the URL based on the SU filter", async () => {
    const mockPush = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push: mockPush }}>
        <CarList carList={mockCarList} />
      </AppRouterContextProviderMock>
    );

    const select = screen.getByRole("combobox");
    await waitFor(async () => {
      await userEvent.selectOptions(select, ["SU"]);
    });

    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining("filter=SU"));
  });

  it("updates the URL based on the PB filter", async () => {
    const mockPush = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push: mockPush }}>
        <CarList carList={mockCarList} />
      </AppRouterContextProviderMock>
    );

    const select = screen.getByRole("combobox");
    await waitFor(async () => {
      await userEvent.selectOptions(select, ["PB"]);
    });

    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining("filter=PB"));
  });
});
