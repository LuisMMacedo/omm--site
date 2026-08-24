'use client';

import { motion } from 'motion/react';
import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import { comoPensamos } from '@/content/site';
import { stagger, staggerItem, inView } from '@/ds/motion';

/**
 * Como eu penso — o raciocínio, não o processo.
 * Convicções não têm ordem, então não levam numeração: só o fio de luz que as separa.
 */
export default function ComoPensamos() {
  return (
    <Section id="pensamento">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{comoPensamos.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-[clamp(2rem,5vw,3.75rem)] font-medium">
              {comoPensamos.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grade">
              {comoPensamos.intro}
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2"
        >
          {comoPensamos.conviccoes.map((c) => (
            <motion.div key={c.title} variants={staggerItem} className="group relative pt-8">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-[var(--omm-line-strong)] transition-colors duration-700 group-hover:bg-accent"
              />
              <h3 className="font-display text-2xl font-medium leading-snug text-pure">
                {c.title}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-grade">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
