import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import { clientes } from '@/content/site';

/** 4. O que os clientes dizem. Três frases, sem estrela nem nota. */
export default function Clientes() {
  return (
    <Section id="clientes">
      <Container>
        <h2 className="max-w-xl text-[clamp(1.6rem,3.2vw,2.5rem)]">{clientes.titulo}</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {clientes.itens.map((c) => (
            <figure key={c.autor} className="flex flex-col justify-between border-t border-[var(--omm-line-strong)] pt-6">
              <blockquote className="text-lg leading-relaxed text-text">“{c.citacao}”</blockquote>
              <figcaption className="mt-6 text-sm text-muted">— {c.autor}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
