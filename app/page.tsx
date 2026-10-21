import Topo from '@/components/sections/Topo';
import Trabalhos from '@/components/sections/Trabalhos';
import Caso from '@/components/sections/Caso';
import Clientes from '@/components/sections/Clientes';
import Dor from '@/components/sections/Dor';
import Ajuda from '@/components/sections/Ajuda';
import Funciona from '@/components/sections/Funciona';
import Quem from '@/components/sections/Quem';
import Diagnostico from '@/components/sections/Diagnostico';
import Perguntas from '@/components/sections/Perguntas';
import Fecho from '@/components/sections/Fecho';

/**
 * OMM.PRD · composição da home.
 *
 * Ordem: primeiro o que eu faço (topo, trabalhos), depois como (case,
 * clientes, dor, como ajudo, como funciona), depois quem faz, e só então
 * o diagnóstico, as perguntas e o fecho.
 */
export default function Home() {
  return (
    <>
      <Topo />
      <Trabalhos />
      <Caso />
      <Clientes />
      <Dor />
      <Ajuda />
      <Funciona />
      <Quem />
      <Diagnostico />
      <Perguntas />
      <Fecho />
    </>
  );
}
