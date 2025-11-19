"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Lock,
  ArrowRight,
  Shield,
  CheckCircle2,
  Eye,
  EyeOff,
} from "lucide-react";
import { useUser } from "@/contexts/user-context";
import { useRouter } from "next/navigation";

const features = [
  "Access to 10,000+ verified vehicles",
  "Direct chat with Japanese dealers",
  "Save favorite listings",
  "Track your orders in real-time",
  "Join shipping pools for savings",
  "24/7 multilingual support",
];

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "john.doe@example.com",
    password: "password123",
    remember: false,
  });
  const { login } = useUser();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (login(formData.email, formData.password)) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center">
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Sign In Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    Welcome{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Back
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600">
                    Sign in to continue your JDM journey
                  </p>
                </div>

                <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-2 border-blue-200">
                  <CardContent className="p-8">
                    {/* Demo Credentials */}
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm font-semibold text-blue-900 mb-2">
                        Demo Credentials:
                      </p>
                      <p className="text-xs text-blue-700">
                        Email: john.doe@example.com
                      </p>
                      <p className="text-xs text-blue-700">
                        Password: password123
                      </p>
                    </div>

                    {error && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="pl-12 h-12 border-2 border-gray-200 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                password: e.target.value,
                              })
                            }
                            className="pl-12 pr-12 h-12 border-2 border-gray-200 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.remember}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                remember: e.target.checked,
                              })
                            }
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">
                            Remember me
                          </span>
                        </label>
                        <Link
                          href="/forgot-password"
                          className="text-sm text-blue-600 hover:underline font-semibold"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg font-bold shadow-lg"
                        size="lg"
                      >
                        Sign In
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>

                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 text-center mb-4">
                        Don&apos;t have an account?
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                        asChild
                      >
                        <Link href="/get-started">Create Account</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right: Features & Images */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                {/* Features List */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Member Benefits
                  </h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Featured Cars */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "Skyline GT-R",
                      image:
                        "https://images.unsplash.com/photo-1594987355808-fcf52a7b4e38?w=400&q=80",
                    },
                    {
                      name: "Supra A90",
                      image:
                        "https://images.unsplash.com/photo-1492496694663-1a6a6f4e63f2?w=400&q=80",
                    },
                  ].map((car, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Card className="overflow-hidden border-2 border-blue-200 shadow-lg">
                        <div className="relative h-48">
                          <Image
                            src={car.image}
                            alt={car.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <h4 className="text-white font-bold">{car.name}</h4>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-lg">
                  <div className="flex items-center gap-4">
                    <Shield className="w-12 h-12 text-blue-600" />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Secure & Protected
                      </h4>
                      <p className="text-sm text-gray-600">
                        All transactions are escrow-protected
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

