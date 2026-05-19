"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { MapPin, Send, CheckCircle2 } from 'lucide-react';
import {
  contactCards,
  services,
  budgets,
  timelines,
} from '../../constants/contactData';
import { cn } from '../../utils'; // Keeping your utility import
// import Address_location from '../assets/address_location.jpg'


// ---------
export default function Contact() {
  const [formState, setFormState] = useState('idle');

  // ---------
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: 'Digital Transformation',
    budget: '$10k - $25k',
    timeline: '1 - 3 Months',
    scope: '',
    file: null as File | null,

  });
  // ---------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // --------
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setFormState('submitting');

    const multipartData = new FormData();

    multipartData.append('fullName', formData.fullName);
    multipartData.append('company', formData.company);
    multipartData.append('email', formData.email);
    multipartData.append('phone', formData.phone);
    multipartData.append('service', formData.service);
    multipartData.append('budget', formData.budget);
    multipartData.append('timeline', formData.timeline);
    multipartData.append('scope', formData.scope);

    if (formData.file) {
      multipartData.append('file', formData.file);
    }

  const response = await fetch('/api/contact', {
  method: 'POST',
  body: multipartData,
});

const result = await response.json();

console.log(result);

setFormState('success');

    console.log([...multipartData.entries()]);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-[#ededed] font-sans antialiased selection:bg-white selection:text-black">
      <Navbar />

      {/* --- 1. HERO SECTION (Centered with premium typography) --- */}
      <section className="pt-40 md:pt-48 pb-16 px-6 max-w-7xl mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1] mb-8">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#666]">Connect.</span>
          </h1>
          <p className="text-xl text-[#888] leading-relaxed max-w-2xl mx-auto font-light">
            Have a project in mind? We'd love to hear about it. Our team is ready to help you navigate your digital journey and scale your business.
          </p>
        </motion.div>
      </section>

      {/* --- 2. CONTACT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* --- LEFT SIDE: Info & Map --- */}
          <div className="space-y-8">

            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.a
                    key={card.id}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-[#050505] hover:border-white/20 transition-all group cursor-pointer block"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-1">
                        {card.title}
                      </h4>

                      <p className="text-xl font-medium text-[#ededed]">
                        {card.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* FIXED: Made the entire Map block a clickable link, removed broken inner <a> tag */}
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Greater+Noida,+India"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="aspect-video rounded-[2rem] bg-[#050505] overflow-hidden border border-white/10 relative group block cursor-pointer"
            >
              {/* <img 
                src={Address_location.src}
                alt="Map Location" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
               /> */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-bounce shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <MapPin className="text-black" size={20} />
                </div>
              </div>
            </motion.a>
          </div>

          {/* --- RIGHT SIDE: The Form --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="bg-[#050505] rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative overflow-hidden h-full flex flex-col justify-center"
          >
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center space-y-6 py-10"
              >
                <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#ededed]">Inquiry Received</h2>
                <p className="text-[#888] max-w-sm leading-relaxed">
                  Thank you for reaching out. Our engineering team will review your project details and respond within 24 hours.
                </p>

                <button
                  onClick={() => setFormState('idle')}
                  className="mt-4 px-8 py-3 bg-[#111] hover:bg-[#222] border border-white/10 rounded-full text-white transition-colors text-sm font-medium"
                >
                  Submit Another Project
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-[#555] ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-[#111] transition-all text-[#ededed] placeholder-white/20"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-[#555] ml-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-[#111] transition-all text-[#ededed] placeholder-white/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-[#555] ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-[#111] transition-all text-[#ededed] placeholder-white/20"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-[#555] ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-[#111] transition-all text-[#ededed] placeholder-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-widest text-[#555] ml-1">Service Required</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-[#111] transition-all text-[#ededed] appearance-none cursor-pointer"
                    >
                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="bg-[#111] text-white"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                    {/* Custom Select Arrow */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#555]">
                      ▼
                    </div>
                  </div>
                </div>

            

                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-widest text-[#555] ml-1">Project Scope</label>
                  <textarea
                    rows={4}
                    name="scope"
                    value={formData.scope}
                    onChange={handleChange}
                    placeholder="Briefly describe your objectives, requirements, and current challenges..."
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/30 focus:bg-[#111] transition-all text-[#ededed] placeholder-white/20 resize-none"
                  />
                </div>

                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-widest text-[#555] ml-1">
                    Upload File
                  </label>

                  <input
                    type="file"
                    name="file"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        file: e.target.files?.[0] || null,
                      })
                    }
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-[#ededed]"
                  />
                </div>

                <button
                  disabled={formState === 'submitting'}
                  className={`w-full py-4 mt-2 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${formState === 'submitting'
                    ? 'bg-[#333] text-white/50 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-[#ccc]'
                    }`}
                >
                  {formState === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Initialize Project <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}