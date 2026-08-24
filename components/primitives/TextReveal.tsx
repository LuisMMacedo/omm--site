'use client';

import { motion } from 'motion/react';
import { lineMask, inView } from '@/ds/motion';
import { cn } from '@/lib/utils';

/**
 * Mask reveal linha a linha — o gesto de título "Apple".
 * Cada linha desliza de baixo para cima dentro de uma máscara.
 */
export default function TextReveal({
  lines,
  className,
  accentLast = false,
  as: Tag = 'h2',
}: {
  lines: string[];
  className?: string;
  accentLast?: boolean;
  as?: 'h1' | 'h2' | 'p';
}) {
  return (
    <Tag className={className}>
      <motion.span initial="hidden" whileInView="visible" viewport={inView} className="block">
        {lines.map((line, i) => {
          const isAccent = accentLast && i === lines.length - 1;
          return (
            <span key={i} className={cn('block overflow-hidden pb-[0.08em]')}>
              <motion.span
                variants={lineMask}
                transition={{ delay: i * 0.09 }}
                className="block"
                style={isAccent ? { color: 'var(--color-accent)' } : undefined}
              >
                {line}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
