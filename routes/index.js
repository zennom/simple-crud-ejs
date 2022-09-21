var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')
const pessoaController = require('../controllers/pessoaController')

router.get('/usuarios',userController.index)

router.get('/cadastro',userController.create)
router.post('/cadastro',userController.store)
router.get('/editar/:id',userController.edit)
router.post('/editar/:id',userController.update)

//CRIANDO A ROTA PESSOAS
router.get('/pessoas',pessoaController.index)

module.exports = router;
