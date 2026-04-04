import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, boxShadow: '0 20px 40px -20px rgba(0, 255, 255, 0.2)' } : {}}
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-300 glassmorphic-card",
        className
      )}
      style={{
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '0.5px solid rgba(255, 255, 255, 0.7)',
        backgroundColor: 'rgba(24, 24, 27, 0.4)' // fallback for glass
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};