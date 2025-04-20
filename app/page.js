"use client";

import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      e.preventDefault();
      const id = target.getAttribute('href').slice(1);
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </ThemeProvider>
  );
}