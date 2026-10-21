import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import { dor } from '@/content/site';

/** 5. Onde isso dói. Três situações que o dono reconhece de cara. Seção clara. */
export default function Dor() {
  return (
    <Section id="dor" tone="bege">
      <Container>
        <h2 className="max-w-3xl text-[clamp(1.9rem,4vw,3rem)]">
          {dor.titulo} <span className="destaque-vinho">{dor.destaque}</span>
        </h2>

        <ul className="mt-12 max-w-2xl divide-y divide-ink/15 border-y border-ink/15">
          {dor.pontos.map((p) => (
            <li key={p} className="py-5 text-lg leading-snug text-ink">
              {p}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/80">{dor.fecho}</p>
      </Container>
    </Section>
  );
}
