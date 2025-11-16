"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Star,
  MapPin,
  CheckCircle2,
  MessageSquare,
  Globe,
  Shield,
} from "lucide-react";

const mockSellers = [
  {
    id: "seller-1",
    name: "Tokyo Motors",
    location: "Tokyo, Japan",
    rating: 4.9,
    reviewCount: 127,
    dealCount: 342,
    responseTime: 15,
    languages: ["ja", "en", "fr"],
    specialties: ["Sports Cars", "Classic JDM"],
    status: "online",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1568605117035-5fe5e7bab0b7?w=200&q=80",
    featured: true,
    inventory: 45,
  },
  {
    id: "seller-2",
    name: "Kyoto Classic Autos",
    location: "Kyoto, Japan",
    rating: 4.8,
    reviewCount: 203,
    dealCount: 512,
    responseTime: 30,
    languages: ["ja", "en"],
    specialties: ["Budget Imports", "Daily Drivers"],
    status: "online",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1568605117035-5fe5e7bab0b7?w=200&q=80",
    featured: true,
    inventory: 78,
  },
  {
    id: "seller-3",
    name: "Osaka Auto Export",
    location: "Osaka, Japan",
    rating: 4.7,
    reviewCount: 156,
    dealCount: 289,
    responseTime: 45,
    languages: ["ja", "en", "es"],
    specialties: ["Luxury Vehicles", "Collectors"],
    status: "online",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1568605117035-5fe5e7bab0b7?w=200&q=80",
    featured: false,
    inventory: 32,
  },
  {
    id: "seller-4",
    name: "Yokohama Motors",
    location: "Yokohama, Japan",
    rating: 4.9,
    reviewCount: 89,
    dealCount: 198,
    responseTime: 20,
    languages: ["ja", "en", "de"],
    specialties: ["Rare Finds", "Modified"],
    status: "online",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1568605117035-5fe5e7bab0b7?w=200&q=80",
    featured: true,
    inventory: 21,
  },
  {
    id: "seller-5",
    name: "Saitama Auto Direct",
    location: "Saitama, Japan",
    rating: 4.6,
    reviewCount: 145,
    dealCount: 267,
    responseTime: 60,
    languages: ["ja", "en"],
    specialties: ["Family Cars", "SUVs"],
    status: "offline",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1568605117035-5fe5e7bab0b7?w=200&q=80",
    featured: false,
    inventory: 56,
  },
  {
    id: "seller-6",
    name: "Hiroshima Premium",
    location: "Hiroshima, Japan",
    rating: 5.0,
    reviewCount: 67,
    dealCount: 123,
    responseTime: 25,
    languages: ["ja", "en", "fr"],
    specialties: ["Premium Sports", "Exotics"],
    status: "online",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1568605117035-5fe5e7bab0b7?w=200&q=80",
    featured: true,
    inventory: 18,
  },
];

const filters = {
  specialties: ["Sports Cars", "Classic JDM", "Budget Imports", "Luxury Vehicles", "Rare Finds"],
  languages: ["English", "Japanese", "Spanish", "French", "German"],
  rating: [4.5, 4.7, 4.9, 5.0],
};

export default function BrowseSellersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [minRating, setMinRating] = useState(0);

  const filteredSellers = mockSellers.filter((seller) => {
    const matchesSearch =
      seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      !selectedSpecialty || seller.specialties.includes(selectedSpecialty);
    const matchesRating = seller.rating >= minRating;
    return matchesSearch && matchesSpecialty && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
              Browse{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Verified Sellers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with trusted Japanese dealers. All verified, all rated, all
              ready to help you find your dream car.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search sellers by name or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 h-14 border-2 border-gray-200 focus:border-blue-500 text-lg"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 px-8 h-14"
                  >
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant={selectedSpecialty === null ? "default" : "outline"}
              onClick={() => setSelectedSpecialty(null)}
              className={selectedSpecialty === null ? "bg-blue-600" : ""}
            >
              All Specialties
            </Button>
            {filters.specialties.map((specialty) => (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? "default" : "outline"}
                onClick={() =>
                  setSelectedSpecialty(
                    selectedSpecialty === specialty ? null : specialty
                  )
                }
                className={selectedSpecialty === specialty ? "bg-blue-600" : ""}
              >
                {specialty}
              </Button>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Minimum Rating: {minRating > 0 ? minRating.toFixed(1) : "Any"}
            </label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-bold text-blue-600">{filteredSellers.length}</span>{" "}
              verified sellers
            </p>
          </div>

          {/* Seller Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSellers.map((seller, index) => (
              <motion.div
                key={seller.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg hover:shadow-2xl overflow-hidden">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                            <Image
                              src={seller.avatar}
                              alt={seller.name}
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          {seller.status === "online" && (
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-xl text-gray-900">
                              {seller.name}
                            </h3>
                            {seller.verified && (
                              <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            {seller.location}
                          </div>
                        </div>
                      </div>
                      {seller.featured && (
                        <Badge className="bg-blue-600 text-white">Featured</Badge>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="font-bold text-gray-900 ml-1">
                          {seller.rating}
                        </span>
                      </div>
                      <span className="text-gray-500">
                        ({seller.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-blue-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-black text-blue-600">
                          {seller.dealCount}
                        </div>
                        <div className="text-xs text-gray-600">Deals</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-blue-600">
                          {seller.inventory}
                        </div>
                        <div className="text-xs text-gray-600">Cars</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-blue-600">
                          {seller.responseTime}m
                        </div>
                        <div className="text-xs text-gray-600">Response</div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 mb-2">
                        Specialties:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {seller.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="outline"
                            className="text-xs border-blue-300 text-blue-700"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-2">
                        Languages:
                      </div>
                      <div className="flex gap-2">
                        {seller.languages.map((lang) => (
                          <Globe
                            key={lang}
                            className="w-4 h-4 text-blue-600"
                            title={lang.toUpperCase()}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        asChild
                      >
                        <Link href={`/sellers/${seller.id}`}>View Profile</Link>
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600" asChild>
                        <Link href={`/sellers/${seller.id}/chat`}>
                          <MessageSquare className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              All Sellers Are Verified
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Every dealer on our platform undergoes strict verification. Your
              safety is our priority.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-bold px-8 py-6 shadow-2xl"
              asChild
            >
              <Link href="/get-started">Become a Buyer</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

