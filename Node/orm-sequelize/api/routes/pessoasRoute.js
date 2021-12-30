const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/', PessoaController.selectAllPessoas)

router.get('/:id', PessoaController.selectByIdPessoa)

module.exports = router