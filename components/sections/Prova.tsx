'use client';

import { motion } from 'motion/react';
import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import { prova } from '@/content/site';
import { stagger, staggerItem, inView } from '@/ds/motion';

/**
 * Prova. Antes de falar de método, mostrar que o trabalho move percepção.
 * Sem card, sem estrela, sem nota: só nome, segmento e uma frase.
 * O filete vertical separa — não emoldura.
 */
export default function Prova() {
  return (
    <Section id="prova" surface>
      <Container>
        <Reveal>
          <Eyebrow>{prova.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-2xl font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.06]">
            {prova.title}
          </h2>
        </Reveal>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-20 grid gap-12 md:grid-cols-3 md:gap-0"
        >
          {prova.itens.map((item, i) => (
            <motion.li
              key={item.nome}
              variants={staggerItem}
              className={
                i > 0
                  ? 'md:border-l md:border-[var(--omm-line)] md:pl-10 lg:pl-14'
                  : 'md:pr-10 lg:pr-14'
              }
            >
              <div className="space-y-5">
                {item.frases.map((frase) => (
                  <blockquote
                    key={frase}
                    className="font-display text-[clamp(1.15rem,1.7vw,1.4rem)] font-medium leading-snug text-pure"
                  >
                    “{frase}”
                  </blockquote>
                ))}
              </div>
              <figcaption className="mt-7 flex flex-col gap-1">
                <span className="text-sm text-text">{item.nome}</span>
                <span className="text-xs uppercase tracking-eyebrow text-faint">
                  {item.segmento}
                </span>
              </figcaption>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}
