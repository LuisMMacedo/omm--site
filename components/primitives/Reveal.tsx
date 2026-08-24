'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { reveal, inView } from '@/ds/motion';

/**
 * Revela ao entrar na viewport: fade + sobe + desfoca. Uma vez só.
 * Degrada para fade simples com prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
