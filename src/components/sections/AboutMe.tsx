import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { useTranslation } from 'react-i18next';
import { Briefcase, Cpu, Palette, Layout } from 'lucide-react';

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-cyan-700 dark:text-cyan-400 mb-4 uppercase tracking-[0.2em]">{t('about.title')}</h2>
            <h3 className="text-4xl md:text-6xl font-black text-zinc-950 dark:text-white mb-8 leading-tight">
              {t('about.name')}
            </h3>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-12">
              {t('about.intro')}
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-white dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                  <Cpu className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-950 dark:text-white mb-2 uppercase text-xs tracking-widest font-mono">Engineering-Led Approach</h4>
                  <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed text-sm">
                    {t('about.engineering_p')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-white dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                  <Palette className="w-5 h-5 text-lime-700 dark:text-lime-400" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-950 dark:text-white mb-2 uppercase text-xs tracking-widest font-mono">Design Philosophy</h4>
                  <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed text-sm">
                    {t('about.design_p')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-white dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                  <Layout className="w-5 h-5 text-zinc-700 dark:text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-950 dark:text-white mb-2 uppercase text-xs tracking-widest font-mono">Digital Solutions</h4>
                  <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed text-sm">
                    {t('about.vision_p')}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <h4 className="flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white mb-6 uppercase tracking-widest">
                <Briefcase className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                {t('about.exp_title')}
              </h4>
              <div className="space-y-6">
                <div className="group">
                  <p className="text-xs font-mono text-zinc-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors mb-1 uppercase">Pathfinder International Ethiopia</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('about.exp_pathfinder')}</p>
                </div>
                <div className="group">
                  <p className="text-xs font-mono text-zinc-400 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors mb-1 uppercase">Amare Tiruneh Business Group (ATBG)</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('about.exp_atbg')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-32"
          >
            <GlassCard className="p-2 overflow-hidden aspect-square flex items-center justify-center shadow-xl">
              <div className="w-full h-full bg-white dark:bg-zinc-800/50 rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-700/10 to-lime-700/10 dark:from-cyan-500/20 dark:to-lime-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col items-center justify-center h-full p-12 text-center">
                   <span className="text-6xl md:text-8xl font-black text-zinc-200 dark:text-zinc-900 absolute top-10 left-10 select-none">M.M</span>
                   <div className="relative z-10">
                      <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-4">{t('about.logic')}</p>
                      <p className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white">{t('about.creative')}</p>
                      <p className="text-xs font-mono text-lime-700 dark:text-lime-400 uppercase tracking-widest mt-4">{t('about.precision')}</p>
                   </div>
                </div>
              </div>
            </GlassCard>
            
            {/* Abstract shapes for industrial look */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-zinc-200 dark:border-zinc-800 rounded-full opacity-20 pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-32 h-32 border border-cyan-700/20 rounded-lg rotate-45 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};