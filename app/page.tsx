import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { CalculatorSection } from "@/components/sections/calculator-section";
import { FeaturedInventorySection } from "@/components/sections/featured-inventory-section";
import { FAQSection } from "@/components/sections/faq-section";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CalculatorSection />
      <FeaturedInventorySection />
      <FAQSection />
      <NewsletterCTA />
    </div>
  );
}

