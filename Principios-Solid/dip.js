class DatabaseInterface {
    salvar(dados) {
        throw new Error("Este método precisa ser implementado pela subclasse.");
    }
}

class MySQLDatabase extends DatabaseInterface {
    salvar(dados) {
        console.log(`(MySQL) Salvando dados '${dados}' no banco.`);
    }
}

class PostgreSQLDatabase extends DatabaseInterface {
    salvar(dados) {
        console.log(`(PostgreSQL) Salvando dados '${dados}' no banco.`);
    }
}

class ServicoDeRelatorio {
    constructor(database) {
 
        if (!(database instanceof DatabaseInterface)) {
            throw new Error("O banco de dados fornecido não segue o contrato (interface).");
        }
        this.database = database;
    }

    gerarRelatorio(dados) {
        console.log("Gerando relatório...");
        this.database.salvar(dados);
    }
}

console.log("--- Exemplo de Dependency Inversion Principle (DIP) ---");

const dbMySQL = new MySQLDatabase();
const dbPostgres = new PostgreSQLDatabase();

const relatorioComMySQL = new ServicoDeRelatorio(dbMySQL);
relatorioComMySQL.gerarRelatorio("Vendas de Agosto");

console.log("---");

const relatorioComPostgres = new ServicoDeRelatorio(dbPostgres);
relatorioComPostgres.gerarRelatorio("Vendas de Setembro");