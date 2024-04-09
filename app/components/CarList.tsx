import Link from "next/link";
import { ICarItem } from "../interfaces/ICarItem";
import { getCars } from "../utils/get-car-data";
import Image from "next/image";

const CarList = async () => {
  const carItems: ICarItem[] = await getCars();

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {carItems.map((car) => (
        <Link
          href={car.link.href}
          className="flex flex-col min-w-[280px] bg-white pb-8 shadow-xl ring-1 ring-gray-900/5"
          key={car.id}
        >
          <div className="w-full h-[200px] relative">
            <Image
              className="w-full h-auto object-cover"
              src="/carimage.jpg"
              alt={car.title}
              fill={true}
              priority={true}
              sizes="300px"
            />
          </div>
          <div className="px-6">
            <h3>{car.link.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CarList;
