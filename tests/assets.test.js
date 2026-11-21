import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, statSync, readFileSync } from 'node:fs';

const fotos = [
  'fachada-noite',
  'fade-barba',
  'barba-prateada',
  'platinado',
  'atendimento',
  'fachada-dia',
  'roleta',
];

test('sete fotos importadas', () => {
  for (const nome of fotos) {
    const caminho = `src/assets/fotos/${nome}.jpg`;
    assert.ok(existsSync(caminho), caminho);
    assert.ok(statSync(caminho).size > 10_000, caminho);
  }
});

test('logo e favicon em svg', () => {
  for (const caminho of ['public/logo.svg', 'public/favicon.svg']) {
    const svg = readFileSync(caminho, 'utf8');
    assert.match(svg, /<circle/);
    assert.match(svg, /#FFC93C/);
  }
});
