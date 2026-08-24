import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import { construcaoPublica } from '@/content/site';

/**
 * Construção pública. Sem case inventado: a transparência é a prova.
 * A estrutura de como cada projeto será contado já demonstra o método.
 */
export default function ConstrucaoPublica() {
  return (
    <Section id="construcao" surface>
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>{construcaoPublica.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05]">
                {construcaoPublica.title}
              </h2>
            </Reveal>
          </div>

          <div>
            <div className="space-y-6">
              {construcaoPublica.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="text-lg leading-relaxed text-grade">{p}</p>
                </Reveal>
              ))}
            </div>

            {/* A estrutura futura do case, mostrada como promessa concreta */}
            <Reveal delay={0.2}>
              <div className="mt-12 rounded-2xl border border-dashed border-[var(--omm-line-strong)] p-8">
                <span className="text-[0.7rem] uppercase tracking-eyebrow text-faint">
                  {construcaoPublica.estrutura.label}
                </span>
                <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
                  {construcaoPublica.estrutura.passos.map((passo, i) => (
                    <li key={passo} className="flex items-center gap-3">
                      <span className="font-display text-base text-pure">{passo}</span>
                      {i < construcaoPublica.estrutura.passos.length - 1 && (
                        <span aria-hidden className="text-accent">
                          →
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-10 font-display text-xl text-muted md:text-2xl">
                {construcaoPublica.convite}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
