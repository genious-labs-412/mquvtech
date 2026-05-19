import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import TechStack from '../../components/TechStack';
import Portfolio from '../../components/Portfolio';
import Clients from '../../components/Clients';
import Stats from '../../components/Stats';
import Footer from '../../components/Footer';
import { WHY_CHOOSE_US } from '../../constants';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <Navbar />
      <Hero />
      
      {/* Trusted By Section */}
      {/* <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8">
            Trusted by Global Innovators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {['Nmf-News', 'World91', 'Sm-Courier-Cargo'].map(brand => (
              <span key={brand} className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>       we already have this section below so we dont need this here */}    

      <Services />
      <TechStack />
      <Stats />
      <Portfolio />
      <Clients />
      
      {/* Featured Case Study */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-13 lg:px-22">
          <div className="glass-dark rounded-[3rem] p-8 md:p-16 flex flex-col flex-wrap  lg:flex-row items-center gap-16 border-white/10">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                Featured Case Study
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Revolutionizing Digital Banking for <span className="text-primary">Global Finance</span>
              </h2>
              <p className="text-white/60 text-lg">
                We helped a leading financial institution rebuild their entire mobile banking experience, 
                resulting in a 400% increase in user engagement and top-tier security compliance.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-primary font-bold text-2xl mb-1">400%</h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Engagement</p>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-2xl mb-1">99.9%</h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Uptime</p>
                </div>
              </div>
              {/* <Link to="/case-studies" className="btn-primary inline-flex items-center gap-2">
                Read Full Case Study <ArrowRight size={18} />
              </Link> */}
            </div>
            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden border-8 border-white/5 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/banking/1200/800" 
                  alt="Case Study" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto  px-6 md:px-13 lg:px-22">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-primary">MQUV TECH</span></h2>
            <p className="text-white/50">Experience excellence in every line of code.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl glass border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-[100px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Let's Build Something <br />
            <span className="text-gradient">Extraordinary Together</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Our team of experts is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/start-project" className="btn-primary px-12 py-5 text-lg">
              Start Your Project
            </Link>
            <Link href="/contact" className="btn-outline px-12 py-5 text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
