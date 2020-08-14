
// aprendendo a inserir dados

const Database = require("./db")//vai puxar o db do db.js, e o / vai mostrar que está na pasta do momento

const createProffy = require("./createProffy") //estou exportando a função

//esse é o banco de dados
Database.then(async (db) => {//receber db pelo then

    //inserir dados

    proffyValue = {
        name: "Diego Fernandes", 
        avatar: "https://danvizi.files.wordpress.com/2012/04/professor.jpg", 
        whatssapp: "4234543", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    }


    classValue = {
        subject: "1",
        cost: "20", 
        //o proffy id virá pelo banco de dados 
    }

    classScheduleValues = [   //como eu posso ter mais de um eu devo agrupar esses dados npo array

        //class id virá pelo banco de dados, apos cadastrarmos a class

        {
            weekday: 1,          //segunda
            time_from: 720,
            time_to: 1220         //em segundos
        },
        {
            weekday: 0,          //segunda
            time_from: 520,
            time_to: 1220         //em segundos
        }

    ]


    //await createProffy(db, {proffyValue, classValue, classScheduleValues})  //vou enviar para createProffy.js o que eu coloquei aqui pela função createProffy



    //consultar os dados inseridos


    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")   //vou selecionar tudo de proffy e retornar pela caixa mágica

    //console.log(selectedProffys)


    //consultar as classes de um determinado professor
    //e trazer junto os dados de um determinado professor

    const selectClassesAndProffys = await db.all(`
    
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    
    `)

    //console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8 - 18h
    // o horário do time_from , que é 8h, precisa ser menor ou igual ao horário solicitado
    //o time_to precisa ser acima
    
    //o time_from que eu colocar deve ser maior ou igual a 520
    const selectClassesSchedules = await db.all(`
    
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > 420

    `)

    //console.log(selectClassesSchedules)

    


})