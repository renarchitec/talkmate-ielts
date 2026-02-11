import { FAQ } from "@/core/ui/components/landing/faq";
import { Features } from "@/core/ui/components/landing/features";
import { FinalCTA } from "@/core/ui/components/landing/final-cta";
import { Footer } from "@/core/ui/components/landing/footer";
import { Hero } from "@/core/ui/components/landing/hero";
import { HowItWorks } from "@/core/ui/components/landing/how-it-works";
import { Navbar } from "@/core/ui/components/landing/navbar";
import { Pricing } from "@/core/ui/components/landing/pricing";

export default function Home() {
  const steps = [
    {
      title: "Daftar & pilih tes",
      description: "Create your account and select a test package.",
    },
    {
      title: "Kerjakan simulasi IELTS",
      description: "Take the full simulation under timed conditions.",
    },
    {
      title: "Listening & Reading auto scoring",
      description: "Get instant results for objective sections.",
    },
    {
      title: "Writing & Speaking dinilai panelist",
      description: "Expert review for subjective sections.",
    },
    {
      title: "Skor & feedback dikirim ke akun",
      description: "Receive detailed score and feedback.",
    },
  ];

  const pricingPlans = [
    {
      name: "Subscription bulanan",
      price: "Rp 199.000",
      features: ["Full Access", "Unlimited Tests", "Progress Tracking"],
      highlighted: true,
    },
    {
      name: "Pay-per-test",
      price: "Rp 49.000",
      features: ["One-time Access", "Full Mock Test", "Basic Report"],
    },
    {
      name: "Add-on Writing / Speaking",
      price: "Rp 99.000",
      features: ["Expert Review", "Detailed Feedback", "Band Score Prediction"],
    },
  ];

  const faqItems = [
    {
      question: "Apakah ini IELTS resmi?",
      answer:
        "This platform is not affiliated with IELTS™. It provides mock tests for practice.",
    },
    {
      question: "Siapa yang menilai Writing & Speaking?",
      answer:
        "Writing and Speaking tests are reviewed by experienced panelists/examiners.",
    },
    {
      question: "Berapa lama hasil keluar?",
      answer:
        "Listening and Reading scores are instant. Writing and Speaking feedback is provided within 24-48 hours.",
    },
    {
      question: "Bisa diakses dari mobile?",
      answer:
        "Yes, our platform is fully responsive and accessible on mobile devices.",
    },
    {
      question: "Apakah ada tes gratis?",
      answer:
        "Ya, kami menyediakan satu tes simulasi gratis untuk setiap pengguna baru agar dapat mencoba platform kami.",
    },
    {
      question: "Bagaimana sistem penilaian Writing?",
      answer:
        "Penilaian Writing dilakukan berdasarkan kriteria resmi IELTS: Task Achievement, Coherence & Cohesion, Lexical Resource, dan Grammatical Range & Accuracy.",
    },
    {
      question: "Apakah saya bisa membatalkan langganan?",
      answer:
        "Tentu, Anda dapat membatalkan langganan kapan saja melalui menu pengaturan akun tanpa biaya tambahan.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#E8EBED] text-foreground selection:bg-chart-4 selection:text-primary-foreground">
      <Navbar />

      <Hero
        headline="Real IELTS Practice. Real Human Scoring."
        primaryCtaLabel="Start IELTS Mock Test"
        secondaryCtaLabel="Try Practice Test"
        subheadline="Simulasi IELTS online dengan Writing & Speaking dinilai panelist berpengalaman."
      />

      <div id="how-it-works">
        <HowItWorks steps={steps} />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="pricing">
        <Pricing plans={pricingPlans} />
      </div>

      <div id="faq">
        <FAQ items={faqItems} />
      </div>

      <FinalCTA />

      <Footer />
    </main>
  );
}
