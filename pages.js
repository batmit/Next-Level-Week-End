const { 
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinute } = require("./utils/format")  //com {  } vou retirar e colocar em cada variável com seu respectivo nome, vou trazer tudo para cá de uma forma mais fácil


const Database = require("./database/db")
const { query } = require("express")
//const { catch } = require("./database/db")

function pageLanding(req, res) {
    return res.render("index.html")
}
async function pageStudy(req, res) {
    const filters = req.body

    //se não isso em baixo, se os valores forem vazios
    if(!filters.subject || !filters.weekday || !filters.time) {

        return res.render("study.html", {filters, subjects, weekdays})

    }


    const  timeToMinutes = convertHoursToMinute(filters.time)  //passo o tempo para ele, ele passa para a função e vuolá


    //converter horas em minutos
    
    const query = `
    
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)                
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}

        AND classes.subject = '${filters.subject}' 
    
    
    `
    
    //caso haja erro na conculta do banco de dados
    try {

        const db = await Database;

        const proffys = await db.all(query)

        proffys.map((proffy) => {
            proffy.subject = getSubject(proffy.subject)
        })

        return res.render("study.html", {proffys, subjects, filters, weekdays})

    } catch (error) {
        console.log(error)
    }



}
function pageGiveClasses (req, res) {
 

    return res.render("give-classes.html", {subjects, weekdays})
}



async function saveClasses (req, res){

    const createProffy = require("./database/createProffy")


    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatssapp: req.body.whatssapp,
        bio: req.body.bio
    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }

    const classScheduleValues = req.body.weekday.map((weekday, index) => {     //vai receber o weekday do momento
    
        return {
            weekday,
            time_from: convertHoursToMinute(req.body.time_from[index]),      //na posição que estiver esse index do momento, 0, 1
            time_to: convertHoursToMinute(req.body.time_to[index])
        }


    })

    try {
        
        const db = await Database
        await createProffy(db, {proffyValue, classValue, classScheduleValues})

        let queryString = "?subject=" + req.body.subject
        queryString += "&weekday=" + req.body.weekday[0]
        queryString += "&time=" + req.body.time_from[0]       //URL

        
        return res.redirect("/study" + queryString)
    
    } catch (error) {
        console.log(error)
    }

}



module.exports = { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}