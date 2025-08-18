import Calculadora from './calculadora.js';

console.log("--- Módulo de Calculadora importado! ---");

const calc = new Calculadora();

console.log(`Soma: 10 + 5 = ${calc.somar(10, 5)}`);
console.log(`Subtração: 10 - 5 = ${calc.subtrair(10, 5)}`);
console.log(`Multiplicação: 10 * 5 = ${calc.multiplicar(10, 5)}`);
console.log(`Divisão: 10 / 5 = ${calc.dividir(10, 5)}`);
console.log(`Tentativa de divisão por zero: ${calc.dividir(10, 0)}`);