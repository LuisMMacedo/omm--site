import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import { Button } from '@/components/ui/button';
import { convite } from '@/content/site';

/** Convite. Fechamento curto — o diagnóstico já aconteceu antes. */
export default function Convite() {
  return (
    <section id="convite" className="relative overflow-hidden py-[clamp(6rem,16vh,12rem)]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>{convite.eyebrow}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.04]">
              {convite.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-grade">
              {convite.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button href={convite.button.href} variant="primary" size="lg">
                {convite.button.label}
              </Button>
              <a
                href={convite.alternativa.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted underline-offset-4 transition-colors duration-300 hover:text-pure hover:underline"
              >
                {convite.alternativa.label}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
