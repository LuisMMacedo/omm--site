import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import { miguel } from '@/content/site';

/**
 * Confere no build se o retrato existe em `public/`.
 * Evita imagem quebrada quando o arquivo ainda não foi adicionado.
 */
function retratoDisponivel(src: string): boolean {
  if (!src) return false;
  if (/^https?:\/\//.test(src)) return true;
  return fs.existsSync(path.join(process.cwd(), 'public', src.replace(/^\//, '')));
}

/**
 * Quem está por trás. Rosto, história e primeira pessoa.
 * Em ticket alto com operador solo, a pessoa é metade da decisão.
 */
export default function Miguel() {
  const temRetrato = retratoDisponivel(miguel.foto);

  return (
    <Section id="miguel" surface>
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Retrato */}
          <Reveal>
            <figure className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--omm-line)] bg-card">
                {temRetrato ? (
                  <Image
                    src={miguel.foto}
                    alt={miguel.fotoAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    quality={82}
                    className="object-cover object-[50%_28%]"
                  />
                ) : (
                  /* Reserva tipográfica até a foto entrar em `miguel.foto` */
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-white/[0.04] to-transparent">
                    <span className="font-display text-[clamp(3rem,8vw,5rem)] font-medium tracking-tight text-white/[0.07]">
                      MM
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                <span className="font-display text-lg font-medium text-pure">{miguel.nome}</span>
                <span className="text-xs uppercase tracking-eyebrow text-faint">
                  {miguel.papel}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Texto em primeira pessoa */}
          <div>
            <Reveal>
              <Eyebrow>{miguel.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-8 font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-medium leading-[1.15] text-pure">
                {miguel.lead}
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {miguel.body.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="max-w-xl text-lg leading-relaxed text-grade">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <p className="mt-12 border-l border-accent pl-6 font-display text-[clamp(1.35rem,2.4vw,1.9rem)] font-medium leading-snug text-pure">
                {miguel.fecho}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-10 font-display text-2xl text-accent">— {miguel.assinatura}</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
