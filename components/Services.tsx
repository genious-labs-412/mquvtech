import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants for the grid stagger
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        
        {/* Header with smooth fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
              Our <span className="text-primary/80">Expertise</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed">
              We provide comprehensive digital solutions tailored to your business needs.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit border border-zinc-800 bg-white hover:border-zinc-600 text-black font-bold py-3 px-8 rounded-full transition-colors"
          >
            View All Services
          </motion.button>
        </motion.div>

        {/* Animated Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Smooth lift on hover
              className="group relative p-6 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 hover:border-primary/30 transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Refined Icon Container */}
              <div className="relative w-16 h-16 rounded-2xl bg-zinc-800/40 border border-zinc-700/50 flex items-center justify-center mb-10 overflow-hidden">
                {/* Glossy Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Subtle colored glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`} />
                
                <service.icon className="w-7 h-7 text-zinc-400 group-hover:text-primary transition-colors duration-500 z-10" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary/90 transition-colors tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-zinc-500 mb-8 leading-relaxed text-sm group-hover:text-zinc-400 transition-colors">
                {service.description}
              </p>

              {/* Minimalist Sub-services */}
              <ul className="space-y-4 mb-10">
                {service.subServices.map((sub) => (
                  <li key={sub} className="flex items-center gap-3 text-sm font-medium text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-primary/40 transition-all duration-500" /> 
                    {sub}
                  </li>
                ))}
              </ul>

              {/* Animated Button Link */}
              {/* <button className="flex items-center gap-2 text-sm font-bold text-zinc-500 group-hover:text-primary transition-all duration-300">
                Explore Now 
                <motion.div
                  variants={{
                    hover: { x: 5, y: -5 }
                  }}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </button> */}

              {/* Very faint background light */}
              <div className={`absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] blur-[100px] transition-opacity duration-1000`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}