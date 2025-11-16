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
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why We&apos;re Different
          </h2>
          <p className="text-xl text-gray-400">
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
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 transition-all h-full">
                <CardContent className="p-8">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

