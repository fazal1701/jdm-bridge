import type { CostBreakdown } from "./types/order.types";

interface CalculatorInputs {
  vehiclePrice: number;
  destination: "usa" | "canada";
  state?: string;
  usePool: boolean;
  poolCost?: number;
}

export function calculateCost(inputs: CalculatorInputs): CostBreakdown {
  const {
    vehiclePrice,
    destination,
    usePool,
    poolCost = 1100,
  } = inputs;

  // Base calculations
  const japanExportFee = vehiclePrice * 0.18;
  const shipping = usePool ? poolCost : 6400;
  const portFees = 400;
  const customsBrokerage = 300;
  const importDuty = vehiclePrice * 0.12;
  const registration = destination === "canada" ? 350 : 350;
  const taxRate = destination === "canada" ? 0.13 : 0.08; // GST/PST or sales tax
  const taxes = (vehiclePrice + japanExportFee + importDuty) * taxRate;

  const total =
    vehiclePrice +
    japanExportFee +
    shipping +
    portFees +
    customsBrokerage +
    importDuty +
    registration +
    taxes;

  return {
    vehicleCost: vehiclePrice,
    japanExportFee,
    shipping,
    portFees,
    customsBrokerage,
    importDuty,
    registration,
    taxes,
    total,
    savingsVsLocal: 0, // Calculate separately based on market data
  };
}

export function calculatePoolFill(filled: number, capacity: number): number {
  return Math.round((filled / capacity) * 100);
}

export function calculatePoolSavings(
  singleShipmentCost: number,
  poolCost: number
): number {
  return singleShipmentCost - poolCost;
}

