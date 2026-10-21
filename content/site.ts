/**
 * OMM.PRD · Conteúdo do site
 * Toda a copy vive aqui — edite texto sem tocar em componente.
 *
 * Regra de ordem: primeiro o que eu faço, depois como, depois por que é útil,
 * e só no fim o que é a OMM. Voz: Miguel conversa, em primeira pessoa.
 */

export const brand = {
  name: 'OMM.PRD',
  tagline: 'Vídeos para empresas',
  instagram: '@omacedomiguel',
  instagramUrl: 'https://instagram.com/omacedomiguel',
  /** WhatsApp com código do país (55) — destino do botão principal e dos leads */
  whatsapp: '5514991137404',
  whatsappLabel: '(14) 99113-7404',
  whatsappUrl:
    'https://wa.me/5514991137404?text=Oi%20Miguel%2C%20vi%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto.',
};

export const seo = {
  title: 'OMM.PRD — Vídeos para empresas | Miguel Macedo',
  description:
    'Produtora de vídeos para empresas. Direção, gravação, edição e publicação, todo mês ou por projeto.',
};

export const nav = {
  links: [
    { label: 'Trabalhos', href: '#trabalhos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Quem faz', href: '#quem-faz' },
    { label: 'Perguntas', href: '#perguntas' },
  ],
  cta: { label: 'Falar no WhatsApp', href: brand.whatsappUrl },
};

/** Botões do site inteiro: o principal é sempre o WhatsApp. */
export const ctas = {
  principal: { label: 'Falar no WhatsApp', href: brand.whatsappUrl },
  secundario: { label: 'Fazer o diagnóstico', href: '#diagnostico' },
};

/**
 * 1. Topo
 * Imagem: foto real de bastidor. Salve em `public/bastidor.jpg` — se o arquivo
 * não existir, o site usa a capa de um dos trabalhos (nunca banco de imagem).
 */
export const topo = {
  marca: 'OMM.PRD',
  titulo: 'Vídeos para empresas boas serem vistas como realmente são.',
  subtitulo: 'Eu dirijo, gravo, edito e publico. Todo mês ou por projeto.',
  imagem: '/bastidor.jpg',
  imagemReserva: '/trabalhos/ceramic-pro.jpg',
  imagemAlt: 'Miguel Macedo gravando nos bastidores de um projeto',
  cta: { label: 'Ver trabalhos', href: '#trabalhos' },
};

/**
 * 2. Trabalhos — poucos vídeos, cada um com um papel claro.
 * `formato`:
 *   vertical  → 1 coluna, vídeo 9:16
 *   largo     → 2 colunas, vídeo 16:9
 *   cortes    → 1 coluna, UM vídeo com seletor (1–4) entre os cortes
 *   imagem    → 2 colunas, foto de bastidor (sem vídeo por enquanto)
 *   texto     → linha inteira, só texto + frase do cliente
 * Arquivos em `public/trabalhos/<arquivo>.mp4` + `<arquivo>.jpg` (capa).
 */
export const trabalhos = {
  titulo: 'Empresas que eu filmei.',
  itens: [
    {
      id: 'yakiniku',
      formato: 'vertical' as const,
      cliente: 'S.A. Yakiniku · Bauru',
      linha: 'Vídeos para a inauguração do restaurante.',
      video: 'yakiniku',
    },
    {
      id: 'ceramic-pro',
      formato: 'vertical' as const,
      cliente: 'Ceramic Pro',
      linha: 'O vídeo da marca dentro do evento.',
      video: 'ceramic-pro',
    },
    {
      id: 'zw-performance',
      formato: 'vertical' as const,
      cliente: 'ZW Performance',
      linha: 'O stand e as rodas, no evento.',
      video: 'zw-performance',
    },
    {
      id: 'monclova',
      formato: 'vertical' as const,
      cliente: 'Monclova',
      linha: 'Um depoimento gravado com calma.',
      video: 'monclova',
    },
    {
      id: 'race-experience',
      formato: 'largo' as const,
      cliente: 'Race Experience',
      linha: 'O after movie do evento.',
      video: 'race-experience',
    },
    {
      id: 'metamorpho',
      formato: 'imagem' as const,
      cliente: 'Metamorpho · Marcos Silva',
      linha: 'Conteúdo todo mês, com roteiro, gravação, edição e publicação.',
      imagem: '/trabalhos/metamorpho.jpg',
      imagemAlt: 'Bastidor da gravação na Metamorpho, com softbox e câmeras na sala',
    },
    {
      id: 'gabriel',
      formato: 'cortes' as const,
      cliente: 'Gabriel Silva',
      linha: 'Uma gravação que virou quatro cortes de pregação.',
      videos: ['gabriel-corte-1', 'gabriel-corte-2', 'gabriel-corte-3', 'gabriel-corte-4'],
    },
    {
      id: 'fightschool',
      formato: 'texto' as const,
      cliente: 'FightSchool · Eduardo Mayer',
      linha: 'Vídeos para a academia.',
      citacao: 'Empresários de outro segmento vieram perguntar quem fazia meus vídeos.',
    },
  ],
};

