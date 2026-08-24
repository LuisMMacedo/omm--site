/**
 * OMM · Conteúdo do site
 * Toda a copy vive aqui — edite texto sem tocar em componente.
 *
 * Voz: Miguel conversa, não palestra. Pensa em voz alta, observa padrões,
 * constrói raciocínio. Nunca vendedor, nunca guru, nunca agência.
 *
 * Vocabulário preferido: clareza, percepção, direção, decisão, movimento,
 * construção, consistência, processo, identidade.
 * Vocabulário proibido: criatividade, soluções, inovação, conteúdo estratégico,
 * marketing digital, resultado incrível.
 */

export const brand = {
  name: 'OMM',
  full: 'Organização · Método · Movimento',
  instagram: '@omacedomiguel',
  instagramUrl: 'https://instagram.com/omacedomiguel',
  region: 'Piratininga · Bauru · Brasil',
  /** WhatsApp da OMM com código do país (55) — destino dos leads da triagem */
  whatsapp: '5514991137404',
  /** ID do vídeo vertical do Vimeo usado na abertura */
  vimeoId: '1176647278',
};

export const nav = {
  links: [
    { label: 'Miguel', href: '#miguel' },
    { label: 'Método', href: '#metodo' },
    { label: 'Trabalho', href: '#trabalho' },
    { label: 'Perguntas', href: '#perguntas' },
  ],
  cta: { label: 'Fazer o diagnóstico', href: '#diagnostico' },
};

export const abertura = {
  eyebrow: 'Miguel Macedo · OMM',
  title: ['Organização.', 'Método.', 'Movimento.'],
  subtitle:
    'Hoje o Instagram é o cartão de visita. Sua empresa é grande na vida real e pequena na tela.',
  ctaPrimary: { label: 'Fazer o diagnóstico', href: '#diagnostico' },
  ctaSecondary: { label: 'Ver como eu penso', href: '#ideia' },
};

/**
 * Prova — vem logo depois da abertura, antes de qualquer método.
 * Sem estrelas, sem nota, sem card de marketplace: nome, segmento e uma frase.
 * O que essas frases têm em comum é percepção mudando — não elogio genérico.
 */
export const prova = {
  eyebrow: 'Prova',
  title: 'A percepção muda antes do número.',
  itens: [
    {
      nome: 'Fight School',
      segmento: 'Academia',
      frases: [
        'Empresários de outro segmento passaram a perguntar quem fazia meus vídeos.',
        'Meu trabalho começou a ser enxergado de forma mais séria e profissional.',
      ],
    },
    {
      nome: 'Gabriela',
      segmento: 'Consultoria',
      frases: ['O maior diferencial foi a clareza do processo e o passo a passo.'],
    },
    {
      nome: 'Metamorpho Labs',
      segmento: 'Tecnologia',
      frases: ['É fácil ter ideias boas. Transformar em método precisa de profissional.'],
    },
  ],
};

/**
 * Depoimentos em mídia.
 *
 * COMO INTEGRAR: coloque o arquivo em `public/depoimentos/` e preencha `src`.
 * Enquanto `src` estiver vazio, o item não aparece no site — e se nenhum item
 * tiver mídia, a seção inteira não é renderizada. Nada de moldura vazia.
 *
 * Vídeo: aceita caminho local ('/depoimentos/marcos.mp4') ou URL do Vimeo.
 * Áudio: caminho local ('/depoimentos/gabriela.mp3').
 */
export const depoimentos = {
  eyebrow: 'Em primeira mão',
  title: 'Nas palavras de quem passou pelo processo.',
  itens: [
    {
      /* Vídeo Marcos — preencher com '/depoimentos/marcos.mp4' ou ID do Vimeo */
      tipo: 'video' as const,
      src: '',
      vimeoId: '',
      nome: 'Marcos',
      segmento: '',
      legenda: '',
    },
    {
      /* Áudio Gabriela — preencher com '/depoimentos/gabriela.mp3' */
      tipo: 'audio' as const,
      src: '',
      vimeoId: '',
      nome: 'Gabriela',
      segmento: 'Consultoria',
      legenda: '',
    },
  ],
};

