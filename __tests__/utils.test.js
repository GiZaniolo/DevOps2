// __tests__/utils.test.js
const { sum, isEmail, slugify, unique, factorial } = require('../lib/utils');

test('sum soma dois números', () => {
  expect(sum(2, 3)).toBe(5);
});

test('sum lança erro se receber valores inválidos', () => {
  expect(() => sum('2', 3)).toThrow();
});

test('isEmail reconhece emails válidos e inválidos', () => {
  expect(isEmail('ana@exemplo.com')).toBe(true);
  expect(isEmail('invalido')).toBe(false);
});

test('slugify remove acentos e espaços', () => {
  expect(slugify('Olá Mundo! Site DevOps')).toBe('ola-mundo-site-devops');
});

test('unique remove duplicados preservando ordem', () => {
  expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
});

test('factorial(0) = 1', () => {
  expect(factorial(0)).toBe(1);
});

test('factorial(5) = 120', () => {
  expect(factorial(5)).toBe(120);
});
