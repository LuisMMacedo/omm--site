'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { EASE_OMM } from '@/ds/motion';

/**
 * Card elegante com glassmorphism extremamente discreto.
 * Hover revela um fio de luz. Nada chamativo.
 */
export default function GlassCard({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <motion.div
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ duration: 0.6, ease: EASE_OMM }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-[var(--omm-line)] bg-white/[0.02] p-8 backdrop-blur-xl transition-colors duration-500 hover:border-[var(--omm-line-strong)]',
        className,
      )}
    >
      {interactive && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
      )}
      {children}
    </motion.div>
  );
}
