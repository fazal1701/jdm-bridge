// Financing calculator hook

"use client";

import { useState } from "react";
import { calculateMonthlyPayment } from "@/lib/utils/financing";

export function useFinancingCalculator(defaultPrice = 0) {
  const [vehiclePrice, setVehiclePrice] = useState(defaultPrice);
  const [downPercent, setDownPercent] = useState(10);
  const [apr, setApr] = useState(6.9);
  const [termMonths, setTermMonths] = useState(60);

  const downPayment = vehiclePrice * (downPercent / 100);

  const result = calculateMonthlyPayment({
    vehiclePrice,
    downPayment,
    apr,
    termMonths,
  });

  return {
    vehiclePrice,
    setVehiclePrice,
    downPercent,
    setDownPercent,
    apr,
    setApr,
    termMonths,
    setTermMonths,
    downPayment,
    ...result,
  };
}


