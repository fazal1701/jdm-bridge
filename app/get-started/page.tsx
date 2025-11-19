"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Shield, Users, Globe } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create Your Account",
    description: "Sign up in 30 seconds with email or social login",
    icon: Users,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Verify Your Identity",
    description: "Quick KYC check to ensure secure transactions",
    icon: Shield,
    color: "from-blue-600 to-blue-700",
  },
  {
    id: 3,
    title: "Browse & Discover",
    description: "Explore thousands of verified JDM vehicles",
    icon: Globe,
    color: "from-blue-700 to-blue-800",
  },
  {
    id: 4,
    title: "Connect with Sellers",
    description: "Chat directly with verified Japanese dealers",
    icon: Users,
    color: "from-blue-800 to-blue-900",
  },
  {
    id: 5,
    title: "Secure Your Dream Car",
    description: "Escrow protection, inspections, and shipping",
    icon: Shield,
    color: "from-blue-900 to-indigo-900",
  },
];

const benefits = [
  "45,000+ verified buyers worldwide",
  "1,200+ trusted Japanese dealers",
  "$500M+ in successful imports",
  "24/7 multilingual support",
  "Escrow-protected transactions",
  "Full inspection reports included",
];

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    country: "",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                JDM Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of enthusiasts importing their dream cars from Japan.
              Fast, secure, and trusted.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-2 border-blue-200">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Create Your Account
                  </h2>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full h-12 border-2 border-gray-200 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full h-12 border-2 border-gray-200 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password
                      </label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="w-full h-12 border-2 border-gray-200 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Country
                      </label>
                      <Input
                        type="text"
                        placeholder="USA, Canada, etc."
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full h-12 border-2 border-gray-200 focus:border-blue-500"
                      />
                    </div>

                    <Button
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg font-bold shadow-lg"
                      size="lg"
                    >
                      Get Started Free
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By signing up, you agree to our{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Already have an account?
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                      asChild
                    >
                      <Link href="/sign-in">Sign In</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Steps & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Steps */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex gap-4 items-start p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-blue-100 hover:border-blue-300 transition-all"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Choose JDM Collective?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-12">
            Popular First Imports
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Nissan Skyline GT-R R34",
                image: "https://images.unsplash.com/photo-1594987355808-fcf52a7b4e38?w=800&q=80",
                price: "$28,500",
              },
              {
                name: "Toyota Supra A90",
                image: "https://images.unsplash.com/photo-1492496694663-1a6a6f4e63f2?w=800&q=80",
                price: "$22,300",
              },
              {
                name: "Mazda RX-7 FD",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23f3f4f6' width='800' height='600'/%3E%3C/svg%3E",
                price: "$20,500",
              },
            ].map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-1">{car.name}</h3>
                      <p className="text-blue-300 font-semibold">{car.price}</p>
                    </div>
                  </div>
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
              Ready to Import Your Dream Car?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 45,000+ buyers who trust JDM Collective for their imports
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-bold px-8 py-6 shadow-2xl"
              asChild
            >
              <Link href="/get-started">
                Start Your Journey
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

