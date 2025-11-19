"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/formatting";
import { mockVehicles } from "@/lib/data";

export function FeaturedInventorySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockVehicles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Featured Vehicles This Week
          </h2>
          <p className="text-xl text-gray-600">
            Handpicked inventory, verified by our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {mockVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                index === activeIndex
                  ? "md:scale-105 md:z-10"
                  : "md:scale-95 md:opacity-70"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all overflow-hidden bg-white">
                {/* Image Container */}
                <div className="relative h-48 md:h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={vehicle.primaryImage}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge variant="success" className="bg-green-600">
                      {vehicle.condition}
                    </Badge>
                    <button className="p-2 bg-white/90 hover:bg-blue-600 text-gray-900 hover:text-white rounded-lg transition-all">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>{formatNumber(vehicle.mileage)} km</span>
                    <span>•</span>
                    <span>Manual</span>
                  </div>

                  <div className="space-y-2 border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">JP Price</span>
                      <span className="text-gray-900 font-semibold">
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

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                      <div className="text-sm">
                        <p className="text-gray-900 font-semibold">
                          {vehicle.seller.name}
                        </p>
                        <p className="text-gray-600">
                          ⭐ {vehicle.seller.rating} ({vehicle.seller.reviewCount})
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex gap-2 justify-center mt-8">
          {mockVehicles.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

