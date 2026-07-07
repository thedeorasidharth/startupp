"use client";

import { FadeUp } from "@/components/common/AnimatedText";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="container-custom">
        {/* Asymmetrical 2-column layout (Editorial Style) */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-[40px] items-start">
          
          {/* Left Column: Asymmetric Typographic Statement */}
          <div>
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-[16px]">About Studio</p>
            </FadeUp>
            
            {/* Heading -> Paragraph gap: mb-[32px] */}
            <h2 className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mb-[32px] max-w-[620px] font-bold leading-none tracking-tight">
              We Coded from Scratch. We Designed for Performance.
            </h2>

            <FadeUp delay={0.15}>
              <div className="h-1 w-24 bg-primary mb-[32px] rounded-full" />
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="text-foreground text-[24px] font-semibold leading-relaxed tracking-tight max-w-[580px] mb-8 lg:mb-0">
                A digital presence is a direct representation of your brand's operational standard. We refuse template hacks.
              </p>
            </FadeUp>
          </div>

          {/* Right Column: Detailed Editorial Copy & Values */}
          <div className="space-y-[32px] lg:pt-[48px]">
            <FadeUp delay={0.3}>
              <p className="text-muted text-[20px] leading-[1.7] max-w-[650px] font-medium">
                We are a passionate team of developers, designers, SEO specialists and marketers helping businesses create a strong online presence. We focus on quality, communication and long-term relationships.
              </p>
            </FadeUp>

            {/* Paragraph -> CTA gap: mb-[48px] */}
            <FadeUp delay={0.4}>
              <p className="text-muted text-[20px] leading-[1.7] max-w-[650px] font-medium mb-[48px]">
                Every file we compile undergoes thorough responsiveness checks to ensure sub-second speeds. We maintain direct slack communication lines and provide standard-practice code reports so you're always aligned.
              </p>
            </FadeUp>

            {/* Premium Link Button (height 56px, horizontal px-8) */}
            <FadeUp delay={0.5}>
              <Link
                href="/about"
                className="h-[56px] px-[32px] rounded-[16px] border border-border bg-white text-foreground hover:bg-surface font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all inline-flex items-center justify-center gap-[10px]"
              >
                Learn More About Us
                <ArrowRight size={14} className="text-primary" />
              </Link>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
