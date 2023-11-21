const Atividade = require('../models/Atividade')

module.exports = class UserController{

    static showAtividades(req, res){
        res.render('Atividades')
    }


}