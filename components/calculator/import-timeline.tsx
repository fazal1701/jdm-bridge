"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Package, Ship, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: "completed" | "current" | "upcoming";
  icon: typeof CheckCircle2;
}

interface ImportTimelineProps {
  startDate: Date;
  estimatedDelivery: Date;
}

export function ImportTimeline({ startDate, estimatedDelivery }: ImportTimelineProps) {
  const steps: TimelineStep[] = [
    {
      id: "1",
      title: "Purchase & Payment",
      description: "Vehicle purchase confirmed, down payment processed",
      duration: "1-2 weeks",
      status: "completed",
      icon: CheckCircle2,
    },
    {
      id: "2",
      title: "Export Preparation",
      description: "Export certificate, documentation, port preparation",
      duration: "1-2 weeks",
      status: "current",
      icon: Package,
    },
    {
      id: "3",
      title: "Ocean Transit",
      description: "Vehicle shipped from Japan to destination port",
      duration: "3-4 weeks",
      status: "upcoming",
      icon: Ship,
    },
    {
      id: "4",
      title: "Customs Clearance",
      description: "Customs processing, duty payment, documentation",
      duration: "1-2 weeks",
      status: "upcoming",
      icon: MapPin,
    },
    {
      id: "5",
      title: "Final Delivery",
      description: "Vehicle delivered to your location",
      duration: "3-5 days",
      status: "upcoming",
      icon: Calendar,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500 border-green-500";
      case "current":
        return "bg-blue-500 border-blue-500";
      default:
        return "bg-gray-300 border-gray-300";
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "current":
        return "text-blue-600";
      default:
        return "text-gray-400";
    }
  };

  return (
    <Card className="border-2 border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Import Timeline</h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-4"
                >
                  {/* Icon Circle */}
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full border-4 ${getStatusColor(
                      step.status
                    )} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        step.status === "completed" || step.status === "current"
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4
                        className={`font-bold ${
                          step.status === "completed" || step.status === "current"
                            ? "text-gray-900"
                            : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <span className={`text-xs font-semibold ${getStatusTextColor(step.status)}`}>
                        {step.duration}
                      </span>
                    </div>
                    <p
                      className={`text-sm ${
                        step.status === "completed" || step.status === "current"
                          ? "text-gray-700"
                          : "text-gray-400"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <div>
              <span className="text-gray-600">Start Date:</span>
              <span className="font-semibold text-gray-900 ml-2">
                {startDate.toLocaleDateString()}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Est. Delivery:</span>
              <span className="font-semibold text-blue-600 ml-2">
                {estimatedDelivery.toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

