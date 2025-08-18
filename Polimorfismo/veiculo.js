
class Veiculo {
    mover() {
        console.log("O veículo está se movendo de uma forma genérica.");
    }
}

class Carro extends Veiculo {

    mover() {
        console.log("O carro acelera na estrada.");
    }
}

class Bicicleta extends Veiculo {

    mover() {
        console.log("A bicicleta pedala pela ciclovia.");
    }
}

const meuCarro = new Carro();
const minhaBicicleta = new Bicicleta();

const veiculos = [meuCarro, minhaBicicleta, new Veiculo()];

function iniciarMovimento(listaDeVeiculos) {
    console.log("--- Iniciando o movimento de todos os veículos ---");
    listaDeVeiculos.forEach(veiculo => {

        veiculo.mover();
    });
}

iniciarMovimento(veiculos);