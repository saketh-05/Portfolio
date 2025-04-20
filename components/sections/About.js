"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CakeSlice } from 'lucide-react';
import { cn } from '@/lib/utils';  

const timeline = [
  {
    id: 1,
    year: "Feb 2025 – Apr 2025",
    role: "Full Stack Web Developer Intern",
    company: "C&B Freelancers",
    description: "Designed and implemented responsive web applications using React and Next.js, improving software efficiency by 20% with reusable components."
  },
  {
    id: 2,
    year: "May 2024 – Aug 2024",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSOC)",
    description: "Ranked #139 globally out of 1000+ contributors by enhancing UX and functionality in multiple repositories using React, HTML5, and CSS3."
  },
  {
    id: 3,
    year: "May 2024 – Jun 2024",
    role: "Full Stack Developer Intern",
    company: "RINL - Vizag Steel Plant",
    description: "Developed backend architecture and RESTful APIs for a library management system using Java Servlets, JSP, jQuery, and OracleSQL. Led a team of 11."
  },
  {
    id: 4,
    year: "2022 – Present",
    role: "B.Tech in Computer Science",
    company: "Gayatri Vidya Parishad College of Engineering (A)",
    description: "Pursuing undergraduate degree with a strong foundation in core CS subjects like DBMS, OS, and DSA. CGPA: 8.9/10."
  },
  {
    id: 5,
    year: "2020 – 2022",
    role: "Intermediate (MPC)",
    company: "Sri Chaitanya Junior College",
    description: "Completed pre-university education in Math, Physics, and Chemistry with a percentage of 95.4%."
  }
];

const funFacts = [
  {
    icon: <CakeSlice className="h-5 w-5" />,
    text: "Fueled by sweets and tasty foods"
  },
  {
    icon: <Award className="h-5 w-5" />,
    text: "Recognized with Rank 139 in GSSOC'24 Open Source Contribution Program"
  }
];

function TimelineItem({ item, index }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.2 });
  const isJob = item.role.includes("Developer") || item.role.includes("Designer");
  
  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 h-full w-px bg-border"></div>
      
      {/* Timeline Dot */}
      <div className={cn(
        "absolute left-0 top-1 w-6 h-6 rounded-full -translate-x-1/2 flex items-center justify-center shadow-sm",
        isJob ? "bg-primary" : "bg-muted-foreground"
      )}>
        {isJob ? <Briefcase className="h-3 w-3 text-primary-foreground" /> : <GraduationCap className="h-3 w-3 text-primary-foreground" />}
      </div>
      
      <div>
        <span className="text-sm font-medium text-muted-foreground block mb-1">
          {item.year}
        </span>
        <h3 className="text-lg font-bold">{item.role}</h3>
        <p className="text-primary mb-2">{item.company}</p>
        <p className="text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, amount: 0.5 });

  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know my journey, experience, and the path that led me to where I am today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image 
                src="/ghibili-mypic.png" 
                alt="About me"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-64 h-64 rounded-full bg-primary/5 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-primary/10 -z-10"></div>
          </motion.div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-4 font-serif"
            >
              My Journey in Development & Design
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground mb-6"
            >
              With over 5 years of experience in web development, I've had the privilege of 
              working across various industries and project types. My passion lies in creating 
              digital experiences that are both beautiful and functional.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground mb-6"
            >
              I started my journey as a computer science student with a keen interest in web technologies. 
              After graduation, I immersed myself in frontend development, constantly learning and 
              adapting to the ever-evolving tech landscape.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8"
            >
              Today, I help businesses and individuals bring their visions to life through clean code and 
              thoughtful design. When I'm not coding, you can find me exploring photography, 
              hiking in nature, or trying out new coffee shops.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {funFacts.map((fact, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-muted px-4 py-2 rounded-full"
                >
                  <span className="text-primary mr-2">{fact.icon}</span>
                  <span className="text-sm">{fact.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-8 text-center font-serif">Experience & Education</h3>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}