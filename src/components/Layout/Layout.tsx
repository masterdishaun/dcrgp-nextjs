"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation/Navigation";
import MobileNavigation from "@/components/Navigation/MobileNavigation";
import Footer from "@/components/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      <MobileNavigation />

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
