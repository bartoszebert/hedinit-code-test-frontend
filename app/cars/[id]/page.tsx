import { getCarDetails, getCars } from "@/app/utils/get-car-data";
import Link from "next/link";

export async function generateStaticParams() {
  const cars = await getCars();

  return cars.map((car) => ({
    slug: `@${car.link.href}`,
  }));
}

const CarPage = async ({ params }: { params: { id: string } }) => {
  const carSlug = `/cars/${params.id}`;
  const carDetails = await getCarDetails(carSlug)!;

  return (
    <div className="flex min-h-screen flex-col items-center p-24 prose-sm">
      <h1>Car: {carDetails?.title}</h1>
      <Link href="/">Back to cars</Link>
    </div>
  );
};

export default CarPage;
