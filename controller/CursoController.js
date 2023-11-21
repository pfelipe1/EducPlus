const Curso = require('../models/Curso')

module.exports = class CursoController{

    static showCursos(req, res){
        res.render('CursosOferecidos')
    }


}