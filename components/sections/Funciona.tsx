import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import { funciona } from '@/content/site';

/** 7. Como funciona. Quatro passos, em linguagem de conversa. Seção clara. */
export default function Funciona() {
  return (
    <Section id="como-funciona" tone="bege">
      <Container>
        <h2 className="max-w-xl text-[clamp(1.6rem,3.2vw,2.5rem)]">{funciona.titulo}</h2>

        <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {funciona.passos.map((p, i) => (
            <li key={i} className="border-t border-ink/20 pt-5">
              <span className="text-sm text-ink/50">{i + 1}</span>
              <p className="mt-2 text-lg leading-relaxed text-ink">{p}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