/** 3. Um case de perto */
export const caso = {
  titulo: 'Ele postava quando queria. Em dois meses, isso mudou.',
  antes: {
    rotulo: 'Antes',
    citacao:
      'Era simplesmente uma rede social que eu postava quando eu queria. Não tinha nenhuma intencionalidade.',
    autor: 'Marcos Silva',
  },
  fizemos: {
    rotulo: 'O que a gente fez',
    texto:
      'Diagnóstico do perfil e da empresa. Roteiros a partir das dores dos clientes dele. Gravação todo mês. Leitura dos números e ajuste.',
  },
  mudou: {
    rotulo: 'O que mudou',
    numeros: [
      { valor: '+135%', texto: 'de visitas no perfil no primeiro mês' },
      { valor: '6.751', texto: 'visualizações no segundo mês, 75% a mais que no anterior' },
      { valor: '20%', texto: 'de quem viu ainda não seguia' },
    ],
  },
  fecho: { citacao: 'Fica da água pro vinho.', autor: 'Marcos Silva, Metamorpho' },
};

/** 4. O que os clientes dizem */
export const clientes = {
  titulo: 'O que os clientes dizem.',
  itens: [
    {
      citacao:
        'Depois dos vídeos, senti que meu trabalho começou a ser enxergado de uma forma mais séria e profissional. Empresários de outro segmento vieram perguntar quem fazia meus vídeos.',
      autor: 'Eduardo Mayer, FightSchool',
    },
    {
      citacao: 'É o melhor trampo de edição que eu já vi. O investimento valeu super a pena.',
      autor: 'Gabriel Silva',
    },
    {
      citacao: 'A maior diferença é ter essa clareza do processo e o planejamento.',
      autor: 'Gabriela',
    },
  ],
};

/** 5. Onde isso dói */
export const dor = {
  titulo: 'Sua empresa é boa.',
  destaque: 'Mas parece?',
  pontos: [
    'O cliente pede orçamento, olha seu Instagram e some.',
    'Você perde para quem entrega menos, mas parece mais preparado.',
    'Seu negócio depende só de indicação.',
  ],
  fecho:
    'Hoje, antes de te contratar, todo mundo olha o seu perfil. Se ele não mostra o tamanho da sua empresa, você perde a venda antes da conversa.',
};

/** 6. Como eu ajudo */
export const ajuda = {
  titulo: 'Três jeitos de trabalhar junto.',
  itens: [
    {
      titulo: 'Presença todo mês',
      texto:
        'Eu gravo, edito e publico para a sua empresa, todo mês. Sem você parar a operação para pensar no que postar.',
    },
    {
      titulo: 'Lançamentos e eventos',
      texto: 'Inauguração, evento, produto novo. Vídeos para ninguém perder esse momento.',
    },
    {
      titulo: 'Projetos especiais',
      texto: 'Documentário, vídeo institucional, uma história que não cabe num reel.',
    },
  ],
  nota: 'Fotografia entra junto quando o projeto pede.',
};

/** 7. Como funciona */
export const funciona = {
  titulo: 'Como funciona.',
  passos: [
    'A gente conversa sobre a sua empresa: o que ela faz de melhor, para quem e por que alguém deveria confiar nela.',
    'Eu monto os roteiros. Nada de vídeo genérico. Cada empresa tem a sua história.',
    'Eu gravo com você, com direção. Você não precisa saber o que fazer na frente da câmera.',
    'Edito e publico. E todo mês olho os números para ajustar o próximo.',
  ],
};

/** 8. Quem faz */
export const quem = {
  nome: 'Miguel Macedo',
  foto: '/miguel.jpg',
  fotoAlt: 'Miguel Macedo, diretor e editor da OMM.PRD',
  texto: [
    'Comecei no YouTube com 13 anos. Já fui motoboy, já trabalhei de CLT, já gravei em troca de marmita. Juntei dinheiro, comprei minha primeira câmera de verdade e voltei de ônibus com ela no colo.',
    'Hoje eu produzo vídeos para empresas. Trabalho com poucos clientes de cada vez, para cuidar de cada um de perto.',
    'Uso a criatividade que Deus me deu para mostrar o melhor de quem faz bem feito.',
  ],
};

