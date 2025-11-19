"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, TrendingUp, TrendingDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface CurrencyConverterProps {
  initialAmount?: number;
  fromCurrency?: string;
  toCurrency?: string;
  onConvert?: (amount: number, from: string, to: string) => void;
}

const currencies = [
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
];

// Mock exchange rates (in production, fetch from API)
const mockRates: Record<string, number> = {
  "JPY-USD": 0.0067,
  "JPY-CAD": 0.0091,
  "JPY-EUR": 0.0062,
  "JPY-GBP": 0.0053,
  "USD-JPY": 149.25,
  "USD-CAD": 1.36,
  "USD-EUR": 0.93,
  "USD-GBP": 0.79,
  "CAD-JPY": 109.56,
  "CAD-USD": 0.74,
  "CAD-EUR": 0.68,
  "CAD-GBP": 0.58,
};

export function CurrencyConverter({
  initialAmount = 0,
  fromCurrency = "JPY",
  toCurrency = "USD",
  onConvert,
}: CurrencyConverterProps) {
  const [amount, setAmount] = useState(initialAmount.toString());
  const [from, setFrom] = useState(fromCurrency);
  const [to, setTo] = useState(toCurrency);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const rateKey = `${from}-${to}`;
    const exchangeRate = mockRates[rateKey] || 1;
    setRate(exchangeRate);
    const numAmount = parseFloat(amount) || 0;
    setConvertedAmount(numAmount * exchangeRate);
  }, [amount, from, to]);

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
  };

  const fromCurrencyData = currencies.find((c) => c.code === from);
  const toCurrencyData = currencies.find((c) => c.code === to);

  return (
    <Card className="border-2 border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Currency Converter</h3>
          <div className="text-xs text-gray-500">
            Last updated: {lastUpdate.toLocaleTimeString()}
          </div>
        </div>

        <div className="space-y-4">
          {/* From */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <div className="flex gap-2">
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="flex-1"
              />
            </div>
            {fromCurrencyData && (
              <p className="text-xs text-gray-500 mt-1">
                {fromCurrencyData.symbol} {parseFloat(amount || "0").toLocaleString()}
              </p>
            )}
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              onClick={swapCurrencies}
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          </div>

          {/* To */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <div className="flex gap-2">
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
              <Input
                type="text"
                value={convertedAmount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                readOnly
                className="flex-1 bg-gray-50"
              />
            </div>
            {toCurrencyData && (
              <p className="text-xs text-gray-500 mt-1">
                {toCurrencyData.symbol} {convertedAmount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            )}
          </div>

          {/* Exchange Rate */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Exchange Rate:</span>
              <span className="font-semibold text-gray-900">
                1 {from} = {rate.toFixed(4)} {to}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