export const grandeIdeia = {
  eyebrow: 'Onde isso dói',
  title: ['Quase nunca é o preço.', 'É o que entenderam antes de perguntar.'],
  /** Sintomas do dia a dia — é por aqui que o empresário se reconhece. */
  sintomas: [
    {
      cena: '“Vou ver e te retorno.”',
      leitura:
        'O orçamento sai, o cliente some, e você nunca descobre o porquê. Na maioria das vezes ele não achou caro: não entendeu por que valeria mais.',
    },
    {
      cena: 'Você perde para quem entrega pior.',
      leitura:
        'O concorrente cobra menos e faz menos, mas parece mais preparado. Numa decisão com pouca informação, parecer melhor é o que decide.',
    },
    {
      cena: 'Tudo depende de indicação.',
      leitura:
        'Indicado fecha fácil, porque a confiança chega pronta. Sem indicação, você começa do zero — e o mês vira montanha-russa.',
    },
  ],
  diagnostico: [
    'Esses três problemas parecem comerciais. São o mesmo problema, e ele acontece antes da venda: a empresa não é percebida do tamanho que ela tem.',
    'Quando a percepção é menor que a entrega, o preço parece alto, o concorrente parece igual e cada venda recomeça do zero. Quando ela chega no tamanho certo, a conversa já começa com você na frente.',
  ],
  tese: ['Empresas não crescem porque comunicam.', 'Crescem porque são percebidas da maneira certa.'],
};

export const miguel = {
  eyebrow: 'Quem está por trás',
  nome: 'Miguel Macedo',
  papel: 'Fundador da OMM',
  /**
   * Retrato do Miguel — arquivo em `public/miguel.jpg`.
   * Se o arquivo não existir, o site cai na reserva tipográfica "MM"
   * automaticamente (checagem feita no build). Nunca quebra a imagem.
   */
  foto: '/miguel.jpg',
  fotoAlt: 'Miguel Macedo, fundador da OMM',
  lead: 'Empresa boa, com anos de estrada e reputação real, que abre o Instagram e parece que começou ontem. O trabalho é grande. A percepção é pequena.',
  body: [
    'Meu nome é Miguel Macedo, e eu fundei a OMM depois de ver isso se repetir em empresa de todo tipo e de todo tamanho.',
    'Eu comecei filmando. Demorei para entender que o vídeo quase nunca era o problema: eu entregava um vídeo bonito, o cliente gostava, e três meses depois estava tudo igual. Não mudava nada porque não existia decisão nenhuma por trás.',
    'Isso não se resolve com mais um vídeo. Se resolve com decisão — entender o negócio, o mercado e a mensagem antes de qualquer câmera ligar. A estratégia é o produto. O audiovisual é a prova.',
    'Trabalho sozinho, de Piratininga, atendendo Bauru e a região. É escolha, não limitação: sem estrutura pesada eu penso cada empresa com atenção de verdade. Prefiro poucos clientes bem construídos a muitos mal atendidos.',
  ],
  fecho: 'Foi assim que a OMM nasceu: para dar à imagem de uma empresa o tamanho que ela já tem na vida real.',
  assinatura: 'Miguel',
};

export const comoPensamos = {
  eyebrow: 'Como eu penso',
  title: 'Quatro convicções que guiam cada decisão.',
  intro:
    'Não são regras de manual. São padrões que eu vi se repetirem em empresa de todo tamanho e de todo setor.',
  conviccoes: [
    {
      title: 'Percepção anda na frente da entrega',
      desc: 'A empresa melhor quase nunca ganha. Ganha a que é percebida como melhor. Não é injustiça — é como as pessoas decidem quando têm pouca informação.',
    },
    {
      title: 'Volume não é consistência',
      desc: 'Publicar todo dia sem direção é ruído organizado. Consistência é sustentar a mesma ideia tempo suficiente para ela grudar.',
    },
    {
      title: 'Formato é decisão, nunca template',
      desc: 'Não existe "pacote com oito vídeos". O formato de cada peça nasce do que aquela mensagem específica precisa para funcionar.',
    },
    {
      title: 'O que não se mede vira opinião',
      desc: 'Todo mês a gente olha o que funcionou e por quê. Sem essa leitura, comunicação vira achismo caro.',
    },
  ],
};

