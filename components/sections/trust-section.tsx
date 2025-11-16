"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/utils";

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
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-400">
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
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card */}
              <Card className="relative bg-white/5 backdrop-blur border border-white/10 hover:border-red-600/50 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.div
                    className="text-5xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

