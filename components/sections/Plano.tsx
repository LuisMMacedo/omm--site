'use client';

import { motion } from 'motion/react';
import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import { Button } from '@/components/ui/button';
import { plano } from '@/content/site';
import { stagger, staggerItem, inView } from '@/ds/motion';

/** Plano Presença — o produto, à vista e contratável. */
export default function Plano() {
  return (
    <Section id="plano">
      <Container>
        <Reveal>
          <Eyebrow>{plano.eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 border-b border-[var(--omm-line)] pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1]">
              {plano.title}
            </h2>
            <p className="mt-4 text-lg text-accent">{plano.tagline}</p>
          </div>
          <div className="md:pb-2">
            <Button href={plano.cta.href} variant="primary" size="lg">
              {plano.cta.label}
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {[
            { label: 'Objetivo', text: plano.objetivo },
            { label: 'Para quem é', text: plano.paraQuem },
            { label: 'Como funciona', text: plano.comoFunciona },
          ].map((block, i) => (
            <Reveal key={block.label} delay={i * 0.06}>
              <span className="text-[0.7rem] uppercase tracking-eyebrow text-accent">
                {block.label}
              </span>
              <p className="mt-4 leading-relaxed text-text">{block.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div>
              <h3 className="font-display text-2xl font-medium text-pure">O que está incluso</h3>
              <p className="mt-4 max-w-sm leading-relaxed text-grade">{plano.note}</p>
            </div>
          </Reveal>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid gap-x-10 gap-y-px sm:grid-cols-2"
          >
            {plano.entregaveis.map((item) => (
              <motion.li
                key={item}
                variants={staggerItem}
                className="flex items-start gap-4 border-b border-[var(--omm-line)] py-4"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed text-text">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Reveal>
          <p className="mt-16 max-w-lg text-sm leading-relaxed text-faint">{plano.future}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
