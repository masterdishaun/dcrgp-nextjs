import { Metadata } from "next";
import PortfolioSection from "@/components/Sections/PortfolioSection";
import CTASection from "@/components/Sections/CTASection";
import FeatureSection from "@/components/Sections/FeatureSection";
import { flagshipVentureContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Portfolio | DC Regent Group",
  description:
    "Explore our growing portfolio of AI solutions, digital services, and consumer brands. Each venture has its own identity and is supported by shared resources.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A growing collection of AI solutions, digital services, and consumer
            brands
          </p>
        </div>
      </section>

      {/* Flagship Venture */}
      <FeatureSection
        title={flagshipVentureContent.title}
        subtitle={flagshipVentureContent.subtitle}
        description={flagshipVentureContent.description}
        index={0}
      />

      {/* Portfolio Grid */}
      <PortfolioSection />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
