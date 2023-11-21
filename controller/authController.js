const Auth = require('../models/Auth')

module.exports = class authController{

    static ShowLogin(req, res){
        res.render('Login')
    }

    static ShowCadastro(req, res){
        res.render('Cadastro')
    }

    static async loginPost(req, res) {

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email } })

        if (!user) {
            req.flash('message', 'Usuario não encontrado')
            res.render('users/login', { layout: 'authLayout' })
            return
        } else if (!bcrypt.compareSync(password, user.password)) {
            req.flash('message', 'Acesso negado')
            res.render('users/login', { layout: 'authLayout' })
            return
        }

        req.session.userId = user.id;

        req.session.save(() => {
            res.redirect('/tasks')
        })
    }
    


}