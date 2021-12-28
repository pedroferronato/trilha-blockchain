const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.listar(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        Atendimento.buscar(res, Number(req.params.id))
    })

    app.post('/atendimentos', (req, res) => {
        Atendimento.adicionar(req.body, res)
    })
}