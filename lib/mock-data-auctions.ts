import type { Auction } from "./types";
import { mockVehicles } from "./mock-data";

export const mockAuctions: Auction[] = [
  {
    id: "auction-1",
    vehicle: {
      id: "1",
      year: 2000,
      make: "Nissan",
      model: "Skyline GT-R",
      trim: "R34 V-Spec",
      mileage: 52000,
      condition: "mint",
      jpPrice: 9200000,
      estimatedLandedCost: 92000,
      primaryImage: mockVehicles[0].primaryImage,
      location: "Tokyo, Japan",
      features: ["V-Spec Package", "Original Paint", "Low Mileage"],
      seller: mockVehicles[0].seller,
    },
    currentBid: 9200000, // $92,000 USD
    reservePrice: 8500000,
    timeRemaining: 3589, // ~1 hour
    bidCount: 47,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 3589 * 1000).toISOString(),
    inspectionReportAvailable: true,
    isHot: true,
    reserveMet: true,
  },
  {
    id: "auction-2",
    vehicle: {
      id: "2",
      year: 1997,
      make: "Toyota",
      model: "Supra",
      trim: "RZ Twin Turbo",
      mileage: 89000,
      condition: "excellent",
      jpPrice: 6800000,
      estimatedLandedCost: 68000,
      primaryImage: mockVehicles[1].primaryImage,
      location: "Osaka, Japan",
      features: ["Twin Turbo", "6-Speed Manual", "Original Interior"],
      seller: mockVehicles[1].seller,
    },
    currentBid: 6800000, // $68,000 USD
    reservePrice: 7000000,
    timeRemaining: 7189, // ~2 hours
    bidCount: 23,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 7189 * 1000).toISOString(),
    inspectionReportAvailable: true,
    isHot: false,
    reserveMet: false,
  },
  {
    id: "auction-3",
    vehicle: {
      id: "3",
      year: 1999,
      make: "Mazda",
      model: "RX-7",
      trim: "Type R",
      mileage: 67000,
      condition: "excellent",
      jpPrice: 4500000,
      estimatedLandedCost: 45000,
      primaryImage: mockVehicles[2].primaryImage,
      location: "Yokohama, Japan",
      features: ["Type R Package", "Rotary Engine", "Original Wheels"],
      seller: mockVehicles[2].seller,
    },
    currentBid: 4500000, // $45,000 USD
    reservePrice: 4200000,
    timeRemaining: 1789, // ~30 minutes
    bidCount: 31,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 1789 * 1000).toISOString(),
    inspectionReportAvailable: true,
    isHot: true,
    reserveMet: true,
  },
];

