"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Search,
  Gavel,
  Users,
  Package,
  Calculator,
  Shield,
  HeadphonesIcon,
  CheckCircle2,
  ArrowRight,
  Clock,
  Globe,
  FileText,
} from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";

const services = [
  {
    icon: Search,
    title: "Vehicle Discovery",
    description: "Browse thousands of verified JDM vehicles with transparent pricing and detailed specifications.",
    features: [
      "Advanced search & filters",
      "Real-time inventory updates",
      "Detailed vehicle reports",
      "Price comparison tools",
    ],
    link: "/marketplace",
  },
  {
    icon: Gavel,
    title: "Live Auctions",
    description: "Bid on premium JDM vehicles directly from Japanese auction houses in real-time.",
    features: [
      "Live auction feed",
      "Real-time bidding",
      "Proxy bidding options",
      "Auction history & analytics",
    ],
    link: "/auctions",
  },
  {
    icon: Users,
    title: "Bilingual Agents",
    description: "Connect with verified agents who speak Japanese and English for seamless communication.",
    features: [
      "Expert consultation",
      "Inspection coordination",
      "Document translation",
      "24/7 support",
    ],
    link: "/agents",
  },
  {
    icon: Package,
    title: "Shipping & Logistics",
    description: "Transparent shipping options with real-time tracking from Japan to your doorstep.",
    features: [
      "Shipping pool savings",
      "Real-time GPS tracking",
      "Customs handling",
      "Door-to-door delivery",
    ],
    link: "/shipping",
  },
  {
    icon: Calculator,
    title: "Cost Calculator",
    description: "Get instant, accurate cost breakdowns including all fees, taxes, and shipping costs.",
    features: [
      "Real-time calculations",
      "Multiple destination support",
      "Shipping pool comparison",
      "Export to PDF",
    ],
    link: "/calculator",
  },
  {
    icon: Shield,
    title: "Buyer Protection",
    description: "Secure transactions with escrow services, milestone payments, and comprehensive insurance.",
    features: [
      "Escrow protection",
      "Milestone-based payments",
      "Vehicle inspection reports",
      "Refund guarantee",
    ],
    link: "/about",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Browse & Discover",
    description: "Search our inventory or join live auctions to find your dream JDM vehicle.",
    icon: Search,
  },
  {
    number: "02",
    title: "Connect & Verify",
    description: "Chat with sellers or agents, request inspections, and verify vehicle details.",
    icon: Users,
  },
  {
    number: "03",
    title: "Secure Transaction",
    description: "Agree on price, join shipping pool, and make secure down payment via escrow.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Ship & Track",
    description: "Watch your vehicle travel in real-time with GPS tracking and milestone updates.",
    icon: Package,
  },
  {
    number: "05",
    title: "Receive & Enjoy",
    description: "Complete final payment, clear customs, and pick up your JDM legend!",
    icon: CheckCircle2,
  },
];

const supportFeatures = [
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support via chat, email, and phone.",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "Support in English, Japanese, and 8 other languages.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Average response time of 2 hours, guaranteed within 24 hours.",
  },
  {
    icon: FileText,
    title: "Comprehensive Guides",
    description: "Step-by-step guides, FAQs, and video tutorials for every step.",
  },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-white/20 text-white mb-6 px-4 py-1">Our Services</Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Complete JDM Import Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              From discovery to delivery, we provide everything you need to import your dream JDM vehicle
              with confidence and transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive services designed to make JDM importing simple and secure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                        asChild
                      >
                        <Link href={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple 5-step process from browse to driveway
            </p>
          </div>
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 transform -translate-x-1/2" />
            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                      <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 mb-1">Step {step.number}</div>
                              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden lg:block relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-black text-xl border-4 border-white shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="lg:hidden text-5xl font-black text-gray-300 -mb-4">
                      {step.number}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Always Here to Help</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support at every step of your journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all text-center">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 45,000+ buyers who have successfully imported their dream JDM vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-bold px-8 py-6"
                asChild
              >
                <Link href="/get-started">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg font-bold px-8 py-6"
                asChild
              >
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

