import { Metadata } from "next";
import HeroSection from "@/components/Sections/HeroSection";
import FeatureSection from "@/components/Sections/FeatureSection";
import ValuesSection from "@/components/Sections/ValuesSection";
import CTASection from "@/components/Sections/CTASection";
import { teamContent, visionContent, companyInfo } from "@/data/content";

export const metadata: Metadata = {
  title: "About | DC Regent Group",
  description:
    "Learn about DC Regent Group, our mission, vision, and the team behind our ventures.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4">
            About DC Regent Group
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {companyInfo.description}
          </p>
        </div>
      </section>

      {/* Vision */}
      <FeatureSection
        title={visionContent.title}
        subtitle={visionContent.subtitle}
        description={visionContent.description}
        index={0}
      />

      {/* Team */}
      <FeatureSection
        title={teamContent.title}
        subtitle={teamContent.subtitle}
        description={teamContent.description}
        index={1}
        reverse
      />

      {/* Values */}
      <ValuesSection />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
