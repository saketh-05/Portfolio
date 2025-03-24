import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';
import { gsap } from 'gsap';

const NarutoModelComponent = () => {
  const hairRef = useRef();
  const bodyRef = useRef();
  const rightArmRef = useRef();
  const leftArmRef = useRef();

  useEffect(() => {
    if (hairRef.current && bodyRef.current) {
      // Animate the hair slightly
      gsap.to(hairRef.current.position, {
        y: hairRef.current.position.y + 0.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
      
      // Animate the body slightly bobbing
      gsap.to(bodyRef.current.position, {
        y: bodyRef.current.position.y + 0.2,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
      
      // Animate arms
      gsap.to(rightArmRef.current.rotation, {
        z: rightArmRef.current.rotation.z + 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
      
      gsap.to(leftArmRef.current.rotation, {
        z: leftArmRef.current.rotation.z - 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <group position={[0, -1, 0]} rotation={[0, 0.5, 0]}>
      {/* Naruto's hair */}
      <Box ref={hairRef} args={[1.8, 0.8, 1.2]} position={[0, 1.6, 0]}>
        <meshStandardMaterial color="#FFC400" roughness={0.8} />
      </Box>
      
      {/* Naruto's head */}
      <Sphere args={[1, 32, 32]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#FFC8A0" roughness={0.3} />
      </Sphere>
      
      {/* Naruto's headband */}
      <Box args={[2, 0.4, 1.2]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#1A56DB" roughness={0.5} />
      </Box>
      
      {/* Naruto's jacket */}
      <Box ref={bodyRef} args={[1.8, 2, 1]} position={[0, -0.8, 0]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#FF6600" roughness={0.5} />
      </Box>
      
      {/* Arms */}
      <Box ref={leftArmRef} args={[0.5, 1.5, 0.5]} position={[-1.2, -0.8, 0]} rotation={[0, 0, -0.2]}>
        <meshStandardMaterial color="#FF6600" roughness={0.5} />
      </Box>
      <Box ref={rightArmRef} args={[0.5, 1.5, 0.5]} position={[1.2, -0.8, 0]} rotation={[0, 0, 0.2]}>
        <meshStandardMaterial color="#FF6600" roughness={0.5} />
      </Box>
      
      {/* Legs */}
      <Box args={[0.6, 1.8, 0.6]} position={[-0.5, -2.6, 0]}>
        <meshStandardMaterial color="#FF6600" roughness={0.5} />
      </Box>
      <Box args={[0.6, 1.8, 0.6]} position={[0.5, -2.6, 0]}>
        <meshStandardMaterial color="#FF6600" roughness={0.5} />
      </Box>
    </group>
  );
};

const NarutoModel = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl mb-8 text-straw-hat font-[Luckiest Guy] tracking-wider">
          Bonus Nakama!
        </h2>
        
        {/* Parallelogram container for 3D model */}
        <div 
          className="h-[500px] relative mx-auto bg-ocean-blue bg-opacity-20 backdrop-filter backdrop-blur-sm p-4"
          style={{
            clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
            maxWidth: "800px"
          }}
        >
          <Suspense fallback={
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="text-straw-hat text-xl mb-2">Loading Naruto...</div>
              <div className="mt-4 flex justify-center">
                <span className="inline-block w-4 h-4 rounded-full bg-straw-hat mx-1 animate-pulse" style={{ animationDelay: "0s" }}></span>
                <span className="inline-block w-4 h-4 rounded-full bg-straw-hat mx-1 animate-pulse" style={{ animationDelay: "0.2s" }}></span>
                <span className="inline-block w-4 h-4 rounded-full bg-straw-hat mx-1 animate-pulse" style={{ animationDelay: "0.4s" }}></span>
              </div>
            </div>
          }>
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
              <NarutoModelComponent />
              <OrbitControls dampingFactor={0.3} enablePan={false} />
            </Canvas>
          </Suspense>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-white text-opacity-70">Drag to rotate • Scroll to zoom • Double-click to reset</p>
        </div>
      </div>
    </section>
  );
};

export default NarutoModel;