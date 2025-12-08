import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Services } from "@/components/Services";
import { DigitalGoods } from "@/components/DigitalGoods";
import { BlogSection } from "@/components/BlogSection";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <Header />
      <Hero />
      <ProjectGallery />
      <Services />
      <DigitalGoods />
      <BlogSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

