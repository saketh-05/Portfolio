import React, { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    "id": 1,
    "title": "Custom Chatbot with RAG",
    "description": "Domain-specific chatbot using OpenAI GPT and a custom knowledge base, deployed with Next.js and FastAPI for real-time interaction.",
    "image": "/chat-ui.png",
    "tags": ["LangChain", "FAISS", "FastAPI", "OpenAI", "Next.js", "TTS", "STT"],
    "links": {
      "github": "https://github.com/saketh-05/rag-chatbot",
      "live": "https://yourchatbot.com"
    }
  },
  {
    "id": 2,
    "title": "FoodTube E-Commerce Website",
    "description": "End-to-end e-commerce platform integrating React frontend with a secure Node.js backend, deployed using Docker and Kubernetes on AWS EKS.",
    "image": "/food-pic.png",
    "tags": ["React", "Express.js", "Node.js", "TypeScript", "JWT", "OAuth", "RESTful APIs"],
    "links": {
      "github": "https://github.com/saketh-05/Food",
      "live": "https://food-eta-five.vercel.app/"
    }
  }
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured <span className="text-blue-300">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`transform ${index % 2 === 0 ? 'skew-x-[-5deg]' : 'skew-x-[5deg]'} bg-blue-800/50 backdrop-blur-md overflow-hidden rounded-lg shadow-xl border border-blue-400/30 h-full flex flex-col`}
            >
              <div className={`transform ${index % 2 === 0 ? 'skew-x-[5deg]' : 'skew-x-[-5deg]'} h-full flex flex-col`}>
                {/* Project image placeholder */}
                <div className="w-full h-58 bg-blue-700/60 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-[450px] h-full object-cover" 
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  
                  <p className="text-blue-100 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-700/70 text-blue-200 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.links.github} 
                      className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a 
                      href={project.links.live} 
                      className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}