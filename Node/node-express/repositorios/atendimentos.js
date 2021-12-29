const query = require('../infra/database/queries')

class Atendimento {
    adicionar(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ?'
        return query(sql, atendimento)
    }

    listar() {
        const sql = 'SELECT * FROM atendimentos'
        return query(sql)
    }
}

module.exports = new Atendimento()
