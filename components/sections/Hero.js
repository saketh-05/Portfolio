"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 py-12">
        <motion.div 
          className="flex flex-col justify-center order-2 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-lg text-primary font-medium mb-4">Hello, I'm</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="block">Saketh Surya Dontukurti</span>
            <span className="text-muted-foreground">Web Developer | DevOps Engineer</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            I create meaningful digital experiences through design and code. 
            Specializing in frontend development with a passion for clean, 
            user-centered solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects" className='p-3 rounded-sm' >View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/my-resume-apr5.pdf" className='p-2 rounded-sm' download>
                Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-card/30">
            <Image
              src="/my-pic-portfolio.jpg"
              alt="Saketh Surya Dontukurti"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#projects" 
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors",
          "animate-bounce"
        )}
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}