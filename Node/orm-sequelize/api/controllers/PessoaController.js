const database = require('../models')

class PessoaController {
    static async selectAllPessoas(req, res) {
        try {
            const pessoas = await database.Pessoas.findAll()
            return res.send(200).json(pessoas)
        } catch (error) {
            return res.send(500).json(error.message)
        }
    }
}

module.exports = PessoaController