"use client";

import { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/Sections/Section";
import CTASection from "@/components/Sections/CTASection";

const caseStudies = [
  {
    title: "Regent Pipeline Launch",
    client: "Regent Pipeline",
    category: "AI Ventures",
    description:
      "Successfully launched Regent Pipeline, our flagship AI venture, as a performance-based B2B client acquisition platform for commercial contractors.",
    results: [
      "50+ qualified meetings booked in first month",
      "Zero retainer fees for clients",
      "95% client satisfaction rate",
    ],
    href: "/case-studies/regent-pipeline",
    image: "/placeholder.svg",
  },
  {
    title: "Digital Transformation",
    client: "Mavire Codoir",
    category: "Fashion & Lifestyle",
    description:
      "Complete digital transformation for a fashion brand, including e-commerce platform development, digital marketing strategy, and customer experience optimization.",
    results: [
      "200% increase in online sales",
      "40% reduction in operational costs",
      "Enhanced customer engagement",
    ],
    href: "/case-studies/mavire-codoir",
    image: "/placeholder.svg",
  },
  {
    title: "Web Development Partnership",
    client: "DC Web Studio",
    category: "Web Development",
    description:
      "Ongoing web development partnership providing turnkey solutions for growing organizations, including custom web applications and digital experiences.",
    results: [
      "30+ projects delivered",
      "98% on-time delivery rate",
      "Client satisfaction guaranteed",
    ],
    href: "/case-studies/dc-web-studio",
    image: "/placeholder.svg",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Real results from our partnerships and ventures
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-black tracking-tight mb-4">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore how we've helped businesses achieve their goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={study.href}
                className="block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="p-8">
                  <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
                    {study.category}
                  </span>
                  <h3 className="text-xl font-medium text-black mt-4 mb-3 group-hover:text-black/80 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{study.client}</p>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.results.map((result, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-black/60 group-hover:text-black transition-colors">
                    View case study
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

      {/* CTA */}
      <CTASection />
    </main>
  );
}
