import React, { useRef } from "react";

const education = [
  {
    id: 1,
    school: "Gayatri Vidya Parishad College of Engineering (Autonomous)",
    degree: "Bachelor's in Computer Science",
    period: "2022 - 2026",
    description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and completed thesis on deep learning applications in marine biology."
  },
  {
    id: 2,
    school: "Sri Chaitanya Junior College",
    degree: "Intermediate in Mathematics, Physics & Chemistry",
    period: "2020 - 2022",
    description: "Core focus on software development methodologies and programming paradigms. Participated in multiple hackathons and led the developer student club."
  }
];

export default function EducationSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Education <span className="text-blue-300">Journey</span>
        </h2>
        
        <div className="space-y-10">
          {education.map((item, index) => (
            <div
              key={item.id}
              className={`relative transform ${index % 2 === 0 ? 'skew-x-[-5deg]' : 'skew-x-[5deg]'} bg-blue-800/50 backdrop-blur-md p-8 rounded-lg shadow-xl border border-blue-400/30`}
            >
              <div className={`transform ${index % 2 === 0 ? 'skew-x-[5deg]' : 'skew-x-[-5deg]'}`}>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{item.school}</h3>
                    <h4 className="text-lg md:text-xl text-blue-300 mt-1">{item.degree}</h4>
                    <p className="mt-3 text-blue-100">{item.description}</p>
                  </div>
                  
                  <div className="md:w-1/3 flex items-center justify-end">
                    <div className="bg-blue-700/70 text-white px-6 py-3 rounded-lg text-center w-full md:w-auto">
                      <span className="text-lg font-bold">{item.period}</span>
                    </div>
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