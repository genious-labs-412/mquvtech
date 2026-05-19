import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

export default function TechStack() {
  // Duplicate the tech stack array to create a seamless loop
  const duplicatedTech = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="
py-24 relative overflow-hidden w-[88%] m-auto
before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[0.5px]
before:bg-gradient-to-r before:from-transparent before:via-gray-400 before:to-transparent

after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.5px]
after:bg-gradient-to-r after:from-transparent after:via-gray-400 after:to-transparent
">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-white/50">We use the most advanced and reliable tools to build your products.</p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {duplicatedTech.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex flex-col items-center justify-center px-8 md:px-12 group"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center p-3  transition-colors mb-4">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-full h-full object-contain filter transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-medium text-primary  transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
