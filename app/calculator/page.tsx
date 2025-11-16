"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calculator, DollarSign, Ship, FileText } from "lucide-react";
import { formatCurrency } from "@/lib/formatting";
import { calculateCost } from "@/lib/calculator";
import type { CostBreakdown } from "@/lib/types";

export default function CalculatorPage() {
  const [vehiclePrice, setVehiclePrice] = useState(20000);
  const [destination, setDestination] = useState<"usa" | "canada">("usa");
  const [state, setState] = useState("wa");
  const [usePool, setUsePool] = useState(true);
  const [poolCost, setPoolCost] = useState(1100);

  const breakdown = calculateCost({
    vehiclePrice,
    destination,
    state,
    usePool,
    poolCost,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-3">
            <Calculator className="w-10 h-10" />
            Cost Calculator
          </h1>
          <p className="text-xl text-blue-100">
            Estimate the total cost of importing your dream JDM car
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-2 border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-black">Vehicle Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Price (JPY)
                    </label>
                    <Input
                      type="number"
                      value={vehiclePrice}
                      onChange={(e) => setVehiclePrice(parseFloat(e.target.value) || 0)}
                      className="h-12"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Enter the price in Japanese Yen
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Destination Country
                    </label>
                    <Select
                      value={destination}
                      onValueChange={(value) => setDestination(value as "usa" | "canada")}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {destination === "usa" && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        State
                      </label>
                      <Select value={state} onValueChange={setState}>
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wa">Washington</SelectItem>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div>
                    <label className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        checked={usePool}
                        onChange={(e) => setUsePool(e.target.checked)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-semibold text-gray-700">
                        Use Shipping Pool (Save $5,300)
                      </span>
                    </label>
                    {usePool && (
                      <Input
                        type="number"
                        value={poolCost}
                        onChange={(e) => setPoolCost(parseFloat(e.target.value) || 0)}
                        className="h-12 mt-2"
                        placeholder="Pool cost per vehicle"
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cost Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-black flex items-center gap-2">
                    <DollarSign className="w-6 h-6" />
                    Cost Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <CostItem label="Vehicle Cost" value={breakdown.vehicleCost} />
                    <CostItem label="Japan Export Fee" value={breakdown.japanExportFee} />
                    <CostItem label="Shipping" value={breakdown.shipping} />
                    <CostItem label="Port Fees" value={breakdown.portFees} />
                    <CostItem label="Customs Brokerage" value={breakdown.customsBrokerage} />
                    <CostItem label="Import Duty" value={breakdown.importDuty} />
                    <CostItem label="Registration" value={breakdown.registration} />
                    <CostItem label="Taxes" value={breakdown.taxes} />
                  </div>
                  <div className="border-t-2 border-blue-300 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black text-gray-900">Total</span>
                      <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        {formatCurrency(breakdown.total)}
                      </span>
                    </div>
                  </div>
                  {usePool && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800">
                        <strong>You&apos;re saving ${(6400 - breakdown.shipping).toLocaleString()}</strong> by
                        using a shipping pool!
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Ship,
                title: "Shipping Options",
                description: "Choose between single shipment or join a pool to save",
              },
              {
                icon: FileText,
                title: "All Fees Included",
                description: "Our calculator includes all import fees and taxes",
              },
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                description: "No hidden costs, see exactly what you'll pay",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-2 border-gray-200 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function CostItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200">
      <span className="text-gray-700">{label}</span>
      <span className="font-semibold text-gray-900">{formatCurrency(value)}</span>
    </div>
  );
}

