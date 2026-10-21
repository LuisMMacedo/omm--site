import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Wrapper de seção com muito espaço vazio.
 * tone: 'escuro' (preto quente), 'superficie' (preto levemente elevado) ou
 * 'bege' (seção clara de texto).
 */
export default function Section({
  id,
  children,
  className,
  tone = 'escuro',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: 'escuro' | 'superficie' | 'bege';
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-16 py-[clamp(5rem,12vh,9rem)]',
        tone === 'superficie' && 'bg-surface',
        tone === 'bege' && 'tema-bege',
        className,
      )}
    >
      {children}
    </section>
  );
}
