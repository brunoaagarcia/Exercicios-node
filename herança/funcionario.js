
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = parseFloat(salario);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);

        this.departamento = departamento;
    }

    aumentarSalario(porcentagem) {
        if (porcentagem > 0) {
            const aumento = this.salario * (porcentagem / 100);
            this.salario += aumento;
            console.log(`O salário de ${this.nome} foi aumentado em ${porcentagem}%. Novo salário: R$ ${this.salario.toFixed(2)}`);
        } else {
            console.log("A porcentagem de aumento deve ser maior que zero.");
        }
    }
}

const gerenteTI = new Gerente("Bruno", 5000, "Tecnologia");

if (isNaN(gerenteTI.salario)) {
    console.log("Erro: O salário fornecido não é um número válido.");
} else {
    console.log(`Nome: ${gerenteTI.nome}`);
    console.log(`Salário inicial: R$ ${gerenteTI.salario.toFixed(2)}`);
    console.log(`Departamento: ${gerenteTI.departamento}`);

    console.log("\n--- Aplicando aumento de 10% ---");

    gerenteTI.aumentarSalario(10);

    console.log(`\nSalário final: R$ ${gerenteTI.salario.toFixed(2)}`);
}