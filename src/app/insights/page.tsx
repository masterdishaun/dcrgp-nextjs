import { Metadata } from "next";
import InsightsSection from "@/components/Sections/InsightsSection";
import CTASection from "@/components/Sections/CTASection";

export const metadata: Metadata = {
  title: "Insights | DC Regent Group",
  description:
    "Perspectives, updates, and stories from across DC Regent Group. Stay informed with our latest insights on entrepreneurship, innovation, and business growth.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4">
            Insights
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Perspectives, updates, and stories from across DC Regent Group
          </p>
        </div>
      </section>

      {/* Insights */}
      <InsightsSection />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
