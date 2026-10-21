import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import VideoTile from '@/components/primitives/VideoTile';
import CortesTile from '@/components/primitives/CortesTile';
import { trabalhos } from '@/content/site';

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
  switch (item.formato) {
    case 'vertical':
      return (
        <article>
          <VideoTile base={item.video} titulo={item.cliente} />
          <Legenda cliente={item.cliente} linha={item.linha} />
        </article>
      );

    case 'largo':
      return (
        <article className="col-span-2">
          <VideoTile base={item.video} titulo={item.cliente} formato="largo" />
          <Legenda cliente={item.cliente} linha={item.linha} />
        </article>
      );

    case 'imagem':
      return (
        <article className="col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.imagem}
              alt={item.imagemAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <Legenda cliente={item.cliente} linha={item.linha} />
        </article>
      );

    case 'cortes':
      return (
        <article>
          <CortesTile bases={item.videos} titulo={item.cliente} />
          <Legenda cliente={item.cliente} linha={item.linha} />
        </article>
      );

    case 'texto':
      return (
        <article className="flex flex-col justify-between rounded-xl border border-[var(--omm-line)] p-5 md:col-span-3 md:p-8">
          <div>
            <h3 className="text-base font-medium text-pure">{item.cliente}</h3>
            <p className="mt-1 text-sm leading-snug text-grade">{item.linha}</p>
          </div>
          <p className="mt-8 text-base leading-snug text-text md:text-xl">“{item.citacao}”</p>
        </article>
      );
  }
}

/**
 * 2. Trabalhos. Poucos vídeos, cada um com um papel claro:
 * 4 verticais de evento/depoimento, o after movie, o bastidor da Metamorpho,
 * os cortes do Gabriel num único player e a FightSchool em texto.
 */
export default function Trabalhos() {
  return (
    <Section id="trabalhos" className="pt-[clamp(2rem,6vh,4rem)]">
      <Container>
        <h2 className="max-w-xl text-[clamp(1.6rem,3.2vw,2.5rem)]">{trabalhos.titulo}</h2>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {trabalhos.itens.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
