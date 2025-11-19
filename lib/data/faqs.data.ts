// FAQ mock data

import type { FAQ } from "@/lib/types/community.types";

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


