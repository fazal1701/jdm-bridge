import type { Auction } from "./types";
import { mockVehicles } from "./mock-data";

export const mockAuctions: Auction[] = [
  {
    id: "auction-1",
    vehicle: mockVehicles[0],
    currentBid: 1450000,
    reservePrice: 1200000,
    timeRemaining: 225,
    bidCount: 12,
    status: "ending_soon",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 225 * 1000).toISOString(),
    inspectionReportAvailable: true,
  },
  {
    id: "auction-2",
    vehicle: mockVehicles[1],
    currentBid: 3200000,
    reservePrice: 2800000,
    timeRemaining: 743,
    bidCount: 8,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 743 * 1000).toISOString(),
    inspectionReportAvailable: true,
  },
  {
    id: "auction-3",
    vehicle: mockVehicles[2],
    currentBid: 2100000,
    reservePrice: 2000000,
    timeRemaining: 1520,
    bidCount: 5,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 1520 * 1000).toISOString(),
    inspectionReportAvailable: false,
  },
];

