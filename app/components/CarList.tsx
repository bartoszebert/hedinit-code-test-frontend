"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ICarItem } from "../interfaces/ICarItem";
import Filter from "./Filter";
import CarListItem from "./CarListItem";

interface ICarListProps {
  carList: ICarItem[];
}

type TVehicleType = "PB" | "SU";

const CarList = ({ carList }: ICarListProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const filter = params.get("filter");

  const [carItems, setCarItems] = useState<ICarItem[]>([]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const filterValue =
      value === "-- Select Filter --" ? null : (value as TVehicleType);

    if (!filterValue) {
      router.push("/");
    } else {
      router.push(`?filter=${filterValue}`);
    }
  };

  useEffect(() => {
    const filteredItems = filter
      ? carList.filter((car) => car.vehicleType === filter)
      : carList;

    setCarItems(filteredItems);
  }, [filter, carList]);

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} />

      <div className="grid lg:grid-cols-3 gap-5">
        {carItems.map((car) => (
          <CarListItem car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
