"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Navbar from "../components/Navbar";
// Go up one level to the root, then into components
import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

// Go up one level to the root, then into constants
import { WHY_CHOOSE_US } from "../constants";
import { ArrowRight } from "lucide-react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Stats />
      <Portfolio />
      <Clients />

      {/* Featured Case Study */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-13 lg:px-22">
          <div className="glass-dark rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 border-white/10">
            
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                Featured Case Study
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Revolutionizing Digital Banking for{" "}
                <span className="text-primary">Global Finance</span>
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
            </div>

            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden border-8 border-white/5 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/banking/1200/800"
                  alt="Case Study"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6 md:px-13 lg:px-22">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">MQUV TECH</span>
            </h2>
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
                <p className="text-white/40 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <h2 className="text-5xl font-bold mb-8">
          Let's Build Something{" "}
          <span className="text-gradient">Extraordinary</span>
        </h2>

        <div className="flex justify-center gap-6">
          <Link href="/start-project" className="btn-primary px-12 py-5">
            Start Your Project
          </Link>

          <Link href="/contact" className="btn-outline px-12 py-5">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}