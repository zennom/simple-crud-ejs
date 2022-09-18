var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

router.get('/usuarios',userController.index)

router.get('/cadastro',userController.create)
router.post('/cadastro',userController.store)


router.get('/editar/:id',userController.edit)
router.post('/editar/:id',userController.update)

module.exports = router;
