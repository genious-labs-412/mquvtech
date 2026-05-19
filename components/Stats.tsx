import React from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// --- Smooth Rolling Counter Component ---
const Counter = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "circOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

export default function PremiumStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const STATS = [
    { label: "Global Projects", value: 250, suffix: "+" },
    { label: "Active Clients", value: 120, suffix: "" },
    { label: "Years of Innovation", value: 15, suffix: "y" },
    { label: "Digital Experts", value: 45, suffix: "+" },
    { label: "Uptime Guarantee", value: 99, suffix: "%" },
  ];

  return (
    <section className="py-24 bg-[#030303] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-7xl">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-[2.5rem] bg-zinc-900/20 border border-white/[0.05] hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              {/* 1. Subtle Radial Glow Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10" />

              {/* 2. Main Stat Number */}
              <div className="text-4xl md:text-5xl font-black mb-3 text-white tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* 3. Label: High-end Typography */}
              <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.25em] font-bold leading-tight h-8 flex items-center justify-center lg:justify-start">
                {stat.label}
              </p>

              {/* 4. Geometric Progress Bar: Minimalist Square Logic */}
              <div className="mt-8 relative h-[2px] w-full bg-zinc-800/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : {}}
                  transition={{ delay: (idx * 0.1) + 0.6, duration: 1.5, ease: "anticipate" }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary to-primary/20"
                />
                {/* Subtle light pulse on the bar */}
                <motion.div 
                   animate={{ x: ['-100%', '200%'] }}
                   transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                   className="absolute inset-0 w-20 bg-white/20 blur-md"
                />
              </div>

              {/* Decorative Corner Element (Optional Square Accent) */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-sm bg-zinc-800 group-hover:bg-primary/50 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}