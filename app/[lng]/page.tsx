import { FAQ } from "@/core/ui/components/landing/faq";
import { Features } from "@/core/ui/components/landing/features";
import { FinalCTA } from "@/core/ui/components/landing/final-cta";
import { Footer } from "@/core/ui/components/landing/footer";
import { Hero } from "@/core/ui/components/landing/hero";
import { HowItWorks } from "@/core/ui/components/landing/how-it-works";
import { Navbar } from "@/core/ui/components/landing/navbar";
import { Pricing } from "@/core/ui/components/landing/pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8EBED] text-foreground selection:bg-chart-4 selection:text-primary-foreground">
      <Navbar />

      <Hero />

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="pricing">
        <Pricing />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <FinalCTA />

      <Footer />
    </main>
  );
}
