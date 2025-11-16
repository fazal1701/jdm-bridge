"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Gavel, Users, TrendingUp } from "lucide-react";
import { mockAuctions } from "@/lib/mock-data-auctions";
import { formatCurrency, formatTimeRemaining } from "@/lib/formatting";

export default function AuctionsPage() {
  const [timeRemaining, setTimeRemaining] = useState<Record<string, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimes: Record<string, number> = {};
      mockAuctions.forEach((auction) => {
        const endsAt = new Date(auction.endsAt).getTime();
        const now = Date.now();
        const remaining = Math.max(0, Math.floor((endsAt - now) / 1000));
        newTimes[auction.id] = remaining;
      });
      setTimeRemaining(newTimes);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const liveAuctions = mockAuctions.filter((a) => a.status === "live");
  const endingSoon = mockAuctions.filter((a) => a.status === "ending_soon");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-3">
            <Gavel className="w-10 h-10" />
            Live Auctions
          </h1>
          <p className="text-xl text-blue-100">
            Bid on exclusive JDM vehicles from Japanese auctions
          </p>
        </div>
      </section>

      {/* Ending Soon */}
      {endingSoon.length > 0 && (
        <section className="py-8 bg-red-50 border-b-4 border-red-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-red-900 mb-6">Ending Soon</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {endingSoon.map((auction) => (
                <AuctionCard
                  key={auction.id}
                  auction={auction}
                  timeRemaining={timeRemaining[auction.id] || auction.timeRemaining}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Live Auctions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Live Now</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveAuctions.map((auction) => (
              <AuctionCard
                key={auction.id}
                auction={auction}
                timeRemaining={timeRemaining[auction.id] || auction.timeRemaining}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function AuctionCard({
  auction,
  timeRemaining,
}: {
  auction: typeof mockAuctions[0];
  timeRemaining: number;
}) {
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg hover:shadow-2xl overflow-hidden">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <Image
            src={auction.vehicle.primaryImage || "/placeholder-car.jpg"}
            alt={auction.vehicle.model}
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-car.jpg";
            }}
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-red-600 text-white animate-pulse">LIVE</Badge>
          </div>
          {auction.inspectionReportAvailable && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-600 text-white">Report Available</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {auction.vehicle.year} {auction.vehicle.make} {auction.vehicle.model}
          </h3>
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Current Bid</span>
              <span className="text-2xl font-black text-blue-600">
                ¥{(auction.currentBid / 10000).toFixed(0)}万
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Reserve</span>
              <span className="font-semibold">
                ¥{(auction.reservePrice / 10000).toFixed(0)}万
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 flex items-center gap-1">
                <Users className="w-4 h-4" />
                Bids
              </span>
              <span className="font-semibold">{auction.bidCount}</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Time Remaining</span>
              <Clock className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-2xl font-black text-gray-900 font-mono">
              {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </div>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
            <Link href={`/auctions/${auction.id}`}>Place Bid</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

