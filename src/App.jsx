import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ContactPage from "./sections/ContactPage";
import Footer from "./components/Footer";
import ProjectsPage from "./sections/ProjectsSection";

const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <div id="home" className="h-screen w-screen bg-slate-950 text-white">
        <Navbar />
        <HeroSection />
      </div>
      <div id="about" className="bg-slate-950 text-white">
        <AboutSection />
      </div>   
      <div id="projects" className="h-screen w-screen bg-slate-950 text-white">
        <ProjectsPage />
      </div>
      <div id="contact" className="h-screen w-screen bg-slate-950 text-white">
        <ContactPage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
