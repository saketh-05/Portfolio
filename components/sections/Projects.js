"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: "FoodTube E-Commerce Website",
    description: "A secure and scalable e-commerce platform featuring authentication, containerization, and deployment with Kubernetes and GitHub Actions.",
    image: "/foodtube.png",
    tags: ["MERN", "JWT", "OAuth", "Docker", "Kubernetes", "Nginx"],
    liveUrl: "https://food-eta-five.vercel.app/login",
    githubUrl: "https://github.com/saketh-05/Food.git",
    featured: true
  },
  {
    id: 2,
    title: "Custom RAG Chatbot for Anime Recommendation",
    description: "An intelligent chatbot leveraging LangChain and RAG with a custom anime knowledge base, integrated with TTS and STT for voice interaction.",
    image: "/rag-chatbot.png",
    tags: ["LangChain", "ChromaDB", "FastAPI", "Next.js", "TTS", "STT", "Ollama"],
    liveUrl: "#",
    githubUrl: "https://github.com/saketh-05/rag-chatbot.git",
    featured: true
  },
  {
    id: 3,
    title: "Zomato Restaurant Listing and Search",
    description: "A responsive full-stack application that allows users to search and filter restaurants by location, cuisine, and image using REST APIs.",
    image: "/zomato-pirates.png",
    tags: ["React", "Express.js", "MongoDB", "Kaggle Dataset"],
    liveUrl: "https://zomato-pirates.onrender.com",
    githubUrl: "https://github.com/saketh-05/zomato-restaurants.git",
    featured: false
  }
];


function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  const isFeatured = project.featured;
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`${isFeatured ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
    >
      <Card className="overflow-hidden h-full hover:shadow-md transition-all duration-300 group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Button size="sm" variant="outline" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" /> Code
              </a>
            </Button>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container">
        <motion.div 
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}