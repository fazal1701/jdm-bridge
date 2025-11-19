"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Wrench,
  Zap,
  Palette,
  Settings,
  Star,
  Clock,
  CheckCircle2,
  ArrowRight,
  Package,
  TrendingUp,
} from "lucide-react";
import { 
  modificationShops, 
  modificationPackages, 
  bodyKits,
  performanceParts,
  modificationGallery 
} from "@/lib/data";
import { formatCurrency } from "@/lib/formatting";
import { SiteFooter } from "@/components/layout/site-footer";

export default function ModificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services", icon: Package },
    { id: "body-kit", label: "Body Kits", icon: Palette },
    { id: "performance", label: "Performance", icon: Zap },
    { id: "suspension", label: "Suspension", icon: Settings },
    { id: "interior", label: "Interior", icon: Wrench },
  ];

  const filteredPackages = selectedCategory === "all" 
    ? modificationPackages 
    : modificationPackages.filter(pkg => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 mb-6 px-4 py-1">
              🔧 Custom Modifications
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Transform Your JDM Dream
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Partner with Japan&apos;s legendary tuning shops to customize your vehicle before it ships.
              From subtle upgrades to complete transformations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                Browse Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Partner Shops", value: "15+", icon: Wrench },
              { label: "Completed Builds", value: "2,500+", icon: CheckCircle2 },
              { label: "Body Kits Available", value: "200+", icon: Palette },
              { label: "Avg. Customer Rating", value: "4.9★", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-pink-500" />
                <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Shops Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-900 mb-4">Trusted Partners</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Japan&apos;s Legendary Tuning Shops
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with the most respected names in JDM tuning to bring you world-class modifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modificationShops.map((shop, index) => (
              <motion.div
                key={shop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-pink-200">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{shop.name}</CardTitle>
                        <p className="text-sm text-gray-600">{shop.location}</p>
                      </div>
                      {shop.verified && (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 line-clamp-3">{shop.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{shop.rating}</span>
                        <span className="text-gray-500">({shop.reviewCount})</span>
                      </div>
                      <div className="text-gray-600">
                        {shop.yearsInBusiness} years
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {shop.specialties.slice(0, 3).map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full" variant="outline">
                      View Shop Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modification Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-pink-100 text-pink-900 mb-4">Popular Packages</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Pre-Built Modification Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated packages designed by experts for the best results and value.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-pink-500 hover:bg-pink-600" : ""}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              );
            })}
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-pink-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-blue-100 text-blue-900 capitalize">
                        {pkg.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {pkg.estimatedDays} days
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-black text-gray-900">
                        {formatCurrency(pkg.price, "JPY")}
                      </div>
                      <div className="text-sm text-gray-500">
                        ≈ {formatCurrency(pkg.price * 0.0067, "USD")}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        {pkg.includes.slice(0, 4).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                        {pkg.includes.length > 4 && (
                          <li className="text-sm text-gray-500 ml-6">
                            +{pkg.includes.length - 4} more items
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Popular for:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pkg.popularFor.slice(0, 2).map((model) => (
                          <Badge key={model} variant="outline" className="text-xs">
                            {model}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-pink-500 hover:bg-pink-600">
                      Add to Build
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-teal-100 text-teal-900 mb-4">Build Gallery</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Featured Builds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations from our partner shops. Your dream build starts here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modificationGallery.map((build, index) => (
              <motion.div
                key={build.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 bg-gray-200">
                    {/* Placeholder for before/after images */}
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">BEFORE</span>
                      </div>
                      <div className="w-1/2 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">AFTER</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-1">
                          {build.year} {build.vehicleModel}
                        </h3>
                        <p className="text-sm text-gray-600">{build.title}</p>
                      </div>
                      {build.featured && (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <Star className="w-3 h-3 mr-1 fill-yellow-600" />
                          Featured
                        </Badge>
                      )}
                    </div>

                    <p className="text-gray-700 mb-4">{build.description}</p>

                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm text-gray-900">Modifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {build.modifications.slice(0, 3).map((mod) => (
                          <Badge key={mod} variant="outline" className="text-xs">
                            {mod}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="text-2xl font-black text-gray-900">
                          {formatCurrency(build.totalCost, "JPY")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {build.completionTime} days
                        </div>
                      </div>
                      <Button variant="outline">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-pink-300" />
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Build Your Dream?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Work with our modification specialists to create a custom build plan for your JDM import.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Start Custom Build
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Talk to Specialist
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

