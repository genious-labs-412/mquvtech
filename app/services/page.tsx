"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServicesList from '../../components/Services';
import Workflow from '../../components/Workflow';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../constants';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-[#ededed] font-sans antialiased selection:bg-white selection:text-black">
      <Navbar />
      
      {/* --- 1. HERO SECTION (Matched About Page Spacing) --- */}
      <section className="pt-40 md:pt-48 pb-20 px-6 max-w-7xl mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1] mb-8">
            Comprehensive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#666]">
              Digital Solutions.
            </span>
          </h1>
          <p className="text-xl text-[#888] leading-relaxed max-w-3xl mx-auto font-light">
            From ideation to deployment, we provide end-to-end technology services that help you scale, innovate, and dominate your market.
          </p>
        </motion.div>
      </section>

      <ServicesList />

      {/* --- 2. DETAILED SERVICES GRID (Matched About Page Spacing) --- */}
      <section className="py-24 md:py-32 border-t border-white/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

        {/* Removed the sm:px-12 lg:px-16 to perfectly align with About page */}
        <div className="max-w-7xl mx-auto px-3 relative z-10">
          
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-3xl  text-center font-bold text-white    tracking-widest mb-20">Capabilities</h2>
            <h3 className="text-4xl font-bold tracking-tight">Our Expertise</h3>
          </div>

          <div className="space-y-12 md:space-y-20">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-3.5 mb-8 shadow-2xl`}>
                    <service.icon className="w-full h-full text-white drop-shadow-md" />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
                    {service.title}
                  </h2>
                  <p className="text-[#888] text-lg mb-10 leading-relaxed font-light">
                    {service.description} We leverage the latest technologies to ensure your solution is not just functional, but a massive competitive advantage.
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-12">
                    {service.subServices.map(sub => (
                      <li key={sub} className="flex items-center gap-3 text-[#aaa] font-medium">
                        <CheckCircle2 className="text-white/40" size={20} />
                        {sub}
                      </li>
                    ))}
                  </ul>
                  
                  {/* <button className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-[#ccc] transition-colors duration-300">
                    Discuss {service.title} 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button> */}
                </div>
                
                {/* Image Side */}
                <div className="flex-1 w-full relative group cursor-pointer">
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#050505] border border-white/10 relative z-10 transition-all duration-500 group-hover:border-white/20">
                    <img 
                      src={service.link} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-70 filter  group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle inner shadow for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
                  </div>
                  
                  {/* Decorative Glow behind the image */}
                  {/* <div className={`absolute -inset-4 bg-gradient-to-br  ${service.color}  opacity-20 group-hover:opacity-30 blur-[60px] -z-0 transition-opacity duration-500`} />      i copeid this to below and remove shadowColor */}
                  <div className={`absolute -inset-4 bg-gradient-to-br  opacity-20 group-hover:opacity-30 blur-[60px] -z-0 transition-opacity duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/10">
        <Workflow />
      </div>

      <Footer />
    </div>
  );
}