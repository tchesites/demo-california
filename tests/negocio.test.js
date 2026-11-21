import test from 'node:test';
import assert from 'node:assert/strict';
import { negocio, servicos, avaliacoes, faq, whatsappLink } from '../src/data/negocio.js';

test('dados fictícios do negócio', () => {
  assert.equal(negocio.nome, 'Califórnia Barbearia');
  assert.equal(negocio.notaGoogle, 5);
  assert.equal(negocio.totalAvaliacoes, 107);
  assert.equal(negocio.telefoneDigits, '5551900000000');
  assert.match(negocio.enderecoCompleto, /Centro/);
  assert.match(negocio.enderecoCompleto, /92310-000/);
});

test('horários da casa', () => {
  assert.deepEqual(
    negocio.horarios.map((h) => h.dias),
    ['Segunda a quarta', 'Quinta e sexta', 'Sábado', 'Domingo']
  );
  assert.equal(negocio.horarios[1].horas, '9h às 19h30');
  assert.equal(negocio.horarios[3].horas, 'Fechado');
});

test('cinco serviços com texto de preço', () => {
  assert.equal(servicos.length, 5);
  assert.ok(servicos.every((s) => s.nome && s.descricao && s.precoTexto));
  assert.equal(servicos.find((s) => s.destaque)?.nome, 'Corte + barba');
});

test('três avaliações fictícias do Google', () => {
  assert.equal(avaliacoes.length, 3);
  assert.deepEqual(
    avaliacoes.map((a) => a.autor),
    ['Rafael', 'Diego', 'Bruno']
  );
  assert.ok(avaliacoes.every((a) => a.texto && a.nota === 5));
});

test('cinco perguntas frequentes', () => {
  assert.equal(faq.length, 5);
});

test('link do WhatsApp codifica a mensagem', () => {
  const url = new URL(whatsappLink('Olá! Vim pelo site e quero marcar um horário.'));
  assert.equal(url.origin + url.pathname, 'https://wa.me/5551900000000');
  assert.equal(url.searchParams.get('text'), 'Olá! Vim pelo site e quero marcar um horário.');
});
