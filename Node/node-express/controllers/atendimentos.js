const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rota de atendimentos'))

    app.post('/atendimentos', (req, res) => {
        Atendimento.adicionar(req.body, res)
    })
}