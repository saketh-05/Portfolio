import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../components/HeroSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialize scroll animations
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Clean up animations on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-700 min-h-screen overflow-x-hidden">

      {/* Content sections */}
      <main className="relative z-10 container mx-auto mb-5">
        <HeroSection />
        
        <EducationSection />
        
        <ExperienceSection />
        
        <SkillsSection />
        
        <ProjectsSection />
        
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-blue-900 text-white py-8 text-center">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} One Piece Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}