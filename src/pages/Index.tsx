import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen gradient-bg transition-colors duration-500">
      <ScrollProgress />
      <Particles />
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
