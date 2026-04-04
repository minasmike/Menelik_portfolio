import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../../lib/data';
import { GlassCard } from '../ui/GlassCard';
import { useTranslation } from 'react-i18next';

export const ProcessTimeline = () => {
  const { t } = useTranslation();

  return (
    <section id="process" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-sm font-mono text-cyan-700 dark:text-cyan-400 mb-4 uppercase tracking-[0.2em]">{t('process.title')}</h2>
          <h3 className="text-5xl md:text-7xl font-black text-zinc-950 dark:text-white leading-none">
            {t('process.subtitle_line1')} <br /> <span className="text-zinc-300 dark:text-zinc-800">{t('process.subtitle_line2')}</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Connecting lines for desktop (visual only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-zinc-200 dark:bg-zinc-900 -translate-y-1/2 z-0" />
          <div className="hidden md:block absolute top-0 left-1/2 w-[1px] h-full bg-zinc-200 dark:bg-zinc-900 -translate-x-1/2 z-0" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <GlassCard className="p-10 h-full group shadow-lg">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="relative">
                    <span className="text-8xl font-black text-zinc-200 dark:text-zinc-900 absolute -top-10 -left-6 select-none opacity-50 group-hover:text-cyan-700/20 dark:group-hover:text-cyan-500/20 transition-colors">
                      {step.id}
                    </span>
                    <div className="relative z-10 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 text-cyan-700 dark:text-cyan-400 group-hover:bg-cyan-700 dark:group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:text-black transition-all shadow-[0_0_15px_rgba(8,145,178,0.1)]">
                      <step.icon size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-black text-zinc-950 dark:text-white mb-2 uppercase tracking-tight">
                      <span className="text-cyan-700 dark:text-cyan-400 mr-3">{step.id}</span>
                      {step.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 font-bold text-sm mb-4">{step.subtitle}</p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};