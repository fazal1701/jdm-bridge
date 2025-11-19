"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  X,
  Package,
  Ship,
  Clock,
  CheckCircle2,
  ArrowRight,
  Trash2,
  AlertCircle,
} from "lucide-react";
import { useUser } from "@/contexts/user-context";
import { mockVehicles } from "@/lib/data";
import { formatCurrency, formatNumber } from "@/lib/formatting";
import { SiteFooter } from "@/components/layout/site-footer";

type ImportStatus = "Ready for Shipping" | "At Yokohama Port" | "Awaiting Customs Clearance" | "In Transit" | "Delivered";

const statusColors: Record<ImportStatus, string> = {
  "Ready for Shipping": "bg-blue-600",
  "At Yokohama Port": "bg-yellow-600",
  "Awaiting Customs Clearance": "bg-orange-600",
  "In Transit": "bg-purple-600",
  "Delivered": "bg-green-600",
};

const statusIcons: Record<ImportStatus, typeof Package> = {
  "Ready for Shipping": Package,
  "At Yokohama Port": Ship,
  "Awaiting Customs Clearance": AlertCircle,
  "In Transit": Ship,
  "Delivered": CheckCircle2,
};

export default function CartPage() {
  const router = useRouter();
  const { user, cart, removeFromCart } = useUser();
  const [cartVehicles, setCartVehicles] = useState(
    mockVehicles.filter((v) => cart.includes(v.id))
  );

  useEffect(() => {
    setCartVehicles(mockVehicles.filter((v) => cart.includes(v.id)));
  }, [cart]);

  // Mock import status for each vehicle
  const getImportStatus = (vehicleId: string): ImportStatus => {
    const statuses: ImportStatus[] = [
      "Ready for Shipping",
      "At Yokohama Port",
      "Awaiting Customs Clearance",
      "In Transit",
    ];
    return statuses[parseInt(vehicleId) % statuses.length] || "Ready for Shipping";
  };

  const getETA = (status: ImportStatus): string => {
    const etas: Record<ImportStatus, string> = {
      "Ready for Shipping": "2-3 weeks",
      "At Yokohama Port": "1-2 weeks",
      "Awaiting Customs Clearance": "3-5 days",
      "In Transit": "1-2 weeks",
      "Delivered": "Delivered",
    };
    return etas[status];
  };

  const getProgress = (status: ImportStatus): number => {
    const progress: Record<ImportStatus, number> = {
      "Ready for Shipping": 10,
      "At Yokohama Port": 30,
      "Awaiting Customs Clearance": 50,
      "In Transit": 75,
      "Delivered": 100,
    };
    return progress[status];
  };

  const totalCost = cartVehicles.reduce(
    (sum, vehicle) => sum + vehicle.estimatedLandedCost,
    0
  );

  const handleRemove = (vehicleId: string) => {
    removeFromCart(vehicleId);
    setCartVehicles(cartVehicles.filter((v) => v.id !== vehicleId));
  };

  const handleCheckout = () => {
    if (cartVehicles.length === 0) return;
    router.push("/checkout");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Please Sign In</h2>
            <p className="text-gray-600 mb-6">You need to be signed in to view your cart.</p>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-2">Import Queue</h1>
              <p className="text-xl text-blue-100">
                {cartVehicles.length} vehicle{cartVehicles.length !== 1 ? "s" : ""} in your shipment
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl md:text-4xl font-black mb-1">
                {formatCurrency(totalCost)}
              </div>
              <div className="text-blue-200 text-sm">Total Estimated Cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartVehicles.length === 0 ? (
            <Card className="border-2 border-gray-200">
              <CardContent className="p-12 text-center">
                <ShoppingCart className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Import Queue is Empty</h2>
                <p className="text-gray-600 mb-6">
                  Start building your JDM collection by adding vehicles to your queue.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/marketplace">
                    Browse Inventory
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {cartVehicles.map((vehicle, index) => {
                const status = getImportStatus(vehicle.id);
                const eta = getETA(status);
                const progress = getProgress(status);
                const StatusIcon = statusIcons[status];

                return (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Vehicle Image */}
                          <div className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image
                              src={vehicle.primaryImage || "/placeholder-car.jpg"}
                              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                              fill
                              className="object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder-car.jpg";
                              }}
                            />
                            <div className="absolute top-2 right-2">
                              <button
                                onClick={() => handleRemove(vehicle.id)}
                                className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
                                aria-label="Remove from cart"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Vehicle Details */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-2xl font-black text-gray-900 mb-1">
                                  {vehicle.year} {vehicle.make} {vehicle.model}
                                </h3>
                                <p className="text-gray-600">
                                  {vehicle.trim && `${vehicle.trim} • `}
                                  {formatNumber(vehicle.mileage)} km • {vehicle.condition}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-black text-blue-600 mb-1">
                                  {formatCurrency(vehicle.estimatedLandedCost)}
                                </div>
                                <p className="text-sm text-gray-600">Landed Cost</p>
                              </div>
                            </div>

                            {/* Import Status */}
                            <div className="mb-4">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge
                                  className={`${statusColors[status]} text-white flex items-center gap-2`}
                                >
                                  <StatusIcon className="w-4 h-4" />
                                  {status}
                                </Badge>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Clock className="w-4 h-4" />
                                  <span>ETA: {eta}</span>
                                </div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className={`${statusColors[status]} h-2 rounded-full transition-all duration-500`}
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                              <p className="text-xs text-gray-500 mt-1">
                                {progress}% complete
                              </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                                asChild
                              >
                                <Link href={`/vehicles/${vehicle.id}`}>View Details</Link>
                              </Button>
                              <Button
                                variant="outline"
                                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                                onClick={() => handleRemove(vehicle.id)}
                              >
                                Remove from Queue
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Summary & Checkout */}
          {cartVehicles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: cartVehicles.length * 0.1 }}
              className="mt-8"
            >
              <Card className="border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Vehicles</p>
                      <p className="text-2xl font-black text-gray-900">{cartVehicles.length}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-sm text-gray-600 mb-1">Total Estimated Cost</p>
                      <p className="text-3xl font-black text-blue-600">{formatCurrency(totalCost)}</p>
                    </div>
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                      <Package className="w-4 h-4 inline mr-1" />
                      These vehicles will ship together in the same container.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

