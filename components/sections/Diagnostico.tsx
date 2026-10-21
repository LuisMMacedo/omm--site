import Section from '@/components/primitives/Section';
import Container from '@/components/primitives/Container';
import Triagem from '@/components/sections/Triagem';
import { diagnostico } from '@/content/site';

/**
 * 9. Diagnóstico — formulário secundário para quem ainda não sabe por onde começar.
 * (O formulário em si, com a IA, é o Triagem — mantido como já existia.)
 */
export default function Diagnostico() {
  return (
    <Section id="diagnostico">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.6rem,3.2vw,2.5rem)]">{diagnostico.titulo}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-grade">
            {diagnostico.subtitulo}
          </p>
        </div>

        <Triagem />
      </Container>
    </Section>
  );
}
