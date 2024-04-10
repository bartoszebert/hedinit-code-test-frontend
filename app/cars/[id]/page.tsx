import { getCarDetails, getCars } from "@/app/utils/get-car-data";
import Link from "next/link";

export async function generateStaticParams() {
  const cars = await getCars();

  return cars.map((car) => ({
    slug: `@${car.link.href}`,
  }));
}

const CarDetailsPage = async ({ params }: { params: { id: string } }) => {
  const carSlug = `/cars/${params.id}`;
  const carDetails = await getCarDetails(carSlug)!;

  return (
    <div className="flex flex-col items-center p-5 lg:p-24 prose-sm">
      <h1 className="text-xl sm:text-3xl text-center">Car: {carDetails?.title}</h1>
      <Link className="bg-yellow-300 p-2 mt-3 p-2 px-4" href="/">
        Back to cars
      </Link>
    </div>
  );
};

export default CarDetailsPage;
