"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Stats from '../../components/Stats';
import { FaInstagram, FaLinkedin, FaXTwitter} from 'react-icons/fa6';

import { Users, Target, Rocket, Heart, ArrowUpRight } from 'lucide-react';
// import { Users, Target, Rocket, Heart, Linkedin, ArrowUpRight } from 'lucide-react';

// // Assets
// import Bharat_ranjan from '../assets/team_members/Bharat_ranjan.png'
// import IshaRani_sahu from '../assets/team_members/IshaRani_sahu.png'
// import Moni_singh from '../assets/team_members/Moni_singh.png'
// import Deepak_bareth from '../assets/team_members/Deepak_bareth.jpg'
// import Dharmesh_kumar from '../assets/team_members/Dharmesh_kumar.png'

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------
const CORE_VALUES = [
  { id: '1', title: 'Innovation', icon: Rocket, desc: 'Constantly pushing boundaries and exploring new technologies.' },
  { id: '2', title: 'Collaboration', icon: Users, desc: 'Working closely with our clients to achieve shared goals.' },
  { id: '3', title: 'Excellence', icon: Target, desc: 'Committed to delivering the highest quality in every project.' },
  { id: '4', title: 'Integrity', icon: Heart, desc: 'Building trust through transparency and honest communication.' },
];

const TEAM_MEMBERS = [
  {
    id: 2,
    name: 'Moni Singh',
    role: 'Director',
    image: "/assets/team_members/Moni_singh.png",
    linkedIn: "https://www.linkedin.com/in/moni-singh-97b248395/",
    bio: "Experienced Director leading strategic initiatives, driving business growth, and overseeing high-impact technology solutions."
  },
  {
    id: 1,
    name: 'Bharat Ranjan',
    role: 'Senior Engineer',
    image: "/assets/team_members/Bharat_ranjan.png",
    linkedIn: "https://www.linkedin.com/in/codewithbharat/",
    bio: "Lead architect focused on building scalable, high-performance systems and innovative tech solutions."
  },
  {
    id: 3,
    name: 'Isha Rani Sahu',
    role: 'Full-stack Engineer',
    image: "/assets/team_members/IshaRani_sahu.png",
    linkedIn: "https://www.linkedin.com/in/isa-rani-sahu-6098b6317",
    bio: "Creative developer bridging the gap between sophisticated design and robust full-stack logic."
  },
  {
    id: 4,
    name: 'Deepak Bareth',
    role: 'Junior Engineer',
    image: "/assets/team_members/Deepak_bareth.jpg",
    linkedIn: "https://www.linkedin.com/in/deepak-bareth-114982355/",
    bio: "Front-end enthusiast dedicated to crafting clean code and intuitive user interfaces."
  },
  {
    id: 5,
    name: 'Dharmesh Kumar',
    role: 'Junior Engineer',
    image: "/assets/team_members/Dharmesh_kumar.png",
    linkedIn: "https://www.linkedin.com/in/dharmeshkumar1302/",
    bio: "Logic-driven developer focused on component architecture and building seamless web experiences."
  }
];

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-[#ededed] font-sans antialiased selection:bg-white selection:text-black">
      <Navbar />

      {/* --- 1. HERO SECTION --- */}
      <section className="pt-40 md:pt-40 pb-20 px-6 max-w-7xl mx-auto flex justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center text-center"
        >
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-6 block"
          >
            Since 2024
          </motion.span>
          <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1] mb-8">
            We are a team of <br className="hidden md:block" />
            <span className="text-[#888]">Visionaries, Designers, and Engineers.</span>
          </h1>
          <p className="text-xl text-[#888] leading-relaxed max-w-3xl mx-auto font-light">
            MQUV Tech is a creative technology and digital transformation agency specializing in building custom software,
            mobile apps, websites, and automation systems for startups, enterprises, and organizations.
          </p>
        </motion.div>
      </section>

      {/* --- 2. MISSION & VISION (ORIGINAL) --- */}
      <section className="border-t border-white/10 mt-1">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="lg:col-span-4">
            <h3 className="text-5xl text-center pb-20 font-bold tracking-tight">Our Direction</h3>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <Target className="w-6 h-6 text-[#34eba1] mb-6" />
              <h4 className="text-xl font-bold mb-4 text-primary">Our Mission</h4>
              <p className="text-[#888] leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth,
                efficiency, and exceptional user experiences. We believe in the power of
                technology to transform the world.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Rocket className="w-6 h-6 text-[#34eba1] mb-6" />
              <h4 className="text-xl font-bold mb-4 text-primary">Our Vision</h4>
              <p className="text-[#888] leading-relaxed">
                To be the global leader in creative technology, recognized for our
                commitment to innovation, quality, and the success of our clients.
                We aim to set new standards in digital excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10">
        <Stats />
      </div>

      {/* --- 3. CORE VALUES (ORIGINAL) --- */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="lg:col-span-4">
            <h3 className="text-3xl text-center font-bold tracking-tight mb-12">Our Core Values</h3>
            <p className="text-[#888] text-xl mb-5">The principles that guide everything we do.</p>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col border-t border-white/10">
              {CORE_VALUES.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col sm:flex-row gap-6 sm:gap-12 py-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors p-6 -mx-6 rounded-lg"
                >
                  <div className="text-[#555] font-mono text-sm mt-1">{item.id}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <item.icon className="w-5 h-5 text-[#34eba1] group-hover:text-white transition-colors" />
                      <h4 className="text-2xl font-bold tracking-tight text-primary">{item.title}</h4>
                    </div>
                    <p className="text-[#888] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. UPGRADED TEAM SECTION --- */}
      <section className="border-t border-white/10 bg-[#000] relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Meet Our Experts
            </motion.h3>
            <p className="text-[#888] mt-4 text-lg">The talent behind the transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="h-full p-8 rounded-[2.5rem] border border-white/5 bg-[#080808] hover:border-white/20 transition-all duration-500 flex flex-col">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-3xl overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors duration-500">
                        <img
                         src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover  transition-all duration-700"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-[3px] border-[#080808] rounded-full" />
                    </div>

                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-blue-900 text-white/80 hover:text-white hover:bg-blue-500 transition-all duration-300"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-[#ededed] group-hover:text-blue-200 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-blue-500 text-sm font-mono uppercase tracking-widest mt-1 mb-4">
                      {member.role}
                    </p>
                    <p className="text-[#888] text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Footer Interaction
                  <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full group/link"
                    >
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-tighter group-hover/link:text-blue-400 transition-colors">
                        View Profile
                      </span>
                      <ArrowUpRight size={16} className="text-gray-500 group-hover/link:text-blue-400 transition-colors" />
                    </a>
                  </div> */}

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