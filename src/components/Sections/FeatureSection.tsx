"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "./Section";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  };
  index?: number;
  reverse?: boolean;
}

export default function FeatureSection({
  title,
  subtitle,
  description,
  cta,
  index = 0,
  reverse = false,
}: FeatureSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <Section delay={index * 0.1}>
      <div
        className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reverse ? "lg:direction-rtl" : ""
        }`}
      >
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-sm font-medium text-gray-500 tracking-widest uppercase">
            {subtitle}
          </h3>
          <h2 className="text-4xl md:text-5xl font-medium text-black tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
          {cta && (
            <Link
              href={cta.href}
              className="inline-flex items-center text-black font-medium hover:text-black/80 transition-colors group"
            >
              {cta.label}
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          )}
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: reverse ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
        >
          <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl" />
        </motion.div>
      </div>
    </Section>
  );
}
