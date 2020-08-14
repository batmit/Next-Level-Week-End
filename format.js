
//todos os dados são perdidos quando o servidor é resetado, por isso devemos utilizar o banco de dados

const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação Física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química'
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
    
]

//também posso dividir isso abaixo usando função, como:
//function pageLanding(req, res) {
//  return res.sendFile(__dirname+"/views/index.html")
//}                   aí é so substituir lá assim: 
//.get("/", pageLanding)


function getSubject(subjectNumber) {        //converte números em palavras, esse subject por ter Number é um número

    const position = +subjectNumber - 1 //para conferir se é mesmo um número e -1 para começar no 0

    return subjects[position]   //retorna a palavra na posição do número 
}


function convertHoursToMinute(time) {
    const [hour, minutes] = time.split(":")    //vou dividir entre horas e minutos e vou separar eles pelo nome
    return Number((hour * 60) + minutes)       //para garantir que é um número, retorna para o time


}



module.exports = (
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinute
)

