const conexao = require('../infra/conexao')

class Atendimento {
    adicionar(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, result) => {
            if (erro) console.log(`[ERRO DB - Atendimento criar] - ${erro}`);
            else console.log(result);
        })
    }
}

module.exports = new Atendimento