"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { mockFAQs } from "@/lib/mock-data";
import type { FAQ } from "@/lib/types";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = mockFAQs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Find answers to common questions about importing with JDM Collective
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search FAQ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="border border-white/10 rounded-lg overflow-hidden hover:border-red-600/50 transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 bg-white/5 hover:bg-white/10 transition-colors text-left flex items-center justify-between"
              >
                <span className="font-bold text-white">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-6 h-6 text-red-600 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Button className="bg-red-600 hover:bg-red-700">
            Chat with Support
          </Button>
        </div>
      </div>
    </section>
  );
}

