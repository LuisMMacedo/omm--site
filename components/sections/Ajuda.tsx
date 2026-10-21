import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import { Button } from '@/components/ui/button';
import { ajuda, ctas } from '@/content/site';

/** 6. Como eu ajudo. Três jeitos de trabalhar junto. */
export default function Ajuda() {
  return (
    <Section id="como-ajudo">
      <Container>
        <h2 className="max-w-xl text-[clamp(1.6rem,3.2vw,2.5rem)]">{ajuda.titulo}</h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {ajuda.itens.map((item, i) => (
            <li key={item.titulo} className="border-t border-[var(--omm-line-strong)] pt-6">
              <span className="text-sm text-faint">{i + 1}</span>
              <h3 className="mt-2 text-xl font-medium">{item.titulo}</h3>
              <p className="mt-3 leading-relaxed text-grade">{item.texto}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-faint">{ajuda.nota}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={ctas.principal.href}>{ctas.principal.label}</Button>
          <Button href={ctas.secundario.href} variant="ghost">
            {ctas.secundario.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
