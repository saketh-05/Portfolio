import React, { useRef } from "react";

const experiences =[
  {
    "id": 1,
    "company": "RINL - VIZAG STEEL PLANT",
    "position": "Full Stack Developer Intern",
    "period": "May 2024 – June 2024",
    "location": "India",
    "description": "Developed the backend architecture and RESTful APIs for library management system, utilizing technologies like Java servlets, JSP files, jQuery, OracleSQL. Led a team of 11 members, ensuring seamless collaboration and timely delivery of endpoints.",
    "key_points": [
      "Java Servlets, JSP, jQuery, OracleSQL",
      "Backend development & RESTful APIs",
      "Team leadership and project management"
    ]
  },
  {
    "id": 2,
    "company": "GIRLSCRIPT SUMMER OF CODE",
    "position": "Open Source Contributor",
    "period": "May 2024 – August 2024",
    "location": "India",
    "description": "Ranked 139 globally among 1000+ open source contributors by making significant enhancements to UniCollab and 4 other repositories. Used modern web technologies (HTML5, CSS3, React) to improve user experience and functionality.",
    "key_points": [
      "Open source contributions",
      "HTML5, CSS3, React",
      "Enhancing user experience"
    ]
  },
  {
    "id": 3,
    "company": "C&B FREELANCERS",
    "position": "Full Stack Web Developer Intern",
    "period": "Jan 2025 – Apr 2025",
    "location": "Remote",
    "description": "Enhanced user experience by designing and implementing responsive web applications using React and Next.js. Boosted software efficiency by 20% through the creation of reusable components, leveraging modular design techniques and thorough documentation for maintainability. Tackled real-world challenges within the development team for two startup ventures, contributing to both Frontend and Backend operations.",
    "key_points": [
      "React, Next.js, Node.js Modular Design",
      "Responsive web applications",
      "Frontend & Backend development"
    ]
  }
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Professional <span className="text-blue-300">Experience</span>
        </h2>
        
        <div className="space-y-10">
          {experiences.map((job, index) => (
            <div
              key={job.id}
              className={`relative transform ${index % 2 === 0 ? 'skew-x-[5deg]' : 'skew-x-[-5deg]'} bg-blue-800/50 backdrop-blur-md p-8 rounded-lg shadow-xl border border-blue-400/30`}
            >
              <div className={`transform ${index % 2 === 0 ? 'skew-x-[-5deg]' : 'skew-x-[5deg]'}`}>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company and period */}
                  <div className="md:w-1/3">
                    <div className="bg-blue-700/70 p-5 rounded-lg h-full">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{job.company}</h3>
                      <h4 className="text-blue-300 mt-1">{job.position}</h4>
                      <div className="mt-3 inline-block bg-blue-600/80 px-4 py-1 rounded-full text-white text-sm">
                        {job.period}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description and achievements */}
                  <div className="md:w-2/3">
                    <p className="text-blue-100">{job.description}</p>
                    
                    <h5 className="text-white font-medium mt-4 mb-2">Key Achievements:</h5>
                    <ul className="list-disc pl-5 text-blue-200 space-y-1">
                      {job.key_points.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
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