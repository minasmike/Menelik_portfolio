import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';
import { webProjects } from '../../lib/data';
import { GlassCard } from '../ui/GlassCard';
import { useTranslation } from 'react-i18next';

export const WebProjects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-32 bg-transparent web-projects-section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-lime-700 dark:text-lime-400 mb-4 uppercase tracking-[0.2em]">{t('works.title')}</h2>
            <h3 className="text-5xl md:text-7xl font-black text-zinc-950 dark:text-white leading-none">
              {t('works.subtitle_line1')} <br /> <span className="text-zinc-300 dark:text-zinc-800">{t('works.subtitle_line2')}</span>
            </h3>
          </div>
          <p className="text-zinc-500 font-mono text-sm max-w-xs border-l border-zinc-200 dark:border-zinc-800 pl-6">
            {t('works.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group/card"
            >
              <GlassCard className="group transition-transform duration-200 ease-in-out hover:scale-[1.02] shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.link}
                      className="p-3 bg-white text-black rounded-full"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="p-3 bg-zinc-800 text-white rounded-full"
                    >
                      <Terminal size={20} />
                    </motion.a>
                  </div>
                </div>
                <div className="p-8 bg-white dark:bg-transparent">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono border border-zinc-200 dark:border-zinc-800 px-2 py-1 text-zinc-500 dark:text-zinc-400 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-950 dark:text-white mb-2">{project.title}</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <a href={project.link} className="inline-flex items-center text-sm font-bold text-cyan-700 dark:text-cyan-400 hover:text-zinc-950 dark:hover:text-white transition-colors gap-2">
                    {t('works.case_study_cta')} <ExternalLink size={14} />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};