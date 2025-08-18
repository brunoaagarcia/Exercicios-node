
class Aluno {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}


class Turma {
    constructor(nomeDaTurma) {
        this.nomeDaTurma = nomeDaTurma;
  
        this.alunos = [];
    }


    adicionarAluno(id, nome) {
      
        const alunoExistente = this.alunos.find(aluno => aluno.id === id);

        if (alunoExistente) {
            console.log(`ERRO: Aluno com ID ${id} já existe na turma.`);
            return; 
        }
        
        const novoAluno = new Aluno(id, nome);
        this.alunos.push(novoAluno);
        console.log(`Aluno ${nome} (ID: ${id}) adicionado à turma ${this.nomeDaTurma}.`);
    }

    removerAluno(id) {
        const indiceParaRemover = this.alunos.findIndex(aluno => aluno.id === id);

        if (indiceParaRemover !== -1) {
         
            const alunoRemovido = this.alunos.splice(indiceParaRemover, 1);
            console.log(`Aluno ${alunoRemovido[0].nome} (ID: ${id}) removido da turma.`);
        } else {
            console.log(`ERRO: Aluno com ID ${id} não encontrado na turma.`);
        }
    }

    listarAlunos() {
        console.log(`\n--- Alunos da Turma: ${this.nomeDaTurma} ---`);
        if (this.alunos.length === 0) {
            console.log("A turma está vazia.");
        } else {
            this.alunos.forEach(aluno => {
                console.log(`- ID: ${aluno.id}, Nome: ${aluno.nome}`);
            });
        }
    }
}

const turmaNodeJs = new Turma("Desenvolvimento Web com Node.js");

turmaNodeJs.listarAlunos();

console.log("\n--- Adicionando alunos ---");
turmaNodeJs.adicionarAluno(1, "Ana");
turmaNodeJs.adicionarAluno(2, "Bruno");
turmaNodeJs.adicionarAluno(3, "Carlos");
turmaNodeJs.adicionarAluno(2, "Beatriz"); 

turmaNodeJs.listarAlunos();

console.log("\n--- Removendo um aluno ---");
turmaNodeJs.removerAluno(2);
turmaNodeJs.removerAluno(99); 

turmaNodeJs.listarAlunos();