import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import { perguntas } from '@/content/site';

/** 10. Perguntas. Acordeão nativo (<details>) — zero JavaScript. Seção clara. */
export default function Perguntas() {
  return (
    <Section id="perguntas" tone="bege">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <h2 className="text-[clamp(1.6rem,3.2vw,2.5rem)] lg:sticky lg:top-28 lg:self-start">
            {perguntas.titulo}
          </h2>

          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {perguntas.itens.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="shrink-0 text-2xl font-light leading-none text-ink/50 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-xl leading-relaxed text-ink/75">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
