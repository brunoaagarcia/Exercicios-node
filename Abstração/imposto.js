class Imposto {
    constructor() {
        if (this.constructor === Imposto) {
            throw new Error("Você não pode criar uma instância de uma classe abstrata.");
        }
    }

    calcularImposto(valorBase) {
        throw new Error("O método 'calcularImposto()' precisa ser implementado pela subclasse.");
    }
}

class ImpostoRenda extends Imposto {

    calcularImposto(renda) {
        const aliquota = 0.15; // 15%
        return renda * aliquota;
    }
}

class ImpostoServico extends Imposto {

    calcularImposto(valorServico) {
        const aliquota = 0.05; 
        return valorServico * aliquota;
    }
}

const ir = new ImpostoRenda();
const iss = new ImpostoServico();

const salario = 5000;
const valorNotaFiscal = 1000;

console.log(`\nImposto de Renda sobre R$ ${salario}: R$ ${ir.calcularImposto(salario).toFixed(2)}`);
console.log(`Imposto de Serviço sobre R$ ${valorNotaFiscal}: R$ ${iss.calcularImposto(valorNotaFiscal).toFixed(2)}`);