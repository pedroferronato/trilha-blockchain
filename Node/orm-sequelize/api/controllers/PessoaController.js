const database = require('../models')

class PessoaController {
    static async selectAllPessoas(req, res) {
        try {
            const pessoas = await database.Pessoas.findAll()
            return res.status(200).json(pessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectByIdPessoa(req, res) {
        const { id } = req.params
        try {
            const pessoa = await database.Pessoas.findOne( { where : { id: Number(id) } } )
            if (!pessoa) return res.status(404).json({ erro: "Não encontrada"})
            return res.json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController