const express = require('express');
const router = express.Router()
const CursoController = require('../controller/CursoController')


router.get('/', CursoController.showCursos)






module.exports = router