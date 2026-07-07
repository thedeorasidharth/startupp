import type { Metadata } from "next";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";
import { Clock, ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Blog — Nova Studio",
  description: "Insights on custom design systems, Next.js optimization, and search engine parameters.",
};

const categories = ["All", "SEO", "Web Dev", "Branding"];

const posts = [
  {
    slug: "seo-in-2025",
    category: "SEO",
    title: "SEO in 2025: Mapping Search Intent for Modern Engines",
    excerpt: "The rules of indexing have changed. Here is how focusing on technical intent maps to ranking improvements.",
    readTime: "8 min read",
    date: "Jun 15, 2025",
    color: "#2563EB",
  },
  {
    slug: "web-performance-guide",
    category: "Web Dev",
    title: "How Next.js Core Web Vitals Direct Impact Conversion Rates",
    excerpt: "Performance optimization is a critical conversion factor. We break down standard responsive load benchmarks.",
    readTime: "6 min read",
    date: "Jun 8, 2025",
    color: "#6366F1",
  },
  {
    slug: "brand-identity-2025",
    category: "Branding",
    title: "Designing Flexible Design Systems for Modern Screen Widths",
    excerpt: "Custom style systems should look elegant on every device. Our standard processes for wireframing in Figma.",
    readTime: "5 min read",
    date: "May 28, 2025",
    color: "#F97316",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero (Hero Bottom: pb-[220px]) */}
      <section className="relative pt-[180px] pb-[220px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="container-custom relative z-10 text-center">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-[16px]">Knowledge Base</p>
          </FadeUp>
          {/* H1 style: text-[72px] */}
          <AnimatedText
            text="Insights on Code & Design"
            className="heading-xl text-[40px] md:text-[56px] lg:text-[72px] text-foreground mb-[28px] max-w-[850px] mx-auto"
            delay={0.1}
          />
          {/* Paragraph style: text-[20px] leading-[1.7] */}
          <FadeUp delay={0.25}>
            <p className="text-muted text-[20px] leading-[1.7] max-w-[650px] mx-auto">
              Our thoughts on engineering high-speed front-ends, clean layouts, and target search parameters.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter + Search */}
      <section className="py-[32px] border-y border-border bg-white">
        <div className="container-custom flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  cat === "All"
                    ? "bg-primary text-white"
                    : "border border-border text-muted hover:text-foreground hover:bg-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              className="pl-9 pr-4 py-2.5 bg-card border border-border rounded-full text-sm text-foreground placeholder-muted/55 focus:outline-none focus:border-primary/50 transition-colors w-56 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-[180px]">
        <div className="container-custom">
          {/* Grid Gap: 40px, 3 cols lg, 2 cols md, 1 col sm */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            {posts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group rounded-[28px] border border-border bg-card hover:border-black/10 hover:shadow-floating transition-all duration-300 overflow-hidden h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail placeholder */}
                    <div
                      className="h-48 relative flex items-center justify-center overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${post.color}08, ${post.color}03)` }}
                    >
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <span
                        className="text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full z-10 border border-border bg-white"
                        style={{ color: post.color }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Cards internal padding: p-10 (40px) */}
                    <div className="p-10">
                      <div className="flex items-center gap-4 mb-3 text-xs text-muted font-medium">
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-foreground font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors duration-300 heading-lg">
                        {post.title}
                      </h3>
                      <p className="text-muted text-sm leading-[1.7] line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>

                  <div className="px-10 pb-10 pt-0">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider group-hover:gap-2.5 transition-all">
                      Read Article
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
