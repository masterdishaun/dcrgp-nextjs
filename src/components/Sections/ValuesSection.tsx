"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { valuesContent } from "@/data/content";

export default function ValuesSection() {
  return (
    <Section className="bg-black text-white">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-medium tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {valuesContent.title}
        </motion.h2>
        <motion.p
          className="text-xl text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {valuesContent.subtitle}
        </motion.p>
        <motion.p
          className="text-lg text-white/60 max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {valuesContent.description}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {valuesContent.items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-t border-white/10 pt-8"
          >
            <h3 className="text-2xl font-medium text-white mb-4">
              {item.title}
            </h3>
            <p className="text-white/80 mb-6">{item.description}</p>
            <button className="text-white/60 hover:text-white transition-colors flex items-center">
              {item.why}
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
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
