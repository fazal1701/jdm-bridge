import type { VehicleSummary } from "./types/vehicle.types";

interface FilterParams {
  make?: string | null;
  model?: string | null;
  year?: number | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  condition?: string | null;
  transmission?: string | null;
  sortBy?: string | null;
}

export function filterVehicles(
  vehicles: VehicleSummary[],
  filters: FilterParams
): VehicleSummary[] {
  let result = [...vehicles];

  // Apply filters
  if (filters.make) {
    result = result.filter((v) =>
      v.make.toLowerCase().includes(filters.make!.toLowerCase())
    );
  }

  if (filters.model) {
    result = result.filter((v) =>
      v.model.toLowerCase().includes(filters.model!.toLowerCase())
    );
  }

  if (filters.year) {
    result = result.filter((v) => v.year === filters.year);
  }

  if (filters.minPrice) {
    result = result.filter((v) => v.estimatedLandedCost >= filters.minPrice!);
  }

  if (filters.maxPrice) {
    result = result.filter((v) => v.estimatedLandedCost <= filters.maxPrice!);
  }

  if (filters.condition) {
    result = result.filter((v) => v.condition === filters.condition);
  }

  // Sort
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.estimatedLandedCost - b.estimatedLandedCost);
        break;
      case "price-desc":
        result.sort((a, b) => b.estimatedLandedCost - a.estimatedLandedCost);
        break;
      case "year-desc":
        result.sort((a, b) => b.year - a.year);
        break;
      case "year-asc":
        result.sort((a, b) => a.year - b.year);
        break;
      case "mileage-asc":
        result.sort((a, b) => a.mileage - b.mileage);
        break;
      default:
        break;
    }
  }

  return result;
}

export function sortVehicles(
  vehicles: VehicleSummary[],
  sortBy: string
): VehicleSummary[] {
  const sorted = [...vehicles];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.estimatedLandedCost - b.estimatedLandedCost);
    case "price-desc":
      return sorted.sort((a, b) => b.estimatedLandedCost - a.estimatedLandedCost);
    case "year-desc":
      return sorted.sort((a, b) => b.year - a.year);
    case "year-asc":
      return sorted.sort((a, b) => a.year - b.year);
    case "mileage-asc":
      return sorted.sort((a, b) => a.mileage - b.mileage);
    default:
      return sorted;
  }
}

