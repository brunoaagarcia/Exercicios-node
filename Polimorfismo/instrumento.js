class Instrumento {
    tocar() {
        console.log("Tocando um instrumento...");
    }
}

class Violao extends Instrumento {
    tocar() {
        console.log("Soam as cordas do violão... dedilhado.");
    }
}

class Piano extends Instrumento {
    tocar() {
        console.log("As teclas do piano são pressionadas, criando uma melodia.");
    }
}

const orquestra = [new Violao(), new Piano(), new Instrumento()];

function iniciarApresentacao(instrumentos) {
    console.log("--- A apresentação vai começar! ---");
    instrumentos.forEach(instrumento => {
        instrumento.tocar();
    });
}

iniciarApresentacao(orquestra);