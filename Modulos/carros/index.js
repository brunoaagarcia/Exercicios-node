import Carro from './carro.js';

console.log("--- Módulo de Carro importado com sucesso! ---");

const meuOmega = new Carro("Chevrolet", "Omega", 1993);
const meuCorolla = new Carro("Toyota", "Corolla", 2017);

console.log(meuOmega.detalhes());
console.log(meuCorolla.detalhes());