import fs from 'node:fs';
import path from 'node:path';
import Container from '@/components/primitives/Container';
import { Button } from '@/components/ui/button';
import { brand, ctas, topo } from '@/content/site';

/** Confere no build se a foto de bastidor foi adicionada em `public/`. */
function existe(src: string): boolean {
  return fs.existsSync(path.join(process.cwd(), 'public', src.replace(/^\//, '')));
}

/**
 * 1. Topo. O que eu faço, dito de forma direta.
 * Foto real de bastidor (public/bastidor.jpg); sem ela, usa a capa de um trabalho.
 */
export default function Topo() {
  const imagem = existe(topo.imagem) ? topo.imagem : topo.imagemReserva;

  return (
    <section id="top" className="relative pt-32 pb-[clamp(4rem,10vh,7rem)] lg:pt-40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-eyebrow text-faint">{topo.marca}</p>
            <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.08]">
              {topo.titulo}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-grade">{topo.subtitulo}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={ctas.principal.href}>{ctas.principal.label}</Button>
              <Button href={topo.cta.href} variant="ghost">
                {topo.cta.label} ↓
              </Button>
            </div>
            <p className="mt-8 text-sm text-faint">{brand.tagline}</p>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <div className="relative w-[clamp(240px,70vw,400px)] overflow-hidden rounded-xl bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagem}
                alt={topo.imagemAlt}
                width={720}
                height={1280}
                fetchPriority="high"
                decoding="async"
                className="aspect-[9/16] h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
