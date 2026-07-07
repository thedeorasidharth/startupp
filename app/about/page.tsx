import type { Metadata } from "next";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Us — Nova Studio",
  description: "Learn about Nova Studio — a passionate digital agency focusing on custom design, Next.js code, and SEO.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero (Hero Bottom: pb-[220px]) */}
      <section className="relative pt-[180px] pb-[220px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-35" />
        
        <div className="container-custom relative z-10 text-center">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-[16px]">About Nova Studio</p>
          </FadeUp>
          {/* H1 style: text-[72px] leading-none */}
          <AnimatedText
            text="Crafting Tailor-Made Digital Experiences."
            className="heading-xl text-[40px] md:text-[56px] lg:text-[72px] text-foreground mb-[28px] max-w-[850px] mx-auto"
            delay={0.1}
          />
          {/* Paragraph style: text-[20px] leading-[1.7] */}
          <FadeUp delay={0.25}>
            <p className="text-muted text-[20px] leading-[1.7] max-w-[650px] mx-auto">
              We are a passionate team of developers, designers, SEO specialists and marketers helping businesses create a strong online presence. We focus on quality, communication and long-term relationships.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Focus & Pillars */}
      <section className="py-[180px] bg-white border-t border-border">
        <div className="container-custom">
          {/* Grid Gap: 40px */}
          <div className="grid md:grid-cols-2 gap-[40px]">
            <FadeUp>
              <div className="p-12 rounded-[28px] bg-card border border-border h-full shadow-premium">
                <p className="text-xs uppercase tracking-widest mb-[16px] font-bold text-primary">Our Mission</p>
                <p className="text-muted text-[20px] leading-[1.7]">
                  To build high-performance, cleanly coded digital assets that represent your company with absolute design integrity. We refuse templates in favor of bespoke craftsmanship.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="p-12 rounded-[28px] bg-card border border-border h-full shadow-premium">
                <p className="text-xs uppercase tracking-widest mb-[16px] font-bold text-secondary">Our Vision</p>
                <p className="text-muted text-[20px] leading-[1.7]">
                  A web characterized by clean typography, robust responsive load speeds, and intuitive user navigation. We build systems that last.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-[180px] bg-background border-t border-border">
        <div className="container-custom max-w-[850px] text-center">
          <FadeUp>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/10">Our Approach</span>
          </FadeUp>
          {/* H2 style: text-[56px] */}
          <h2 className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mt-[28px] mb-[28px]">Authenticity & Quality</h2>
          <p className="text-muted text-[20px] leading-[1.7] mb-[24px] max-w-[650px] mx-auto font-medium">
            As a new digital agency, we build our credibility on raw quality, practical execution, and dedicated communication. The team has practical experience gained from freelance work, internships, and extensive personal development.
          </p>
          <p className="text-muted text-[20px] leading-[1.7] max-w-[650px] mx-auto font-medium">
            Every file we write and mockup we draft undergoes deep review to ensure clean rendering. We don't invent numbers — we focus entirely on custom web layouts that speak for themselves.
          </p>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
