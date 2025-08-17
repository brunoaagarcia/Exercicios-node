class Pessoa {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

 
    cumprimentar() {

        console.log(`Olá! Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("Ana", 30);

const pessoa2 = new Pessoa("Carlos", 25);

console.log("Saudação da primeira pessoa:");
pessoa1.cumprimentar(); 

console.log("\nSaudação da segunda pessoa:");
pessoa2.cumprimentar(); 