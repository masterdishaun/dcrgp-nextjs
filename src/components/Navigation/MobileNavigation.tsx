"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, ctaButton } from "@/data/navigation";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (label: string) => {
    const newSet = new Set(expandedItems);
    if (newSet.has(label)) {
      newSet.delete(label);
    } else {
      newSet.add(label);
    }
    setExpandedItems(newSet);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-background shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-black/10">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <div className="relative w-32 h-6">
                    <img
                      src="/logo.png"
                      alt="DC Regent Group Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg border border-black/20 text-black hover:bg-black/10 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-4 space-y-2">
                  {navigation.map((item) => (
                    <div key={item.href} className="border-b border-black/5 pb-2">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() => toggleItem(item.label)}
                      >
                        <Link
                          href={item.href}
                          onClick={() => {
                            if (!item.children) setIsOpen(false);
                          }}
                          className="flex-1 text-lg font-medium text-black"
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <motion.svg
                            className="w-5 h-5 text-black/60"
                            animate={{
                              rotate: expandedItems.has(item.label) ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </motion.svg>
                        )}
                      </div>

                      {/* Dropdown Items */}
                      <AnimatePresence>
                        {expandedItems.has(item.label) && item.children && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-black/80 hover:text-black transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer with CTA */}
              <div className="p-4 border-t border-black/10">
                <Link
                  href={ctaButton.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-white bg-black rounded-lg hover:bg-black/90 transition-colors"
                >
                  {ctaButton.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 text-black hover:bg-white transition-colors shadow-lg"
      >
        <motion.svg
          className="w-6 h-6"
          animate={isOpen ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </motion.svg>
      </button>
    </>
  );
}
