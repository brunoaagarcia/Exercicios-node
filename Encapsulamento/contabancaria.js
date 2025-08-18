class ContaBancaria {

    #saldo;

    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
    
        this.saldo = saldoInicial;
    }

    get saldo() {
        console.log(`(Lendo o saldo...)`);
        return this.#saldo;
    }

    set saldo(novoSaldo) {
        console.log(`(Tentando alterar o saldo para ${novoSaldo}...)`);
        if (novoSaldo >= 0) {
            this.#saldo = novoSaldo;
            console.log("Saldo alterado com sucesso!");
        } else {
            console.error("ERRO: O saldo de uma conta não pode ser negativo.");
        }
    }
}

const minhaConta = new ContaBancaria("Bruno", 200);

console.log(`\nTitular: ${minhaConta.titular}`);

console.log(`Saldo atual: R$ ${minhaConta.saldo}`);

console.log("\n--- Tentando um depósito válido ---");

minhaConta.saldo = 500;
console.log(`Saldo atual: R$ ${minhaConta.saldo}`);

console.log("\n--- Tentando definir um saldo negativo (inválido) ---");

minhaConta.saldo = -50;
console.log(`Saldo final: R$ ${minhaConta.saldo}`); 