import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../../lib/data';
import { useTranslation } from 'react-i18next';

export const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-transparent border-y border-zinc-200 dark:border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Development Section */}
          <div>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white mb-6 uppercase tracking-tighter">{t('tech.title')}</h2>
            <h3 className="text-sm font-mono text-cyan-700 dark:text-cyan-400 mb-4 uppercase tracking-[0.2em]">{t('tech.subtitle')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md mb-8">
              {t('tech.description')}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {techStack.web.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 flex flex-col items-center justify-center gap-3 transition-colors group"
                >
                  <tech.icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors uppercase tracking-wider">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Design Section */}
          <div>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white mb-6 uppercase tracking-tighter">{t('tech.design_title')}</h2>
            <div className="relative">
               <div className="aspect-square bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/5 dark:from-cyan-500/10 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                     <div className="w-full h-full border border-dashed border-zinc-300 dark:border-zinc-700 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                        <div className="w-2/3 h-2/3 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                          <div className="w-1/2 h-1/2 bg-cyan-700/10 dark:bg-cyan-500/20 blur-2xl rounded-full" />
                        </div>
                     </div>
                  </div>

                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                     <h4 className="text-zinc-950 dark:text-white text-2xl font-black mb-2">{t('tech.design_tools')}</h4>
                     <div className="flex flex-wrap gap-4">
                        {techStack.design.map(tech => (
                          <div key={tech.name} className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm font-mono">
                             <tech.icon size={14} className={tech.color} />
                             {tech.name}
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};