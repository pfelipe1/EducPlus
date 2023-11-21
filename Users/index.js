const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const User = require('../models/User');
const Experiencie = require('../models/Experiencie');
const router = express.Router();

//BODY
app.use(
    express.urlencoded({
        extended: true,
    }),
)
// importar JSON
app.use(express.json());


const hbs = exphbs.create({
    partialsDir: ['views/partials'] // --> Uso do Partials 
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//endpoints

//create
router.get('/create', (req,res)=>{
    res.render('addUser')
})

router.post('/create', async (req, res)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const ocupacao = req.body.ocupacao
    let alertas = req.body.alertas;

    if (nome === '' || email === '' || senha === '' || ocupacao === '') {
        return res.send('<script>alert("Preencha todos os campos."); window.location="/users/create";</script>')
    }


    alertas === 'on'? alertas = true : alertas = false

    await User.create({nome, email, senha, ocupacao, alertas})

    console.log(req.body);

    res.redirect('/')

})

router.get('/:id', async (req, res) =>{
    const id = req.params.id;

    try {
        const user = await User.findOne({include: Experiencie, where: {id : id}})
    
        res.render('user', { user: user.get({ plain: true }) })
        
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
