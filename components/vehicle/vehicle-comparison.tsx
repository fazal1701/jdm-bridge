"use client";

import { motion } from "framer-motion";
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { formatCurrency, formatNumber } from "@/lib/formatting";
import type { VehicleSummary } from "@/lib/types";

interface VehicleComparisonProps {
  vehicles: VehicleSummary[];
  onRemove: (vehicleId: string) => void;
  onClear: () => void;
}

export function VehicleComparison({
  vehicles,
  onRemove,
  onClear,
}: VehicleComparisonProps) {
  if (vehicles.length === 0) return null;

  const specs = [
    { label: "Year", key: "year" as keyof VehicleSummary },
    { label: "Make", key: "make" as keyof VehicleSummary },
    { label: "Model", key: "model" as keyof VehicleSummary },
    { label: "Mileage", key: "mileage" as keyof VehicleSummary, format: formatNumber },
    { label: "Condition", key: "condition" as keyof VehicleSummary },
    { label: "JP Price", key: "jpPrice" as keyof VehicleSummary, format: (v: number) => `¥${(v / 1000000).toFixed(1)}M` },
    { label: "Landed Cost", key: "estimatedLandedCost" as keyof VehicleSummary, format: formatCurrency },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { label: "Seller Rating", key: "seller" as keyof VehicleSummary, format: (v: any) => `${v.rating} ⭐` },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-blue-600 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-black text-gray-900">
            Comparing {vehicles.length} Vehicle{vehicles.length > 1 ? "s" : ""}
          </h3>
          <Button variant="outline" size="sm" onClick={onClear}>
            Clear All
          </Button>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="w-64 flex-shrink-0 border-2 border-gray-200">
                <CardContent className="p-4">
                  <div className="relative h-32 mb-3 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={vehicle.primaryImage || "/placeholder-car.jpg"}
                      alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => onRemove(vehicle.id)}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h4>
                  <div className="space-y-1 text-xs">
                    {specs.map((spec) => {
                      const value = vehicle[spec.key];
                      const formatted =
                        spec.format && typeof value === "number"
                          ? spec.format(value)
                          : spec.key === "seller"
                          ? spec.format(value)
                          : String(value);
                      return (
                        <div key={spec.label} className="flex justify-between">
                          <span className="text-gray-600">{spec.label}:</span>
                          <span className="font-semibold text-gray-900">{formatted}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
            {vehicles.length < 4 && (
              <Card className="w-64 flex-shrink-0 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <CardContent className="p-4 text-center">
                  <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Add more vehicles to compare</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

