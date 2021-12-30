const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.listar()
            .then((resultados) => res.json(resultados))
            .catch((erros) => res.status(400).json(erros))
    })

    app.get('/atendimentos/:id', (req, res) => {
        Atendimento.buscar(res, Number(req.params.id))
    })

    app.post('/atendimentos', (req, res) => {
        Atendimento.adicionar(req.body)
            .then( atendimentoCadastrado => res.status(201).json(atendimentoCadastrado))
            .catch( erro => res.status(400).json(erro))
    })

    app.patch('/atendimentos/:id', (req, res) => {
        Atendimento.alterar(res, req.body, Number(req.params.id))
    })

    app.delete('/atendimentos/:id', (req, res) => {
        Atendimento.excluir(res, Number(req.params.id))
    })
}