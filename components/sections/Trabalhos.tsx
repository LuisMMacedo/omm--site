import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import VideoTile from '@/components/primitives/VideoTile';
import { trabalhos } from '@/content/site';
import { cn } from '@/lib/utils';

type Item = (typeof trabalhos.itens)[number];

function Legenda({ cliente, linha }: { cliente: string; linha: string }) {
  return (
    <div className="mt-3">
      <h3 className="text-base font-medium text-pure">{cliente}</h3>
      <p className="mt-1 text-sm leading-snug text-grade">{linha}</p>
    </div>
  );
}

function Card({ item }: { item: Item }) {
  if (item.formato === 'vertical') {
    return (
      <article>
        <VideoTile base={item.video} titulo={item.cliente} />
        <Legenda cliente={item.cliente} linha={item.linha} />
      </article>
    );
  }

  if (item.formato === 'largo') {
    return (
      <article className="col-span-2">
        <VideoTile base={item.video} titulo={item.cliente} formato="largo" />
        <Legenda cliente={item.cliente} linha={item.linha} />
      </article>
    );
  }

  if (item.formato === 'cortes') {
    return (
      <article className="col-span-2 md:col-span-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {item.videos.map((v, i) => (
            <VideoTile key={v} base={v} titulo={`${item.cliente} — corte ${i + 1}`} />
          ))}
        </div>
        <Legenda cliente={item.cliente} linha={item.linha} />
      </article>
    );
  }

  /* texto: trabalhos sem vídeo publicado ainda */
  return (
    <article className="flex flex-col justify-end rounded-xl border border-[var(--omm-line)] p-5">
      <h3 className="text-base font-medium text-pure">{item.cliente}</h3>
      <p className="mt-2 text-sm leading-snug text-grade">{item.linha}</p>
    </article>
  );
}

/** 2. Trabalhos. Vídeos reais, o nome do cliente e uma linha. */
export default function Trabalhos() {
  return (
    <Section id="trabalhos" className="pt-[clamp(2rem,6vh,4rem)]">
      <Container>
        <h2 className="max-w-xl text-[clamp(1.6rem,3.2vw,2.5rem)]">{trabalhos.titulo}</h2>

        <div className={cn('mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6')}>
          {trabalhos.itens.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
