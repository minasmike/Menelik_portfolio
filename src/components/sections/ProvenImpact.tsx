import React from 'react';
import { motion } from 'framer-motion';
import { brands } from '../../lib/data';
import { GlassCard } from '../ui/GlassCard';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ProvenImpact = () => {
  const { t } = useTranslation();

  return (
    <section id="impact" className="py-32 bg-transparent border-y border-zinc-200 dark:border-zinc-900 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-mono text-cyan-700 dark:text-cyan-400 mb-4 uppercase tracking-[0.2em]">{t('impact.title')}</h2>
          <h3 className="text-5xl font-black text-zinc-950 dark:text-white">{t('impact.subtitle')}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-10 h-full group flex flex-col items-center text-center shadow-xl">
                <div className="w-24 h-24 mb-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-4 transition-all duration-300 group-hover:border-cyan-700/50 dark:group-hover:border-cyan-500/50 grayscale group-hover:grayscale-0 group-hover:shadow-[0_0_20px_rgba(8,145,178,0.1)]">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h4 className="text-2xl font-black text-zinc-950 dark:text-white mb-6 uppercase tracking-tight">
                  {brand.name}
                </h4>
                
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
                  {brand.description}
                </p>
                
                <div className="mt-auto">
                   <span className="inline-flex items-center text-xs font-mono text-cyan-700 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('impact.case_study')} <ArrowUpRight size={14} className="ml-1" />
                   </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Background (subtle) */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden opacity-5 pointer-events-none select-none">
        <div className="flex whitespace-nowrap gap-24 animate-marquee-slow">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <span key={index} className="text-9xl font-black text-zinc-300 dark:text-white uppercase">{brand.name}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee-slow 60s linear infinite;
        }
      `}</style>
    </section>
  );
};