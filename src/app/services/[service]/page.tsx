import { Metadata } from "next";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Section from "@/components/Sections/Section";
import CTASection from "@/components/Sections/CTASection";

interface ServicePageProps {
  params: { service: string };
}

const serviceDetails: Record<string, {
  title: string;
  description: string;
  benefits: string[];
  process: string[];
}> = {
  "business-strategy": {
    title: "Business Strategy",
    description:
      "Our Business Strategy service helps you define your vision, set clear objectives, and develop actionable plans to achieve sustainable growth. We work with you to identify opportunities, assess risks, and create strategies that align with your business goals.",
    benefits: [
      "Clear strategic direction and roadmap",
      "Competitive market analysis and positioning",
      "Actionable growth initiatives",
      "Risk assessment and mitigation strategies",
    ],
    process: [
      "Discovery and assessment of current state",
      "Market research and competitive analysis",
      "Strategy development and validation",
      "Implementation planning and execution support",
    ],
  },
  "advisory-retainers": {
    title: "Advisory Retainers",
    description:
      "Our Advisory Retainer service provides you with dedicated access to our team of experts who will guide your business through every stage of growth. With regular check-ins, strategic advice, and hands-on support, we ensure you have the insights and resources needed to make informed decisions.",
    benefits: [
      "Dedicated advisor with industry expertise",
      "Regular strategic reviews and recommendations",
      "Access to our network of partners and resources",
      "Flexible engagement tailored to your needs",
    ],
    process: [
      "Initial assessment and goal setting",
      "Regular advisory meetings and updates",
      "Ongoing support and resource access",
      "Performance tracking and adjustment",
    ],
  },
  "operations-optimization": {
    title: "Operations Optimization",
    description:
      "Our Operations Optimization service focuses on streamlining your business processes, improving efficiency, and reducing costs. We analyze your current operations, identify bottlenecks, and implement solutions that enhance productivity and profitability.",
    benefits: [
      "Increased operational efficiency",
      "Reduced costs and waste",
      "Improved process workflows",
      "Enhanced productivity and performance",
    ],
    process: [
      "Current state assessment and gap analysis",
      "Process mapping and optimization design",
      "Implementation and change management",
      "Continuous improvement and monitoring",
    ],
  },
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = serviceDetails[params.service];
  
  if (!service) {
    return {
      title: "Service Not Found | DC Regent Group",
    };
  }

  return {
    title: `${service.title} | DC Regent Group`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = serviceDetails[params.service];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-medium text-black mb-8">Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-medium text-black mb-8">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-2xl font-medium text-gray-400 mr-4">
                    {index + 1}.
                  </span>
                  <p className="text-lg text-gray-700">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
