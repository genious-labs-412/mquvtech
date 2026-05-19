'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Cpu, LayoutGrid, Info, Briefcase, Mail } from 'lucide-react';
import { cn } from '../utils';
import Logo from './Logo';

const NAV_ITEMS = [
  { name: 'Home', path: '/', icon: LayoutGrid },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Services', path: '/services', icon: Cpu },
  { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-6xl',
        scrolled ? 'top-4' : 'top-8'
      )}>
        <div className={cn(
          'glass-dark rounded-[10px] md:rounded-full lg:rounded-full px-6 py-2 flex items-center justify-between transition-all duration-500',
          scrolled ? 'shadow-[0_0_30px_rgba(0,0,0,0.5)] border-white/10' : 'border-white/20'
        )}>
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="text-white" size={72} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  'nav-link',
                  pathname === item.path && 'text-primary after:w-full'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/start-project" className="hidden lg:flex btn-primary py-2 px-6 text-sm">
              Start Project
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 glass rounded-[10px] md:rounded-full lg:rounded-full hover:bg-white/10 transition-colors md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] md:hidden p-6 flex flex-col"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={() => setIsOpen(false)} />

            <div className="relative glass-dark rounded-3xl p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <span className="font-display font-bold text-2xl">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-3 glass rounded-full">
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 flex-1">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center gap-4 p-4 rounded-2xl transition-all',
                        pathname === item.path ? 'bg-primary text-black' : 'hover:bg-white/5'
                      )}
                    >
                      <item.icon size={24} />
                      <span className="text-xl font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/start-project"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center mt-8 py-5 text-lg"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
