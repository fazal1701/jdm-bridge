import type {
  VehicleSummary,
  Seller,
  AgentProfile,
  Auction,
  ShippingPool,
  Testimonial,
  CommunityStory,
  FAQ,
} from "./types";

export const mockVehicles: VehicleSummary[] = [
  {
    id: "1",
    year: 2023,
    make: "Nissan",
    model: "Skyline GT-R",
    mileage: 18500,
    condition: "mint",
    jpPrice: 15200000,
    estimatedLandedCost: 28500,
    primaryImage:
      "https://images.unsplash.com/photo-1594987355808-fcf52a7b4e38?w=800&q=80",
    seller: {
      id: "seller-1",
      name: "Tokyo Motors",
      rating: 4.8,
      reviewCount: 127,
      verified: true,
    },
    featured: true,
  },
  {
    id: "2",
    year: 1993,
    make: "Toyota",
    model: "Supra A90",
    mileage: 58000,
    condition: "excellent",
    jpPrice: 8900000,
    estimatedLandedCost: 22300,
    primaryImage:
      "https://images.unsplash.com/photo-1492496694663-1a6a6f4e63f2?w=800&q=80",
    seller: {
      id: "seller-2",
      name: "Kyoto Classic",
      rating: 4.9,
      reviewCount: 203,
      verified: true,
    },
    featured: true,
  },
  {
    id: "3",
    year: 1996,
    make: "Mazda",
    model: "RX-7 FD",
    mileage: 92000,
    condition: "excellent",
    jpPrice: 7800000,
    estimatedLandedCost: 20500,
    primaryImage:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&q=80",
    seller: {
      id: "seller-3",
      name: "Osaka Auto",
      rating: 4.7,
      reviewCount: 156,
      verified: true,
    },
    featured: true,
  },
];

export const mockAgents: AgentProfile[] = [
  {
    id: "agent-1",
    name: "Yuki Tanaka",
    rating: 4.9,
    dealCount: 124,
    responseTime: 120,
    languages: ["ja", "en", "fr"],
    specialties: ["Sports Cars"],
    status: "online",
    queueLength: 2,
  },
  {
    id: "agent-2",
    name: "Marco Rodriguez",
    rating: 4.8,
    dealCount: 87,
    responseTime: 180,
    languages: ["ja", "en", "es"],
    specialties: ["Budget Imports"],
    status: "online",
    queueLength: 0,
  },
  {
    id: "agent-3",
    name: "Hiroshi Nakamura",
    rating: 4.9,
    dealCount: 156,
    responseTime: 60,
    languages: ["ja", "en", "de"],
    specialties: ["Collectors"],
    status: "offline",
    queueLength: 0,
  },
];

export const mockAuctions: Auction[] = [
  {
    id: "auction-1",
    vehicle: mockVehicles[0],
    currentBid: 1450000,
    timeRemaining: 225,
    bidCount: 12,
    status: "ending_soon",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 225 * 1000).toISOString(),
    inspectionReportAvailable: true,
  },
  {
    id: "auction-2",
    vehicle: mockVehicles[1],
    currentBid: 3200000,
    timeRemaining: 743,
    bidCount: 8,
    status: "live",
    eligibleCountries: ["USA", "Canada"],
    endsAt: new Date(Date.now() + 743 * 1000).toISOString(),
    inspectionReportAvailable: true,
  },
];

export const mockShippingPools: ShippingPool[] = [
  {
    id: "pool-1",
    name: "Q2 2024 - West Coast",
    departurePort: "Yokohama",
    arrivalPort: "Long Beach",
    departureDate: "2024-04-05",
    arrivalDate: "2024-04-19",
    capacity: 24,
    filled: 8,
    status: "filling",
    costPerVehicle: 1100,
    savingsVsSingle: 5300,
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Alex Chen",
    location: "Seattle, WA",
    vehicle: "R34 Skyline GTR",
    quote:
      "I was scared. First import, didn't know anyone in Japan, didn't trust online strangers. JDM Collective connected me with an agent who handled EVERYTHING. Cost $4k less than local imports, car arrived perfect. Game changer.",
    rating: 5,
    verified: true,
  },
  {
    id: "test-2",
    name: "Kenji Yamamoto",
    location: "Tokyo, Japan",
    vehicle: "Tokyo Motors",
    quote:
      "As a dealer, I was skeptical. But the verification process was fair, and suddenly I have access to 45,000 North American buyers. Turned my 20-car inventory into 8 sales/month business. Revenue tripled.",
    rating: 5,
    verified: true,
  },
  {
    id: "test-3",
    name: "Priya Kapoor",
    location: "Toronto, ON",
    vehicle: "Toyota Supra A90",
    quote:
      "The quarterly pool saved my family $3,200. We joined with 3 other Canadian importers shipping to Vancouver. Logistics was seamless. My wife got her dream Supra for $22k instead of $25k. And I got to pick the delivery date!",
    rating: 5,
    verified: true,
  },
];

export const mockCommunityStories: CommunityStory[] = [
  {
    id: "story-1",
    author: {
      name: "Alex Chen",
      location: "Seattle, WA",
    },
    vehicle: "R34 Skyline GTR Build",
    quote: "Childhood dream to reality",
    views: 3427,
    likes: 1240,
    comments: 156,
    importedCost: 28500,
  },
  {
    id: "story-2",
    author: {
      name: "Marcus Thompson",
      location: "Los Angeles, CA",
    },
    vehicle: "1993 Toyota Supra A60",
    quote: "The investment that paid off",
    views: 8942,
    likes: 3204,
    comments: 428,
    importedCost: 22300,
  },
  {
    id: "story-3",
    author: {
      name: "Priya Kapoor",
      location: "Toronto, ON",
    },
    vehicle: "1999 Honda Civic Type-R",
    quote: "Daily driver perfection",
    views: 2156,
    likes: 912,
    comments: 89,
    importedCost: 12800,
  },
];

export const mockFAQs: FAQ[] = [
  {
    id: "faq-1",
    question: "Is it legal to import JDM cars?",
    answer:
      "Yes, if the car is 25+ years old in the USA (EPA exemption) or 15+ years in Canada. We automatically check eligibility and show green/yellow badges on all listings. Our agents guide you through the legal requirements for YOUR state/province.",
    category: "legal",
  },
  {
    id: "faq-2",
    question: "How does escrow protect me?",
    answer:
      "Your payment is held by a trusted third party and released at each milestone after verification. If anything goes wrong, your money stays protected.",
    category: "payment",
  },
  {
    id: "faq-3",
    question: "What if I don't like the car?",
    answer:
      "We have a 30-day return window if the vehicle doesn't match the description or has safety issues.",
    category: "returns",
  },
  {
    id: "faq-4",
    question: "Can I finance through you?",
    answer:
      "Yes, we've partnered with auto lenders offering flexible financing. Get pre-qualified in minutes.",
    category: "financing",
  },
  {
    id: "faq-5",
    question: "What's the actual timeline?",
    answer:
      "8-12 weeks from browse to delivery: Discovery (1 week), Inspection (1 week), Shipping (4-6 weeks), Customs (1 week), Delivery (1 week).",
    category: "timeline",
  },
];

