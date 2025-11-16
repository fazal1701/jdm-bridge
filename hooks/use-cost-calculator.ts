"use client";

import { useMemo } from "react";
import { calculateCost } from "@/lib/calculator";
import type { CostBreakdown } from "@/lib/types";

interface UseCostCalculatorInputs {
  vehiclePrice: number;
  destination: "usa" | "canada";
  state?: string;
  usePool: boolean;
  poolCost?: number;
}

export function useCostCalculator(inputs: UseCostCalculatorInputs): CostBreakdown {
  return useMemo(() => {
    return calculateCost(inputs);
  }, [inputs.vehiclePrice, inputs.destination, inputs.usePool, inputs.poolCost]);
}

