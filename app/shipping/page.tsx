"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Ship,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  TrendingUp,
  User,
  Package,
  ArrowUp,
  CheckCircle2,
} from "lucide-react";
import { mockShippingPools } from "@/lib/mock-data-pools";
import { formatCurrency } from "@/lib/formatting";

type TabType = "active" | "routes" | "calculator";

export default function ShippingPage() {
  const [activeTab, setActiveTab] = useState<TabType>("active");
  const [departureFilter, setDepartureFilter] = useState("all");
  const [arrivalFilter, setArrivalFilter] = useState("all");
  const [quarterFilter, setQuarterFilter] = useState("all");

  const avgSavings = 350;
  const totalShipped = 2500;
  const avgTransit = 21;

  const filteredPools = mockShippingPools.filter((pool) => {
    if (departureFilter !== "all" && pool.departurePort !== departureFilter) return false;
    if (arrivalFilter !== "all" && pool.arrivalPort !== arrivalFilter) return false;
    if (quarterFilter !== "all" && pool.quarter !== quarterFilter) return false;
    return true;
  });

  const allDeparturePorts = Array.from(
    new Set(mockShippingPools.map((p) => p.departurePort))
  ).sort();
  const allArrivalPorts = Array.from(
    new Set(mockShippingPools.map((p) => p.arrivalPort))
  ).sort();
  const allQuarters = Array.from(
    new Set(mockShippingPools.map((p) => p.quarter).filter(Boolean))
  ).sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero Header with Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Quarterly Shipping Pools</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Save thousands on ocean freight by joining our consolidated quarterly shipments. Over
            2,500 vehicles shipped successfully with average savings of $350 per vehicle.
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-black mb-1">{formatCurrency(avgSavings)}</div>
              <div className="text-blue-200 text-sm">Avg. Savings</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-1">{totalShipped}+</div>
              <div className="text-blue-200 text-sm">Cars Shipped</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-1">{avgTransit}</div>
              <div className="text-blue-200 text-sm">Days Transit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Success Stories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Recent Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-200 overflow-hidden">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1594987355808-fcf52a7b4e38?w=800&q=80"
                  alt="Nissan Skyline R34 GT-R"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                  Saved $420
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    DC
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">David Chen</div>
                    <div className="text-sm text-gray-600">Toronto, Canada</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  1999 Nissan Skyline R34 GT-R V-Spec
                </h3>
                <p className="text-gray-600 mb-4">
                  Found my dream R34 through USS Tokyo auction. Agent Hiroshi helped verify the
                  auction sheet - genuine 47k km, all original. Shipping pool saved me $420
                  compared to individual shipping!
                </p>
                <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-gray-600">Total Cost</div>
                    <div className="font-bold text-gray-900">{formatCurrency(1850)}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Saved</div>
                    <div className="font-bold text-green-600">{formatCurrency(420)}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Timeline</div>
                    <div className="font-bold text-gray-900">28 days total</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 overflow-hidden">
              <div className="relative h-48 bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Package className="w-16 h-16" />
                </div>
                <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                  Saved $380
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    MR
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                    <div className="text-sm text-gray-600">Los Angeles, USA</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  1993 Toyota Supra RZ Twin Turbo
                </h3>
                <p className="text-gray-600 mb-4">
                  Always wanted a Supra since I was a kid. Agent Kenji found this pristine example
                  with only 38k km. The quarterly pool system made it affordable - saved enough for
                  the first year of insurance!
                </p>
                <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-gray-600">Total Cost</div>
                    <div className="font-bold text-gray-900">{formatCurrency(1650)}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Saved</div>
                    <div className="font-bold text-green-600">{formatCurrency(380)}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Timeline</div>
                    <div className="font-bold text-gray-900">25 days total</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Quarterly Pools Work */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
            How Quarterly Pools Work
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: User,
                title: "Join a Pool",
                description: "Reserve your spot in a quarterly shipping pool for your preferred route.",
              },
              {
                icon: Package,
                title: "Pool Fills Up",
                description: "As more vehicles join, shipping costs decrease for everyone in the pool.",
              },
              {
                icon: Ship,
                title: "Consolidated Shipping",
                description: "All vehicles ship together on the same vessel at the quarterly cutoff date.",
              },
              {
                icon: DollarSign,
                title: "Save Money",
                description: "Enjoy significant savings compared to individual shipping arrangements.",
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tabs and Filters */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex gap-2 border-b border-gray-200">
              <Button
                variant={activeTab === "active" ? "default" : "ghost"}
                className={`rounded-none border-b-2 ${
                  activeTab === "active"
                    ? "border-blue-600 bg-transparent text-blue-600"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("active")}
              >
                Active Pools
              </Button>
              <Button
                variant={activeTab === "routes" ? "default" : "ghost"}
                className={`rounded-none border-b-2 ${
                  activeTab === "routes"
                    ? "border-blue-600 bg-transparent text-blue-600"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("routes")}
              >
                Routes & Ports
              </Button>
              <Button
                variant={activeTab === "calculator" ? "default" : "ghost"}
                className={`rounded-none border-b-2 ${
                  activeTab === "calculator"
                    ? "border-blue-600 bg-transparent text-blue-600"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("calculator")}
              >
                Cost Calculator
              </Button>
            </div>
            {activeTab === "active" && (
              <div className="flex flex-wrap gap-3 items-center">
                <Select value={departureFilter} onValueChange={setDepartureFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Departure Ports" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departure Ports</SelectItem>
                    {allDeparturePorts.map((port) => (
                      <SelectItem key={port} value={port}>
                        {port}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={arrivalFilter} onValueChange={setArrivalFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Arrival Ports" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Arrival Ports</SelectItem>
                    {allArrivalPorts.map((port) => (
                      <SelectItem key={port} value={port}>
                        {port}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={quarterFilter} onValueChange={setQuarterFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Quarters" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Quarters</SelectItem>
                    {allQuarters.map((quarter) => (
                      <SelectItem key={quarter} value={quarter}>
                        {quarter}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  onClick={() => {
                    setDepartureFilter("all");
                    setArrivalFilter("all");
                    setQuarterFilter("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Active Pools */}
      {activeTab === "active" && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPools.map((pool, index) => (
                <PoolCard key={pool.id} pool={pool} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function PoolCard({
  pool,
  index,
}: {
  pool: typeof mockShippingPools[0];
  index: number;
}) {
  const fillPercentage = pool.teuCapacity
    ? Math.round((pool.teuReserved || pool.filled) / pool.teuCapacity * 100)
    : Math.round((pool.filled / pool.capacity) * 100);

  const savingsPercentage = pool.savingsVsSingle
    ? Math.round((pool.savingsVsSingle / (pool.costPerVehicle + pool.savingsVsSingle)) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg h-full bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{pool.quarter || pool.name}</h3>
              <div className="text-sm text-gray-600">
                {pool.departurePort} → {pool.arrivalPort}
              </div>
            </div>
            <Badge
              className={
                pool.status === "filling" && fillPercentage > 80
                  ? "bg-green-600 text-white"
                  : pool.status === "filling"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-600 text-white"
              }
            >
              {pool.status === "filling" && fillPercentage > 80
                ? "Filling Fast"
                : pool.status === "filling"
                ? "Open"
                : pool.status}
            </Badge>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-700 font-medium">Pool Utilization</span>
              <span className="font-bold text-gray-900">{fillPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {pool.teuReserved || pool.filled} of {pool.teuCapacity || pool.capacity} TEU reserved
              {pool.participants && ` - ${pool.participants} participants`}
            </div>
          </div>

          {pool.recentAdditions && pool.recentAdditions.length > 0 && (
            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">Recent Additions:</div>
              <ul className="space-y-1">
                {pool.recentAdditions.slice(0, 3).map((vehicle, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    {vehicle}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-3 mb-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Current Cost</span>
              <span className="text-lg font-black text-gray-900">
                {formatCurrency(pool.costPerVehicle)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">You Save</span>
              <span className="text-lg font-black text-green-600">
                {formatCurrency(pool.savingsVsSingle)}
                {savingsPercentage > 0 && ` (${savingsPercentage}%)`}
              </span>
            </div>
          </div>

          {pool.timeline && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm font-semibold text-gray-700 mb-2">Detailed Timeline:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-600">Inspection:</span>{" "}
                  <span className="font-semibold">{pool.timeline.inspection} days</span>
                </div>
                <div>
                  <span className="text-gray-600">Loading:</span>{" "}
                  <span className="font-semibold">{pool.timeline.loading} days</span>
                </div>
                <div>
                  <span className="text-gray-600">Transit:</span>{" "}
                  <span className="font-semibold">{pool.timeline.transit} days</span>
                </div>
                <div>
                  <span className="text-gray-600">Customs:</span>{" "}
                  <span className="font-semibold">{pool.timeline.customs} days</span>
                </div>
              </div>
            </div>
          )}

          <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
            <Link href={`/shipping/${pool.id}`}>Join This Pool</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
