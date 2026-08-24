'use client';

import { motion } from 'motion/react';
import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import TextReveal from '@/components/primitives/TextReveal';
import { manifesto } from '@/content/site';
import { inView, EASE_OMM } from '@/ds/motion';

/** 09 — Manifesto. Pico emocional. Alinha valores com o cliente certo. */
export default function Manifesto() {
  return (
    <Section className="grain relative overflow-hidden py-[clamp(8rem,20vh,16rem)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[45vh] w-[45vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[90px]"
      />
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* credos */}
          <div className="space-y-2">
            {manifesto.lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, filter: 'blur(6px)', y: 16 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={inView}
                transition={{ duration: 0.9, ease: EASE_OMM, delay: i * 0.12 }}
                className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium leading-tight text-muted"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* virada */}
          <motion.p
            initial={{ opacity: 0, filter: 'blur(6px)', y: 16 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={inView}
            transition={{ duration: 1, ease: EASE_OMM, delay: 0.2 }}
            className="mt-10 font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-tight text-pure"
          >
            {manifesto.turn}
          </motion.p>

          {/* fecho */}
          <TextReveal
            as="p"
            accentLast
            lines={manifesto.close}
            className="mt-16 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.03]"
          />
        </div>
      </Container>
    </Section>
  );
}
