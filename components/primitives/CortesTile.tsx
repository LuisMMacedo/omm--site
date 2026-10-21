'use client';

import { useState } from 'react';
import VideoTile from '@/components/primitives/VideoTile';
import { cn } from '@/lib/utils';

/**
 * Uma gravação, vários cortes: aparece como UM vídeo só, com um seletor
 * (1–4) embaixo. Trocar o corte volta para a capa do próximo.
 */
export default function CortesTile({ bases, titulo }: { bases: string[]; titulo: string }) {
  const [atual, setAtual] = useState(0);

  return (
    <div>
      <VideoTile key={bases[atual]} base={bases[atual]} titulo={`${titulo} — corte ${atual + 1}`} />
      <div className="mt-3 flex items-center gap-2" role="group" aria-label="Cortes">
        <span className="mr-1 text-xs text-faint">Corte</span>
        {bases.map((b, i) => (
          <button
            key={b}
            type="button"
            onClick={() => setAtual(i)}
            aria-label={`Corte ${i + 1}`}
            aria-pressed={i === atual}
            className={cn(
              'h-7 w-7 rounded-full border text-xs transition-colors duration-300',
              i === atual
                ? 'border-bege bg-bege text-ink'
                : 'border-[var(--omm-line-strong)] text-muted hover:border-bege hover:text-pure',
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
