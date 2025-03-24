import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Cylinder } from '@react-three/drei';
import { gsap } from 'gsap';

const ThousandSunnyModelComponent = () => {
  const shipRef = useRef();
  const flagRef = useRef();
  const mastRef = useRef();

  useEffect(() => {
    if (shipRef.current && flagRef.current) {
      // Make the ship gently rock
      gsap.to(shipRef.current.rotation, {
        z: 0.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
      
      // Make the flag wave
      gsap.to(flagRef.current.rotation, {
        y: 0.2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
      
      // Make the whole ship bob up and down slightly
      gsap.to(shipRef.current.position, {
        y: shipRef.current.position.y + 0.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <group position={[0, -2, 0]} rotation={[0, 0.7, 0]}>
      {/* Hull base */}
      <group ref={shipRef} position={[0, 0, 0]}>
        {/* Main hull */}
        <Box args={[6, 1.5, 2]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8B4513" roughness={0.7} />
        </Box>
        
        {/* Upper deck */}
        <Box args={[4, 0.5, 1.8]} position={[0, 1, 0]}>
          <meshStandardMaterial color="#A0522D" roughness={0.5} />
        </Box>
        
        {/* Lion figurehead */}
        <Sphere args={[0.8, 32, 32]} position={[3.5, 1, 0]}>
          <meshStandardMaterial color="#FFD700" roughness={0.3} />
        </Sphere>
        
        {/* Mast */}
        <Cylinder ref={mastRef} args={[0.2, 0.2, 6, 16]} position={[0, 4, 0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </Cylinder>
        
        {/* Flag */}
        <Box ref={flagRef} args={[1.5, 1, 0.1]} position={[0.8, 6, 0]}>
          <meshStandardMaterial color="#FF0000" roughness={0.5} />
        </Box>
        
        {/* Sail */}
        <Box args={[3, 4, 0.1]} position={[0, 3.5, 0]}>
          <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
        </Box>
        
        {/* Cabin */}
        <Box args={[2, 1.5, 1.5]} position={[-1.5, 1.5, 0]}>
          <meshStandardMaterial color="#8B4513" roughness={0.6} />
        </Box>
      </group>
      
      {/* Create ocean base */}
      <Box args={[20, 0.2, 10]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#1A56DB" transparent opacity={0.8} roughness={0.1} />
      </Box>
    </group>
  );
};

const ThousandSunnyModel = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl mb-8 text-straw-hat font-[Luckiest Guy] tracking-wider">
          My Voyage Timeline
        </h2>
        
        {/* Parallelogram container for 3D model */}
        <div 
          className="h-[400px] relative mx-auto bg-ocean-blue bg-opacity-20 backdrop-filter backdrop-blur-sm p-4"
          style={{
            clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
            maxWidth: "800px"
          }}
        >
          <Suspense fallback={
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="text-straw-hat text-xl mb-2">Loading Thousand Sunny...</div>
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
              <ThousandSunnyModelComponent />
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

export default ThousandSunnyModel;