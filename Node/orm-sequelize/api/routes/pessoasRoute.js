const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/', PessoaController.selectAllPessoas)

module.exports = router