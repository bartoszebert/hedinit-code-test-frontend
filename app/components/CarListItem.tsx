import Image from "next/image";
import { ICarItem } from "../interfaces/ICarItem";
import AppLink from "./AppLink";

interface ICarListItemProps {
  car: ICarItem;
}

const CarListItem = ({ car }: ICarListItemProps) => {
  return (
    <article className="flex flex-col min-w-[280px] bg-white pb-8 shadow-xl ring-1 ring-gray-900/5">
      <div className="w-full h-[200px] relative">
        <Image
          className="w-full h-auto object-cover"
          src="/carimage.jpg"
          alt={car.title}
          fill={true}
          priority={false}
          sizes="(max-width: 599px) 100vw, 280px"
        />
      </div>
      <div className="px-3 max-w-[280px]">
        <h2 className="font-bold mt-2">{car.brand}</h2>
        <h3 className="mt-3">{car.title}</h3>
        <p>Car Type: {car.vehicleType}</p>
      </div>
      <div className="flex flex-col items-end mr-4">
        <AppLink href={car.link.href} title={car.link.title} />
      </div>
    </article>
  );
};
export default CarListItem;
