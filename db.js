const Database = require("sqlite-async")

//se eu colocar um console.log aqui ele vai executar antes de guardar o arquivo, porque demora um tempo para armazenar

function execute(db){//vai mandar os dados para a caixa dessa função
    
    //console.log(db)
    //criar as tabelas do banco de dados, que já existe.               
    //integer é um número inteiro
    //coloca proffy_id para que o profesor seja relacionado com as matérias que forem selecionadas, o mesmo id
    //coloco diferentes tabelas para poderem se relacionar os dados quantas vezes forem necessárias
    return db.exec(`
    
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatssapp TEXT,
            bio TEXT
        );
        
        CREATE TABLE IF NOT EXISTS classes(

            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
            
        ); 

        CREATE TABLE IF NOT EXISTS class_schedule(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    
    `)//o db também é um objeto, e como tal tem deiverças funcionalidades, dentro do exec você coloca códigos sql entre crases    
        //o nome da tabela é proffys
}

//o objeto module vai exportar a tabela arrumadinha para outro lugar 
module.exports = Database.open(__dirname+"/database.sqlite").then(execute)//abrir e mostrar onde está, e quando abrir executa uma função