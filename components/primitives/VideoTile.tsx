'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Vídeo sob demanda: mostra só a capa (jpg leve) e baixa o mp4 apenas
 * quando a pessoa toca. Nada de iframe nem autoplay pesado — a página abre
 * rápido no celular e o vídeo carrega quando alguém realmente quer ver.
 *
 * Arquivos: public/trabalhos/<base>.mp4 e <base>.jpg
 */
export default function VideoTile({
  base,
  titulo,
  formato = 'vertical',
  className,
}: {
  base: string;
  titulo: string;
  formato?: 'vertical' | 'largo';
  className?: string;
}) {
  const [tocando, setTocando] = useState(false);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-card',
        formato === 'vertical' ? 'aspect-[9/16]' : 'aspect-video',
        className,
      )}
    >
      {tocando ? (
        <video
          src={`/trabalhos/${base}.mp4`}
          poster={`/trabalhos/${base}.jpg`}
          controls
          autoPlay
          playsInline
          preload="auto"
          aria-label={titulo}
          className="absolute inset-0 h-full w-full bg-black object-cover"
          onPlay={(e) => {
            // um vídeo por vez
            document.querySelectorAll('video').forEach((v) => {
              if (v !== e.currentTarget) v.pause();
            });
          }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setTocando(true)}
          aria-label={`Assistir: ${titulo}`}
          className="group absolute inset-0 block h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/trabalhos/${base}.jpg`}
            alt={titulo}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
          <span className="absolute inset-0 bg-black/10" aria-hidden />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bege text-ink shadow-lg transition-transform duration-300 group-hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
