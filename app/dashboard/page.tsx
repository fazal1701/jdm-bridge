"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Heart,
  ShoppingCart,
  DollarSign,
} from "lucide-react";
import { useUser } from "@/contexts/user-context";
import { mockVehicles } from "@/lib/data";
import { formatCurrency } from "@/lib/formatting";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, cart } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const favoriteVehicles = mockVehicles.filter((v) => user.favorites.includes(v.id));
  const cartVehicles = mockVehicles.filter((v) => cart.includes(v.id));

  const mockOrders = [
    {
      id: "order-1",
      vehicle: mockVehicles[0],
      status: "in_transit",
      progress: 75,
      estimatedDelivery: "2024-05-15",
    },
    {
      id: "order-2",
      vehicle: mockVehicles[1],
      status: "inspection",
      progress: 30,
      estimatedDelivery: "2024-06-01",
    },
  ];

  const stats = [
    { label: "Active Orders", value: mockOrders.length, icon: Package, color: "blue" },
    { label: "Favorites", value: user.favorites.length, icon: Heart, color: "red" },
    { label: "Cart Items", value: cart.length, icon: ShoppingCart, color: "green" },
    { label: "Total Spent", value: "$52,300", icon: DollarSign, color: "purple" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-xl text-gray-600">Here&apos;s what&apos;s happening with your imports</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Active Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-black text-gray-900">Active Orders</h2>
            <Button variant="outline" asChild>
              <Link href="/orders">View All</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mockOrders.map((order) => (
              <Card key={order.id} className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={order.vehicle.primaryImage || "/placeholder-car.jpg"}
                        alt={order.vehicle.model}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-car.jpg";
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {order.vehicle.year} {order.vehicle.make} {order.vehicle.model}
                      </h3>
                      <Badge className="mb-2 capitalize">{order.status}</Badge>
                      <p className="text-sm text-gray-600">
                        Est. Delivery: {order.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold">{order.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${order.progress}%` }}
                      />
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href={`/orders/${order.id}`}>Track Order</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Favorites */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-2 border-gray-200 shadow-lg h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-red-500" />
                    Favorites
                  </h3>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/favorites">View All</Link>
                  </Button>
                </div>
                {favoriteVehicles.length > 0 ? (
                  <div className="space-y-3">
                    {favoriteVehicles.slice(0, 3).map((vehicle) => (
                      <Link
                        key={vehicle.id}
                        href={`/vehicles/${vehicle.id}`}
                        className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={vehicle.primaryImage || "/placeholder-car.jpg"}
                            alt={vehicle.model}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder-car.jpg";
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {vehicle.year} {vehicle.make} {vehicle.model}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatCurrency(vehicle.estimatedLandedCost)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No favorites yet. Start browsing!
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Cart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-2 border-gray-200 shadow-lg h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <ShoppingCart className="w-6 h-6 text-green-500" />
                    Shopping Cart
                  </h3>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/cart">View Cart</Link>
                  </Button>
                </div>
                {cartVehicles.length > 0 ? (
                  <div className="space-y-3">
                    {cartVehicles.slice(0, 3).map((vehicle) => (
                      <Link
                        key={vehicle.id}
                        href={`/vehicles/${vehicle.id}`}
                        className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={vehicle.primaryImage || "/placeholder-car.jpg"}
                            alt={vehicle.model}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder-car.jpg";
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {vehicle.year} {vehicle.make} {vehicle.model}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatCurrency(vehicle.estimatedLandedCost)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Your cart is empty. Start shopping!
                  </p>
                )}
                {cartVehicles.length > 0 && (
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/cart">Checkout</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

