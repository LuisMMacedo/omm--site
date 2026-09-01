'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Container from '@/components/primitives/Container';
import { Button } from '@/components/ui/button';
import { abertura, brand } from '@/content/site';
import { lineMask, EASE_OMM } from '@/ds/motion';

/** Abertura. A tese e a pessoa primeiro; o vídeo entra como evidência. */
export default function Abertura() {
  /**
   * O player do Vimeo (iframe + player.js + stream) é o item mais pesado
   * da primeira dobra. Adiar o mount por um instante deixa o primeiro
   * frame (fonte + texto) pintar antes de puxar o iframe. `requestIdleCallback`
   * foi trocado por um timeout curto e fixo: em celular com a animação de
   * entrada ocupando a thread principal, "idle" podia nunca chegar e o
   * vídeo ficava esperando bem mais que o pretendido.
   */
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setShowVideo(true), 150);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 lg:pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/4 -z-10 h-[60vh] w-[60vh] rounded-full bg-accent/10 blur-[90px]"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE_OMM, delay: 0.4 }}
              className="mb-8 flex items-center gap-3 text-xs uppercase tracking-eyebrow text-muted"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              {abertura.eyebrow}
            </motion.div>

            <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-pure">
              <motion.span initial="hidden" animate="visible" className="block">
                {abertura.title.map((line, i) => (
                  <span key={i} className="block overflow-hidden pb-[0.06em]">
                    <motion.span
                      variants={lineMask}
                      transition={{ delay: 0.55 + i * 0.12, duration: 1.1, ease: EASE_OMM }}
                      className="block"
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE_OMM, delay: 1.1 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-grade md:text-xl"
            >
              {abertura.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE_OMM, delay: 1.3 }}
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button href={abertura.ctaPrimary.href} variant="primary">
                {abertura.ctaPrimary.label}
              </Button>
              <Button href={abertura.ctaSecondary.href} variant="ghost">
                {abertura.ctaSecondary.label}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: EASE_OMM, delay: 0.8 }}
            className="justify-self-center lg:justify-self-end"
          >
            <div className="relative w-[clamp(240px,72vw,380px)]">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/5 blur-2xl"
              />
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] border border-[var(--omm-line-strong)] bg-card shadow-2xl shadow-black/50">
                {showVideo && (
                  <iframe
                    title="OMM — apresentação"
                    src={`https://player.vimeo.com/video/${brand.vimeoId}?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-xs uppercase tracking-eyebrow text-faint"
        >
          Role
        </motion.span>
      </motion.div>
    </section>
  );
}
