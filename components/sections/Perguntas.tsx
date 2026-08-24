import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import { perguntas } from '@/content/site';

/**
 * Perguntas. Mata as objeções reais de quem está prestes a investir.
 * Usa <details>/<summary> nativo: acessível por teclado e sem JavaScript.
 */
export default function Perguntas() {
  return (
    <Section id="perguntas">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>{perguntas.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] lg:sticky lg:top-28">
                {perguntas.title}
              </h2>
            </Reveal>
          </div>

          <div>
            {perguntas.items.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
                <details className="group border-b border-[var(--omm-line)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left marker:content-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">
                    <span className="font-display text-lg font-medium text-pure transition-colors duration-300 group-hover:text-accent md:text-xl">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="relative h-3 w-3 shrink-0 text-accent transition-transform duration-500 [transition-timing-function:var(--ease-omm)] group-open:rotate-45"
                    >
                      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                    </span>
                  </summary>
                  <p className="max-w-xl pb-7 leading-relaxed text-grade">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
