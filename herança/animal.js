
class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    emitirSom() {
        console.log("Este animal emite um som genérico.");
    }
}

class Gato extends Animal {
   
    constructor(nome) {
       
        super(nome, "Felino");
    }

    emitirSom() {
        console.log("Miau!");
    }
}

const meuGato = new Gato("Bichano");

console.log(`Nome do animal: ${meuGato.nome}`); 
console.log(`Tipo do animal: ${meuGato.tipo}`);   

console.log("O gato faz:");
meuGato.emitirSom();