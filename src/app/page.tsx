import HeroSection from "@/components/Sections/HeroSection";
import FeatureSection from "@/components/Sections/FeatureSection";
import PortfolioSection from "@/components/Sections/PortfolioSection";
import ValuesSection from "@/components/Sections/ValuesSection";
import CTASection from "@/components/Sections/CTASection";
import InsightsSection from "@/components/Sections/InsightsSection";
import Footer from "@/components/Footer/Footer";
import {
  aiVenturesContent,
  regentBrandsContent,
  ventureBuildingContent,
  digitalContent,
  founderLedContent,
  whatsNextContent,
  flagshipVentureContent,
  lifeAtDcrgContent,
  teamContent,
  coreAiContent,
} from "@/data/content";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Sections */}
      <FeatureSection
        title={aiVenturesContent.title}
        subtitle={aiVenturesContent.subtitle}
        description={aiVenturesContent.description}
        cta={aiVenturesContent.cta}
        index={0}
      />

      <FeatureSection
        title={regentBrandsContent.title}
        subtitle={regentBrandsContent.subtitle}
        description={regentBrandsContent.description}
        cta={regentBrandsContent.cta}
        index={1}
        reverse
      />

      <FeatureSection
        title={ventureBuildingContent.title}
        subtitle={ventureBuildingContent.subtitle}
        description={ventureBuildingContent.description}
        cta={ventureBuildingContent.cta}
        index={2}
      />

      <FeatureSection
        title={digitalContent.title}
        subtitle={digitalContent.subtitle}
        description={digitalContent.description}
        cta={digitalContent.cta}
        index={3}
        reverse
      />

      <FeatureSection
        title={founderLedContent.title}
        subtitle={founderLedContent.subtitle}
        description={founderLedContent.description}
        cta={founderLedContent.cta}
        index={4}
      />

      <FeatureSection
        title={whatsNextContent.title}
        subtitle={whatsNextContent.subtitle}
        description={whatsNextContent.description}
        cta={whatsNextContent.cta}
        index={5}
        reverse
      />

      {/* Flagship Venture */}
      <FeatureSection
        title={flagshipVentureContent.title}
        subtitle={flagshipVentureContent.subtitle}
        description={flagshipVentureContent.description}
        index={6}
      />

      {/* Life at DCRG */}
      <FeatureSection
        title={lifeAtDcrgContent.title}
        subtitle=""
        description={lifeAtDcrgContent.description}
        cta={lifeAtDcrgContent.cta}
        index={7}
        reverse
      />

      {/* Team */}
      <FeatureSection
        title={teamContent.title}
        subtitle={teamContent.subtitle}
        description={teamContent.description}
        index={8}
      />

      {/* Core AI */}
      <FeatureSection
        title={coreAiContent.title}
        subtitle={coreAiContent.subtitle}
        description={coreAiContent.description}
        index={9}
        reverse
      />

      {/* Portfolio */}
      <PortfolioSection />

      {/* Values */}
      <ValuesSection />

      {/* Insights */}
      <InsightsSection />

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
