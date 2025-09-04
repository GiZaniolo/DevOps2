// lib/utils.js
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('sum: numbers only');
  }
  return a + b;
}

function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function unique(arr) {
  return [...new Set(arr)];
}

function factorial(n) {
  if (n < 0) throw new Error('factorial: negative not allowed');
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

module.exports = { sum, isEmail, slugify, unique, factorial };
