"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  Globe,
  Shield,
  TrendingUp,
  Award,
  Search,
  MessageSquare,
  Ship,
  MapPin,
  Clock,
  CreditCard,
  ArrowRight,
  DollarSign,
  Percent,
  FileText,
  Zap,
  Star,
} from "lucide-react";
import { mockTestimonials, mockFAQs } from "@/lib/data";

const stats = [
  { number: "45,000+", label: "Happy Buyers", icon: Users },
  { number: "1,200+", label: "Verified Dealers", icon: CheckCircle2 },
  { number: "$500M+", label: "Vehicles Imported", icon: TrendingUp },
  { number: "98%", label: "Satisfaction Rate", icon: Award },
];

const steps = [
  {
    number: "01",
    title: "Browse & Discover",
    description: "Filter by make, model, year, price. See landed cost immediately.",
    time: "30 mins - 2 hours",
    icon: Search,
  },
  {
    number: "02",
    title: "Evaluate & Connect",
    description: "Chat with seller or bilingual agent. Request inspection video.",
    time: "1-3 days",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Secure & Commit",
    description: "Agree on price. Join shipping pool. Down payment held in escrow.",
    time: "1 day",
    icon: Shield,
  },
  {
    number: "04",
    title: "Ship & Track",
    description: "Real-time GPS tracking. Auto updates at every checkpoint.",
    time: "4-6 weeks",
    icon: Ship,
  },
  {
    number: "05",
    title: "Receive & Enjoy",
    description: "Vehicle clears customs. Final payment released. Pick up your car!",
    time: "1-2 weeks",
    icon: MapPin,
  },
];

const timeline = [
  { week: "Week 1-2", title: "Discovery & Selection", icon: Search },
  { week: "Week 3", title: "Inspection & Negotiation", icon: CheckCircle2 },
  { week: "Week 4-8", title: "Shipping & Transit", icon: Ship },
  { week: "Week 9-10", title: "Customs & Clearance", icon: Shield },
  { week: "Week 11-12", title: "Delivery & Registration", icon: MapPin },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Every transaction is verified, every cost is transparent, and every milestone is tracked.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting buyers worldwide with Japan's finest JDM vehicles through our verified network.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Built by enthusiasts, for enthusiasts. Our community drives everything we do.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Leveraging technology to make international car buying as simple as local buying.",
  },
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

export default function AboutPage() {
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
            <Badge className="bg-white/20 text-white mb-6 px-4 py-1">About JDM Bridge</Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Your Trusted Bridge to Japan&apos;s Finest
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We&apos;re revolutionizing how enthusiasts worldwide import authentic Japanese Domestic Market vehicles.
              Transparent, trusted, and built for the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-left">
              <p>
                JDM Bridge was born from frustration. Our founder, a lifelong JDM enthusiast, spent months
                navigating opaque processes, hidden fees, and language barriers to import his dream car from Japan.
              </p>
              <p>
                We asked: <strong>Why should importing a car be this complicated?</strong>
              </p>
              <p>
                In 2020, we set out to change that. Today, we&apos;ve helped over 45,000 buyers import their dream cars
                with complete transparency, verified sellers, and real-time tracking—all in one platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - 5 Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              From browse to driveway: 8-12 weeks, completely transparent
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 transform -translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-sm text-blue-600 font-semibold mb-1">
                                Step {step.number}
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2">{step.description}</p>
                          <p className="text-sm text-gray-500">⏱️ {step.time}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="hidden md:block relative z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    <div className="md:hidden text-5xl font-black text-gray-300 -mb-2">
                      {step.number}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white text-center mb-16">Typical Timeline</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
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
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-blue-200 text-sm font-semibold mb-2">{item.week}</div>
                    <h3 className="text-white font-bold">{item.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-blue-500 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center p-8 border-2 border-blue-100 hover:border-blue-500 transition-all shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Financing Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make your dream JDM car affordable with flexible financing options. Get pre-qualified in minutes with no impact to your credit score.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: DollarSign,
                title: "Competitive Rates",
                description: "Starting from 4.9% APR for qualified buyers",
              },
              {
                icon: Percent,
                title: "Flexible Terms",
                description: "12 to 84 months with no prepayment penalties",
              },
              {
                icon: Zap,
                title: "Quick Approval",
                description: "Get pre-qualified in minutes, approved in 24 hours",
              },
              {
                icon: FileText,
                title: "Simple Process",
                description: "Apply online, upload documents, get approved",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-blue-500 transition-all text-center">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Financing Options */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900">Financing Options</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Traditional Auto Loan",
                        description: "Fixed-rate loans from 4.9% APR, terms up to 84 months",
                        features: ["No down payment required", "Competitive rates", "Fast approval"],
                      },
                      {
                        title: "Lease-to-Own",
                        description: "Lower monthly payments with option to purchase at end of term",
                        features: ["Lower monthly payments", "Flexible terms", "Ownership option"],
                      },
                      {
                        title: "Personal Loan",
                        description: "Unsecured loans for vehicle purchase, rates from 6.5% APR",
                        features: ["No collateral required", "Quick funding", "Flexible use"],
                      },
                    ].map((option, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                        <h4 className="font-bold text-gray-900 mb-1">{option.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                        <ul className="space-y-1">
                          {option.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900">How It Works</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        step: "01",
                        title: "Get Pre-Qualified",
                        description: "Fill out a quick form (2 minutes). No credit impact.",
                      },
                      {
                        step: "02",
                        title: "Choose Your Vehicle",
                        description: "Browse our inventory and select your dream JDM car.",
                      },
                      {
                        step: "03",
                        title: "Complete Application",
                        description: "Upload required documents. Get approved in 24 hours.",
                      },
                      {
                        step: "04",
                        title: "Finalize & Drive",
                        description: "Sign documents, receive funds, complete purchase.",
                      },
                    ].map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Button
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                      asChild
                    >
                      <Link href="/get-started">
                        Get Pre-Qualified Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Soft credit check, no impact to your score
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
                  Financing Requirements
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">18+</div>
                    <p className="text-gray-700 font-medium">Minimum Age</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">600+</div>
                    <p className="text-gray-700 font-medium">Credit Score</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">$2,500+</div>
                    <p className="text-gray-700 font-medium">Monthly Income</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-700 text-center">
                    Additional documents may be required: proof of income, proof of residence, valid driver's license, and insurance information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real JDM enthusiasts who trusted us with their dream imports
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-blue-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          {testimonial.verified && (
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                        <div className="text-sm text-blue-600 font-medium mt-1">{testimonial.vehicle}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about importing JDM vehicles
            </p>
          </div>
          <div className="space-y-4">
            {mockFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                          <Badge variant="outline" className="text-xs">
                            {faq.category}
                          </Badge>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Join thousands of buyers importing their dream cars with complete transparency and trusted support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-bold px-8 py-6"
                asChild
              >
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg font-bold px-8 py-6"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
