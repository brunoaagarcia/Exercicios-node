class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(titulo, autor) {
        const novoLivro = new Livro(titulo, autor);
        this.livros.push(novoLivro);
    }

    buscarPorTitulo(termoBusca) {
        const termo = termoBusca.toLowerCase();

        const resultados = this.livros.filter(livro => 
            livro.titulo.toLowerCase().includes(termo)
        );
        return resultados;
    }

    buscarPorAutor(nomeAutor) {
        const nome = nomeAutor.toLowerCase();
        const resultados = this.livros.filter(livro => 
            livro.autor.toLowerCase().includes(nome)
        );
        return resultados;
    }
}

const minhaBiblioteca = new Biblioteca();

minhaBiblioteca.adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien");
minhaBiblioteca.adicionarLivro("O Hobbit", "J.R.R. Tolkien");
minhaBiblioteca.adicionarLivro("Dom Casmurro", "Machado de Assis");
minhaBiblioteca.adicionarLivro("Memórias Póstumas de Brás Cubas", "Machado de Assis");
minhaBiblioteca.adicionarLivro("O Guia do Mochileiro das Galáxias", "Douglas Adams");


console.log("--- Buscando por título 'hobbit' ---");
const resultadoTitulo = minhaBiblioteca.buscarPorTitulo("hobbit");
console.log(resultadoTitulo);

console.log("\n--- Buscando por autor 'machado' ---");
const resultadoAutor = minhaBiblioteca.buscarPorAutor("machado");
console.log(resultadoAutor);