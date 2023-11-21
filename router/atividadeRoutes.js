const express = require('express');
const router = express.Router()
const AtividadeController = require('../controller/AtividadeController')


router.get('/', AtividadeController.showAtividades)






module.exports = router