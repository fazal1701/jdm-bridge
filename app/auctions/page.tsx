"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  Gavel,
  Users,
  TrendingUp,
  Zap,
  Heart,
  MapPin,
  Gauge,
  ArrowDown,
} from "lucide-react";
import { mockAuctions } from "@/lib/mock-data-auctions";
import { formatCurrency } from "@/lib/formatting";

type FilterType = "all" | "ending_soon" | "no_reserve" | "hot";
type SortType = "time_left" | "price_high" | "price_low" | "bids";

export default function AuctionsPage() {
  const [timeRemaining, setTimeRemaining] = useState<Record<string, number>>({});
  const [filter, setFilter] = useState<FilterType>("all");
  const [sort, setSort] = useState<SortType>("time_left");

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

  // Filter auctions
  let filteredAuctions = [...mockAuctions];
  if (filter === "ending_soon") {
    filteredAuctions = filteredAuctions.filter((a) => a.status === "ending_soon" || (a.timeRemaining < 3600 && a.status === "live"));
  } else if (filter === "no_reserve") {
    filteredAuctions = filteredAuctions.filter((a) => a.noReserve || !a.reservePrice);
  } else if (filter === "hot") {
    filteredAuctions = filteredAuctions.filter((a) => a.isHot);
  }

  // Sort auctions
  filteredAuctions.sort((a, b) => {
    if (sort === "time_left") {
      return (timeRemaining[a.id] || a.timeRemaining) - (timeRemaining[b.id] || b.timeRemaining);
    } else if (sort === "price_high") {
      return b.currentBid - a.currentBid;
    } else if (sort === "price_low") {
      return a.currentBid - b.currentBid;
    } else if (sort === "bids") {
      return b.bidCount - a.bidCount;
    }
    return 0;
  });

  const activeAuctions = mockAuctions.filter((a) => a.status === "live").length;
  const totalBidders = 847;
  const totalVolume = 2400000;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero Header with Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-red-600 text-white px-3 py-1 text-sm font-bold animate-pulse">
                  LIVE
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-3">
                Live Auctions
              </h1>
              <p className="text-xl text-blue-100">
                Bid on premium JDM vehicles in real-time from Japanese auction houses
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-black mb-1">{activeAuctions}</div>
                <div className="text-blue-200 text-sm">Active Auctions</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-black mb-1">{totalBidders}</div>
                <div className="text-blue-200 text-sm">Active Bidders</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-black mb-1">${(totalVolume / 1000000).toFixed(1)}M</div>
                <div className="text-blue-200 text-sm">Total Volume</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-6 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                className={`rounded-full ${
                  filter === "all" ? "bg-blue-600 text-white hover:bg-blue-700" : ""
                }`}
                onClick={() => setFilter("all")}
              >
                All Auctions
              </Button>
              <Button
                variant={filter === "ending_soon" ? "default" : "outline"}
                className={`rounded-full ${
                  filter === "ending_soon" ? "bg-blue-600 text-white hover:bg-blue-700" : ""
                }`}
                onClick={() => setFilter("ending_soon")}
              >
                Ending Soon
              </Button>
              <Button
                variant={filter === "no_reserve" ? "default" : "outline"}
                className={`rounded-full ${
                  filter === "no_reserve" ? "bg-blue-600 text-white hover:bg-blue-700" : ""
                }`}
                onClick={() => setFilter("no_reserve")}
              >
                No Reserve
              </Button>
              <Button
                variant={filter === "hot" ? "default" : "outline"}
                className={`rounded-full ${
                  filter === "hot" ? "bg-blue-600 text-white hover:bg-blue-700" : ""
                }`}
                onClick={() => setFilter("hot")}
              >
                Hot Auctions
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700 font-medium">Sort by:</span>
              <Select value={sort} onValueChange={(value) => setSort(value as SortType)}>
                <SelectTrigger className="w-[140px] rounded-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="time_left">Time Left</SelectItem>
                  <SelectItem value="price_high">Price: High</SelectItem>
                  <SelectItem value="price_low">Price: Low</SelectItem>
                  <SelectItem value="bids">Most Bids</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Auction Listings */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAuctions.map((auction) => (
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

  const reserveProgress = auction.reservePrice
    ? Math.min(100, Math.round((auction.currentBid / auction.reservePrice) * 100))
    : 100;

  const formatTime = (time: number) => String(time).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <Image
            src={auction.vehicle.primaryImage || "/placeholder-car.jpg"}
            alt={auction.vehicle.model}
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-car.jpg";
            }}
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {auction.isHot && (
              <Badge className="bg-red-600 text-white flex items-center gap-1">
                <Zap className="w-3 h-3" />
                HOT
              </Badge>
            )}
            {auction.reserveMet && (
              <Badge className="bg-green-600 text-white">Reserve Met</Badge>
            )}
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-white font-mono font-bold text-sm">
              {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
            </span>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {auction.vehicle.year} {auction.vehicle.make} {auction.vehicle.model}
          </h3>
          {auction.vehicle.trim && (
            <p className="text-sm text-gray-600 mb-3">{auction.vehicle.trim}</p>
          )}
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Gauge className="w-4 h-4" />
              <span>{auction.vehicle.mileage.toLocaleString()} km</span>
            </div>
            {auction.vehicle.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{auction.vehicle.location}</span>
              </div>
            )}
          </div>

          {auction.vehicle.features && auction.vehicle.features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {auction.vehicle.features.slice(0, 2).map((feature, idx) => (
                <Badge key={idx} variant="outline" className="text-xs rounded-full">
                  {feature}
                </Badge>
              ))}
              {auction.vehicle.features.length > 2 && (
                <Badge variant="outline" className="text-xs rounded-full">
                  +{auction.vehicle.features.length - 2} more
                </Badge>
              )}
            </div>
          )}

          <div className="space-y-3 mb-4">
            <div>
              <div className="text-sm text-gray-600 mb-1">Current Bid</div>
              <div className="text-3xl font-black text-green-600">
                {formatCurrency(auction.currentBid / 100)}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Bids</span>
              <span className="font-semibold text-gray-900">{auction.bidCount}</span>
            </div>
          </div>

          {auction.reservePrice && (
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">Reserve Progress</span>
                <span className="font-bold text-gray-900">{reserveProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all ${
                    reserveProgress >= 100 ? "bg-green-600" : "bg-blue-600"
                  }`}
                  style={{ width: `${Math.min(100, reserveProgress)}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href={`/auctions/${auction.id}`}>
                <Gavel className="w-4 h-4 mr-2" />
                Bid Now
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="border-gray-300">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
