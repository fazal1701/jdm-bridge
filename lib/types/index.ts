// Re-export all types from domain-specific files

export * from "./vehicle.types";
export * from "./auction.types";
export * from "./shipping.types";
export * from "./agent.types";
export * from "./community.types";
export * from "./order.types";
export * from "./seller.types";

// Common types
export type UserRole = "buyer" | "seller" | "agent" | "admin";


