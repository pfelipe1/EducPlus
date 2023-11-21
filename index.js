const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn');
const exphbs = require('express-handlebars');
const User = require('./models/User')
const Users = require('./Users');
const Experiencie = require('./models/Experiencie')
const { raw } = require('mysql2');

// models
const Auth = require("./models/Auth")
const Materia = require("./models/Materia")
const Atividade = require("./models/Atividade")
const Curso = require('./models/Curso');
const Suporte = require('./models/Suporte');
// routes
const authRoutes = require('./router/authRoutes')
const materiaRoutes = require('./router/materiaRoutes')
const atividadeRoutes = require('./router/atividadeRoutes')
const UserRoutes = require('./router/UserRoutes')
const CursoRoutes = require('./router/CursoRoutes')
const SuporteRoutes = require('./router/SuporteRoutes')
const CadastroRoutes = require('./router/CadastroRoutes')



//BODY
app.use(
    express.urlencoded({
        extended: true,
    }),
)
// importar JSON
app.use(express.json());

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})


// construção das handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//css
app.use(express.static('public'))

app.use('/users', Users)


app.get('/exp/create/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw: true, where: { id: id } })

    res.render('addExp',{user})

})

app.post('/exp/create', async (req,res)=>{

    const UserId = req.body.UserId;
    const cargo = req.body.cargo;
    const empresa = req.body.empresa;
    const salario = req.body.salario;

    const Exp ={
        UserId,
        cargo,
        empresa,
        salario
    }

    await Experiencie.create(Exp)

    res.redirect(`/users/${UserId}`)


})

app.get('/', async (req, res) => {

    const candidatos = await User.findAll({ raw: true })

    console.log(candidatos);

    res.render('home', { candidatos })

})







// session middleware
app.use(session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
        logFn: function() {},
        path: require('path').join(require('os').tmpdir(), 'sessions')
    }),

    cookie:{
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
    }

}))

// flahs messages
app.use(flash())

// set session to res
app.use((req, res, next) => {
    if(req.session.userid){
        res.locals.session = req.session
    }

    next()
})


app.use(express.static('public'))


// app.use('/tasks', taskRoutes)

// app.use('/users', userRoutes)
app.use('/perfil', UserRoutes)

app.use('/materia', materiaRoutes)

app.use('/atividade', atividadeRoutes)

app.use('/auth', authRoutes)

app.use('/curso', CursoRoutes)

app.use('/Suporte', SuporteRoutes)

app.use('/Cadastro', CadastroRoutes)


app.get('/', (req,res)=>{
    res.render('Home')
})


app.use((req, res) => {
    res.status(404).render("404", {layout: 'authLayout'});
})

conn.sync({force: true}).then(() =>{
    app.listen(port)
}).catch((error) =>{
    console.log('app não funcionando', error);
})


