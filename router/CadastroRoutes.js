const express = require('express');
const router = express.Router()
const CadastroController = require('../controller/CadastroController');


router.get('/', CadastroController.ShowCadastro)






module.exports = router