
class FormaGeometrica {
    constructor() {
 
        if (this.constructor === FormaGeometrica) {
            throw new Error("Você não pode criar uma instância de uma classe abstrata.");
        }
    }

    calcularArea() {
        throw new Error("O método 'calcularArea()' precisa ser implementado pela subclasse.");
    }
}

class Quadrado extends FormaGeometrica {
    constructor(lado) {
        super(); 
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}

class Circulo extends FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * (this.raio * this.raio);
    }
}

try {
    const forma = new FormaGeometrica();
} catch (error) {
    console.error(`\nERRO CAPTURADO: ${error.message}`);
}

const meuQuadrado = new Quadrado(10);
const meuCirculo = new Circulo(5);

console.log(`\nA área do quadrado de lado 10 é: ${meuQuadrado.calcularArea()}`);
console.log(`A área do círculo de raio 5 é: ${meuCirculo.calcularArea().toFixed(2)}`);