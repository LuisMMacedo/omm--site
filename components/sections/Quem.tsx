import Image from 'next/image';
import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import { quem } from '@/content/site';

/** 8. Quem faz. O rosto e a história — em ticket alto, a pessoa é metade da decisão. */
export default function Quem() {
  return (
    <Section id="quem-faz" tone="superficie">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <figure>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl bg-card">
              <Image
                src={quem.foto}
                alt={quem.fotoAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                quality={80}
                className="object-cover object-[50%_28%]"
              />
            </div>
          </figure>

          <div>
            <h2 className="text-[clamp(1.6rem,3.2vw,2.5rem)]">{quem.nome}</h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-grade">
              {quem.texto.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
