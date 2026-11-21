// Dados fictícios da Califórnia Barbearia, criados para o projeto
// demonstrativo. Nenhum dado real de cliente, endereço, telefone ou
// avaliação é usado aqui.
//
// Preços são referências de demonstração, não tabela oficial.

export const negocio = {
  nome: 'Califórnia Barbearia',
  slogan: 'A barbearia que transforma você.',
  descricao:
    'Corte, barba e cor na régua em Canoas. Nota 5,0 no Google com 107 avaliações.',
  cidade: 'Canoas',
  estado: 'RS',
  bairro: 'Centro',
  endereco: 'Rua Sete de Setembro, 480',
  enderecoCompleto:
    'Rua Sete de Setembro, 480 — Centro, Canoas/RS — 92310-000',
  cep: '92310-000',
  horarios: [
    { dias: 'Segunda a quarta', horas: '9h às 19h' },
    { dias: 'Quinta e sexta', horas: '9h às 19h30' },
    { dias: 'Sábado', horas: '9h30 às 19h' },
    { dias: 'Domingo', horas: 'Fechado' },
  ],
  telefoneDisplay: '(51) 90000-0000',
  telefoneDigits: '5551900000000',
  telefoneLink: 'tel:+5551900000000',
  whatsappUrl: 'https://wa.me/5551900000000',
  instagram: '@california.barbearia',
  // O @ exibido é fictício; o link aponta sempre para o Instagram da agência.
  instagramUrl: 'https://www.instagram.com/tchesites/',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Sete+de+Setembro+480+Centro+Canoas+RS',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Sete+de+Setembro+480+Centro+Canoas+RS',
  notaGoogle: 5,
  totalAvaliacoes: 107,
  faixaPreco: 'R$ 40–60',
  latitude: -29.9177,
  longitude: -51.1839,
};

export const servicos = [
  {
    nome: 'Corte',
    descricao: 'Máquina, tesoura e acabamento na régua. Do clássico ao fade.',
    precoTexto: 'a partir de R$ 45',
    destaque: false,
  },
  {
    nome: 'Barba',
    descricao: 'Toalha quente, navalha e contorno desenhado.',
    precoTexto: 'a partir de R$ 35',
    destaque: false,
  },
  {
    nome: 'Corte + barba',
    descricao: 'O combo completo, com tempo para caprichar.',
    precoTexto: 'a partir de R$ 70',
    destaque: true,
  },
  {
    nome: 'Cor e platinado',
    descricao: 'Luzes, platinado e transformação de verdade.',
    precoTexto: 'sob consulta',
    destaque: false,
  },
  {
    nome: 'Corte infantil',
    descricao: 'Primeiro corte, sem pressa e com paciência.',
    precoTexto: 'a partir de R$ 40',
    destaque: false,
  },
];

// Depoimentos fictícios, criados para o demo.
export const avaliacoes = [
  {
    texto:
      'Atendimento pontual e o acabamento fica impecável. Virou minha barbearia fixa.',
    autor: 'Rafael',
    nota: 5,
  },
  {
    texto: 'Ambiente tranquilo, conversa boa e corte na régua. Recomendo demais.',
    autor: 'Diego',
    nota: 5,
  },
  {
    texto:
      'Levei meu filho para o primeiro corte e foi tudo com muita paciência.',
    autor: 'Bruno',
    nota: 5,
  },
];

export const faq = [
  {
    pergunta: 'Precisa agendar?',
    resposta:
      'Recomendado. Chama no WhatsApp e garante o horário com o Beto.',
  },
  {
    pergunta: 'Atende criança?',
    resposta:
      'Sim. O corte infantil é feito com paciência e o mesmo acabamento.',
  },
  {
    pergunta: 'Faz platinado e luzes?',
    resposta:
      'Sim. Manda uma referência no WhatsApp para avaliar o tempo e o valor.',
  },
  {
    pergunta: 'Como pagar?',
    resposta: 'As formas de pagamento são combinadas no atendimento.',
  },
  {
    pergunta: 'Onde fica?',
    resposta:
      'Rua Sete de Setembro, 480 — Centro, Canoas/RS.',
  },
];

export const whatsappLink = (
  mensagem = 'Olá! Vim pelo site e quero marcar um horário.'
) => `https://wa.me/${negocio.telefoneDigits}?text=${encodeURIComponent(mensagem)}`;
