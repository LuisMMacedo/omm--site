import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Eyebrow from '@/components/primitives/Eyebrow';
import Reveal from '@/components/primitives/Reveal';
import { depoimentos } from '@/content/site';

/**
 * Depoimentos em mídia — vídeo e áudio.
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ COMO INTEGRAR (dois passos, sem tocar neste arquivo):           │
 * │                                                                 │
 * │  1. Coloque o arquivo em `public/depoimentos/`                  │
 * │       <!-- Vídeo Marcos -->    public/depoimentos/marcos.mp4    │
 * │       <!-- Áudio Gabriela -->  public/depoimentos/gabriela.mp3  │
 * │                                                                 │
 * │  2. Em `content/site.ts` → `depoimentos.itens`, preencha:       │
 * │       src: '/depoimentos/marcos.mp4'                            │
 * │       (ou, para Vimeo, use `vimeoId: '123456789'`)              │
 * └─────────────────────────────────────────────────────────────────┘
 *
 * Enquanto não houver mídia, a seção inteira não é renderizada —
 * moldura vazia comunica ausência, e ausência derruba confiança.
 */
export default function Depoimentos() {
  const disponiveis = depoimentos.itens.filter((d) => d.src || d.vimeoId);
  if (disponiveis.length === 0) return null;

  return (
    <Section id="depoimentos">
      <Container>
        <Reveal>
          <Eyebrow>{depoimentos.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-2xl font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.06]">
            {depoimentos.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {disponiveis.map((d) => (
            <Reveal key={d.nome}>
              <figure className="overflow-hidden rounded-2xl border border-[var(--omm-line)] bg-white/[0.02] p-6 md:p-8">
                {d.tipo === 'video' ? (
                  /* ——— Vídeo Marcos ——— */
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-card">
                    {d.vimeoId ? (
                      <iframe
                        title={`Depoimento de ${d.nome}`}
                        src={`https://player.vimeo.com/video/${d.vimeoId}?dnt=1`}
                        allow="fullscreen; picture-in-picture"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full"
                      />
                    ) : (
                      <video
                        src={d.src}
                        controls
                        preload="metadata"
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                  </div>
                ) : (
                  /* ——— Áudio Gabriela ——— */
                  <div className="rounded-xl bg-card px-5 py-6">
                    <audio src={d.src} controls preload="metadata" className="w-full">
                      Seu navegador não reproduz áudio.
                    </audio>
                  </div>
                )}

                <figcaption className="mt-6">
                  {d.legenda && (
                    <p className="mb-4 leading-relaxed text-grade">“{d.legenda}”</p>
                  )}
                  <span className="text-sm text-text">{d.nome}</span>
                  {d.segmento && (
                    <span className="ml-3 text-xs uppercase tracking-eyebrow text-faint">
                      {d.segmento}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
