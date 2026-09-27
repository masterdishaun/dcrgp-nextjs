"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "./Section";
import { exploreContent } from "@/data/content";

export default function InsightsSection() {
  return (
    <Section>
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-medium text-black tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {exploreContent.title}
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {exploreContent.description}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {exploreContent.items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link
              href={item.href}
              className="block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200" />
              <div className="p-8">
                <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
                  {item.category}
                </span>
                <h3 className="text-xl font-medium text-black mt-4 mb-3 group-hover:text-black/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.description}</p>
                <div className="mt-6 flex items-center text-black/60 hover:text-black transition-colors">
                  Read the insight
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
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
