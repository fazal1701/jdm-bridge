import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CalculatorSection } from "@/components/sections/calculator-section";
import { FeaturedInventorySection } from "@/components/sections/featured-inventory-section";
import { CustomerReviewsCounter } from "@/components/sections/customer-reviews-counter";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <CalculatorSection />
      <FeaturedInventorySection />
      <CustomerReviewsCounter />
      <NewsletterCTA />
    </div>
  );
}

