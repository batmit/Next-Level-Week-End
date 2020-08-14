

const proffys = [//vários dados                     lista com 2 dados
    {//objeto
        name: "Diego Fernandes", 
        avatar: "https://danvizi.files.wordpress.com/2012/04/professor.jpg", 
        whatsapp: '4234543', 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject: "Química",
        cost: "20", 
        weekday: [
            0           //seria Domingo
        ], 
        time_from: [], 
        time_to: []  
    },//para mostar que tem mais de um
    {//objeto
        name: "Daniele Evangelista", 
        avatar: "https://danvizi.files.wordpress.com/2012/04/professor.jpg", 
        whatsapp: "4234543", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject: "Química",
        cost: "20", 
        weekday: [1],           //seria segunda
        time_from: [], 
        time_to: []  
    },
    {//objeto
        name: "Mayk Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp: "4234543", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject: "Química",
        cost: "20", 
        weekday: [1],          
        time_from: [], 
        time_to: []  
    }
]                 //para garantir que a substituição acima seja implementada eu devo instalar um pacote no terminal usando o comando:
//npm install nunjucks
