import Navbar from "@/components/ui/Navbar";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen">
      <BackgroundVideo />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
