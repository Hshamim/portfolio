import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { FloatingShapes } from "@/components/FloatingShapes";

export default function Home() {
  return (
    <main className="relative bg-[#0A0A09] min-h-screen text-white overflow-hidden">
      <Preloader />
      <Navbar />
      <FloatingShapes />
      <Hero />
      <Skills />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
