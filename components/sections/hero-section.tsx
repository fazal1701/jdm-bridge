"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, TrendingUp } from "lucide-react";
import { CountdownTimer } from "@/components/ui/countdown-timer";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Next.js Image Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/JDM-Bridge.jpg"
          alt="JDM Bridge - Japanese Domestic Market Cars"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-red-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              Your Dream{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                JDM
              </span>
              <br />
              Awaits
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-medium">
              Import authentic Japanese cars directly from verified dealers.
              <br className="hidden sm:block" />
              <span className="text-blue-300">Transparent pricing. Trusted sellers. Real-time tracking.</span>
            </p>
          </motion.div>

          {/* Countdown Timer - Limited Time Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 inline-block border border-white/20">
              <p className="text-white font-bold text-sm md:text-base mb-2">
                🎉 Holiday Love Celebration - Limited Time Offers
              </p>
              <CountdownTimer
                targetDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // 30 days from now
                size="sm"
                showLabels={false}
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-bold bg-red-600 hover:bg-red-700 text-white shadow-2xl hover:shadow-red-500/50 transition-all"
              asChild
            >
              <Link href="/marketplace">
                Browse Inventory
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-bold bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm"
              asChild
            >
              <Link href="/how-it-works">
                <Search className="mr-2 w-5 h-5" />
                How It Works
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-6 text-sm sm:text-base text-gray-300"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="font-semibold">45K+ Buyers</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="font-semibold">1.2K+ Verified Dealers</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="font-semibold">$500M+ Imported</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

