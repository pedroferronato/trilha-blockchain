const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rota de atendimentos'))

    app.post('/atendimentos', (req, res) => {
        try {
            Atendimento.adicionar(req.body)
        } catch (error) {
            console.log(error);
            return res.status(400).send(error)
        }
        return res.status(201).send('Atendimento registrado com sucesso')
    })
}