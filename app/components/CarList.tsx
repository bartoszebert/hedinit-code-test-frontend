import { getCars } from "../utils/get-car-data";
import Image from "next/image";

interface ICarItem {
  id: string;
  link: {
    href: string;
    title: string;
  };
  title: string;
  brand: string;
  vehicleType: string;
}

const CarList = async () => {
  const carItems: ICarItem[] = await getCars();

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {carItems.map((car) => (
        <div
          className="flex flex-col min-w-[280px] bg-white pb-8 shadow-xl ring-1 ring-gray-900/5"
          key={car.id}
        >
          <div className="w-full h-[200px] relative">
            <Image className="w-full h-auto" objectFit="cover" src="/carimage.jpg" alt={car.title} fill={true} />
          </div>
          <div className="px-6">
            <h3>{car.link.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
