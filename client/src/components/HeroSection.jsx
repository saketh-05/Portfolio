import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const socialsRef = useRef(null);
  const modelContainerRef = useRef(null);

  // useEffect(() => {
  //   // Animate hero elements
  //   const timeline = gsap.timeline();

  //   timeline
  //     .from(titleRef.current, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power3.out",
  //     })
  //     .from(
  //       subtitleRef.current,
  //       {
  //         y: 30,
  //         opacity: 0,
  //         duration: 0.8,
  //         ease: "power3.out",
  //       },
  //       "-=0.4"
  //     )
  //     .from(
  //       socialsRef.current,
  //       {
  //         y: 20,
  //         opacity: 0,
  //         duration: 0.6,
  //         ease: "power3.out",
  //       },
  //       "-=0.4"
  //     )
  //     .from(
  //       modelContainerRef.current,
  //       {
  //         scale: 0.8,
  //         opacity: 0,
  //         duration: 1,
  //         ease: "elastic.out(1, 0.7)",
  //       },
  //       "-=0.2"
  //     );

  //   return () => {
  //     timeline.kill();
  //   };
  // }, []);

  return (
    <div className='relative flex flex-col pl-[125px] justify-center min-h-screen bg-center bg-cover bg-no-repeat bg-fixed' style={{
      backgroundImage: "url('/pic-portfolio-bg.jpg')"}}>
      <div className='text-white space-y-6 md:w-1/2 backdrop-blur-[4px] bg-black/40 p-8 rounded-lg shadow-lg border border-stone-400/30'>
        <h1
          ref={titleRef}
          className='text-4xl md:text-7xl font-bold tracking-tight'
        >
          Saketh D. Surya
        </h1>

        <p ref={subtitleRef} className='text-xl md:text-2xl text-blue-200'>
          Full Stack Web Developer
        </p>

        {/* Social links */}
        <div ref={socialsRef} className='flex gap-4 pt-2'>
          <a
            href='https://github.com/saketh-05'
            className='hover:text-blue-300 transition-colors text-2xl'
            aria-label='GitHub'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/saketh-surya-dontukurti-6b9776291/'
            className='hover:text-blue-300 transition-colors text-2xl'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
          <a
            href='mailto:dsakethsurya@gmail.com'
            className='hover:text-blue-300 transition-colors text-2xl'
            aria-label='Email'
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}
