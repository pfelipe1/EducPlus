const express = require('express');
const router = express.Router()
const materiaController = require('../controller/materiaController')


router.get('/', materiaController.showMaterias)
router.get('/historia', materiaController.showHistoria)
router.get('/biologia', materiaController.showBiologia)
router.get('/portugues', materiaController.showPortugues)
router.get('/matematica', materiaController.showBMatematica)







module.exports = router