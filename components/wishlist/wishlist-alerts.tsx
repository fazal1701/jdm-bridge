"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, X, AlertCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/formatting";

interface Alert {
  id: string;
  type: "price_drop" | "new_arrival" | "auction_ending" | "wishlist_item";
  title: string;
  message: string;
  vehicleId?: string;
  timestamp: Date;
  read: boolean;
}

interface WishlistAlertsProps {
  alerts: Alert[];
  onDismiss: (alertId: string) => void;
  onMarkRead: (alertId: string) => void;
}

export function WishlistAlerts({ alerts, onDismiss, onMarkRead }: WishlistAlertsProps) {
  const unreadCount = alerts.filter((a) => !a.read).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Bell className="w-5 h-5 text-blue-600" />
          Alerts & Notifications
          {unreadCount > 0 && (
            <Badge className="bg-red-600 text-white">{unreadCount}</Badge>
          )}
        </h3>
      </div>

      <div className="space-y-3">
        {alerts.length === 0 ? (
          <Card className="border-2 border-gray-200">
            <CardContent className="p-8 text-center">
              <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No alerts yet</p>
            </CardContent>
          </Card>
        ) : (
          alerts.map((alert) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card
                className={`border-2 transition-all ${
                  alert.read
                    ? "border-gray-200 bg-gray-50"
                    : "border-blue-500 bg-blue-50"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        alert.type === "price_drop"
                          ? "bg-green-100"
                          : alert.type === "new_arrival"
                          ? "bg-blue-100"
                          : alert.type === "auction_ending"
                          ? "bg-red-100"
                          : "bg-purple-100"
                      }`}
                    >
                      {alert.type === "price_drop" ? (
                        <DollarSign className="w-5 h-5 text-green-600" />
                      ) : alert.type === "auction_ending" ? (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      ) : (
                        <Bell className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">{alert.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                        </div>
                        <button
                          onClick={() => onDismiss(alert.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500">
                          {alert.timestamp.toLocaleDateString()}
                        </span>
                        {!alert.read && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onMarkRead(alert.id)}
                            className="h-6 text-xs"
                          >
                            Mark as read
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

interface PriceAlertFormProps {
  currentPrice: number;
  onSetAlert: (targetPrice: number) => void;
}

export function PriceAlertForm({ currentPrice, onSetAlert }: PriceAlertFormProps) {
  const [targetPrice, setTargetPrice] = useState(currentPrice * 0.9);

  return (
    <Card className="border-2 border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-gray-900">Set Price Alert</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Get notified when this vehicle drops below your target price.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Price: {formatCurrency(currentPrice)}
            </label>
            <Input
              type="number"
              value={targetPrice}
              onChange={(e) => setTargetPrice(parseFloat(e.target.value) || 0)}
              className="h-12"
            />
            <p className="text-xs text-gray-500 mt-1">
              Alert me when price drops below: {formatCurrency(targetPrice)}
            </p>
          </div>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => onSetAlert(targetPrice)}
          >
            <Bell className="w-4 h-4 mr-2" />
            Set Alert
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

