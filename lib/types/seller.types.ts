// Seller domain types

import type { LanguageCode } from "./agent.types";

export type SellerTier = "tier1" | "tier2" | "tier3";

export interface Seller {
  id: string;
  name: string;
  tier: SellerTier;
  rating: number;
  reviewCount: number;
  dealCount: number;
  responseTime: number; // minutes
  languages: LanguageCode[];
  specialties: string[];
  verified: boolean;
  avatar?: string;
  location?: string;
  joinedAt: string;
}


