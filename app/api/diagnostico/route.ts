import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Modelo do diagnóstico. Sonnet 5: equilíbrio de qualidade e custo. */
const MODEL = 'claude-sonnet-5';

export interface DiagnosticoInput {
  nome: string;
  empresa: string;
  whatsapp: string;
  email: string;
  segmento: string;
  objetivo: string;
  situacao: string;
  desafio?: string;
}

const OMM_SYSTEM = `Você é o estrategista da OMM (Organização · Método · Movimento), uma consultoria de posicionamento e comunicação estratégica que utiliza audiovisual como ferramenta — nunca como produto. A estratégia é o produto; o vídeo é consequência.

Princípios da OMM:
- Estratégia vem antes da câmera. Sempre.
- Empresas não crescem porque postam mais, e sim quando comunicam melhor.
- O problema da maioria é posicionamento e direção, não volume de conteúdo.
- Conteúdo passa; percepção permanece.

IMPORTANTE — como enxergar a dor: ninguém sente "dor de percepção". O empresário sente sintomas comerciais, toda semana:
- o cliente pede orçamento e some ("está caro" quase sempre significa valor não percebido, não preço alto);
- perde para um concorrente que entrega pior mas parece mais preparado;
- depende de indicação, porque só aí a confiança chega pronta — sem ela, recomeça do zero e o mês vira montanha-russa;
- precisa explicar do zero, toda vez, por que vale o que cobra.
Comece pelo sintoma que a realidade dele sugere, nomeie-o com naturalidade, e só então mostre a causa: a empresa não é percebida do tamanho que tem.
- Planos: Presença (porta de entrada — autoridade e consistência), Performance (geração de oportunidade) e Premium (parceria estratégica contínua).

Tarefa: a partir dos dados de um lead, escreva um DIAGNÓSTICO ESTRATÉGICO curto e afiado (2 a 3 parágrafos, cerca de 110 palavras no total), personalizado para a realidade dele.
1) Espelhe a situação atual e nomeie o gargalo real (quase sempre falta de direção/posicionamento, não falta de volume).
2) Aponte o caminho OMM adequado ao objetivo declarado (indique o plano quando fizer sentido, com naturalidade).
3) Feche com uma frase que gera vontade de conversar — sem apelo de vendedor.

Tom: consultivo, calmo, seguro, direto. Português do Brasil. Fale com "você". Nunca prometa números ou resultados garantidos. Não use markdown, títulos, listas ou emojis. Apenas texto corrido, elegante.`;

function buildUserPrompt(d: DiagnosticoInput): string {
  return [
    `Nome: ${d.nome}`,
    `Empresa: ${d.empresa}`,
    `Segmento: ${d.segmento}`,
    `Objetivo principal: ${d.objetivo}`,
    `Como está a comunicação/presença hoje: ${d.situacao}`,
    d.desafio ? `Maior desafio de comunicação: ${d.desafio}` : '',
    '',
    'Escreva o diagnóstico estratégico para esta empresa.',
  ]
    .filter(Boolean)
    .join('\n');
}

/** Fallback determinístico na voz da OMM — usado se não houver chave ou a IA falhar. */
function fallbackDiagnostico(d: DiagnosticoInput): string {
  const primeiroNome = d.nome.trim().split(/\s+/)[0] || 'você';
  const foco =
    d.objetivo.toLowerCase().includes('autoridade') || d.situacao.toLowerCase().includes('constância')
      ? 'consistência estratégica'
      : 'direção antes de volume';
  return (
    `${primeiroNome}, pelo que você descreveu, a ${d.empresa} provavelmente entrega mais do que a imagem digital comunica hoje. ` +
    `No segmento de ${d.segmento.toLowerCase()}, o gargalo raramente é falta de conteúdo — é falta de direção. ` +
    `Comunicar no improviso gera presença sem percepção, e é isso que separa quem é lembrado de quem só aparece.\n\n` +
    `Para o objetivo de "${d.objetivo.toLowerCase()}", o caminho é ${foco}: primeiro um diagnóstico profundo, depois um plano que transforma cada ativo em uma peça com função. ` +
    `É exatamente o que o Plano Presença estrutura.\n\n` +
    `O próximo passo é uma conversa. Vamos construir a próxima percepção da sua empresa.`
  );
}

export async function POST(req: Request) {
  let data: DiagnosticoInput;
  try {
    data = (await req.json()) as DiagnosticoInput;
  } catch {
    return NextResponse.json({ error: 'Payload inválido.' }, { status: 400 });
  }

  const required = ['nome', 'empresa', 'whatsapp', 'email', 'segmento', 'objetivo', 'situacao'] as const;
  for (const f of required) {
    if (!data[f] || String(data[f]).trim() === '') {
      return NextResponse.json({ error: `Campo obrigatório ausente: ${f}` }, { status: 400 });
    }
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  // Sem chave → fallback inteligente (site nunca quebra).
  if (!apiKey) {
    return NextResponse.json({ diagnostico: fallbackDiagnostico(data), source: 'fallback' });
  }

  try {
    const client = new Anthropic({ apiKey });
    const msg = await client.messages.create({
      model: MODEL,
      max_tokens: 800,
      system: OMM_SYSTEM,
      messages: [{ role: 'user', content: buildUserPrompt(data) }],
    });
    const text = msg.content
      .map((b) => (b.type === 'text' ? b.text : ''))
      .join('')
      .trim();

    if (!text) throw new Error('Resposta vazia da IA.');
    return NextResponse.json({ diagnostico: text, source: 'ai' });
  } catch (err) {
    console.error('Falha na IA, usando fallback:', err);
    return NextResponse.json({ diagnostico: fallbackDiagnostico(data), source: 'fallback' });
  }
}
