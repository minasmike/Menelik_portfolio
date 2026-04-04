import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-700/10 dark:bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-lime-700/10 dark:bg-lime-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Availability Badge */}
          <motion.div variants={item} className="inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-full">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-600 dark:bg-lime-500"></span>
            </div>
            <span className="text-zinc-600 dark:text-zinc-400 font-mono text-xs tracking-widest uppercase">
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-5xl md:text-8xl font-black text-zinc-950 dark:text-white leading-[0.95] tracking-tighter mb-8"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.h2 
            variants={item}
            className="text-2xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-10 leading-tight tracking-tight max-w-3xl"
          >
            {t('hero.tagline')}
          </motion.h2>

          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed"
          >
             {t('hero.description')}
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-700 dark:hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(8,145,178,0.3)] dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all group"
            >
              {t('hero.cta_view')} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white font-bold rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center gap-2 hover:border-cyan-700 dark:hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(8,145,178,0.2)] transition-all group"
            >
              {t('hero.cta_contact')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};