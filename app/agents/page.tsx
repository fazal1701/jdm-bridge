"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  Star,
  MessageSquare,
  Clock,
  Globe,
  CheckCircle2,
  Search,
  Grid3x3,
  List,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { mockAgents } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/formatting";

type ViewMode = "grid" | "detailed";

const languageNames: Record<string, string> = {
  en: "English",
  ja: "Japanese",
  es: "Spanish",
  fr: "French",
  de: "German",
  ko: "Korean",
  zh: "Mandarin",
  pt: "Portuguese",
};

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "detailed">("grid");

  const onlineAgents = mockAgents.filter((a) => a.status === "online");
  const totalAgents = mockAgents.length;
  const totalDeals = mockAgents.reduce((sum, a) => sum + a.dealCount, 0);
  const avgSuccessRate =
    mockAgents.reduce((sum, a) => sum + (a.successRate || 0), 0) / mockAgents.length;

  // Filter agents
  let filteredAgents = [...mockAgents];
  if (showOnlineOnly) {
    filteredAgents = filteredAgents.filter((a) => a.status === "online");
  }
  if (searchQuery) {
    filteredAgents = filteredAgents.filter(
      (a) =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }
  if (selectedSpecialty !== "all") {
    filteredAgents = filteredAgents.filter((a) =>
      a.specialties.includes(selectedSpecialty)
    );
  }
  if (selectedLocation !== "all") {
    filteredAgents = filteredAgents.filter((a) => a.location === selectedLocation);
  }

  const allSpecialties = Array.from(
    new Set(mockAgents.flatMap((a) => a.specialties))
  ).sort();
  const allLocations = Array.from(
    new Set(mockAgents.map((a) => a.location).filter(Boolean))
  ).sort();

  const formatResponseTime = (minutes: number) => {
    if (minutes < 60) return `< ${Math.ceil(minutes / 60)} hour`;
    if (minutes < 120) return "< 2 hours";
    if (minutes < 240) return "< 4 hours";
    if (minutes < 360) return "< 6 hours";
    return "> 6 hours";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero Header with Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Connect with Expert JDM Agents</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Our bilingual agents bridge the language gap and provide expert guidance throughout your
            JDM import journey. From finding the perfect vehicle to handling complex export
            documentation.
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-black mb-1">{totalAgents}</div>
              <div className="text-blue-200 text-sm">Expert Agents</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-1">{totalDeals}</div>
              <div className="text-blue-200 text-sm">Completed Deals</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-1">{avgSuccessRate.toFixed(1)}%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search agents by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showOnlineOnly}
                  onChange={(e) => setShowOnlineOnly(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700">Show online agents only</span>
                {showOnlineOnly && (
                  <Badge className="bg-green-600 text-white text-xs">
                    {onlineAgents.length} agents available
                  </Badge>
                )}
              </label>
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="All Specialties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  {allSpecialties.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {allLocations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex gap-2 border border-gray-300 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className={viewMode === "grid" ? "bg-blue-600 text-white" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "detailed" ? "default" : "ghost"}
                  size="sm"
                  className={viewMode === "detailed" ? "bg-blue-600 text-white" : ""}
                  onClick={() => setViewMode("detailed")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-6"
            }
          >
            {filteredAgents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} viewMode={viewMode} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Agents */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">
            Why Choose Our Agents?
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our carefully vetted agents provide more than just translation - they&apos;re your
            trusted partners in the JDM import process.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "A",
                title: "Expert Translation",
                description:
                  "Beyond basic translation, our agents understand automotive terminology and cultural nuances in negotiations.",
              },
              {
                icon: "✓",
                title: "Verified & Trusted",
                description:
                  "All agents undergo thorough background checks and maintain high customer satisfaction ratings.",
              },
              {
                icon: "📈",
                title: "Market Expertise",
                description:
                  "Deep knowledge of JDM market trends, pricing, and the best sources for specific vehicle types.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function AgentCard({
  agent,
  index,
  viewMode,
}: {
  agent: typeof mockAgents[0];
  index: number;
  viewMode: "grid" | "detailed";
}) {
  const formatResponseTime = (minutes: number) => {
    if (minutes < 120) return "< 2 hours";
    if (minutes < 240) return "< 4 hours";
    if (minutes < 360) return "< 6 hours";
    return "< 6 hours";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg h-full">
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                {agent.name.charAt(0)}
              </div>
              {agent.status === "online" && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {agent.location}
                  {agent.since && `, Since ${agent.since}`}
                </span>
              </div>
              <Badge className="bg-green-600 text-white text-xs">Verified</Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-gray-900">{agent.rating}</span>
            <span className="text-sm text-gray-600">• {agent.dealCount} Deals</span>
            {agent.successRate && (
              <span className="text-sm text-gray-600">• {agent.successRate}% Success</span>
            )}
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{formatResponseTime(agent.responseTime)} Response</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-1">Languages:</div>
              <div className="flex flex-wrap gap-2">
                {agent.languages.map((lang) => (
                  <Badge key={lang} variant="outline" className="text-xs">
                    {languageNames[lang] || lang.toUpperCase()}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-1">Specialties:</div>
              <div className="flex flex-wrap gap-2">
                {agent.specialties.map((spec) => (
                  <Badge key={spec} className="bg-blue-600 text-white text-xs">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {agent.bio && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{agent.bio}</p>
          )}

          <div className="flex items-center justify-between text-sm mb-4 pt-4 border-t border-gray-200">
            {agent.typicalRange && (
              <div>
                <div className="text-gray-600">Typical range</div>
                <div className="font-semibold text-gray-900">{agent.typicalRange}</div>
              </div>
            )}
            {agent.avgSavings && (
              <div className="text-right">
                <div className="text-gray-600">Avg. savings</div>
                <div className="font-semibold text-green-600">
                  {formatCurrency(agent.avgSavings)}
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href={`/agents/${agent.id}`}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Start Chat
              </Link>
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <Link href={`/agents/${agent.id}/profile`}>
                <Users className="w-4 h-4 mr-2" />
                View Profile
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
