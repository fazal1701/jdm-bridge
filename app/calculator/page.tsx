"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calculator, DollarSign, Ship, Shield, Clock, CheckCircle2, X } from "lucide-react";
import { formatCurrency } from "@/lib/formatting";
import { calculateCost } from "@/lib/calculator";
import { ImportTimeline } from "@/components/calculator/import-timeline";
import { CurrencyConverter } from "@/components/ui/currency-converter";

export default function CalculatorPage() {
  const [vehiclePrice, setVehiclePrice] = useState(50000);
  const [vehicleYear, setVehicleYear] = useState(1999);
  const [vehicleType, setVehicleType] = useState("sports");
  const [destination, setDestination] = useState<"usa" | "canada">("usa");
  const [originPort, setOriginPort] = useState("kobe");
  const [destinationPort, setDestinationPort] = useState("seattle");
  const [usePool] = useState(true);
  const [poolCost] = useState(1100);
  const [dutyPercent, setDutyPercent] = useState(2.5);

  const breakdown = calculateCost({
    vehiclePrice,
    destination,
    state: "wa",
    usePool,
    poolCost,
  });
  const vehiclePriceUSD = vehiclePrice;
  const exportFee = 600;
  const oceanFreight = usePool ? poolCost : 1232;
  const duty = vehiclePriceUSD * (dutyPercent / 100);
  const docsPort = 350;
  const totalEst = vehiclePriceUSD + exportFee + oceanFreight + duty + docsPort;

  const isUSEligible = vehicleYear <= 1999;
  const isCanadaEligible = vehicleYear <= 2009;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Import Cost Calculator</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get an accurate estimate of your total import costs including shipping, duties, and
            fees. See how much you can save with our quarterly shipping pools.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Vehicle & Shipping Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-2 border-gray-200 shadow-lg h-full">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Vehicle & Shipping Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Price (USD)
                    </label>
                    <Input
                      type="number"
                      value={vehiclePrice}
                      onChange={(e) => setVehiclePrice(parseFloat(e.target.value) || 0)}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Year
                    </label>
                    <Input
                      type="number"
                      value={vehicleYear}
                      onChange={(e) => setVehicleYear(parseInt(e.target.value) || 1999)}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Type
                    </label>
                    <Select value={vehicleType} onValueChange={setVehicleType}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sports">Sports Car</SelectItem>
                        <SelectItem value="classic">Classic Car</SelectItem>
                        <SelectItem value="daily">Daily Driver</SelectItem>
                        <SelectItem value="truck">Truck/Van</SelectItem>
                        <SelectItem value="luxury">Luxury Vehicle</SelectItem>
                      </SelectContent>
                    </Select>
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
                        <SelectItem value="usa">United States (25-year rule)</SelectItem>
                        <SelectItem value="canada">Canada (15-year rule)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Origin Port (Japan)
                    </label>
                    <Select value={originPort} onValueChange={setOriginPort}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select origin port" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kobe">Kobe</SelectItem>
                        <SelectItem value="yokohama">Yokohama</SelectItem>
                        <SelectItem value="tokyo">Tokyo</SelectItem>
                        <SelectItem value="osaka">Osaka</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Destination Port
                    </label>
                    <Select value={destinationPort} onValueChange={setDestinationPort}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select destination port" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seattle">Seattle</SelectItem>
                        <SelectItem value="losangeles">Los Angeles</SelectItem>
                        <SelectItem value="vancouver">Vancouver</SelectItem>
                        <SelectItem value="newyork">New York</SelectItem>
                        <SelectItem value="toronto">Toronto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
                    size="lg"
                  >
                    Calculate Import Costs
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cost Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-2 border-blue-200 shadow-lg bg-gradient-to-br from-blue-50 to-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-black flex items-center gap-2">
                    <Calculator className="w-6 h-6" />
                    Cost Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <CostItem label="Vehicle price" value={vehiclePriceUSD} />
                    <CostItem label="Export fee" value={exportFee} />
                    <CostItem label="Ocean freight" value={oceanFreight} />
                    <div className="flex items-center gap-2">
                      <label className="text-sm text-gray-700 flex-1">Duty %</label>
                      <Input
                        type="number"
                        value={dutyPercent}
                        onChange={(e) => setDutyPercent(parseFloat(e.target.value) || 2.5)}
                        className="w-20 h-8 border-green-500"
                        step="0.1"
                      />
                    </div>
                    <CostItem label="Duty" value={duty} />
                    <CostItem label="Docs/Port" value={docsPort} />
                  </div>
                  <div className="border-t-2 border-blue-300 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black text-gray-900">Total (est.)</span>
                      <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        {formatCurrency(totalEst)}
                      </span>
                    </div>
                  </div>
                  {usePool && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800">
                        <strong>You&apos;re saving {formatCurrency(breakdown.savingsVsLocal || 0)}</strong> by
                        using a shipping pool!
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Info Cards */}
            <div className="space-y-6">
              {/* Shipping Pools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-2 border-gray-200 shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Ship className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold">Shipping Pools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Our quarterly shipping pools consolidate multiple vehicles into shared
                      containers, reducing costs by up to 60% compared to individual shipping.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Next Departure:</span>{" "}
                        <span className="font-semibold">March 15, 2024</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Available Spots:</span>{" "}
                        <Badge className="bg-green-600 text-white ml-2">12 remaining</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Import Eligibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="border-2 border-gray-200 shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold">Import Eligibility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Vehicles must meet age requirements for legal import. We handle all compliance
                      verification and documentation.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        {isUSEligible ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <X className="w-5 h-5 text-red-600" />
                        )}
                        <span>
                          <strong>US (25-year rule):</strong> {vehicleYear <= 1999 ? "Eligible" : "Not eligible"} (1999 and older)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {isCanadaEligible ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <X className="w-5 h-5 text-red-600" />
                        )}
                        <span>
                          <strong>Canada (15-year rule):</strong> {vehicleYear <= 2009 ? "Eligible" : "Not eligible"} (2009 and older)
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ImportTimeline
                  startDate={new Date()}
                  estimatedDelivery={new Date(Date.now() + 10 * 7 * 24 * 60 * 60 * 1000)}
                />
              </motion.div>

              {/* Currency Converter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <CurrencyConverter
                  initialAmount={vehiclePrice}
                  fromCurrency="USD"
                  toCurrency="JPY"
                />
              </motion.div>
            </div>
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

