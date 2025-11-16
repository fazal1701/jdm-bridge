"use client";

import { useQueryState, parseAsString, parseAsInteger } from "nuqs";

export function useFilters() {
  const [make, setMake] = useQueryState("make", parseAsString);
  const [model, setModel] = useQueryState("model", parseAsString);
  const [year, setYear] = useQueryState("year", parseAsInteger);
  const [minPrice, setMinPrice] = useQueryState("minPrice", parseAsInteger);
  const [maxPrice, setMaxPrice] = useQueryState("maxPrice", parseAsInteger);
  const [condition, setCondition] = useQueryState("condition", parseAsString);
  const [transmission, setTransmission] = useQueryState(
    "transmission",
    parseAsString
  );
  const [sortBy, setSortBy] = useQueryState("sortBy", parseAsString);
  const [view, setView] = useQueryState("view", parseAsString.withDefault("grid"));

  const clearFilters = () => {
    setMake(null);
    setModel(null);
    setYear(null);
    setMinPrice(null);
    setMaxPrice(null);
    setCondition(null);
    setTransmission(null);
    setSortBy(null);
  };

  return {
    filters: {
      make,
      model,
      year,
      minPrice,
      maxPrice,
      condition,
      transmission,
      sortBy,
      view,
    },
    setMake,
    setModel,
    setYear,
    setMinPrice,
    setMaxPrice,
    setCondition,
    setTransmission,
    setSortBy,
    setView,
    clearFilters,
  };
}

