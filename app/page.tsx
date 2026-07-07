import Hero from "@/components/home/Hero";
import TrustedBrands from "@/components/home/TrustedBrands";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import ContactSection from "@/components/home/ContactSection";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <About />
      <Services />
      <Process />
      <Projects />
      <ContactSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
