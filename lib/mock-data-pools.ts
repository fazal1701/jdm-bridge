import type { ShippingPool } from "./types";

export const mockShippingPools: ShippingPool[] = [
  {
    id: "pool-1",
    name: "Q2 2024 - West Coast",
    departurePort: "Yokohama",
    arrivalPort: "Long Beach",
    departureDate: "2024-04-05",
    arrivalDate: "2024-04-19",
    capacity: 24,
    filled: 8,
    status: "filling",
    costPerVehicle: 1100,
    savingsVsSingle: 5300,
  },
  {
    id: "pool-2",
    name: "Q2 2024 - East Coast",
    departurePort: "Yokohama",
    arrivalPort: "New York",
    departureDate: "2024-04-10",
    arrivalDate: "2024-05-02",
    capacity: 24,
    filled: 15,
    status: "filling",
    costPerVehicle: 1200,
    savingsVsSingle: 5200,
  },
  {
    id: "pool-3",
    name: "Q2 2024 - Canada West",
    departurePort: "Yokohama",
    arrivalPort: "Vancouver",
    departureDate: "2024-04-08",
    arrivalDate: "2024-04-22",
    capacity: 24,
    filled: 22,
    status: "filling",
    costPerVehicle: 1050,
    savingsVsSingle: 5350,
  },
];

