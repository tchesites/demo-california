import { existsSync, readFileSync, readdirSync } from 'node:fs';

const noindex = process.env.PUBLIC_NOINDEX === 'true';

const ler = (caminho) => {
  if (!existsSync(caminho)) {
    console.error(`check-build: arquivo ausente — ${caminho}`);
    return null;
  }
  return readFileSync(caminho, 'utf8');
};

const home = ler('dist/index.html');
const naoEncontrada = ler('dist/404.html');
const robots = ler('dist/robots.txt');
const sitemap = ler('dist/sitemap.xml');

const css = existsSync('dist/_astro')
  ? readdirSync('dist/_astro')
      .filter((arquivo) => arquivo.endsWith('.css'))
      .map((arquivo) => readFileSync(`dist/_astro/${arquivo}`, 'utf8'))
      .join('\n')
  : '';

if (!home || !naoEncontrada || !robots || !sitemap) process.exit(1);

for (const asset of ['dist/favicon.svg', 'dist/og-image.jpg', 'dist/logo.svg']) {
  if (!existsSync(asset)) {
    console.error(`check-build: asset ausente — ${asset}`);
    process.exit(1);
  }
}

const servicos = ['Corte', 'Barba', 'Corte + barba', 'Cor e platinado', 'Corte infantil'];
const avaliacoes = ['Rafael', 'Diego', 'Bruno'];
const perguntas = [
  'Precisa agendar?',
  'Atende criança?',
  'Faz platinado e luzes?',
  'Como pagar?',
  'Onde fica?',
];

const checks = [
  ['home: lang pt-BR', () => home.includes('<html lang="pt-BR">')],
  ['home: title com o nome', () => /<title>[^<]*Califórnia Barbearia[^<]*<\/title>/.test(home)],
  ['home: canonical', () => home.includes('rel="canonical"')],
  ['home: JSON-LD BarberShop', () => home.includes('application/ld+json') && home.includes('BarberShop')],
  ['home: sem aggregateRating', () => !home.includes('aggregateRating')],
  ['home: manchete', () => home.includes('A barbearia que') && home.includes('transforma')],
  ['home: nota 5,0', () => home.includes('5,0')],
  ['home: 107 avaliações', () => home.includes('107')],
  ['home: endereço', () => home.includes('Rua Sete de Setembro, 480')],
  ['home: horários', () => home.includes('9h às 19h30') && home.includes('9h30 às 19h')],
  ['home: cinco serviços', () => servicos.every((nome) => home.includes(nome))],
  ['home: preços de referência', () => home.includes('a partir de R$ 45') && home.includes('sob consulta')],
  ['home: três depoimentos', () => avaliacoes.every((nome) => home.includes(nome))],
  ['home: cinco FAQs', () => perguntas.every((pergunta) => home.includes(pergunta))],
  ['home: CTA final', () => home.includes('Sai renovado')],
  ['home: WhatsApp', () => home.includes('wa.me/5551900000000')],
  ['home: links com base', () => home.includes('/demo-california/_astro/') && !home.includes('src="/_astro/')],
  ['home: Instagram', () => home.includes('instagram.com/california.barbearia')],
  ['home: logo', () => home.includes('/demo-california/logo.svg')],
  ['home: depoimentos em paper', () => home.includes('section paper depoimentos')],
  ['home: fallback sem JS', () => home.includes('<noscript>') && home.includes('[data-reveal]')],
  ['home: hero sem reveal', () => !/hero__foto[^>]*data-reveal/.test(home)],
  ['home: menu fecha ao navegar', () => /menu\.open\s*=\s*false/.test(home) && home.includes('Escape')],
  ['home: markup sem escape quebrado', () => !home.includes('\\n') && !home.includes('fetchpriority="low"')],
  ['home: imagens abaixo da dobra em lazy', () => home.includes('loading="lazy"')],
  ['home: crédito das fotos', () => home.includes('Fotos:') && home.includes('pexels.com')],
  ['home: canonical com barra', () => /rel="canonical" href="https:\/\/tchesites\.github\.io\/demo-california\/"/.test(home)],
  ['home: sem review schema', () => !home.includes('"review"')],
  ['css: foco com currentColor', () => /outline:\s*2px solid currentColor/.test(css)],
  ['css: hero cabe em 320px', () => css.includes('2.2rem')],
  ['404: htaccess configurado', () =>
    existsSync('dist/.htaccess') &&
    readFileSync('dist/.htaccess', 'utf8').includes('ErrorDocument 404')],
  [
    'home: robots conforme o modo',
    () => (noindex ? home.includes('noindex, nofollow') : home.includes('index, follow')),
  ],
  ['404: mensagem', () => naoEncontrada.includes('Essa página saiu para cortar o cabelo.')],
  ['robots: modo', () => (noindex ? robots.includes('Disallow: /') : robots.includes('Allow: /'))],
  ['sitemap: home', () => sitemap.includes('/demo-california/')],
];

let falhou = false;
for (const [nome, teste] of checks) {
  if (!teste()) {
    console.error(`check-build: falhou — ${nome}`);
    falhou = true;
  }
}

if (falhou) process.exit(1);

console.log('ok');
