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
        
        {/* Asymmetrical Layout: Left channels (1), Right Form (1.5), Grid Gap: 40px */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] grid-gap items-start">
          
          {/* Left Column: Direct channels */}
          <div className="flex flex-col grid-gap">
            <div>
              <FadeUp>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold spacing-eyebrow-heading">Contact Us</p>
              </FadeUp>
              {/* H2 title scaling to 56px, gap to paragraph = 32px */}
              <AnimatedText
                text="Let's Build Something Amazing."
                className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground spacing-heading-paragraph"
                delay={0.1}
              />
              <FadeUp delay={0.2}>
                <p className="text-muted text-[20px] leading-[1.7] max-w-[400px]">
                  Have an upcoming project or idea? Connect directly with our development and design team.
                </p>
              </FadeUp>
            </div>

            {/* Channels List (Card to Card gap = 32px) */}
            <div className="flex flex-col spacing-card-card">
              {/* WhatsApp */}
              <FadeUp delay={0.3}>
                <div className="flex gap-6 items-start">
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
                <div className="flex gap-6 items-start">
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
            <div className="card-radius bg-white border border-border p-12 shadow-premium">
              <h3 className="text-2xl font-bold text-foreground mb-2 heading-lg">Consultation Request</h3>
              <p className="text-muted text-sm mb-8">Tell us about your brand positioning goals.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form fields gaps: 32px */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label htmlFor="name" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Rivera"
                      className="input-custom placeholder-muted/40"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="input-custom placeholder-muted/40"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label htmlFor="phone" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-2">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="input-custom placeholder-muted/40"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="business" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-2">Business Name</label>
                    <input
                      id="business"
                      type="text"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      placeholder="Nova Corp"
                      className="input-custom placeholder-muted/40"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="service" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-2">Required Service</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="input-custom appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_16px_center] bg-[size:20px] bg-no-repeat text-foreground text-sm focus:outline-none"
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
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project goals..."
                    className="w-full h-[180px] p-4 bg-[#FCFCFD] border border-border rounded-xl text-foreground placeholder-muted/40 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-custom btn-radius bg-primary text-white hover:bg-primary/95 transition-all duration-300 shadow-sm hover:scale-[1.02] flex items-center justify-center gap-2.5"
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
