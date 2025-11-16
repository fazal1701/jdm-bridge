"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Heart,
  Eye,
  TrendingUp,
  Users,
  MapPin,
  Star,
  CheckCircle2,
  Share2,
  Search,
} from "lucide-react";
import { mockCommunityStories, mockTestimonials } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/formatting";

type CategoryType = "all" | "success" | "questions" | "market" | "technical" | "shipping";

const categories = [
  { id: "all", label: "All Posts", count: null },
  { id: "success", label: "Success Stories", count: 234 },
  { id: "questions", label: "Questions", count: 189 },
  { id: "market", label: "Market Updates", count: 67 },
  { id: "technical", label: "Technical", count: 145 },
  { id: "shipping", label: "Shipping Updates", count: 89 },
];

const topContributors = [
  { rank: 1, name: "David Kim", imports: 7, rep: 2847, specialty: "Drift Cars" },
  { rank: 2, name: "Emma Thompson", imports: 4, rep: 1923, specialty: "Classic JDM" },
  { rank: 3, name: "Carlos Martinez", imports: 5, rep: 1756, specialty: "Supercars" },
];

const mockPosts = [
  {
    id: "post-1",
    author: { name: "Mike Chen", verified: true, location: "Vancouver, BC", imports: 3 },
    timeAgo: "2 hours ago",
    title: "Finally got my R34 GT-R delivered! 🎉",
    body: "After 3 months of waiting, my Bayside Blue R34 finally arrived. The shipping pool saved me over $6,000 compared to individual shipping. Huge thanks to agent Yuki for handling everything perfectly!",
    vehicle: "1999 Nissan Skyline GT-R R34",
    importCost: 89500,
    tags: ["Success Story", "R34", "Shipping Pool"],
    likes: 247,
    comments: 43,
    views: 1205,
    images: 3,
    category: "success",
  },
  {
    id: "post-2",
    author: { name: "Sarah Rodriguez", verified: true, location: "Austin, TX", imports: 1 },
    timeAgo: "6 hours ago",
    title: "Import process questions - first timer here!",
    body: "Hey everyone! I'm looking at importing a 1998 Supra RZ and have some questions about the 25-year rule and EPA compliance. Any advice from experienced importers?",
    vehicle: "1998 Toyota Supra RZ",
    importCost: 75000,
    tags: ["Question", "First Import", "Supra"],
    likes: 89,
    comments: 67,
    views: 892,
    images: 1,
    category: "questions",
  },
  {
    id: "post-3",
    author: { name: "Kenji Nakamura", verified: true, location: "Tokyo, Japan", imports: 0, isAgent: true },
    timeAgo: "1 day ago",
    title: "Market Update: R32 GT-R prices trending up",
    body: "Seeing increased demand for R32 GT-Rs as they become more eligible for US import. Clean examples now starting at ¥4.5M (~$30K). Book early for Q2 shipping pool!",
    vehicle: null,
    importCost: null,
    tags: ["Market Update", "R32", "Agent Insight"],
    likes: 156,
    comments: 28,
    views: 743,
    images: 2,
    category: "market",
  },
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [postText, setPostText] = useState("");

  const filteredPosts =
    selectedCategory === "all"
      ? mockPosts
      : mockPosts.filter((post) => post.category === selectedCategory);

  const totalMembers = 2847;
  const totalPosts = 1234;
  const totalImports = 456;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero Header */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">JDM Community</h1>
              <p className="text-xl text-blue-100">
                Connect with fellow JDM enthusiasts, share experiences, and get expert advice.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-black mb-1">{totalMembers}</div>
                <div className="text-blue-200 text-sm">Members</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-black mb-1">{totalPosts}</div>
                <div className="text-blue-200 text-sm">Posts</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-black mb-1">{totalImports}</div>
                <div className="text-blue-200 text-sm">Imports</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as CategoryType)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                        selectedCategory === cat.id
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{cat.label}</span>
                        {cat.count !== null && (
                          <span className="text-sm opacity-75">{cat.count}</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Top Contributors</h2>
                <div className="space-y-4">
                  {topContributors.map((contributor) => (
                    <div key={contributor.rank} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {contributor.rank}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{contributor.name}</div>
                        <div className="text-xs text-gray-600">
                          {contributor.imports} imports • {contributor.rep} rep
                        </div>
                        <div className="text-xs text-blue-600 mt-1">{contributor.specialty}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Post Creation */}
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    U
                  </div>
                  <div className="flex-1">
                    <Input
                      placeholder="Share your JDM journey..."
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      className="mb-3"
                    />
                    <div className="flex justify-end">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                          {post.author.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900">{post.author.name}</span>
                            {post.author.verified && (
                              <CheckCircle2 className="w-4 h-4 text-blue-600" />
                            )}
                            {post.author.isAgent && (
                              <Badge className="bg-blue-600 text-white text-xs">Agent</Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            {post.author.location} • {post.author.imports} imports • {post.timeAgo}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-700 mb-4">{post.body}</p>

                      {post.vehicle && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                          <div className="font-semibold text-gray-900">{post.vehicle}</div>
                          <div className="text-sm text-gray-600">
                            Import cost: {formatCurrency(post.importCost || 0)}
                          </div>
                        </div>
                      )}

                      {post.images > 0 && (
                        <div className="flex gap-2 mb-4">
                          {Array.from({ length: post.images }).map((_, i) => (
                            <div
                              key={i}
                              className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center"
                            >
                              <Image
                                src="/placeholder-car.jpg"
                                alt="Post image"
                                width={96}
                                height={96}
                                className="rounded-lg object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-2 text-gray-600 hover:text-red-600">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                            <MessageSquare className="w-5 h-5" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                            <Share2 className="w-5 h-5" />
                            <span className="text-sm">Share</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Eye className="w-4 h-4" />
                          <span>{post.views} views</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
