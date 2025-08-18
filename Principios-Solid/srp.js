// ARQUIVO: srp.js

// Responsabilidade #1: Guardar os dados do funcionário.
class Funcionario {
    constructor(nome, cargo, salarioBase) {
        this.nome = nome;
        this.cargo = cargo;
        this.salarioBase = salarioBase;
    }
}

// Responsabilidade #2: Calcular o salário.
class CalculadoraDeSalario {
    calcular(funcionario) {
        // As regras de negócio agora vivem aqui.
        // Se mudarem, só alteramos esta classe.
        const bonus = funcionario.salarioBase * 0.10;
        const impostos = funcionario.salarioBase * 0.15;
        const salarioLiquido = funcionario.salarioBase + bonus - impostos;
        return salarioLiquido;
    }
}

// --- Como usar as classes separadas ---
console.log("--- Exemplo de Single Responsibility Principle (SRP) ---");

const funcionario = new Funcionario("Bruno", "Gerente", 8000);
const calculadora = new CalculadoraDeSalario();

const salarioFinal = calculadora.calcular(funcionario);
console.log(`O salário de ${funcionario.nome} é: R$ ${salarioFinal.toFixed(2)}`);