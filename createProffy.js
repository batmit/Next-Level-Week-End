// inserir dados no banco de dados


//vai receber o banco de dados e também todos esses objetos criados anteriormente
//sem a apalavra async não posso colocar o await na função
module.exports = async function(db, {proffyValue, classValue, classScheduleValues, }){
    //inserir dados na table proffys
    //coloco o then em baixo porque demora um tempinho para executar, ele vai tentar executar 
    

    //.then()  //não preciso usare o then, invez disso peço pra esperar até que o computador faça o que eu pedi
    //vai retornar alguma coisa por isso que eu uso uma variavel constante 
    const insertedProffy = await db.run(`
        
        INSERT INTO proffys(
            name,
            avatar,
            whatssapp,
            bio
        ) VALUES (

            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatssapp}",
            "${proffyValue.bio}"

        );

    `)

    const proffy_id = insertedProffy.lastID           //recebo por essa variável o último ID inserido

    //inserir dados na tabela classes

    const insertedClass =  await db.run(`
    
            INSERT INTO classes (

                subject,
                cost,
                proffy_id

            ) VALUES (

                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"

            ); 
    
    `)

    const class_id = insertedClass.lastID      //vou recebe o ultimo id do class_id
    
    //inserir dados na tabela class_schedule
            
    //como esse valor abaixo não sei quantos vai ser e é um array, vouy usar uma estrutura de repetição
    //esse map vai mapear usando uma função, ele tem mais ou menos a amesma funão do forEach. Ele recebe o valor
    //vai organizar os dados em um array
   const insertedAllClasseScheduleValues = classScheduleValues.map( (classSchedulevalue)  => { //vai receber os valores do classScheduleValues
        //quando eu faço um retorno no map ele transforma esse em uma array, que vai ser recebido lá em baixo.
        //e ele vai rodar quantas vezes forem necessárias
        return db.run(`
        
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (

                "${class_id}",
                "${classSchedulevalue.weekday}",
                "${classSchedulevalue.time_from}",
                "${classSchedulevalue.time_to}"
                

            );
        
        `)

    })  

    //aqui vou executar todos os db.runs() das class schedules
    //vou aguardar a promessa feita pelo computador de me retornar algo
    await Promise.all(insertedAllClasseScheduleValues)   //vai guardar um e esperar o outro, até que tudo termine

    
}