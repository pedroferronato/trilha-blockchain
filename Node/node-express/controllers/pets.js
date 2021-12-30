const Pet = require('../models/pets')

module.exports = app => {
    app.post('/pet', (req, res) => {
        Pet.adicionar(req.body, res)
    })
}