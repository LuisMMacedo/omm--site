import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Largura máxima do conteúdo + gutter responsivo. */
export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[var(--container-content)] px-6 md:px-10', className)}>
      {children}
    </div>
  );
}
