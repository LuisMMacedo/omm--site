import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import { caso } from '@/content/site';

function Rotulo({ children }: { children: string }) {
  return <p className="text-xs font-medium uppercase tracking-eyebrow text-ink/50">{children}</p>;
}

/** 3. Um case de perto (Marcos / Metamorpho). Seção clara. */
export default function Caso() {
  return (
    <Section id="case" tone="bege">
      <Container>
        <h2 className="max-w-2xl text-[clamp(1.6rem,3.2vw,2.5rem)]">{caso.titulo}</h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Rotulo>{caso.antes.rotulo}</Rotulo>
            <blockquote className="mt-4 text-xl leading-snug text-ink">
              “{caso.antes.citacao}”
              <footer className="mt-3 text-sm text-ink/60">— {caso.antes.autor}</footer>
            </blockquote>
          </div>

          <div>
            <Rotulo>{caso.fizemos.rotulo}</Rotulo>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{caso.fizemos.texto}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-ink/15 pt-10">
          <Rotulo>{caso.mudou.rotulo}</Rotulo>
          <ul className="mt-6 grid gap-10 md:grid-cols-3">
            {caso.mudou.numeros.map((n) => (
              <li key={n.valor}>
                <span className="block text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-none tracking-tight text-ink">
                  {n.valor}
                </span>
                <span className="mt-3 block text-base leading-snug text-ink/70">{n.texto}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="mt-16">
          <blockquote className="text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-snug">
            <span className="destaque-vinho">“{caso.fecho.citacao}”</span>
          </blockquote>
          <figcaption className="mt-4 text-sm text-ink/60">— {caso.fecho.autor}</figcaption>
        </figure>
      </Container>
    </Section>
  );
}
