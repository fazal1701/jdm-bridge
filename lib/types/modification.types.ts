// Modification and customization service types

export type ModificationCategory = 
  | "body-kit"
  | "performance"
  | "suspension"
  | "wheels"
  | "interior"
  | "exterior"
  | "engine"
  | "exhaust"
  | "aero"
  | "lighting";

export type ModificationDifficulty = "easy" | "moderate" | "advanced" | "expert";

export interface ModificationShop {
  id: string;
  name: string;
  location: string;
  city: string;
  prefecture: string;
  rating: number;
  reviewCount: number;
  specialties: ModificationCategory[];
  verified: boolean;
  yearsInBusiness: number;
  completedProjects: number;
  logo?: string;
  images: string[];
  description: string;
  certifications: string[];
}

export interface ModificationPackage {
  id: string;
  name: string;
  category: ModificationCategory;
  description: string;
  price: number; // in JPY
  estimatedDays: number;
  difficulty: ModificationDifficulty;
  includes: string[];
  images: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };
  popularFor: string[]; // Vehicle models this is popular for
  shopId: string;
}

export interface CustomModification {
  id: string;
  vehicleId: string;
  packages: ModificationPackage[];
  totalCost: number;
  estimatedCompletionDays: number;
  shopId: string;
  status: "pending" | "approved" | "in-progress" | "completed";
  notes?: string;
}

export interface BodyKit {
  id: string;
  name: string;
  brand: string;
  price: number; // in JPY
  fitment: string[]; // Compatible vehicle models
  material: "FRP" | "Carbon Fiber" | "Polyurethane" | "ABS";
  pieces: string[]; // Front bumper, side skirts, rear bumper, etc.
  images: string[];
  installationTime: number; // in days
  paintingRequired: boolean;
  weight?: number; // in kg
  origin: string; // Japan, Taiwan, etc.
}

export interface PerformancePart {
  id: string;
  name: string;
  brand: string;
  category: "turbo" | "exhaust" | "intake" | "ecu" | "intercooler" | "suspension" | "brakes";
  price: number; // in JPY
  fitment: string[];
  powerGain?: number; // HP
  torqueGain?: number; // Nm
  images: string[];
  installationTime: number; // in days
  warranty?: string;
  certifications?: string[]; // JASMA, etc.
}

export interface ModificationGallery {
  id: string;
  vehicleModel: string;
  year: number;
  shopId: string;
  title: string;
  description: string;
  modifications: string[];
  totalCost: number;
  completionTime: number; // in days
  images: string[];
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

