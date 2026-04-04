import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Web Dev',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success(t('contact.success'));
    setFormData({ name: '', email: '', subject: '', projectType: 'Web Dev', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-mono text-cyan-700 dark:text-cyan-400 mb-4 uppercase tracking-[0.2em]">{t('contact.title')}</h2>
          <h3 className="text-5xl font-black text-zinc-950 dark:text-white">{t('contact.subtitle')}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GlassCard className="p-8 md:p-12 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{t('contact.name')}</label>
                    <input 
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-950 dark:text-white focus:outline-none focus:border-cyan-700 dark:focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{t('contact.email')}</label>
                    <input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-950 dark:text-white focus:outline-none focus:border-cyan-700 dark:focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{t('contact.subject')}</label>
                    <input 
                      required
                      type="text"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-950 dark:text-white focus:outline-none focus:border-cyan-700 dark:focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{t('contact.projectType')}</label>
                    <select 
                      required
                      value={formData.projectType}
                      onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-950 dark:text-white focus:outline-none focus:border-cyan-700 dark:focus:border-cyan-500 transition-colors appearance-none"
                    >
                      <option value="Web Dev">Web Dev</option>
                      <option value="Branding">Branding</option>
                      <option value="Consulting">Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{t('contact.message')}</label>
                  <textarea 
                    required
                    rows={6}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-950 dark:text-white focus:outline-none focus:border-cyan-700 dark:focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zinc-950 dark:bg-white text-white dark:text-black font-black py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? t('contact.sending') : t('contact.submit')} <Send size={18} />
                </button>
              </form>
            </GlassCard>
          </div>

          <div className="space-y-6">
            {[ 
              { icon: Phone, label: 'Call', value: '+251 923 365 118' },
              { icon: Mail, label: 'Email', value: 'contact@menelikmichael.com' },
              { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia' }
            ].map((item, i) => (
              <GlassCard key={i} className="p-6 flex items-center gap-6 shadow-md">
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-cyan-700 dark:text-cyan-400">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{item.label}</p>
                  <p className="text-zinc-950 dark:text-white font-bold">{item.value}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};