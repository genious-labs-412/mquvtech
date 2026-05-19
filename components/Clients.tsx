'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const INTERNAL_CLIENTS = [
  { name: 'News NMF', logo: '/assets/logos/logo.png' },
  { name: 'World 91', logo: '/assets/logos/World91_Logo.png' },
  { name: 'SM Courier', logo: '/assets/logos/smlogo.png' },
  { name: 'TRAVI CABS', logo: '/assets/logos/travi_logo.jpg' },
  { name: 'SOLBEST', logo: '/assets/logos/solbest_logo.png' }
];

export default function Clients() {
  const duplicatedClients = [...INTERNAL_CLIENTS, ...INTERNAL_CLIENTS, ...INTERNAL_CLIENTS];

  return (
    <section className="relative px-4 md:px-10 lg:px-28 py-5 md:py-7 bg-[#030303] overflow-hidden font-sans border-y border-white/[0.02]">
      
      <div className="relative z-10 container mx-auto mb-12 md:mb-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-white tracking-tight">
            Our Valuable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Clients</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 font-medium tracking-wide max-w-xl leading-relaxed">
            Trusted by industry leaders worldwide.
          </p>
        </div>
      </div>

      <div className="relative z-10 container mx-auto pointer-events-none md:pointer-events-auto">
        <div className="relative flex overflow-hidden py-4 group">
          
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 lg:w-48 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 lg:w-48 bg-gradient-to-l from-[#030303] via-[#030303]/80 to-transparent z-10" />

          <motion.div
            className="flex items-center whitespace-nowrap gap-2"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {duplicatedClients.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex flex-col items-center justify-center w-[130px] h-[85px] md:w-[180px] md:h-[110px] lg:w-[240px] lg:h-[140px] rounded-2xl backdrop-blur-sm"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={50}
                  className="h-7 md:h-10 lg:h-12 w-auto object-contain mb-2 md:mb-4 opacity-80 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500 mix-blend-luminosity group-hover/card:mix-blend-normal"
                />
                <p className="text-gray-100 group-hover/card:text-gray-200 text-[10px] md:text-xl font-bold tracking-widest uppercase transition-colors duration-500">
                  {client.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}