import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../lib/data';
import { GlassCard } from '../ui/GlassCard';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-mono text-lime-700 dark:text-lime-400 mb-4 uppercase tracking-[0.2em]">{t('services.title')}</h2>
          <h3 className="text-5xl font-black text-zinc-950 dark:text-white">{t('services.subtitle')}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              style={{
                animation: `fade-in-slide-up 0.8s ease-out forwards ${index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
              className="w-full"
            >
              <GlassCard className="h-full p-8 group shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-6 group-hover:bg-cyan-700/10 dark:group-hover:bg-cyan-500/20 group-hover:border-cyan-700/50 dark:group-hover:border-cyan-500/50 transition-colors shadow-inner group-hover:shadow-[0_0_15px_rgba(8,145,178,0.2)]">
                  <service.icon className="w-7 h-7 text-zinc-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors" />
                </div>
                <h4 className="text-xl font-black text-zinc-950 dark:text-white mb-4 uppercase tracking-tight">{service.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};