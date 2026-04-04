import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../lib/data';
import { GlassCard } from '../ui/GlassCard';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ClientTestimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="text-sm font-mono text-lime-700 dark:text-lime-400 mb-4 uppercase tracking-[0.2em]">{t('testimonials.title')}</h2>
            <h3 className="text-5xl md:text-7xl font-black text-zinc-950 dark:text-white leading-none">
              {t('testimonials.subtitle_line1')} <br /> <span className="text-zinc-300 dark:text-zinc-800">{t('testimonials.subtitle_line2')}</span>
            </h3>
          </div>
          <p className="text-zinc-500 max-w-sm text-right font-mono text-xs uppercase leading-loose">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t_data, index) => (
            <motion.div
              key={t_data.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-12 relative overflow-hidden group shadow-xl">
                <Quote className="absolute top-8 right-12 w-16 h-16 text-zinc-200 dark:text-zinc-800 opacity-20 group-hover:text-lime-700/20 dark:group-hover:text-lime-500/20 transition-colors" />
                
                <blockquote className="relative z-10 mb-10">
                  <p className="text-xl md:text-2xl text-zinc-950 dark:text-white italic font-light leading-relaxed">
                    "{t_data.quote}"
                  </p>
                </blockquote>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 p-1 group-hover:border-lime-700/50 dark:group-hover:border-lime-500/50 transition-colors">
                    <img src={t_data.image} alt={t_data.author} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-zinc-950 dark:text-white font-black uppercase tracking-tight">{t_data.author}</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-mono uppercase tracking-widest">{t_data.role}</p>
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