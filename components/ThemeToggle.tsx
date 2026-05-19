import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 glass rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative overflow-hidden group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ y: theme === 'dark' ? 0 : 40 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <Moon size={20} className="text-primary" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ y: theme === 'light' ? -20 : 20 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Sun size={20} className="text-primary" />
      </motion.div>
    </button>
  );
}
