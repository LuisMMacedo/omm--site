import type { Variants, Transition } from 'motion/react';

/**
 * OMM · Motion presets
 * Animações lentas, ease expo-out, fade + blur + translate.
 * Referência: Apple. Nada rápido, nada chamativo.
 */

export const EASE_OMM = [0.22, 1, 0.36, 1] as const;

export const transitionSlow: Transition = { duration: 1, ease: EASE_OMM };
export const transitionMedium: Transition = { duration: 0.7, ease: EASE_OMM };

/** Reveal padrão: fade + sobe + desfoca */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: transitionSlow },
};

/** Container com cascata suave dos filhos */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: transitionMedium },
};

/** Mask reveal para linhas de título */
export const lineMask: Variants = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: 1.1, ease: EASE_OMM } },
};

/** Config padrão de whileInView */
export const inView = { once: true, margin: '0px 0px -12% 0px' } as const;
