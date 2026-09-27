import { Metadata } from "next";
import ContactForm from "@/components/Contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | DC Regent Group",
  description:
    "Get in touch with DC Regent Group. Tell us your ambitions and our team will guide you down the right path.",
};

export default function ContactPage() {
  return <ContactForm />;
}
