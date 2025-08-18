export default class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}