"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Zap } from 'lucide-react';
   
export default function CaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32"
    >
      <Navbar />
      
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Success <span className="text-primary">Stories</span>
          </motion.h1>
          <p className="text-xl opacity-60 leading-relaxed">
            In-depth look at how we've helped our clients achieve their business objectives through technology.
          </p>
        </div>
      </section>

      {/* Main Case Study */}
      <section className="container mx-auto px-6 mb-24">
        <div className="glass-dark rounded-[3rem] p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                FinTech Transformation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Global Banking App Redesign</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest opacity-30 mb-2">The Challenge</h4>
                  <p className="opacity-60">
                    A legacy banking system with declining user engagement and security concerns needed a complete overhaul for the modern mobile era.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest opacity-30 mb-2">Our Solution</h4>
                  <p className="opacity-60">
                    We built a high-performance Flutter application with biometric security, real-time transaction tracking, and an AI-powered financial advisor.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 glass rounded-2xl">
                  <TrendingUp className="text-primary mb-2" size={20} />
                  <div className="text-xl font-bold">400%</div>
                  <div className="text-[10px] opacity-30 uppercase tracking-widest">Growth</div>
                </div>
                <div className="p-4 glass rounded-2xl">
                  <Shield className="text-primary mb-2" size={20} />
                  <div className="text-xl font-bold">100%</div>
                  <div className="text-[10px] opacity-30 uppercase tracking-widest">Secure</div>
                </div>
                <div className="p-4 glass rounded-2xl">
                  <Zap className="text-primary mb-2" size={20} />
                  <div className="text-xl font-bold">0.2s</div>
                  <div className="text-[10px] opacity-30 uppercase tracking-widest">Latency</div>
                </div>
              </div>

              <button className="btn-primary flex items-center gap-2">
                Read Full Case Study <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass">
                <img 
                  src="https://picsum.photos/seed/case1/800/1000" 
                  alt="Case Study" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies Grid */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'E-commerce Scalability', category: 'Retail', result: '+250% Sales' },
            { title: 'AI Logistics Platform', category: 'Supply Chain', result: '-30% Costs' },
          ].map((item, idx) => (
            <div key={idx} className="glass-dark p-8 rounded-[2.5rem] group hover:border-primary/20 transition-all">
              <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                <img src={`https://picsum.photos/seed/case${idx+2}/800/500`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{item.category}</span>
                <span className="text-sm font-bold opacity-60">{item.result}</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
              <button className="flex items-center gap-2 text-sm font-bold text-primary">
                View Details <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
