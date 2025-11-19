"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Sticky Newsletter Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 z-40 p-4 shadow-2xl"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-white font-bold">🚗 New Arrivals & Deals</p>
            <p className="text-blue-100 text-sm">
              Early access. Weekly digest. No spam.
            </p>
          </div>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg text-gray-900 flex-1 md:flex-none min-w-[200px]"
            />
            <Button className="px-6 py-2 bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 45,000+ buyers who already have
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button
              size="lg"
              className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 text-lg shadow-lg"
              asChild
            >
              <Link href="/marketplace">Browse Inventory Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

