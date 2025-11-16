export const MAKES = [
  "Nissan",
  "Toyota",
  "Honda",
  "Mazda",
  "Subaru",
  "Mitsubishi",
  "Lexus",
  "Acura",
  "Suzuki",
  "Daihatsu",
] as const;

export const POPULAR_MODELS = {
  Nissan: ["Skyline GT-R", "Silvia", "350Z", "370Z", "Fairlady Z"],
  Toyota: ["Supra", "AE86", "MR2", "Celica", "Chaser"],
  Honda: ["Civic Type-R", "S2000", "NSX", "Integra", "Prelude"],
  Mazda: ["RX-7", "RX-8", "Miata", "RX-3"],
  Subaru: ["WRX STI", "Impreza", "BRZ"],
  Mitsubishi: ["Lancer Evolution", "3000GT", "Eclipse"],
} as const;

export const CONDITION_GRADES = [
  { value: "mint", label: "Mint", description: "Like new, perfect condition" },
  {
    value: "excellent",
    label: "Excellent",
    description: "Very good condition, minor wear",
  },
  {
    value: "good",
    label: "Good",
    description: "Good condition, some wear",
  },
  {
    value: "fair",
    label: "Fair",
    description: "Fair condition, noticeable wear",
  },
  {
    value: "poor",
    label: "Poor",
    description: "Poor condition, significant wear",
  },
] as const;

export const BODY_STYLES = [
  "Coupe",
  "Sedan",
  "Hatchback",
  "Wagon",
  "SUV",
  "Convertible",
  "Pickup",
] as const;

export const TRANSMISSION_OPTIONS = [
  { value: "manual", label: "Manual" },
  { value: "automatic", label: "Automatic" },
  { value: "cvt", label: "CVT" },
] as const;

export const FEATURED_MODELS = [
  "Nissan Skyline GT-R",
  "Toyota Supra",
  "Honda Civic Type-R",
  "Mazda RX-7",
  "Subaru WRX STI",
] as const;

export const YEARS = Array.from({ length: 35 }, (_, i) => 1990 + i).reverse();

export const PRICE_RANGES = [
  { min: 0, max: 15000, label: "Under $15K" },
  { min: 15000, max: 25000, label: "$15K - $25K" },
  { min: 25000, max: 40000, label: "$25K - $40K" },
  { min: 40000, max: 60000, label: "$40K - $60K" },
  { min: 60000, max: Infinity, label: "$60K+" },
] as const;

export const MILEAGE_RANGES = [
  { min: 0, max: 50000, label: "Under 50K km" },
  { min: 50000, max: 100000, label: "50K - 100K km" },
  { min: 100000, max: 150000, label: "100K - 150K km" },
  { min: 150000, max: Infinity, label: "150K+ km" },
] as const;

export const DESTINATIONS = {
  usa: [
    { value: "usa-wa", label: "Washington" },
    { value: "usa-ca", label: "California" },
    { value: "usa-ny", label: "New York" },
    { value: "usa-tx", label: "Texas" },
    { value: "usa-fl", label: "Florida" },
  ],
  canada: [
    { value: "canada-bc", label: "British Columbia" },
    { value: "canada-on", label: "Ontario" },
    { value: "canada-ab", label: "Alberta" },
    { value: "canada-qc", label: "Quebec" },
  ],
} as const;

