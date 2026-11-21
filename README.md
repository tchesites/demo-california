# Califórnia Barbearia (demo)

- **Cliente:** Califórnia Barbearia — *marca fictícia (projeto demonstrativo)*
- **Entidade:** tche-sites
- **Stack:** astro
- **Status:** ativo
- **Repo:** `tchesites/demo-california` — `git@github.com-tchesites:tchesites/demo-california.git`
- **No ar:** https://tchesites.github.io/demo-california/
- **Como rodar:** `npm install` · `npm run dev` · `npm test` · `npm run build` · `npm run check` · `npm run preview`

## Sobre

Demo de site institucional para barbearia, derivado do layout de uma proposta da
agência. Mantém a direção visual original — preto, lima e verde-escuro, tipografia
Archivo/Michroma/IBM Plex Mono — com marca, textos, fotos e dados fictícios.

**Nada aqui é dado real:** nome, endereço, telefone, Instagram, avaliações,
depoimentos e barbeiro são inventados. O rodapé traz o aviso de projeto
demonstrativo.

## Dados fictícios

- **Endereço:** Rua Sete de Setembro, 480 — Centro, Canoas/RS — 92310-000
- **Horário:** segunda a quarta, 9h às 19h; quinta e sexta, 9h às 19h30;
  sábado, 9h30 às 19h; domingo fechado
- **WhatsApp:** (51) 90000-0000 (`wa.me/5551900000000`)
- **Instagram:** [@california.barbearia](https://www.instagram.com/tchesites/)
- **Barbeiro:** Beto Ferraz (fictício)

## Estrutura

- `src\` — páginas, componentes, layout, dados e estilos
- `src\assets\fotos\` — fotos do banco Pexels
- `tests\` — testes dos dados e dos assets (`node --test`)
- `scripts\check-build.mjs` — verificação do `dist/` depois do build
- `public\` — logo, favicon, OG image e `.htaccess`

## Decisões

- **Fotos:** Pexels (IDs 11213201, 7518728, 5568409, 16485627, 17603991,
  2076930 e 3162022), para não usar imagens de cliente em peça pública.
- **Indexável por padrão:** `noindex` só com `PUBLIC_NOINDEX=true`.
- **Sem `aggregateRating`:** a nota é exibição de demo, não schema.
- **Links internos via `url()`**, com base `/demo-california`.
- **WhatsApp e Maps** apontam para dados fictícios.

## Deploy

Em **https://tchesites.github.io/demo-california/**, via GitHub Pages com
`.github\workflows\deploy.yml` (`withastro/action` + `deploy-pages`). O repo é
público, com o topic `demo`, e o Pages usa **GitHub Actions** como source.

Qualquer push na `main` builda e publica.
