"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full object-cover bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Your Dream JDM
          <br />
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Delivered
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Authentic imports. Verified sellers. Live prices. Import anything,
          anywhere, with confidence.
        </motion.p>

        {/* Search Component */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 border border-white/20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger className="bg-white/20 text-white border-white/30">
                <SelectValue placeholder="Make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nissan">Nissan</SelectItem>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="bg-white/20 text-white border-white/30">
                <SelectValue placeholder="Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="skyline">Skyline</SelectItem>
                <SelectItem value="supra">Supra</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="bg-white/20 text-white border-white/30">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="bg-red-600 hover:bg-red-700 col-span-2 md:col-span-1"
              asChild
            >
              <Link href="/browse">Search</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            📊 45,000+ buyers | 1,200+ dealers | $500M+ imported
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            size="lg"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-lg"
            asChild
          >
            <Link href="/browse">Browse Inventory</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white border-white/30 text-lg"
            asChild
          >
            <Link href="#how-it-works">How It Works</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2">Scroll to explore</p>
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

