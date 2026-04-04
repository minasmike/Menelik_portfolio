import React from 'react';
import { motion } from 'framer-motion';
import { brands } from '../../lib/data';

export const ExperienceCollaboration = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-center text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-12">
          Trusted By & Collaborated With
        </h2>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Marquee Container */}
        <div className="flex whitespace-nowrap gap-12 sm:gap-24 items-center animate-marquee">
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`} 
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex-shrink-0 flex items-center justify-center p-2 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-zinc-600 font-black text-xl md:text-2xl uppercase tracking-tighter group-hover:text-white transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};