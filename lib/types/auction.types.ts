// Auction domain types

import type { VehicleSummary } from "./vehicle.types";

export type AuctionStatus = "live" | "ending_soon" | "closed" | "upcoming";

export interface Auction {
  id: string;
  vehicle: VehicleSummary;
  currentBid: number;
  reservePrice?: number;
  timeRemaining: number; // seconds
  bidCount: number;
  status: AuctionStatus;
  eligibleCountries: string[];
  endsAt: string;
  inspectionReportAvailable: boolean;
  isHot?: boolean;
  reserveMet?: boolean;
  noReserve?: boolean;
}


