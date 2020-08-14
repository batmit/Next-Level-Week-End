
//para trazer uma dependência para meun projeto, ou até mesmo outro projeto
const express = require("express")
const server = express()
const nunjucks = require("nunjucks")//aí eu posso usar o nunjuck com essa variável constante(templete engine


const { pageLanding,
        pageStudy,
        pageGiveClasses,
        saveClasses } = require("./pages") 

//configurar nunjucks:
nunjucks.configure("scr/views", {//seleciona como configuração primeiro a página onde está os HTML que eu quero configurar
    express: server,    //peço ao express para selecionar o servidor
    noCache: true,     //desativa o cache    

})

server
//receber os dados do req.body
.use(express.urlencoded({
    extended: true
}))


//configurar arquivos estátiocs (css, scripts, imagens)
server.use(express.static("public"))//tudo .use é uma configuração do servidor, o static são imagens, css, entre outros

//rotas da aplicação
.get("/", pageLanding)
               //esse req guarda dados complementares
.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)

.post("/save-classes", saveClasses)
.listen(5500)//isso vai retornar para mim o express, mas eu preciso executar ele, por isso os parenteses
//esse listen pede para ler o valor dentro, você pode executar isso usando o terminal usando esse comando: node scr/server.js. aí quando você vai no navegador pode acessar pelo link http://127.0.0.1:5500/, e vai mostar o argumento 


//.get("/study", (req, res) => {//vai retornar algo com o link que neu falei em baixo só que com o /study, mas peimeiro é necessário reiniciar o sevidor, se eu fizer alguma mudança é sempre necessário reiniciar o sevidor
//    return res.send("Page Study")
//})

//console.log(__dirname)               vai retornar o local do dirname no terminqal, o console do back end é diferente do front end


////////////////////////////////////////////////////////////////////////////////////////////

//para ver o que ela está retornando:

//function express() {
//    return{ //vai retornar o valor, como está entre {} é um objeto

//        name: "Daniel",//lembra da vírgula
//        age: 20
//    }

//    }

//express().name.age//para retornar o objeto nome, o objeto idade 
////////////////////////////////////////////////////////////////////////////////////////////////