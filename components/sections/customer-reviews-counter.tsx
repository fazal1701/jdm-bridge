"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CustomerReviewsCounterProps {
  deliveredCars?: number;
  totalReviews?: number;
  averageRating?: number;
  satisfiedCustomers?: number;
}

export function CustomerReviewsCounter({
  deliveredCars = 45230,
  totalReviews = 12847,
  averageRating = 4.8,
  satisfiedCustomers = 98,
}: CustomerReviewsCounterProps) {
  const stats = [
    {
      icon: CheckCircle2,
      label: "Cars Delivered",
      value: deliveredCars.toLocaleString(),
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Star,
      label: "Customer Reviews",
      value: totalReviews.toLocaleString(),
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Star,
      label: "Average Rating",
      value: averageRating.toFixed(1),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: TrendingUp,
      label: "Satisfaction Rate",
      value: `${satisfiedCustomers}%`,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join over 45,000 satisfied customers who have successfully imported their dream JDM vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className={`text-4xl font-black ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

