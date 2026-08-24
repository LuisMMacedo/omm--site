'use client';

import { motion } from 'motion/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * CTA da OMM (padrão shadcn/ui com cva) — micro-interação sofisticada.
 * Renderizado como link, com seta que avança no hover.
 */
export const buttonVariants = cva(
  'group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-500 [transition-timing-function:var(--ease-omm)]',
  {
    variants: {
      variant: {
        primary: 'bg-pure text-void hover:bg-accent hover:text-void',
        ghost: 'border border-[var(--omm-line-strong)] text-text hover:border-accent hover:text-pure',
      },
      size: {
        default: 'px-7 py-3.5',
        lg: 'px-9 py-4 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function Button({ children, href, variant, size, className }: ButtonProps) {
  const external = href.startsWith('http');
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.99 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-500 [transition-timing-function:var(--ease-omm)] group-hover:translate-x-1"
      >
        →
      </span>
    </motion.a>
  );
}