export const metodo = {
  eyebrow: 'O Método OMM',
  title: 'Um processo, não um improviso.',
  intro:
    'Toda empresa que entra percorre o mesmo caminho. A produção é a sexta etapa — nunca a primeira. Essa ordem é o método inteiro.',
  steps: [
    {
      n: '01',
      title: 'Diagnóstico',
      desc: 'Entendimento profundo do negócio, do mercado e da distância entre o que a empresa entrega e o que ela comunica.',
    },
    {
      n: '02',
      title: 'Direção de seis meses',
      desc: 'Para onde a percepção precisa caminhar. Sem esse horizonte, todo mês recomeça do zero.',
    },
    {
      n: '03',
      title: 'Planejamento do mês',
      desc: 'Objetivo do mês, percepção desejada, pilares e calendário. O plano que orienta tudo o que vem depois.',
    },
    {
      n: '04',
      title: 'Conversa estratégica',
      desc: 'Leitura do que aconteceu, do que aprendemos e das próximas decisões. É onde o plano encontra a realidade.',
    },
    {
      n: '05',
      title: 'Roteiro e narrativa',
      desc: 'Cada peça ganha função e texto. Ninguém aparece na câmera sem saber o que vai dizer.',
    },
    {
      n: '06',
      title: 'Produção',
      desc: 'Captação, direção e edição. A ferramenta entra aqui — depois de todo o resto estar decidido.',
    },
    {
      n: '07',
      title: 'Leitura de resultado',
      desc: 'Indicadores e diagnóstico do mês. O que funcionou, o que muda, e por quê.',
    },
  ],
};

export const trabalho = {
  eyebrow: 'O trabalho',
  title: 'As ferramentas, e quando cada uma faz sentido.',
  intro:
    'Nada disso se vende sozinho. Cada ferramenta entra quando a direção do mês pede — e não porque estava num pacote.',
  items: [
    {
      name: 'Institucional',
      when: 'Quando a empresa precisa se apresentar com peso: dizer quem é e por que isso importa.',
    },
    {
      name: 'Campanha',
      when: 'Quando existe um lançamento, uma data ou um objetivo comercial com começo, meio e fim.',
    },
    {
      name: 'Fotografia',
      when: 'Quando a imagem parada precisa comunicar o mesmo nível do que a empresa entrega.',
    },
    {
      name: 'Captação com direção',
      when: 'Quando o negócio precisa de material bruto com intenção, não gravação aleatória.',
    },
    {
      name: 'Presença nas redes',
      when: 'Quando a empresa precisa ser lembrada de forma constante, sem virar ruído.',
    },
    {
      name: 'YouTube',
      when: 'Quando a autoridade pede profundidade — conteúdo que ensina, posiciona e permanece.',
    },
  ],
};

export const plano = {
  eyebrow: 'Como me contratar',
  title: 'Plano Presença',
  tagline: 'A porta de entrada no método.',
  objetivo:
    'Construir autoridade e sustentar uma comunicação consistente, com direção definida todo mês.',
  paraQuem:
    'Para empresas que já entregam bem e precisam que a imagem digital acompanhe o que elas realmente fazem.',
  comoFunciona:
    'Começa com o diagnóstico e uma direção de seis meses. Depois o ciclo se repete: planejamento, roteiro, produção, conversa e leitura de resultado.',
  entregaveis: [
    'Diagnóstico inicial',
    'Direção de seis meses',
    'Planejamento de cada mês',
    'Conversa estratégica mensal',
    'Linha e calendário do mês',
    'Roteiro de cada peça',
    'Direção durante a gravação',
    'Até 8 peças por mês',
    'Edição',
    'Leitura de resultado',
  ],
  note: 'A quantidade é o piso, não o produto. O formato de cada peça — vídeo, carrossel, foto — é decidido pela direção daquele mês.',
  cta: { label: 'Fazer o diagnóstico', href: '#diagnostico' },
  future:
    'Empresas que precisam de mais volume ou de acompanhamento contínuo entram em planos maiores. A gente decide isso junto, depois do diagnóstico.',
};

export const construcaoPublica = {
  eyebrow: 'Construção pública',
  title: 'A OMM está sendo construída à vista.',
  body: [
    'Eu não vou inventar case para preencher esta página. Os projetos estão em andamento agora — você leu no começo o que três deles perceberam.',
    'Depoimento é uma coisa; case é outra. Quando os resultados amadurecerem, eles aparecem aqui inteiros: o problema real, a decisão que a gente tomou e o que mudou depois. Com nome da empresa e sem número inflado.',
    'Até lá, o que dá para julgar é o raciocínio. Ele está todo nesta página — e no diagnóstico que você pode fazer agora.',
  ],
  estrutura: {
    label: 'É assim que cada projeto vai ser contado',
    passos: ['O problema', 'A decisão', 'O que foi feito', 'O que mudou'],
  },
  convite: 'Sua empresa pode ser um dos primeiros.',
};

