'use client';

import { motion } from 'motion/react';
import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import GlassCard from '@/components/primitives/GlassCard';
import { trabalho } from '@/content/site';
import { stagger, staggerItem, inView } from '@/ds/motion';

/** O trabalho — ferramentas, e quando cada uma faz sentido. */
export default function Trabalho() {
  return (
    <Section id="trabalho" surface>
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{trabalho.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-[clamp(2rem,5vw,3.75rem)] font-medium">
              {trabalho.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grade">{trabalho.intro}</p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {trabalho.items.map((item) => (
            <motion.div key={item.name} variants={staggerItem}>
              <GlassCard className="flex h-full flex-col">
                <h3 className="font-display text-2xl font-medium text-pure">{item.name}</h3>
                <div className="mt-6">
                  <span className="text-[0.7rem] uppercase tracking-eyebrow text-accent">
                    Quando faz sentido
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-grade">{item.when}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
