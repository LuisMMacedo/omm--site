import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import { Button } from '@/components/ui/button';
import { ctas, fecho } from '@/content/site';

/** 11. Fecho. Uma pergunta e um botão. */
export default function Fecho() {
  return (
    <Section id="contato">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,4vw,3rem)]">{fecho.titulo}</h2>
          <p className="mt-5 text-lg leading-relaxed text-grade">{fecho.texto}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={ctas.principal.href} size="lg">
              {ctas.principal.label}
            </Button>
            <Button href={ctas.secundario.href} variant="ghost" size="lg">
              {ctas.secundario.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
