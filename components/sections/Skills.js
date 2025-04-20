"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Layers, 
  Terminal, 
  Database, 
  Settings, 
  Server, 
  Globe 
} from 'lucide-react';

const skillCategories = [
  {
    name: "Frontend Development",
    icon: <Code className="h-6 w-6" />,
    skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="h-6 w-6" />,
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"]
  },
  {
    name: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "Python", "RESTful APIs", "Authentication"]
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase"]
  },
  {
    name: "Tools & Workflow",
    icon: <Settings className="h-6 w-6" />,
    skills: ["Git", "GitHub", "VS Code", "Docker", "Kubernetes", "CI/CD", "DevOps", "AWS", "GCP", "Terraform"]
  },
  {
    name: "Other",
    icon: <Globe className="h-6 w-6" />,
    skills: ["SEO", "Performance Optimization", "Web Accessibility", "Responsive Design"]
  }
];

const SkillCategory = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card p-6 rounded-lg shadow-sm"
    >
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-primary/10 p-3 mr-3 text-primary">
          {category.icon}
        </div>
        <h3 className="text-xl font-medium">{category.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've cultivated a diverse skill set that allows me to bring ideas to life from concept to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.name} category={category} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 bg-card rounded-lg shadow-sm border text-center"
        >
          <h3 className="text-xl font-medium mb-4">My Development Philosophy</h3>
          <p className="text-muted-foreground">
            I believe in clean, maintainable code and intuitive user experiences. 
            I'm constantly learning and adapting to new technologies while maintaining a 
            strong foundation in core principles of web development and design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}