export const perguntas = {
  eyebrow: 'Perguntas',
  title: 'O que costumam me perguntar antes de fechar.',
  items: [
    {
      q: 'Preciso aparecer na câmera?',
      a: 'Ajuda muito, mas não é obrigatório. Tem empresa que se comunica pelo processo, pelo produto ou pela equipe. O que não dá é ficar invisível — de alguma forma a empresa precisa ter rosto.',
    },
    {
      q: 'Em quanto tempo eu vejo resultado?',
      a: 'Percepção não vira da noite para o dia. Os primeiros sinais costumam aparecer entre o segundo e o terceiro mês: o tipo de mensagem que chega muda antes do número mudar. Por isso o trabalho é pensado em seis meses, não em posts avulsos.',
    },
    {
      q: 'Por que seis meses?',
      a: 'Porque abaixo disso não dá para construir percepção — dá só para produzir conteúdo. Ainda assim, você pode sair ao fim do terceiro mês sem multa, avisando com quinze dias. Se não estiver fazendo sentido, não faz sentido prender ninguém.',
    },
    {
      q: 'Quanto custa?',
      a: 'Depende do que a empresa precisa alcançar, e isso só fica claro no diagnóstico. O que dá para adiantar: é um investimento mensal contínuo, não um orçamento de vídeo avulso. Se você procura o mais barato, eu provavelmente não sou a escolha certa.',
    },
    {
      q: 'Atende fora de Bauru e Piratininga?',
      a: 'Bauru, Piratininga e região estão inclusos. Outras cidades a gente conversa — funciona, é só combinar o deslocamento.',
    },
    {
      q: 'Já tenho quem filme. Isso serve?',
      a: 'Serve, e às vezes é o melhor cenário. Se a produção já existe e o que falta é direção, dá para trabalhar só a camada estratégica. O problema quase nunca é a câmera.',
    },
  ],
};

export const manifesto = {
  lines: [
    'Não acredito em conteúdo por obrigação.',
    'Não acredito em tendência sem propósito.',
    'Não acredito em comunicação sem direção.',
  ],
  turn: 'Acredito que posicionamento se constrói com decisão, sustentada com consistência.',
  close: ['Porque conteúdo passa.', 'Percepção permanece.'],
};

export const diagnostico = {
  eyebrow: 'O diagnóstico',
  title: 'Antes de qualquer proposta, um diagnóstico.',
  subtitle:
    'Duas etapas rápidas. No fim você recebe uma leitura da sua comunicação — mesmo que a gente nunca trabalhe junto. É o método funcionando na prática.',
};

export const convite = {
  eyebrow: 'Convite',
  title: 'Vamos conversar sobre a percepção da sua empresa?',
  subtitle:
    'Sem proposta pronta e sem apresentação de slides. Uma conversa para entender onde sua imagem está e onde ela precisa chegar.',
  button: { label: 'Fazer o diagnóstico', href: '#diagnostico' },
  alternativa: {
    label: 'Prefiro falar direto no WhatsApp',
    href: `https://wa.me/${brand.whatsapp}`,
  },
};

/** Triagem em 2 passos → diagnóstico com IA → envio pro WhatsApp da OMM. */
export const triagem = {
  steps: [
    { n: 1, label: 'Quem é você' },
    { n: 2, label: 'Sua comunicação hoje' },
  ],
  passo1: {
    title: 'Primeiro, quem é você',
    subtitle: 'Para eu falar com você da forma certa.',
    fields: {
      nome: { label: 'Seu nome', placeholder: 'Nome completo' },
      empresa: { label: 'Empresa', placeholder: 'Nome do seu negócio' },
      whatsapp: { label: 'WhatsApp', placeholder: '(14) 99999-9999' },
      email: { label: 'E-mail', placeholder: 'voce@empresa.com.br' },
    },
  },
  passo2: {
    title: 'Agora, sua comunicação hoje',
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

export const footer = {
  tagline:
    'Miguel Macedo. Ajudo empresas a serem percebidas do jeito certo — o vídeo é uma das ferramentas.',
  columns: [
    {
      title: 'Navegar',
      links: [
        { label: 'A ideia', href: '#ideia' },
        { label: 'Miguel', href: '#miguel' },
        { label: 'Método', href: '#metodo' },
        { label: 'Trabalho', href: '#trabalho' },
        { label: 'Perguntas', href: '#perguntas' },
      ],
    },
    {
      title: 'Conversar',
      links: [
        { label: 'Diagnóstico', href: '#diagnostico' },
        { label: 'WhatsApp', href: `https://wa.me/${brand.whatsapp}` },
        { label: 'Instagram', href: brand.instagramUrl },
      ],
    },
  ],
};
