import { Metadata } from "next";
import ServicesList from "@/components/Services/ServicesList";

export const metadata: Metadata = {
  title: "Services | DC Regent Group",
  description:
    "Explore our comprehensive services including business strategy, advisory retainers, and operations optimization.",
};

export default function ServicesPage() {
  return <ServicesList />;
}
