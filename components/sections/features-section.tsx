"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: "✓",
    title: "Verified Sellers",
    description: "Background checked, rated by real buyers. 98%+ success rates.",
    color: "from-green-600 to-green-700",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description: "All-in calculator. No hidden fees. Ever.",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: "🚢",
    title: "Shipping Pools",
    description: "Save $3-5K per vehicle. Join quarterly batches.",
    color: "from-purple-600 to-purple-700",
  },
  {
    icon: "🌍",
    title: "Bilingual Agents",
    description: "24/7 support. Real agents. 2-hour response time.",
    color: "from-yellow-600 to-yellow-700",
  },
  {
    icon: "🔒",
    title: "Milestone Escrow",
    description: "4-step payment protection. Your money is safe.",
    color: "from-pink-600 to-pink-700",
  },
  {
    icon: "📍",
    title: "Real-time Tracking",
    description: "GPS tracking from Japan to your driveway.",
    color: "from-orange-600 to-orange-700",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Why We&apos;re Different
          </h2>
          <p className="text-xl text-gray-600">
            We combined the best of every competitor and made it better
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all h-full bg-white">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

