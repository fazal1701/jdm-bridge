"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, MessageSquare, Clock, Globe, CheckCircle2 } from "lucide-react";
import { mockAgents } from "@/lib/mock-data";

export default function AgentsPage() {
  const onlineAgents = mockAgents.filter((a) => a.status === "online");
  const offlineAgents = mockAgents.filter((a) => a.status !== "online");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-3">
            <Users className="w-10 h-10" />
            Expert Agents
          </h1>
          <p className="text-xl text-blue-100">
            Connect with verified bilingual agents in Japan
          </p>
        </div>
      </section>

      {/* Online Agents */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Online Now</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineAgents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Offline Agents */}
      {offlineAgents.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900 mb-8">Available Later</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offlineAgents.map((agent, index) => (
                <AgentCard key={agent.id} agent={agent} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function AgentCard({
  agent,
  index,
}: {
  agent: typeof mockAgents[0];
  index: number;
}) {
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
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold text-gray-900">{agent.rating}</span>
                <span className="text-sm text-gray-600">
                  ({agent.dealCount} deals)
                </span>
              </div>
              <Badge
                variant={agent.status === "online" ? "default" : "outline"}
                className={
                  agent.status === "online"
                    ? "bg-green-600 text-white"
                    : "border-gray-300"
                }
              >
                {agent.status === "online" ? "Online" : "Offline"}
              </Badge>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Avg. Response: {agent.responseTime} min</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MessageSquare className="w-4 h-4" />
              <span>Queue: {agent.queueLength} waiting</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-1">Languages:</div>
              <div className="flex gap-2">
                {agent.languages.map((lang) => (
                  <Globe key={lang} className="w-4 h-4 text-blue-600" title={lang.toUpperCase()} />
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-1">Specialties:</div>
              <div className="flex flex-wrap gap-2">
                {agent.specialties.map((spec) => (
                  <Badge key={spec} variant="outline" className="text-xs">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
            <Link href={`/agents/${agent.id}`}>Chat with Agent</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

