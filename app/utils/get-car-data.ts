const mockCarData = {
  cars: [
    {
      id: "2cf6bb4e-11e1-4d9e-bb10-1773271aabb0",
      link: {
        href: "/cars/1",
        title: "Car1",
      },
      title: "Renault Austral Iconic esprit alpine E tech full hybrid 20",
      brand: "Renault",
      vehicleType: "PB",
    },
    {
      id: "10db34bf-01f4-4eaa-8ec9-cf5c7aa1080a",
      link: {
        href: "/cars/2",
        title: "Car2",
      },
      title: "Toyota Corolla LE 40",
      brand: "Toyota",
      vehicleType: "PB",
    },
    {
      id: "6b6b9b8d-4b59-48cd-8c80-d7c6ee92a1ad",
      link: {
        href: "/cars/3",
        title: "Car3",
      },
      title: "Honda Accord Sport 60",
      brand: "Honda",
      vehicleType: "PB",
    },
    {
      id: "38182f45-0411-4b2f-af8f-10aae98c25a5",
      link: {
        href: "/cars/4",
        title: "Car4",
      },
      title: "Ford Mustang GT 80",
      brand: "Ford",
      vehicleType: "PB",
    },
    {
      id: "ed9e295a-8d56-4373-8434-3d830c4c3ef9",
      link: {
        href: "/cars/5",
        title: "Car5",
      },
      title: "Chevrolet Camaro SS 100",
      brand: "Chevrolet",
      vehicleType: "PB",
    },
    {
      id: "9b9c6ff7-0507-4954-a3a4-15bca9b1c82e",
      link: {
        href: "/cars/6",
        title: "Car6",
      },
      title: "BMW M3 120",
      brand: "BMW",
      vehicleType: "PB",
    },
    {
      id: "50c3e897-4dc4-4d56-b12c-790d13ed6cb5",
      link: {
        href: "/cars/7",
        title: "Car7",
      },
      title: "Audi A4 140",
      brand: "Audi",
      vehicleType: "PB",
    },
    {
      id: "dfb7226b-c32f-43fb-9868-67d0f67f1243",
      link: {
        href: "/cars/8",
        title: "Car8",
      },
      title: "Mercedes-Benz E-Class 160",
      brand: "Mercedes-Benz",
      vehicleType: "PB",
    },
    {
      id: "9d2a5de2-f3c0-40e0-9125-cb8361198478",
      link: {
        href: "/cars/9",
        title: "Car9",
      },
      title: "Tesla Model S 180",
      brand: "Tesla",
      vehicleType: "PB",
    },
    {
      id: "a0c54a6a-4658-49b7-b693-9512d9171f30",
      link: {
        href: "/cars/10",
        title: "Car10",
      },
      title: "Lamborghini Aventador SVJ 200",
      brand: "Lamborghini",
      vehicleType: "PB",
    },
    {
      id: "ef1cbb7c-1e67-46f3-a479-c2e15cf7998d",
      link: {
        href: "/cars/11",
        title: "Car11",
      },
      title: "Ferrari 812 Superfast 220",
      brand: "Ferrari",
      vehicleType: "PB",
    },
    {
      id: "4b886d85-5b9d-46eb-81f5-88e1d2e2fb99",
      link: {
        href: "/cars/12",
        title: "Car12",
      },
      title: "Porsche 911 Turbo S 240",
      brand: "Porsche",
      vehicleType: "PB",
    },
    {
      id: "48d0bc2d-04e7-4455-b8d1-56403a888e8c",
      link: {
        href: "/cars/13",
        title: "Car13",
      },
      title: "McLaren 720S 260",
      brand: "McLaren",
      vehicleType: "PB",
    },
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
    {
      id: "b5c74c32-13ac-492b-8c71-7df18cc50a76",
      link: {
        href: "/cars/19",
        title: "Car19",
      },
      title: "Jaguar F-Type 380",
      brand: "Jaguar",
      vehicleType: "PB",
    },
    {
      id: "eb30dd5b-18c1-45fb-b2f1-5efacafbf63f",
      link: {
        href: "/cars/20",
        title: "Car20",
      },
      title: "Lexus LC 500 400",
      brand: "Lexus",
      vehicleType: "SU",
    },
  ],
};

export const getCars = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 200);
  });

  return mockCarData.cars;
};

export const getCarDetails = async (href: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 200);
  });

  return mockCarData.cars.find((el) => el.link.href === href);
};

export const getCarsByType = async (type: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 200);
  });

  return mockCarData.cars.find((el) => el.vehicleType === type);
};
