import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Wrapper de seção com o respiro vertical padrão do site.
 * Muito espaço negativo — clamp(6rem, 14vh, 12rem).
 */
export default function Section({
  id,
  children,
  className,
  surface = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  surface?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-24 py-[clamp(6rem,14vh,12rem)]',
        surface && 'bg-surface',
        className,
      )}
    >
      {children}
    </section>
  );
}
