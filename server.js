// chamando o servidor 
const express = require('express')

// chamando o nunjucks
const nunjucks = require('nunjucks')

//chamando os post do blog. Esta pegando o array do aquivo data.js
// ./ referenciando a raiz do projeto
const post = require('./data')

// criando o servidor 
const server = express()

// inserindo o estilo (pegando arquivos estaticos)
server.use (express.static ('public'))


// confirando a template engine do nunjucks 
server.set("view engine", "njk")

nunjucks.configure('views', {
    express:server,
    autoescape: false,
    noCache: true
})

// adicionando a rota. Get significa pegar
// renderizando o html, criando rota
server.get('/', function(req, res){
    const about = {
        avatar_url:"https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        name: "Rocketseat",
        role: "Plataforma de educação em tecnologia 🚀",
        lists: [ 
            {name:"JavaScript"},
            {name:"ReactJs"},
            {name:"ReactNative"},
            {name:"NodeJs"}
        ],
        links: [
            { name:"Github", url: "https://github.com/rocketseat-education"},
            { name:"Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br" },
            { name:"Facebook", url: "https://www.facebook.com/rocketseat"  }
        ]
    }
    return res.render('about', {about})
})

// criando rota para a pagina container
server.get('/container', function(req, res){
    return res.render('container', {items: post})
})

// criando rota para a pagina erro
server.get('/not-found', function(req, res){
    return res.render('not-found')
})

// pagina error 404
server.use(function(req, res) {
    res.status(404).render("not-found");
  });

// iniciando/ouvindo o servidor
server.listen(5000, function (){
    console.log("server ok")
})