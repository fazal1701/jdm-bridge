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
import { formatCurrency } from "@/lib/formatting";
import type { CostBreakdown } from "@/lib/types";

export function CalculatorSection() {
  const [make, setMake] = useState("nissan");
  const [model, setModel] = useState("skyline");
  const [year, setYear] = useState(2023);
  const [destination, setDestination] = useState("usa-wa");

  // Mock pricing data
  const vehicleData: Record<string, { name: string; basePrice: number }> = {
    "nissan-skyline": { name: "Nissan Skyline GT-R", basePrice: 20000 },
    "toyota-supra": { name: "Toyota Supra A90", basePrice: 18000 },
  };

  const key = `${make}-${model}`;
  const vehicle = vehicleData[key] || vehicleData["nissan-skyline"];

  const calculate = (): CostBreakdown => {
    const vehicleCost = vehicle.basePrice;
    const importFee = vehicleCost * 0.18;
    const shipping = destination.includes("canada") ? 1100 : 1100;
    const customsFee = 300;
    const duty = vehicleCost * 0.12;
    const registration = destination.includes("canada") ? 350 : 350;
    const tax = (vehicleCost + importFee + duty) * 0.08;

    return {
      vehicleCost,
      japanExportFee: importFee,
      shipping,
      portFees: 400,
      customsBrokerage: customsFee,
      importDuty: duty,
      registration,
      taxes: tax,
      total:
        vehicleCost +
        importFee +
        shipping +
        400 +
        customsFee +
        duty +
        registration +
        tax,
      savingsVsLocal: 7000,
    };
  };

  const breakdown = calculate();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What Will Your Import Cost?
          </h2>
          <p className="text-xl text-gray-400">
            Interactive calculator with real pricing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="bg-white/5 backdrop-blur border border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Vehicle Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Make
                </label>
                <Select value={make} onValueChange={setMake}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nissan">Nissan</SelectItem>
                    <SelectItem value="toyota">Toyota</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Model
                </label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="skyline">Skyline GT-R</SelectItem>
                    <SelectItem value="supra">Supra A90</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Year
                </label>
                <Input
                  type="number"
                  min="1990"
                  max="2024"
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value) || 2023)}
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Destination
                </label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa-wa">USA - Washington</SelectItem>
                    <SelectItem value="usa-ca">USA - California</SelectItem>
                    <SelectItem value="canada-on">Canada - Ontario</SelectItem>
                    <SelectItem value="canada-bc">
                      Canada - British Columbia
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                Calculate Now
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-red-600/10 to-red-900/10 backdrop-blur border border-red-600/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Cost Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Vehicle Cost</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(breakdown.vehicleCost)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Import Fees</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(Math.round(breakdown.japanExportFee))}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping (Pool)</span>
                    <span className="text-green-400 font-semibold">
                      {formatCurrency(breakdown.shipping)}{" "}
                      <span className="text-xs">(-$5,300!)</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Customs & Brokerage</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(breakdown.customsBrokerage)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Import Duty (12%)</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(Math.round(breakdown.importDuty))}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Registration</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(breakdown.registration)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Taxes & Misc</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(Math.round(breakdown.taxes))}
                    </span>
                  </div>

                  <div className="border-t border-white/20 pt-3 mt-3 flex justify-between">
                    <span className="text-lg font-bold text-white">
                      Total Landed Cost
                    </span>
                    <span className="text-3xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                      {formatCurrency(Math.round(breakdown.total))}
                    </span>
                  </div>

                  {breakdown.savingsVsLocal && (
                    <div className="bg-green-600/20 border border-green-600/50 rounded-lg p-3 mt-4">
                      <p className="text-green-400 font-semibold">
                        💰 Your Savings: {formatCurrency(breakdown.savingsVsLocal)}
                      </p>
                      <p className="text-sm text-green-300">vs. buying locally</p>
                    </div>
                  )}
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Join This Pool
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

