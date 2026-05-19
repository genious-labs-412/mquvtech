"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
const POSTS = [
  {
    id: 1,
    title: 'The Future of AI in Mobile App Development',
    excerpt: 'How artificial intelligence is reshaping the way we build and interact with mobile applications.',
    category: 'Technology',
    author: 'Alex Rivera',
    date: 'Oct 24, 2023',
    image: 'https://picsum.photos/seed/ai/800/500'
  },
  {
    id: 2,
    title: 'Building Scalable Architectures for Modern SaaS',
    excerpt: 'Best practices for designing cloud-native applications that grow with your business.',
    category: 'Engineering',
    author: 'Sarah Chen',
    date: 'Oct 18, 2023',
    image: 'https://picsum.photos/seed/saas-tech/800/500'
  },
  {
    id: 3,
    title: 'The Importance of UX in Enterprise Software',
    excerpt: 'Why user experience is the key to productivity and adoption in business tools.',
    category: 'Design',
    author: 'Marcus Thorne',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/ux/800/500'
  }
];

export default function Blog() {
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
      
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Insights & <span className="text-primary">Innovation</span>
          </motion.h1>
          <p className="text-xl opacity-60 leading-relaxed">
            Stay updated with the latest trends in technology, design, and business transformation.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-dark rounded-[2.5rem] overflow-hidden hover:border-primary/20 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6 text-[10px] uppercase tracking-widest opacity-40">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Tag size={12} /> {post.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="opacity-50 text-sm mb-8 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full glass overflow-hidden">
                      <img src={`https://picsum.photos/seed/author${idx}/50/50`} alt={post.author} referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-xs font-medium opacity-60">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-primary hover:translate-x-1 transition-transform">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
