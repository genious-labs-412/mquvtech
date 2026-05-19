'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import { cn } from '../utils';
import { ExternalLink, Smartphone, Monitor } from 'lucide-react';
import Image from "next/image";

const CATEGORIES = ['All Projects', 'Websites', 'Mobile Apps', 'CRM / ERP Systems'];


export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = activeCategory === 'All Projects'
    ? PORTFOLIO
    : PORTFOLIO.filter((p) => p.category === activeCategory);

  return (
    <section className="py-12 md:py-24 relative bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg">A showcase of our latest digital transformations.</p>
          </div>

          <div className="flex overflow-x-auto pb-4 lg:pb-0 no-scrollbar max-w-full">
            <div className="flex gap-2 glass p-1.5 rounded-full whitespace-nowrap mx-auto lg:mx-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all',
                    activeCategory === cat
                      ? 'bg-white text-black shadow-lg'
                      : 'hover:bg-white/5 text-white/60'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex flex-col w-full"
              >
                <div className="group/img relative aspect-[16/11] sm:aspect-[16/10] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden glass border-white/10 mb-6 cursor-pointer">
                  <div className="absolute inset-0 p-4 sm:p-8 md:p-7 flex items-center justify-center bg-[#0a0a0a]">
                    {project.type === 'desktop' ? (
                      <div className="w-full h-full relative rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden border-[3px] md:border-4 border-[#1a1a1a] shadow-2xl">
                        <div className="absolute top-0 left-0 right-0 h-4 md:h-6 bg-black flex items-center px-3 gap-1 z-10">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                        </div>
                        <div className="w-full h-full pt-4 md:pt-6 overflow-hidden">
                          <motion.img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-auto"
                            whileHover={{ y: '-50%' }}
                            transition={{ duration: 6, ease: 'linear' }}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="h-[90%] md:h-full aspect-[9/18.5] relative rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden border-[4px] md:border-[6px] border-[#1a1a1a] shadow-2xl bg-black">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-[4%] bg-[#1a1a1a] rounded-b-xl z-10" />
                       <motion.img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover object-top"
                          whileHover={{ y: '-50%' }}
                          transition={{ duration: 6, ease: 'linear' }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="bg-white text-black py-3 px-6 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform active:scale-95">
                      View Project <ExternalLink size={16} />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between group/text px-2 gap-4 sm:gap-0">
                  <div className="w-full">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 rounded bg-primary/10">
                        {project.industry}
                      </span>
                      <div className="flex gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[9px] md:text-[10px] text-white/30">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover/text:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>
                  <div className="p-3 glass rounded-full text-white/40 group-hover/text:text-primary transition-colors duration-300 hidden sm:block">
                    {project.type === 'desktop' ? <Monitor size={20} /> : <Smartphone size={20} />}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}