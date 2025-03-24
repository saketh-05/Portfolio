import React, { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiThreedotjs,
  SiWebgl,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiAdobephotoshop,
  SiFastapi,
  SiKubernetes,
  SiGooglecloud,
  SiShadcnui 
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const skillsCategories = [
  {
    id: 1,
    name: "Frontend",
    skills: [
      { id: 1, name: "React", icon: FaReact, level: 95 },
      { id: 2, name: "JavaScript", icon: SiJavascript, level: 90 },
      { id: 3, name: "TypeScript", icon: SiTypescript, level: 85 },
      { id: 4, name: "HTML5", icon: FaHtml5, level: 95 },
      { id: 5, name: "CSS3", icon: FaCss3Alt, level: 90 },
      { id: 6, name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
      { id: 7, name: "Next.js", icon: RiNextjsFill, level: 80 },
      { id: 8, name: "Shadcn UI", icon: SiShadcnui , level: 80 },
    ],
  },
  {
    id: 2,
    name: "Backend & DevOps",
    skills: [
      { id: 11, name: "Node.js", icon: FaNodeJs, level: 85 },
      { id: 12, name: "FastAPI", icon: SiFastapi, level: 80 },
      { id: 13, name: "MongoDB", icon: SiMongodb, level: 80 },
      { id: 14, name: "PostgreSQL", icon: SiPostgresql, level: 75 },
      { id: 15, name: "Git", icon: FaGitAlt, level: 90 },
      { id: 16, name: "Docker", icon: FaDocker, level: 70 },
      { id: 17, name: "Kubernetes", icon: SiKubernetes, level: 65 },
      { id: 18, name: "AWS", icon: FaAws, level: 70 },
      { id: 19, name: "GCP", icon: SiGooglecloud, level: 65 },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id='skills' className='py-20'>
      <div className='w-full max-w-5xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-12 text-center'>
          Technical <span className='text-blue-300'>Skills</span>
        </h2>

        <div className='space-y-12'>
          {skillsCategories.map((category, index) => (
            <div
              key={category.id}
              className={`relative transform ${
                index % 2 === 0 ? "skew-x-[-5deg]" : "skew-x-[5deg]"
              } bg-blue-800/50 backdrop-blur-md p-8 rounded-lg shadow-xl border border-blue-400/30`}
            >
              <div
                className={`transform ${
                  index % 2 === 0 ? "skew-x-[5deg]" : "skew-x-[-5deg]"
                }`}
              >
                <h3 className='text-2xl font-bold text-white mb-6'>
                  {category.name}
                </h3>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className='bg-blue-700/60 rounded-lg p-5 flex flex-col items-center'
                    >
                      <div className='text-4xl text-blue-300 mb-3'>
                        <skill.icon />
                      </div>
                      <h4 className='text-white font-medium mb-2'>
                        {skill.name}
                      </h4>

                      <div className='w-full bg-blue-900/60 h-3 rounded-full overflow-hidden'>
                        <div
                          className='bg-blue-400 h-full rounded-full'
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className='text-blue-200 text-sm mt-1'>
                        {skill.level}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
