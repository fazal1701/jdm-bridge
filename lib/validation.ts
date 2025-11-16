import { z } from "zod";

export const vehicleFilterSchema = z.object({
  make: z.string().optional(),
  model: z.string().optional(),
  year: z.number().min(1990).max(2024).optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  condition: z.enum(["mint", "excellent", "good", "fair", "poor"]).optional(),
  transmission: z.enum(["manual", "automatic", "cvt"]).optional(),
  sortBy: z
    .enum(["price-asc", "price-desc", "year-asc", "year-desc", "mileage-asc"])
    .optional(),
});

export const bidSchema = z.object({
  amount: z.number().min(100000, "Minimum bid is ¥100,000"),
  auctionId: z.string().uuid(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type VehicleFilterInput = z.infer<typeof vehicleFilterSchema>;
export type BidInput = z.infer<typeof bidSchema>;
export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;

