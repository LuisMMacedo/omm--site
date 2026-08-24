'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import { metodo } from '@/content/site';
import { EASE_OMM, inView } from '@/ds/motion';

/** 03 — Método OMM. Timeline premium: linha cresce conforme o scroll. */
export default function Metodo() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 55%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.5 });

  return (
    <Section id="metodo" surface>
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{metodo.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-[clamp(2rem,5vw,3.75rem)] font-medium">
              {metodo.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grade">{metodo.intro}</p>
          </Reveal>
        </div>

        <ol ref={ref} className="relative mt-20 pl-10 md:pl-14">
          {/* trilho */}
          <span
            aria-hidden
            className="absolute left-1 top-0 h-full w-px bg-[var(--omm-line-strong)] md:left-1.5"
          />
          {/* progresso */}
          <motion.span
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute left-1 top-0 h-full w-px origin-top bg-gradient-to-b from-accent to-accent/40 md:left-1.5"
          />

          {metodo.steps.map((step, i) => (
            <motion.li
              key={step.n}
              variants={{
                hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              transition={{ duration: 0.8, ease: EASE_OMM }}
              className="group relative border-t border-[var(--omm-line)] py-9 first:border-t-0"
            >
              {/* nó na linha */}
              <span
                aria-hidden
                className="absolute -left-[calc(2.5rem-1px)] top-[2.9rem] h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-accent bg-void transition-colors duration-500 group-hover:bg-accent md:-left-[calc(3.5rem-1.5px)]"
              />
              <div className="grid gap-3 md:grid-cols-[1fr_1.5fr] md:items-baseline md:gap-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-faint transition-colors duration-500 group-hover:text-accent">
                    {step.n}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-pure md:text-[1.75rem]">
                    {step.title}
                  </h3>
                </div>
                <p className="max-w-lg text-base leading-relaxed text-grade">{step.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
