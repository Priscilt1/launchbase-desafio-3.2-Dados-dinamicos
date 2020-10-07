// chamando o servidor 
const express = require('express')

// chamando o nunjucks
const nunjucks = require('nunjucks')


// criando o servidor 
const server = express()

// inserindo o estilo (pegando arquivos estaticos)
server.use (express.static ('public'))


// confirando a template engine do nunjucks 
server.set("view engine", "njk")

nunjucks.configure('views', {
    express:server
})

// adicionando a rota. Get significa pegar
// renderizando o html, criando rota
server.get('/', function(req, res){
    return res.render('about')
})

// criando rota para a pagina container
server.get('/container', function(req, res){
    return res.render('container')
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