import { ICarItem } from "../interfaces/ICarItem";
import { getCars } from "../utils/get-car-data";
import CarList from "./CarList";

const CarListWrapper = async () => {
  const carItems: ICarItem[] = await getCars();
  
  return <CarList carList={carItems} />
};

export default CarListWrapper;
