import React from 'react';
import { MessageSquare, Globe, Share2, ArrowUpRight } from 'lucide-react';
import { KnowledgeGrowth } from '../sections/KnowledgeGrowth';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="text-3xl font-black tracking-tighter text-zinc-950 dark:text-white mb-6 uppercase">
              {t('brand.name')}<span className="text-cyan-400">.</span>
            </div>
            <p className="text-zinc-500 max-w-md mb-8 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              {[ 
                { icon: MessageSquare, href: '#' },
                { icon: Globe, href: '#' },
                { icon: Share2, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-zinc-950 dark:text-white font-black text-sm uppercase tracking-[0.2em] mb-8">{t('footer.nav_title')}</h4>
            <ul className="space-y-4">
              {['About', 'Impact', 'Work', 'Services', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center group uppercase text-[10px] tracking-widest font-bold"
                  >
                    {t(`nav.${link.toLowerCase()}`)} <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <KnowledgeGrowth />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-200 dark:border-zinc-900 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-zinc-400 dark:text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
              © {currentYear} {t('brand.name').toUpperCase()}. {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-900/50 rounded-full border border-zinc-200 dark:border-zinc-800">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </div>
              <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                {t('footer.available')}
              </span>
            </div>
          </div>
          <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
            {t('footer.location')} <span className="text-zinc-950 dark:text-white">{t('footer.city')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};