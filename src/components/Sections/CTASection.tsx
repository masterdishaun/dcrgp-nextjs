"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "./Section";
import { ctaContent } from "@/data/content";

export default function CTASection() {
  return (
    <Section className="bg-gradient-to-br from-black via-gray-900 to-black text-white text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-medium tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {ctaContent.title}
      </motion.h2>

      <motion.p
        className="text-xl text-white/80 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {ctaContent.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href={ctaContent.cta.href}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-colors shadow-lg"
        >
          {ctaContent.cta.label}
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
        </Link>
      </motion.div>
    </Section>
  );
}