/** 9. Diagnóstico (formulário, secundário) */
export const diagnostico = {
  titulo: 'Não sabe por onde começar?',
  subtitulo:
    'Responda 4 perguntas e eu te mando uma leitura de como a sua empresa aparece hoje.',
};

/** 10. Perguntas */
export const perguntas = {
  titulo: 'Perguntas.',
  itens: [
    {
      q: 'Eu preciso aparecer na câmera?',
      a: 'Não. Dá para mostrar a empresa, a equipe, o processo e os clientes. Mas quando o dono aparece, a confiança vem mais rápido.',
    },
    {
      q: 'Em quanto tempo vejo resultado?',
      a: 'O perfil começa a passar outra imagem já no primeiro mês. Clientes chegando é construção: costuma vir a partir do terceiro mês.',
    },
    {
      q: 'Por que o contrato é de 6 meses?',
      a: 'Porque presença se constrói com constância. Depois do terceiro mês, você pode sair sem multa, com 15 dias de aviso.',
    },
    {
      q: 'Quanto custa?',
      a: 'Depende do que a sua empresa precisa. A gente conversa primeiro e eu te passo o valor certo, sem pacote pronto.',
    },
    {
      q: 'Você atende fora de Bauru?',
      a: 'Sim. Eu vou até onde a empresa estiver.',
    },
    {
      q: 'Já tenho alguém que filma. Serve pra mim?',
      a: 'Serve. Eu entro com a direção, o roteiro e o planejamento, e posso trabalhar junto com quem já grava.',
    },
  ],
};

/** 11. Fecho */
export const fecho = {
  titulo: 'Qual é o objetivo do seu projeto?',
  texto: 'Me conta no WhatsApp. Eu respondo pessoalmente.',
};

export const footer = {
  linha: 'OMM.PRD · Vídeos para empresas',
};

/** Triagem em 2 passos → diagnóstico com IA → envio pro WhatsApp. */
export const triagem = {
  steps: [
    { n: 1, label: 'Sua comunicação hoje' },
    { n: 2, label: 'Quem é você' },
  ],
  /**
   * Passo 1 — contexto do negócio primeiro: perguntas rápidas, de baixo
   * compromisso, que engajam antes de pedir dado de contato. O pedido de
   * contato (passo 2) vem só quando a pessoa já investiu esforço e está
   * a um clique da recompensa (o diagnóstico).
   */
  passoContexto: {
    title: 'Primeiro, sua comunicação hoje',
    subtitle: 'Seja direto. É isso que alimenta a leitura.',
    segmento: {
      label: 'Segmento do negócio',
      placeholder: 'Ex.: arquitetura, agro, saúde, moda…',
    },
    objetivo: {
      label: 'Seu principal objetivo agora',
      options: [
        'Construir autoridade',
        'Atrair mais clientes',
        'Lançar um produto ou serviço',
        'Mudar como me percebem',
      ],
    },
    situacao: {
      label: 'Como está sua presença digital hoje',
      options: [
        'Quase não apareço',
        'Apareço, mas sem constância',
        'Apareço, mas sem retorno',
        'Vou bem, quero crescer',
      ],
    },
    desafio: {
      label: 'Maior incômodo hoje (opcional)',
      placeholder: 'Em uma frase, o que mais te incomoda?',
    },
  },
  passoContato: {
    title: 'Sua leitura está pronta para ser gerada',
    subtitle: 'Só preciso saber quem é você, para falar da forma certa.',
    fields: {
      nome: { label: 'Seu nome', placeholder: 'Nome completo' },
      empresa: { label: 'Empresa', placeholder: 'Nome do seu negócio' },
      whatsapp: { label: 'WhatsApp', placeholder: '(14) 99999-9999' },
      email: { label: 'E-mail', placeholder: 'voce@empresa.com.br' },
    },
  },
  cta: {
    gerar: 'Receber meu diagnóstico',
    voltar: 'Voltar',
    proximo: 'Continuar',
    gerando: 'Lendo sua comunicação…',
    enviar: 'Enviar para o Miguel',
    refazer: 'Refazer',
  },
  resultado: {
    eyebrow: 'Sua leitura',
    heading: 'O que eu enxergo na sua comunicação',
    note: 'Ao enviar, suas respostas e esta leitura vão direto para o WhatsApp do Miguel — e a conversa começa daí.',
  },
  erro: 'Não consegui gerar agora. Tente de novo em instantes.',
};
