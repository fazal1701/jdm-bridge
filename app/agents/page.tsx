"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  MessageSquare,
  Star,
  Clock,
  Globe,
  TrendingUp,
  MapPin,
} from "lucide-react";
import { mockAgents } from "@/lib/data";
import { formatCurrency } from "@/lib/formatting";
import { SiteFooter } from "@/components/layout/site-footer";

type FilterType = "all" | "online" | "available";
type SortType = "rating" | "deals" | "response" | "savings";

const languageNames: Record<string, string> = {
  ja: "Japanese",
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  ko: "Korean",
  zh: "Chinese",
  pt: "Portuguese",
};

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [sort, setSort] = useState<SortType>("rating");

  let filteredAgents = [...mockAgents];

  // Filter by search term
  if (searchTerm) {
    filteredAgents = filteredAgents.filter(
      (agent) =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (agent.location && agent.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
        agent.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

  // Filter by status
  if (filter === "online") {
    filteredAgents = filteredAgents.filter((agent) => agent.status === "online");
  } else if (filter === "available") {
    filteredAgents = filteredAgents.filter((agent) => agent.queueLength === 0);
  }

  // Sort agents
  filteredAgents.sort((a, b) => {
    if (sort === "rating") {
      return b.rating - a.rating;
    } else if (sort === "deals") {
      return b.dealCount - a.dealCount;
    } else if (sort === "response") {
      return a.responseTime - b.responseTime;
    } else if (sort === "savings") {
      return (b.avgSavings || 0) - (a.avgSavings || 0);
    }
    return 0;
  });

  const totalAgents = mockAgents.length;
  const onlineAgents = mockAgents.filter((a) => a.status === "online").length;
  const totalDeals = mockAgents.reduce((sum, a) => sum + a.dealCount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero Header */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">Bilingual Agents</h1>
              <p className="text-xl text-blue-100">
                Connect with verified agents who speak Japanese and English for seamless communication
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-black mb-1">{totalAgents}</div>
                <div className="text-blue-200 text-sm">Verified Agents</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-black mb-1">{onlineAgents}</div>
                <div className="text-blue-200 text-sm">Online Now</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl md:text-4xl font-black mb-1">{totalDeals}+</div>
                <div className="text-blue-200 text-sm">Successful Deals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by name, location, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 border-2 border-gray-200 focus:border-blue-500 text-black placeholder:text-gray-400 bg-white"
              />
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-blue-600" : ""}
              size="sm"
            >
              All Agents
            </Button>
            <Button
              variant={filter === "online" ? "default" : "outline"}
              onClick={() => setFilter("online")}
              className={filter === "online" ? "bg-blue-600" : ""}
              size="sm"
            >
              Online
            </Button>
            <Button
              variant={filter === "available" ? "default" : "outline"}
              onClick={() => setFilter("available")}
              className={filter === "available" ? "bg-blue-600" : ""}
              size="sm"
            >
              Available Now
            </Button>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-bold text-blue-600">{filteredAgents.length}</span> agents
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortType)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="rating">Highest Rating</option>
                <option value="deals">Most Deals</option>
                <option value="response">Fastest Response</option>
                <option value="savings">Most Savings</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                          {agent.status === "online" && (
                            <Badge className="bg-green-600 text-white text-xs">Online</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <MapPin className="w-4 h-4" />
                          {agent.location || "Location not specified"}
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="font-semibold text-gray-900">{agent.rating}</span>
                          <span className="text-sm text-gray-600">({agent.dealCount} deals)</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                          <Clock className="w-3 h-3" />
                          Response
                        </div>
                        <div className="font-bold text-gray-900">{agent.responseTime} min</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                          <TrendingUp className="w-3 h-3" />
                          Success Rate
                        </div>
                        <div className="font-bold text-gray-900">{agent.successRate}%</div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-600 mb-2 flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        Languages
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {agent.languages.map((lang) => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {languageNames[lang] || lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-600 mb-2">Specialties</div>
                      <div className="flex flex-wrap gap-1">
                        {agent.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-700 mb-4 line-clamp-2">{agent.bio}</p>

                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-xs text-gray-600">Typical Range</div>
                          <div className="font-semibold text-gray-900">{agent.typicalRange}</div>
                        </div>
                        {agent.avgSavings && (
                          <div className="text-right">
                            <div className="text-xs text-gray-600">Avg. Savings</div>
                            <div className="font-semibold text-green-600">
                              {formatCurrency(agent.avgSavings)}
                            </div>
                          </div>
                        )}
                      </div>
                      {agent.queueLength > 0 && (
                        <div className="text-xs text-orange-600 mb-3">
                          {agent.queueLength} {agent.queueLength === 1 ? "person" : "people"} in queue
                        </div>
                      )}
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Agent
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
