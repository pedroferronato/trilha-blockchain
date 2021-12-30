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
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) } })
            if (!pessoa) return res.status(404).json({ erro: "Não encontrada" })
            return res.json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async insertPessoa(req, res) {
        const pessoa = req.body
        try {
            const novaPessoa = await database.Pessoas.create(pessoa)

            return res.status(201).json(novaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updatePessoa(req, res) {
        const pessoa = req.body
        const { id } = req.params
        try {
            await database.Pessoas.update(pessoa, { where: { id: Number(id) } })
            const pessoAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } })

            return res.json(pessoAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletePessoa(req, res) {
        const { id } = req.params
        try {
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) } })
            if (pessoa) await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.json({ message: `Pessoa com id: ${id} foi excluída` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectMatricula(req, res) {
        const { estudanteId } = req.params
        const { matriculaId } = req.params

        try {
            const matricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            return res.json(matricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async insertMatricula (req, res) {
        const { id } = req.params
        const matricula = { ...req.body, estudante_id : Number(id) }

        try {
            const novaMatricula = await database.Matriculas.create(matricula)
            return res.status(201).json(novaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateMatricula(req, res) {
        const { estudanteId } = req.params
        const { matriculaId } = req.params
        const infos = req.body

        try {
            await database.Matriculas.update(infos,  {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            return res.json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMatricula(req, res) {
        const { estudanteId } = req.params
        const { matriculaId } = req.params
        try {
            const matricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            if (matricula) await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.json({ message: `Matrícula com id: ${matriculaId} foi excluída` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController