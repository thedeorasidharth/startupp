"use client";

import { use } from "react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";
import FinalCTA from "@/components/home/FinalCTA";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Link from "next/link";

const blogPosts: Record<
  string,
  {
    category: string;
    title: string;
    date: string;
    readTime: string;
    author: string;
    content: string[];
  }
> = {
  "seo-in-2025": {
    category: "SEO",
    title: "SEO in 2025: Mapping Search Intent for Modern Engines",
    date: "Jun 15, 2025",
    readTime: "8 min read",
    author: "Jordan Park",
    content: [
      "The landscape of search engine optimization has undergone a massive paradigm shift. With artificial intelligence search experiences integration like Google's AI Overviews, traditional keyword stuffing and thin content techniques are completely obsolete.",
      "Today, search engines look for deep topic authority, user engagement, and stellar technical performance. If your page takes longer than 2 seconds to load, you're already losing positioning.",
      "To win in 2025, your strategy must include high-quality original content hubs, technical optimizations for core web vitals, and structured schema implementation to help bots index your content contextually.",
    ],
  },
  "web-performance-guide": {
    category: "Web Dev",
    title: "How Next.js Core Web Vitals Direct Impact Conversion Rates",
    date: "Jun 8, 2025",
    readTime: "6 min read",
    author: "Maya Chen",
    content: [
      "Page performance is not just a nice-to-have developer benchmark. It's a business-critical conversion metric that directly impacts your bottom line.",
      "Studies show that a 100ms delay in load time can lower conversion rates by up to 7%. Next.js and other React frameworks solve this through server-side rendering, static generation, and automatic code splitting.",
      "Ensure you optimize image sizes by using modern formats like WebP or AVIF, lazy loading below-the-fold content, and using light CSS frameworks like Tailwind CSS to reduce aggregate bundle sizes.",
    ],
  },
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts[slug] || blogPosts["seo-in-2025"];

  return (
    <main className="min-h-screen bg-background">
      {/* Back button */}
      <div className="container-custom pt-32">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground text-sm transition-colors group font-semibold"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Hero (Hero Bottom: pb-[220px]) */}
      <section className="relative pt-12 pb-[220px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom relative z-10 max-w-4xl">
          <FadeUp>
            <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-bold inline-block mb-6">
              {post.category}
            </span>
          </FadeUp>
          {/* H1 style: text-[72px] */}
          <AnimatedText
            text={post.title}
            className="heading-xl text-[40px] md:text-[56px] lg:text-[72px] text-foreground mb-[28px]"
            delay={0.1}
          />

          {/* Meta */}
          <FadeUp delay={0.3}>
            <div className="flex flex-wrap gap-6 items-center text-sm text-muted font-medium">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Content with max-width 650px, body font size 20px, leading 1.7 */}
      <section className="pb-24 border-t border-border bg-white">
        <div className="container-custom max-w-3xl pt-16">
          <div className="space-y-[24px] text-muted text-[20px] leading-[1.7] max-w-[650px] mx-auto font-medium">
            {post.content.map((paragraph, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <p>{paragraph}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
