'use client';

import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';

/**
 * Scroll suave inercial (Lenis) — o "peso" premium tipo Apple.
 * Desativado automaticamente quando o usuário prefere menos movimento.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
