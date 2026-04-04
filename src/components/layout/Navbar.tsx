import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#09090b'; // zinc-950
      root.style.color = '#ffffff';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#F4F4F5';
      root.style.color = '#09090b';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.impact'), href: '#impact' },
    { name: t('nav.work'), href: '#projects' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleButtonStyle = "p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 ease-in-out dark:bg-zinc-900 dark:border-zinc-800 light:bg-zinc-100 light:border-zinc-300";

  return (
    <>
      <style>{`
        :root, html {
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
          scroll-behavior: smooth;
        }
        body {
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
        }
        .dark body {
          background-color: #09090b;
          color: white;
        }
        .light body {
          background-color: #F4F4F5;
          color: #09090b;
        }
        .dark button:hover, .dark [role="button"]:hover {
          filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.4));
          transition: filter 0.3s ease;
        }
      `}</style>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-zinc-100/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold tracking-tighter cursor-pointer uppercase font-sans"
            onClick={scrollToTop}
          >
            <span className="text-zinc-950 dark:text-white">{t('brand.name')}</span>
            <span className="text-cyan-400">.</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6 mr-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm font-medium text-zinc-500 hover:text-cyan-400 dark:text-zinc-400 dark:hover:text-white transition-colors relative group uppercase tracking-widest text-[10px]"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-3 border-l border-zinc-200 dark:border-zinc-800 pl-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={toggleButtonStyle}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={toggleButtonStyle}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-950 dark:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold text-zinc-500 dark:text-zinc-400 hover:text-cyan-400 dark:hover:text-white transition-colors uppercase"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] p-4 bg-cyan-500 text-black rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:bg-cyan-400 transition-all active:scale-95 group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};