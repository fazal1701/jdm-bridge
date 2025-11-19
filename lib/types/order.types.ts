// Order domain types

import type { VehicleSummary } from "./vehicle.types";
import type { ShippingPool } from "./shipping.types";

export type OrderStatus =
  | "pending"
  | "inspection"
  | "shipped"
  | "in_transit"
  | "customs"
  | "delivered"
  | "completed";

export type MilestoneStatus = "pending" | "in_progress" | "completed" | "failed";

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


