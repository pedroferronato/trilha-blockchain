const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/', PessoaController.selectAllPessoas)

router.get('/:id', PessoaController.selectByIdPessoa)

router.post('/', PessoaController.insertPessoa)

router.put('/:id', PessoaController.updatePessoa)

router.delete('/:id', PessoaController.deletePessoa)

module.exports = router