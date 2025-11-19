"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Stat {
  number: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { number: "45K+", label: "Buyers", description: "across North America" },
  { number: "1.2K+", label: "Dealers", description: "verified & active" },
  { number: "$500M+", label: "Imported", description: "since launch" },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600">
            Real buyers, real sellers, real results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="relative border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-lg">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

