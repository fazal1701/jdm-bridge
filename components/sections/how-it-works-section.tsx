"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Step {
  number: string;
  title: string;
  description: string;
  time: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Browse & Discover",
    description:
      "Filter by make, model, year, price. See landed cost immediately.",
    time: "30 mins - 2 hours",
  },
  {
    number: "02",
    title: "Evaluate & Connect",
    description:
      "Chat with seller or bilingual agent. Request inspection video.",
    time: "1-3 days",
  },
  {
    number: "03",
    title: "Secure & Commit",
    description:
      "Agree on price. Join shipping pool. Down payment held in escrow.",
    time: "1 day",
  },
  {
    number: "04",
    title: "Ship & Track",
    description:
      "Real-time GPS tracking. Auto updates at every checkpoint.",
    time: "4-6 weeks",
  },
  {
    number: "05",
    title: "Receive & Enjoy",
    description:
      "Vehicle clears customs. Final payment released. Pick up your car!",
    time: "1-2 weeks",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            5 Steps to Your Dream Car
          </h2>
          <p className="text-xl text-gray-400">
            From browse to driveway: 8-12 weeks, completely transparent
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-transparent transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex flex-col md:flex-row gap-8 items-start md:items-center`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="bg-white/5 backdrop-blur border border-white/10 hover:border-red-600/50 transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mb-3">{step.description}</p>
                      <p className="text-sm text-gray-500">⏱️ {step.time}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Circle (Desktop only) */}
                <div className="hidden md:block relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold text-lg border-4 border-gray-900">
                    {step.number}
                  </div>
                </div>

                {/* Mobile Step Number */}
                <div className="md:hidden text-5xl font-black text-gray-700 -mb-2">
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

