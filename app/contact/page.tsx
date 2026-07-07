import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Nova Studio",
  description: "Get in touch with Nova Studio. Send us an email, WhatsApp us, or fill out our project consultation form.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactSection />
    </main>
  );
}
