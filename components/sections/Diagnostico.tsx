'use client';

import { motion } from 'motion/react';
import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import Triagem from '@/components/sections/Triagem';
import { diagnostico } from '@/content/site';
import { inView } from '@/ds/motion';

/**
 * O diagnóstico — a assinatura da página.
 * Não fala do método: executa o método no visitante, antes de qualquer venda.
 */
export default function Diagnostico() {
  return (
    <Section id="diagnostico" className="grain overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={inView}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[45vh] w-[45vh] -translate-x-1/2 rounded-full bg-accent/[0.09] blur-[90px]"
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>{diagnostico.eyebrow}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-[clamp(2rem,5.5vw,4rem)] font-medium leading-[1.05]">
              {diagnostico.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-grade">
              {diagnostico.subtitle}
            </p>
          </Reveal>
        </div>

        <Triagem />
      </Container>
    </Section>
  );
}
