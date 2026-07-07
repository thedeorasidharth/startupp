import type { Metadata } from "next";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import FinalCTA from "@/components/home/FinalCTA";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";

export const metadata: Metadata = {
  title: "Services — Nova Studio",
  description: "Premium digital services: Web Development, SEO, Branding, Social Media, Video Editing, and Digital Marketing.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero (Hero Bottom: pb-[220px]) */}
      <section className="relative pt-[180px] pb-[220px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-secondary/3 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-35" />
        
        <div className="container-custom relative z-10 text-center">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-[16px]">What We Offer</p>
          </FadeUp>
          {/* H1 style: text-[72px] */}
          <AnimatedText
            text="Solutions Designed for High Performance"
            className="heading-xl text-[40px] md:text-[56px] lg:text-[72px] text-foreground mb-[28px] max-w-[850px] mx-auto"
            delay={0.1}
          />
          {/* Paragraph style: text-[20px] leading-[1.7] */}
          <FadeUp delay={0.25}>
            <p className="text-muted text-[20px] leading-[1.7] max-w-[650px] mx-auto">
              Every system we code is built on clean typography, custom frameworks, and optimized search performance.
            </p>
          </FadeUp>
        </div>
      </section>

      <Services />
      <Process />
      <FinalCTA />
    </main>
  );
}
