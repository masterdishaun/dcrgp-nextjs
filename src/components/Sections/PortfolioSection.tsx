"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "./Section";
import { portfolioContent } from "@/data/content";

export default function PortfolioSection() {
  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-medium text-black tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {portfolioContent.title}
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {portfolioContent.subtitle}
        </motion.p>
        <motion.p
          className="text-lg text-gray-500 max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {portfolioContent.description}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioContent.items.map((item, index) => (
          <motion.div
            key={item.name}
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
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200" />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-medium text-black group-hover:text-black/80 transition-colors">
                    {item.name}
                  </h3>
                  {item.status && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {item.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-500">{item.category}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
