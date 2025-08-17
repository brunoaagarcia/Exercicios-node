class Carro {

    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }


    detalhes(){

        return `Marca: ${this.marca}, MOdelo: ${this.modelo}, Ano: ${this.ano}`;


    }


}

const meuomega = new Carro("Chevrolet", "Omega", 1993);

const meucorolla = new Carro ("Toyota", "Corolla", 2017);

console.log("Detlhes do primeiro carro:");
console.log(meuomega.detalhes());
console.log("\nDetalhes do segundo carro:");
console.log(meucorolla.detalhes());