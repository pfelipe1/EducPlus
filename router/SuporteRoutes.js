const express = require('express');
const router = express.Router()
const SuporteController = require('../controller/SuporteController')


router.get('/', SuporteController.ShowSuporte)






module.exports = router