"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Heart,
  ShoppingCart,
  Star,
  Gauge,
} from "lucide-react";
import { mockVehicles } from "@/lib/mock-data";
import { useUser } from "@/contexts/user-context";
import { formatCurrency, formatNumber } from "@/lib/formatting";
import type { VehicleCondition } from "@/lib/types";

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedCondition] = useState<VehicleCondition | null>(null);
  // Note: Condition filter setter will be added when condition filter UI is implemented
  const { addToFavorites, removeFromFavorites, addToCart, isFavorite, isInCart } = useUser();

  const makes = Array.from(new Set(mockVehicles.map((v) => v.make)));

  const filteredVehicles = mockVehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.year.toString().includes(searchTerm);
    const matchesMake = !selectedMake || vehicle.make === selectedMake;
    const matchesCondition = !selectedCondition || vehicle.condition === selectedCondition;
    return matchesSearch && matchesMake && matchesCondition;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Marketplace</h1>
          <p className="text-xl text-blue-100">
            Browse {mockVehicles.length}+ verified JDM vehicles from Japan
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by make, model, or year..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 border-2 border-gray-200 focus:border-blue-500"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedMake === null ? "default" : "outline"}
              onClick={() => setSelectedMake(null)}
              className={selectedMake === null ? "bg-blue-600" : ""}
              size="sm"
            >
              All Makes
            </Button>
            {makes.map((make) => (
              <Button
                key={make}
                variant={selectedMake === make ? "default" : "outline"}
                onClick={() => setSelectedMake(selectedMake === make ? null : make)}
                className={selectedMake === make ? "bg-blue-600" : ""}
                size="sm"
              >
                {make}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-bold text-blue-600">{filteredVehicles.length}</span>{" "}
              vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg hover:shadow-2xl overflow-hidden group">
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={vehicle.primaryImage || "/placeholder-car.jpg"}
                      alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-car.jpg";
                      }}
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={() =>
                          isFavorite(vehicle.id)
                            ? removeFromFavorites(vehicle.id)
                            : addToFavorites(vehicle.id)
                        }
                        className={`p-2 rounded-lg backdrop-blur-sm transition-colors ${
                          isFavorite(vehicle.id)
                            ? "bg-red-500 text-white"
                            : "bg-white/80 text-gray-600 hover:bg-white"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${isFavorite(vehicle.id) ? "fill-current" : ""}`}
                        />
                      </button>
                    </div>
                    {vehicle.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white">Featured</Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Gauge className="w-4 h-4" />
                          {formatNumber(vehicle.mileage)} km
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          {vehicle.seller.rating}
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`capitalize ${
                          vehicle.condition === "mint"
                            ? "border-green-500 text-green-700"
                            : vehicle.condition === "excellent"
                            ? "border-blue-500 text-blue-700"
                            : "border-gray-500 text-gray-700"
                        }`}
                      >
                        {vehicle.condition}
                      </Badge>
                    </div>

                    <div className="space-y-2 border-t border-gray-200 pt-4 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">JP Price</span>
                        <span className="font-semibold text-gray-900">
                          ¥{(vehicle.jpPrice / 1000000).toFixed(1)}M
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Est. Landed</span>
                        <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          {formatCurrency(vehicle.estimatedLandedCost)}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        asChild
                      >
                        <Link href={`/vehicles/${vehicle.id}`}>View Details</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className={`border-2 ${
                          isInCart(vehicle.id)
                            ? "border-green-500 text-green-600 bg-green-50"
                            : "border-blue-600 text-blue-600"
                        }`}
                        onClick={() =>
                          isInCart(vehicle.id)
                            ? null
                            : addToCart(vehicle.id)
                        }
                        disabled={isInCart(vehicle.id)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

