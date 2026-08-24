import Abertura from '@/components/sections/Abertura';
import Prova from '@/components/sections/Prova';
import Depoimentos from '@/components/sections/Depoimentos';
import GrandeIdeia from '@/components/sections/GrandeIdeia';
import Miguel from '@/components/sections/Miguel';
import ComoPensamos from '@/components/sections/ComoPensamos';
import Metodo from '@/components/sections/Metodo';
import Diagnostico from '@/components/sections/Diagnostico';
import Trabalho from '@/components/sections/Trabalho';
import Plano from '@/components/sections/Plano';
import ConstrucaoPublica from '@/components/sections/ConstrucaoPublica';
import Perguntas from '@/components/sections/Perguntas';
import Manifesto from '@/components/sections/Manifesto';
import Convite from '@/components/sections/Convite';

/**
 * OMM · composição da home.
 *
 * A sequência é emocional, não informativa:
 * curiosidade → reconhecimento do problema → confiança na pessoa →
 * respeito pelo raciocínio → prova de método → experiência do método →
 * clareza do que se contrata → honestidade → objeções → convicção → convite.
 */
export default function Home() {
  return (
    <>
      <Abertura />
      <Prova />
      <Depoimentos />
      <GrandeIdeia />
      <Miguel />
      <ComoPensamos />
      <Metodo />
      <Diagnostico />
      <Trabalho />
      <Plano />
      <ConstrucaoPublica />
      <Perguntas />
      <Manifesto />
      <Convite />
    </>
  );
}
