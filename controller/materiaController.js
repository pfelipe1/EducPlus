const Materia = require('../models/Materia')

module.exports = class UserController{

    static showMaterias(req, res){
        res.render('Aulas')
    }

    static showBiologia(req, res){
        res.render('Biologia')
    }

    static showPortugues(req, res){
        res.render('Português')
    }


    static showBMatematica(req, res){
        res.render('Matematica')
    }

    static showHistoria(req, res){
        res.render('Historia')
    }


}