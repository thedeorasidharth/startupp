"use client";

import { motion } from "framer-motion";
import { X, Globe, Link as LinkIcon } from "lucide-react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";

const team = [
  {
    name: "Alex Rivera",
    role: "Creative Director",
    bio: "Focuses on custom user interface flows, type structures, and premium typography.",
    emoji: "🎨",
    color: "#2563EB",
    socials: { twitter: "#", linkedin: "#", site: "#" },
  },
  {
    name: "Maya Chen",
    role: "Lead Developer",
    bio: "Full-stack engineer building fast, responsive front-ends on React frameworks.",
    emoji: "💻",
    color: "#6366F1",
    socials: { twitter: "#", linkedin: "#", site: "#" },
  },
  {
    name: "Jordan Park",
    role: "SEO & Growth",
    bio: "Optimizes indexing performance, site maps, and semantic search pathways.",
    emoji: "📊",
    color: "#2563EB",
    socials: { twitter: "#", linkedin: "#", site: "#" },
  },
  {
    name: "Zara Ahmed",
    role: "Brand Strategist",
    bio: "Develops flexible visual schemes, SVG asset sets, and moodboard structures.",
    emoji: "✦",
    color: "#6366F1",
    socials: { twitter: "#", linkedin: "#", site: "#" },
  },
];

export default function Team() {
  return (
    <section className="py-[180px] bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-custom">
        {/* Header (Section Heading to Cards spacing: mb-[64px]) */}
        <div className="text-center max-w-[650px] mx-auto mb-[64px]">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-[16px]">Our Team</p>
          </FadeUp>
          {/* H2 title strictly scaling to 56px */}
          <AnimatedText
            text="Meet the Minds Driving Your Projects"
            className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mb-[28px]"
            delay={0.1}
          />
          <FadeUp delay={0.25}>
            <p className="text-muted text-[20px] leading-[1.7]">
              We are a passionate squad of developers, designers, and SEO analysts focused on high-end custom web standards.
            </p>
          </FadeUp>
        </div>

        {/* Team Grid (Grid Gap: 40px, 4 cols lg, 2 cols md, 1 col sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          {team.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.08}>
              <motion.div
                className="relative rounded-[28px] bg-card border border-border overflow-hidden group hover:border-black/10 shadow-premium hover:shadow-card-hover transition-all duration-400 flex flex-col h-full justify-between"
                whileHover={{ y: -4 }}
              >
                <div>
                  {/* Header area */}
                  <div
                    className="h-44 relative flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${member.color}08, ${member.color}02)` }}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <div
                        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-[0.03]"
                        style={{ background: member.color }}
                      />
                    </div>

                    {/* Avatar */}
                    <motion.div
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-premium z-10 bg-white border border-border"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {member.emoji}
                    </motion.div>
                  </div>

                  {/* Info area with strict p-10 (40px) padding */}
                  <div className="p-10 pb-0">
                    <h3 className="text-foreground font-bold text-lg mb-0.5 leading-snug">{member.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest font-bold mb-[16px]" style={{ color: member.color }}>{member.role}</p>
                    <p className="text-muted text-sm leading-[1.7] mb-[24px] h-[72px] overflow-hidden">{member.bio}</p>
                  </div>
                </div>

                {/* Socials area with strict p-10 padding (bottom side) */}
                <div className="p-10 pt-0">
                  <div className="flex gap-2">
                    {Object.entries(member.socials).map(([platform, href]) => {
                      const Icon = platform === "twitter" ? X : platform === "linkedin" ? LinkIcon : Globe;
                      return (
                        <a
                          key={platform}
                          href={href}
                          className="w-9 h-9 rounded-xl border border-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:border-black/20 transition-all duration-300 shadow-sm"
                          aria-label={platform}
                        >
                          <Icon size={12} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
