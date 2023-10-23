const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Post = require('./models/Post');

const app = express();

//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    app.set('views', './views');

    //BodyParser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

//Rotas
    app.get('/', function (req, res) {
        res.render('home');//Não precisa informar o diretório views. Aqui já está buscando na pasta views e o arquivo home.handlebars
    });

    app.get('/cadpost', function (req, res){
        res.render('formulario'); //Não precisa informar o diretório views. Aqui já está buscando na pasta views e o arquivo formulario.handlebars         
    });
    //rota app.post que é chamada em seguida quando a pagina cadpost envia o formulario
    //A rota do tipo post não é acessível pela URL direto no navegador, só o formulário consegue chamar
    app.post('/postadd', function (req, res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function () {
            res.redirect('/'); //Aqui estamos redirecionando o usuário para a home após ter sido efetivado o cadastro
        }).catch(function (erro) {
            res.send('Houve um erro: ' + erro);
        });
    });

const portaServ = 3000;
app.listen(portaServ, function(){
    console.log("Servidor rodando! http://localhost:" + portaServ);
});