// Domain types for JDM Collective platform

export type UserRole = "buyer" | "seller" | "agent" | "admin";

export type SellerTier = "tier1" | "tier2" | "tier3";

export type VehicleCondition = "mint" | "excellent" | "good" | "fair" | "poor";

export type TransmissionType = "manual" | "automatic" | "cvt";

export type AuctionStatus = "live" | "ending_soon" | "closed" | "upcoming";

export type OrderStatus =
  | "pending"
  | "inspection"
  | "shipped"
  | "in_transit"
  | "customs"
  | "delivered"
  | "completed";

export type MilestoneStatus = "pending" | "in_progress" | "completed" | "failed";

export type LanguageCode = "en" | "ja" | "es" | "fr" | "de" | "ko" | "zh" | "pt";

export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  mileage: number;
  condition: VehicleCondition;
  transmission: TransmissionType;
  color: string;
  jpPrice: number;
  estimatedLandedCost: number;
  images: VehicleImage[];
  seller: SellerSummary;
  eligibleCountries: string[];
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface VehicleImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface VehicleSummary {
  id: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  mileage: number;
  condition: VehicleCondition;
  jpPrice: number;
  estimatedLandedCost: number;
  primaryImage: string;
  location?: string;
  features?: string[];
  seller: {
    id: string;
    name: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
  };
  featured?: boolean;
}

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

export interface SellerSummary {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  avatar?: string;
}

export interface AgentProfile {
  id: string;
  name: string;
  rating: number;
  dealCount: number;
  responseTime: number; // minutes
  languages: LanguageCode[];
  specialties: string[];
  status: "online" | "offline" | "away";
  queueLength: number;
  avatar?: string;
  bio?: string;
  location?: string;
  since?: number; // year
  successRate?: number; // percentage
  typicalRange?: string;
  avgSavings?: number;
}

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

export interface ShippingPool {
  id: string;
  name: string;
  quarter?: string;
  departurePort: string;
  arrivalPort: string;
  departureDate: string;
  arrivalDate: string;
  capacity: number;
  filled: number;
  teuReserved?: number;
  teuCapacity?: number;
  participants?: number;
  status: "open" | "filling" | "closed" | "in_transit" | "arrived";
  costPerVehicle: number;
  savingsVsSingle: number;
  recentAdditions?: string[];
  timeline?: {
    inspection: number;
    loading: number;
    transit: number;
    customs: number;
  };
}

export interface CostBreakdown {
  vehicleCost: number;
  japanExportFee: number;
  shipping: number;
  portFees: number;
  customsBrokerage: number;
  importDuty: number;
  registration: number;
  taxes: number;
  total: number;
  savingsVsLocal?: number;
}

export interface Milestone {
  id: string;
  name: string;
  description: string;
  status: MilestoneStatus;
  completedAt?: string;
  estimatedCompletion?: string;
}

export interface Order {
  id: string;
  vehicle: VehicleSummary;
  buyerId: string;
  sellerId: string;
  agentId?: string;
  status: OrderStatus;
  milestones: Milestone[];
  shippingPool?: ShippingPool;
  costBreakdown: CostBreakdown;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  quote: string;
  rating: number;
  avatar?: string;
  verified: boolean;
}

export interface CommunityStory {
  id: string;
  author: {
    name: string;
    location: string;
    avatar?: string;
  };
  vehicle: string;
  quote: string;
  image?: string;
  views: number;
  likes: number;
  comments: number;
  importedCost: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

