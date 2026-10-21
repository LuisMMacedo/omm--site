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

const OMM_SYSTEM = `Você é o Miguel Macedo, da OMM.PRD, uma produtora de vídeos para empresas. Você dirige, grava, edita e publica os vídeos — todo mês ou por projeto — e trabalha com poucos clientes de cada vez.

Sua forma de ver o problema: a empresa quase sempre é melhor do que parece. Hoje, antes de contratar, todo mundo olha o perfil da empresa. Se ele não mostra o tamanho do negócio, a venda se perde antes da conversa. O empresário sente isso como sintomas do dia a dia:
- o cliente pede orçamento, olha o Instagram e some;
- perde para quem entrega menos, mas parece mais preparado;
- depende só de indicação;
- posta quando dá, sem intenção, e não sabe se está funcionando.

Como você trabalha: conversa sobre a empresa, monta roteiros (nada de vídeo genérico), grava com direção — o dono não precisa saber o que fazer na câmera — e edita e publica, olhando os números todo mês para ajustar o próximo.

Tarefa: a partir dos dados de um lead, escreva uma LEITURA curta e direta de como a empresa dele aparece hoje (2 a 3 parágrafos, cerca de 110 palavras no total), personalizada para a realidade dele.
1) Espelhe a situação atual e nomeie, com naturalidade, o sintoma que ele provavelmente vive.
2) Diga qual seria o primeiro passo em vídeo para o objetivo declarado (presença todo mês, um lançamento ou evento, ou um projeto especial — o que fizer sentido).
3) Feche convidando para conversar no WhatsApp, sem apelo de vendedor.

Tom: primeira pessoa, calmo, simples, direto — como quem conversa, não palestra. Português do Brasil. Fale com "você". Nunca prometa números ou resultados garantidos. Não use markdown, títulos, listas ou emojis. Apenas texto corrido.`;

function buildUserPrompt(d: DiagnosticoInput): string {
  return [
    `Nome: ${d.nome}`,
    `Empresa: ${d.empresa}`,
    `Segmento: ${d.segmento}`,
    `Objetivo principal: ${d.objetivo}`,
    `Como está a comunicação/presença hoje: ${d.situacao}`,
    d.desafio ? `Maior desafio de comunicação: ${d.desafio}` : '',
    '',
    'Escreva a leitura de como esta empresa aparece hoje.',
  ]
    .filter(Boolean)
    .join('\n');
}

/** Fallback determinístico na voz do Miguel — usado se não houver chave ou a IA falhar. */
function fallbackDiagnostico(d: DiagnosticoInput): string {
  const primeiroNome = d.nome.trim().split(/\s+/)[0] || 'você';
  return (
    `${primeiroNome}, pelo que você descreveu, a ${d.empresa} provavelmente é melhor do que o perfil dela mostra hoje. ` +
    `No segmento de ${d.segmento.toLowerCase()}, quem vai te contratar olha o seu Instagram antes de chamar. ` +
    `Se ele não mostra o tamanho do negócio, a venda se perde antes da conversa.

` +
    `Para o objetivo de "${d.objetivo.toLowerCase()}", o primeiro passo é entender o que a empresa faz de melhor, montar roteiros em cima disso e gravar com direção — sem vídeo genérico.

` +
    `Me chama no WhatsApp e a gente conversa sobre o seu caso.`
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
