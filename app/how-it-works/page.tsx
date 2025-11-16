"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Search,
  MessageSquare,
  Shield,
  Ship,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  CreditCard,
  MapPin,
  Clock,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse & Discover",
    description:
      "Explore our curated inventory of 10,000+ verified JDM vehicles. Filter by make, model, year, price, and condition. Every listing includes detailed photos, inspection reports, and seller ratings.",
    icon: Search,
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1594987355808-fcf52a7b4e38?w=800&q=80",
    details: [
      "Real-time inventory updates",
      "High-resolution photos & videos",
      "Detailed condition reports",
      "Price transparency",
    ],
  },
  {
    id: 2,
    title: "Connect with Sellers",
    description:
      "Chat directly with verified Japanese dealers in real-time. Our multilingual agents are available 24/7 to answer questions, arrange inspections, and negotiate on your behalf.",
    icon: MessageSquare,
    color: "from-blue-600 to-blue-700",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    details: [
      "Direct seller communication",
      "Multilingual support (EN, JA, ES, FR)",
      "Expert agent assistance",
      "Video call inspections",
    ],
  },
  {
    id: 3,
    title: "Secure Payment",
    description:
      "All transactions are protected by escrow. Your payment is held securely and released only after each milestone is verified. No risk, full protection.",
    icon: Shield,
    color: "from-blue-700 to-blue-800",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    details: [
      "Escrow-protected payments",
      "Milestone-based releases",
      "Multiple payment methods",
      "Full refund guarantee",
    ],
  },
  {
    id: 4,
    title: "Inspection & Verification",
    description:
      "Every vehicle undergoes a comprehensive 150-point inspection by certified mechanics. You'll receive detailed reports with photos, videos, and expert recommendations.",
    icon: FileCheck,
    color: "from-blue-800 to-indigo-900",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    details: [
      "150-point inspection",
      "Certified mechanics",
      "Video walkthroughs",
      "Transparent reporting",
    ],
  },
  {
    id: 5,
    title: "Shipping & Logistics",
    description:
      "Choose between single shipment or join a shipping pool to save up to $5,300. We handle all paperwork, customs, and port fees. Track your vehicle in real-time.",
    icon: Ship,
    color: "from-indigo-900 to-blue-900",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80",
    details: [
      "Pool shipping savings",
      "Full paperwork handling",
      "Real-time tracking",
      "Port-to-door delivery",
    ],
  },
  {
    id: 6,
    title: "Delivery & Registration",
    description:
      "Your vehicle arrives at your chosen port. We assist with customs clearance, registration, and can arrange delivery to your door. You're ready to drive!",
    icon: MapPin,
    color: "from-blue-900 to-indigo-950",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    details: [
      "Port arrival coordination",
      "Customs clearance support",
      "Registration assistance",
      "Door-to-door delivery",
    ],
  },
];

const timeline = [
  { week: "Week 1-2", title: "Discovery & Selection", icon: Search },
  { week: "Week 3", title: "Inspection & Negotiation", icon: FileCheck },
  { week: "Week 4-8", title: "Shipping & Transit", icon: Ship },
  { week: "Week 9-10", title: "Customs & Clearance", icon: Shield },
  { week: "Week 11-12", title: "Delivery & Registration", icon: MapPin },
];

const features = [
  {
    icon: Shield,
    title: "100% Protected",
    description: "Escrow protection on every transaction",
  },
  {
    icon: Clock,
    title: "8-12 Weeks",
    description: "Average delivery time from order to door",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment methods and financing options",
  },
  {
    icon: CheckCircle2,
    title: "Verified Sellers",
    description: "All dealers are verified and rated",
  },
];

export default function HowItWorksPage() {
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              From browsing to delivery, we guide you through every step of
              importing your dream JDM car.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600 mb-1">
                        Step {step.id}
                      </div>
                      <h2 className="text-3xl font-black text-gray-900">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <Card className="overflow-hidden border-2 border-blue-200 shadow-2xl">
                    <div className="relative h-96">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white text-center mb-16">
            Typical Timeline
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-blue-200 text-sm font-semibold mb-2">
                    {item.week}
                  </div>
                  <h3 className="text-white font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8 border-2 border-blue-100 hover:border-blue-500 transition-all shadow-lg hover:shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Start?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of buyers importing their dream cars
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-bold px-8 py-6 shadow-2xl"
                asChild
              >
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg font-bold px-8 py-6"
                asChild
              >
                <Link href="/browse-sellers">Browse Sellers</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

