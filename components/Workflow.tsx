import React from 'react';
import { motion } from 'framer-motion';
import { WORKFLOW } from '../constants';

export default function Workflow() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] mb-4 text-blue-500 font-bold">
            Process
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-[#ededed]">
            Our Workflow
          </h3>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block mt-20">
          <div className="grid grid-cols-7 gap-2">
            {WORKFLOW.map((step, idx) => {
              const isBottom = idx % 2 !== 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: isBottom ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col items-center text-center ${isBottom ? "mt-40" : "mb-40"}`}
                >

                  {/* Top text */}
                  {isBottom && (
                    <div className="mb-6 max-w-[180px]">
                      <h4 className="text-white font-bold">{step.title}</h4>
                      <p className="text-gray-500 text-sm">{step.description}</p>
                    </div>
                  )}

                  {/* Circle */}
                  <div className="w-16 h-16 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 font-bold">
                    {idx + 1}
                  </div>

                  {/* Bottom text */}
                  {!isBottom && (
                    <div className="mt-6 max-w-[180px]">
                      <h4 className="text-white font-bold">{step.title}</h4>
                      <p className="text-gray-500 text-sm">{step.description}</p>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col gap-10">
          {WORKFLOW.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-4 items-start"
            >
              <div className="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 text-sm font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-white font-bold">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}