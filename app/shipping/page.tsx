"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, MapPin, Calendar, DollarSign, Users, TrendingUp } from "lucide-react";
import { mockShippingPools } from "@/lib/mock-data-pools";
import { formatCurrency } from "@/lib/formatting";

export default function ShippingPage() {
  const activePools = mockShippingPools.filter((p) => p.status === "filling");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-3">
            <Ship className="w-10 h-10" />
            Shipping Pools
          </h1>
          <p className="text-xl text-blue-100">
            Save up to $5,300 by joining a shipping pool
          </p>
        </div>
      </section>

      {/* Active Pools */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Active Pools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activePools.map((pool, index) => (
              <PoolCard key={pool.id} pool={pool} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
            How Shipping Pools Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Join a Pool",
                description: "Find a pool heading to your port and reserve your spot",
                icon: Users,
              },
              {
                title: "Save Money",
                description: "Split shipping costs with other buyers and save thousands",
                icon: DollarSign,
              },
              {
                title: "Track Together",
                description: "Monitor your shipment alongside other pool members",
                icon: Ship,
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
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
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
  const fillPercentage = Math.round((pool.filled / pool.capacity) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg h-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900">{pool.name}</h3>
            <Badge
              className={
                pool.status === "filling"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-600 text-white"
              }
            >
              {pool.status}
            </Badge>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">
                {pool.departurePort} → {pool.arrivalPort}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">
                Departs: {new Date(pool.departureDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">
                Arrives: {new Date(pool.arrivalDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Pool Capacity</span>
              <span className="text-sm font-bold text-blue-600">
                {pool.filled}/{pool.capacity}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
          </div>

          <div className="space-y-2 mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Cost per Vehicle</span>
              <span className="text-lg font-black text-green-600">
                {formatCurrency(pool.costPerVehicle)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">You Save</span>
              <span className="text-lg font-black text-green-600">
                {formatCurrency(pool.savingsVsSingle)}
              </span>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
            <Link href={`/shipping/${pool.id}`}>Join Pool</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

