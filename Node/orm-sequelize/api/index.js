const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => res.send({ mensagem: 'Boas-vindas à API'}))

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

module.exports = app