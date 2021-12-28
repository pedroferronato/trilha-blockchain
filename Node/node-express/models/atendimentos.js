const moment = require('moment')
const conexao = require('../infra/conexao')

class Atendimento {
    adicionar(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO atendimentos SET ?'
        

        conexao.query(sql, atendimentoDatado, (erro, result) => {
            if (erro) {
                console.log(`[ERRO DB - Atendimento criar] - ${erro}`);
                throw new Error('Falha ao criar atendimento' + erro)
            }
            else console.log(result);
        })
    }
}

module.exports = new Atendimento