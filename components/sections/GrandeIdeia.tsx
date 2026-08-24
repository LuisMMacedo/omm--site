'use client';

import { motion } from 'motion/react';
import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import TextReveal from '@/components/primitives/TextReveal';
import { grandeIdeia } from '@/content/site';
import { stagger, staggerItem, inView } from '@/ds/motion';

/**
 * Onde isso dói.
 * Entra pelo sintoma que o empresário sente toda semana (preço, concorrente,
 * indicação), e só depois nomeia a causa. Ninguém acorda com dor de percepção —
 * acorda com o orçamento que não voltou.
 */
export default function GrandeIdeia() {
  return (
    <Section id="ideia">
      <Container>
        <Reveal>
          <Eyebrow>{grandeIdeia.eyebrow}</Eyebrow>
        </Reveal>

        <TextReveal
          as="h2"
          accentLast
          lines={grandeIdeia.title}
          className="mt-10 max-w-4xl font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1.02]"
        />

        {/* Sintomas — o reconhecimento vem antes do argumento */}
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-3"
        >
          {grandeIdeia.sintomas.map((s) => (
            <motion.li key={s.cena} variants={staggerItem} className="group">
              <span
                aria-hidden
                className="block h-px w-10 bg-accent transition-all duration-700 [transition-timing-function:var(--ease-omm)] group-hover:w-full"
              />
              <p className="mt-6 font-display text-xl font-medium leading-snug text-pure md:text-2xl">
                {s.cena}
              </p>
              <p className="mt-4 leading-relaxed text-grade">{s.leitura}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Diagnóstico — o que os três sintomas têm em comum */}
        <div className="mt-24 grid gap-8 border-t border-[var(--omm-line)] pt-14 md:grid-cols-2 md:gap-14">
          {grandeIdeia.diagnostico.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-text">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* A tese, como conclusão — nunca como abertura */}
        <TextReveal
          as="p"
          accentLast
          lines={grandeIdeia.tese}
          className="mt-24 max-w-4xl font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.08]"
        />
      </Container>
    </Section>
  );
}
