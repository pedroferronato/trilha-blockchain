class Tabelas {
    init (conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if (erro) console.log(`[ERRO DB - criarAtendimentos] - ${erro}`);
            else console.log('Tabela atendimentos criada com sucesso');
        })
    }

    criarPets() {
        const sql = 'CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY(id))' 

        this.conexao.query(sql, erro => {
            if (erro) console.log(`[ERRO DB - criarPets] - ${erro}`);
            else console.log('Tabela pets criada com sucesso');
        })
    }
}

module.exports = new Tabelas