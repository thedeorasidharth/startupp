"use client";

import { useState } from "react";
import { MessageCircle, Mail, Send } from "lucide-react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", business: "", service: "", message: "" });
  };

  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Asymmetrical Layout: Left channels (0.8), Right Form (1.2), Grid Gap: 40px */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-[40px] items-start">
          
          {/* Left Column: Direct channels */}
          <div className="space-y-[40px]">
            <div>
              <FadeUp>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-[16px]">Contact Us</p>
              </FadeUp>
              {/* H2 title scaling to 56px, gap to paragraph = 32px */}
              <AnimatedText
                text="Let's Build Something Amazing."
                className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mb-[32px]"
                delay={0.1}
              />
              <FadeUp delay={0.2}>
                <p className="text-muted text-[20px] leading-[1.7] max-w-[400px]">
                  Have an upcoming project or idea? Connect directly with our development and design team.
                </p>
              </FadeUp>
            </div>

            {/* Channels List (Card to Card gap = 32px) */}
            <div className="space-y-[32px]">
              {/* WhatsApp */}
              <FadeUp delay={0.3}>
                <div className="flex gap-[24px] items-start">
                  <div className="w-12 h-12 rounded-xl bg-green-500/5 flex items-center justify-center shrink-0 border border-green-500/10">
                    <MessageCircle size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted text-sm mb-3">Instant chat response within minutes.</p>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest text-green-500 hover:text-green-600 transition-colors inline-flex items-center gap-1.5"
                    >
                      Chat Now ➜
                    </a>
                  </div>
                </div>
              </FadeUp>

              {/* Email */}
              <FadeUp delay={0.4}>
                <div className="flex gap-[24px] items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                    <p className="text-muted text-sm mb-3">Project brief outlines replied within 24h.</p>
                    <a
                      href="mailto:hello@novastudio.com"
                      className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5"
                    >
                      Send Inquiry ➜
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <FadeUp delay={0.2}>
            <div className="rounded-[28px] bg-white border border-border p-12 shadow-premium">
              <h3 className="text-2xl font-bold text-foreground mb-2 heading-lg">Consultation Request</h3>
              <p className="text-muted text-sm mb-8">Tell us about your brand positioning goals.</p>

              <form onSubmit={handleSubmit} className="space-y-[32px]">
                {/* Form fields gaps: 32px */}
                <div className="grid md:grid-cols-2 gap-[32px]">
                  <div className="relative">
                    <label htmlFor="name" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-[8px]">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Rivera"
                      className="w-full h-[58px] bg-transparent border-b border-border text-foreground placeholder-muted/40 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-[8px]">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full h-[58px] bg-transparent border-b border-border text-foreground placeholder-muted/40 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-[32px]">
                  <div className="relative">
                    <label htmlFor="phone" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-[8px]">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-[58px] bg-transparent border-b border-border text-foreground placeholder-muted/40 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="business" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-[8px]">Business Name</label>
                    <input
                      id="business"
                      type="text"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      placeholder="Nova Corp"
                      className="w-full h-[58px] bg-transparent border-b border-border text-foreground placeholder-muted/40 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="service" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-[8px]">Required Service</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-[58px] bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="branding">Branding</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="video">Video Editing</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-[8px]">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project goals..."
                    className="w-full h-[180px] py-3 bg-transparent border-b border-border text-foreground placeholder-muted/40 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 w-full h-[60px] rounded-[16px] bg-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-primary/95 transition-all duration-300 shadow-sm hover:scale-[1.02]"
                >
                  <Send size={14} />
                  Submit Inquiry
                </button>
              </form>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
