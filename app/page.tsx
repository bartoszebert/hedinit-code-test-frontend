import CarList from "./components/CarList";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CarList />
    </main>
  );
};

export default HomePage;
