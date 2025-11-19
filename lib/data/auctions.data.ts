// Auction mock data

import type { Auction } from "@/lib/types/auction.types";
import { mockVehicles } from "./vehicles.data";

export const mockAuctions: Auction[] = [
  {
    id: "auction-1",
    vehicle: mockVehicles[0], // 1999 Nissan Skyline GT-R R34 V-Spec
    currentBid: 1520000000, // $152,000 USD (in cents)
    reservePrice: 1400000000,
    timeRemaining: 3589, // ~1 hour
    bidCount: 47,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 3589 * 1000).toISOString(),
    inspectionReportAvailable: true,
    isHot: true,
    reserveMet: true,
    noReserve: false,
  },
  {
    id: "auction-2",
    vehicle: mockVehicles[1], // 1997 Toyota Supra RZ Twin Turbo
    currentBid: 890000000, // $89,000 USD (in cents)
    reservePrice: 950000000,
    timeRemaining: 7189, // ~2 hours
    bidCount: 23,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 7189 * 1000).toISOString(),
    inspectionReportAvailable: true,
    isHot: false,
    reserveMet: false,
    noReserve: false,
  },
  {
    id: "auction-3",
    vehicle: mockVehicles[2], // 1996 Mazda RX-7 FD Type R
    currentBid: 780000000, // $78,000 USD (in cents)
    reservePrice: 720000000,
    timeRemaining: 1789, // ~30 minutes
    bidCount: 31,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 1789 * 1000).toISOString(),
    inspectionReportAvailable: true,
    isHot: true,
    reserveMet: true,
    noReserve: false,
  },
  {
    id: "auction-4",
    vehicle: mockVehicles[3], // 1998 Honda NSX Type S Zero
    currentBid: 1250000000, // $125,000 USD (in cents)
    reservePrice: 1200000000,
    timeRemaining: 10800, // ~3 hours
    bidCount: 18,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 10800 * 1000).toISOString(),
    inspectionReportAvailable: true,
    isHot: false,
    reserveMet: true,
    noReserve: false,
  },
  {
    id: "auction-5",
    vehicle: mockVehicles[4], // 1995 Mitsubishi Lancer Evolution III GSR
    currentBid: 420000000, // $42,000 USD (in cents)
    reservePrice: 0,
    timeRemaining: 14400, // ~4 hours
    bidCount: 12,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 14400 * 1000).toISOString(),
    inspectionReportAvailable: true,
    isHot: false,
    reserveMet: true,
    noReserve: true,
  },
  {
    id: "auction-6",
    vehicle: mockVehicles[5], // 1994 Subaru Impreza WRX STI Type RA
    currentBid: 550000000, // $55,000 USD (in cents)
    reservePrice: 500000000,
    timeRemaining: 5400, // ~1.5 hours
    bidCount: 28,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 5400 * 1000).toISOString(),
    inspectionReportAvailable: true,
    isHot: true,
    reserveMet: true,
    noReserve: false,
  },
];

export const liveAuctions = mockAuctions.filter((a) => a.status === "live");
export const endingSoonAuctions = mockAuctions.filter(
  (a) => a.status === "ending_soon"
);

