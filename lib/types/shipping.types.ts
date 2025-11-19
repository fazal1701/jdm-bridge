// Shipping domain types

export interface ShippingPool {
  id: string;
  name: string;
  quarter?: string;
  departurePort: string;
  arrivalPort: string;
  departureDate: string;
  arrivalDate: string;
  capacity: number;
  filled: number;
  teuReserved?: number;
  teuCapacity?: number;
  participants?: number;
  status: "open" | "filling" | "closed" | "in_transit" | "arrived";
  costPerVehicle: number;
  savingsVsSingle: number;
  recentAdditions?: string[];
  timeline?: {
    inspection: number;
    loading: number;
    transit: number;
    customs: number;
  };
}


