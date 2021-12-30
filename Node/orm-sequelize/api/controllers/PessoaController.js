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

    static async insertPessoa(req, res) {
        const pessoa = req.body
        try {
            const novaPessoa = await database.Pessoas.create(pessoa)

            return res.json(novaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updatePessoa(req, res) {
        const pessoa = req.body
        const { id } = req.params
        try {
            await database.Pessoas.update(pessoa, { where: { id: Number(id) } })
            const pessoAtualizada = await database.Pessoas.findOne({ where : { id : Number(id) } })

            return res.json(pessoAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletePessoa(req, res) {
        const { id } = req.params
        try {
            const pessoa = await database.Pessoas.findOne({ where : { id : Number(id) } })
            if (pessoa) await database.Pessoas.destroy({ where : { id : Number(id) } })
            return res.json({ message : `Pessoa com id: ${id} foi excluída` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController