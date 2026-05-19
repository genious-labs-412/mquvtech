"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PortfolioGrid from '../../components/Portfolio';
export const PORTFOLIO = [
  {
    id: 1,
    name: 'WORLD91 news',
    image: '/assets/World91_Project.png',
    type: 'desktop'
  },
  {
    id: 2,
    name: 'NMF App',
    image: '/assets/Nmf_App.png',
    type: 'mobile'
  },
  {
    id: 5,
    name: 'NMF news',
    image: '/assets/Nmf_News.png',
    type: 'desktop'
  },
  {
    id: 3,
    name: 'RNA news',
    image: '/assets/rna_news.png',
    type: 'desktop'
  },
  {
    id: 4,
    name: 'Travi cabs',
    image: '/assets/travi.png',
    type: 'desktop'
  },
  {
    id: 6,
    name: 'Sol Best',
    image: '/assets/solbest.png',
    type: 'desktop'
  }
];

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-[#ededed] font-sans antialiased selection:bg-white selection:text-black">
      <Navbar />
      
      {/* --- 1. HERO SECTION (Centered with premium typography) --- */}
      <section className="pt-40 md:pt-48 pb-20 px-6 max-w-7xl mx-auto flex justify-center border-b border-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1] mb-8">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#666]">Portfolio.</span>
          </h1>
          <p className="text-xl text-[#888] leading-relaxed max-w-3xl mx-auto font-light">
            Explore our collection of successful digital transformations across various industries. We build solutions that perform.
          </p>
        </motion.div>
      </section>

      {/* Renders your external PortfolioGrid component */}
      <PortfolioGrid />

      {/* --- 2. CLIENT TESTIMONIALS (Premium Wireframe Layout) --- */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-[#000]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <h2 className="text-sm font-mono text-[#888] uppercase tracking-widest mb-4">Feedback</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#ededed]">What Our Clients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i, index) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#050505] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/20 transition-colors duration-300 group flex flex-col justify-between h-full"
              >
                <div>
                  {/* Premium Star Ratings */}
                  <div className="flex gap-1.5 mb-8">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star} className="text-white/80 text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">★</span>
                    ))}
                  </div>
                  <p className="text-[#888] text-lg leading-relaxed mb-8 font-light group-hover:text-white/70 transition-colors">
                    "MQUV Tech transformed our business with their innovative approach. 
                    The team's expertise and dedication were evident throughout the entire project."
                  </p>
                </div>
                
                {/* Client Profile (Separated by a subtle line) */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#111] border border-white/10 flex-shrink-0">
                    <img 
                      src={`https://picsum.photos/seed/client${i}/100/100`} 
                      alt="Client Profile" 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#ededed] tracking-tight">Client Name {i}</h4>
                    <p className="text-xs text-[#555] font-mono mt-1 uppercase tracking-wider">CEO, TechCorp</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}