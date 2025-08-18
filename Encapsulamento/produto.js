class Produto {
    
    #preco;

    constructor(nome, precoInicial) {
        this.nome = nome;
        this.preco = precoInicial;
    }

    get preco() {
        return this.#preco;
    }

    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this.#preco = novoPreco;
        } else {
            console.error("ERRO: O preço de um produto não pode ser negativo.");
        }
    }

    aplicarDesconto(porcentagem) {
        if (porcentagem > 0 && porcentagem <= 100) {
            const desconto = this.#preco * (porcentagem / 100);
            const novoPrecoComDesconto = this.#preco - desconto;

            this.preco = novoPrecoComDesconto;
            
            console.log(`Desconto de ${porcentagem}% aplicado. Novo preço: R$ ${this.preco.toFixed(2)}`);
        } else {
            console.error("ERRO: A porcentagem de desconto deve ser entre 1 e 100.");
        }
    }
}

const celular = new Produto("Smartphone XYZ", 1000);

console.log(`Produto: ${celular.nome}`);
console.log(`Preço inicial: R$ ${celular.preco.toFixed(2)}`);

console.log("\n--- Aplicando um desconto válido de 15% ---");
celular.aplicarDesconto(15);
console.log(`Preço final: R$ ${celular.preco.toFixed(2)}`);

console.log("\n--- Tentando aplicar um desconto inválido de 110% ---");
celular.aplicarDesconto(110); 
console.log(`Preço final: R$ ${celular.preco.toFixed(2)}`); 