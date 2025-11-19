// Vehicle domain types

export type VehicleCondition = "mint" | "excellent" | "good" | "fair" | "poor";

export type TransmissionType = "manual" | "automatic" | "cvt";

export interface VehicleImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface SellerSummary {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  avatar?: string;
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
  seller: SellerSummary;
  featured?: boolean;
}

export interface Vehicle extends VehicleSummary {
  transmission: TransmissionType;
  color: string;
  images: VehicleImage[];
  eligibleCountries: string[];
  createdAt: string;
  updatedAt: string;
}

export interface FinancingOption {
  id: string;
  name: string;
  apr: number;
  termMonths: number;
  minDownPaymentPercent: number;
}


