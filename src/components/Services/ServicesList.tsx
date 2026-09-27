"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/Sections/Section";
import FeatureSection from "@/components/Sections/FeatureSection";
import CTASection from "@/components/Sections/CTASection";
import { aiVenturesContent } from "@/data/content";

const services = [
  {
    title: "Business Strategy",
    description:
      "Strategic planning and execution to help your business achieve long-term growth and competitive advantage.",
    href: "/services/business-strategy",
    icon: "chart",
  },
  {
    title: "Advisory Retainers",
    description:
      "Ongoing advisory services with dedicated experts to guide your business through every stage of growth.",
    href: "/services/advisory-retainers",
    icon: "advisory",
  },
  {
    title: "Operations Optimization",
    description:
      "Streamline your operations, improve efficiency, and reduce costs with our proven optimization methodologies.",
    href: "/services/operations-optimization",
    icon: "operations",
  },
];

export default function ServicesList() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive solutions to help businesses thrive in the digital age
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-black tracking-tight mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored services designed to meet your unique business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={service.href}
                className="block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="p-8">
                  <h3 className="text-2xl font-medium text-black mb-4 group-hover:text-black/80 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">{service.description}</p>
                  <div className="mt-6 flex items-center text-black/60 group-hover:text-black transition-colors">
                    Learn more
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* AI Ventures */}
      <FeatureSection
        title={aiVenturesContent.title}
        subtitle={aiVenturesContent.subtitle}
        description={aiVenturesContent.description}
        cta={aiVenturesContent.cta}
        index={1}
        reverse
      />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
