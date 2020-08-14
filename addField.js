// lógica de progamação é pensar e refletir sobre aquilo que o computador ira fazer
//tem que esplicar bem certinho para o computador

//selecionar o local de ação
document.querySelector("#add-time")
.addEventListener("click", cloneField)  //colocar um objeto para executar aquela ação, o addeventlistner
//quando eu clicar no botão que ele execute um função
//como coneField não existe eu irei cria-lo

function cloneField() {//abro e fecho parênteses, porque eu quero que essa função me de um retorno, mesmo que seja null

    console.log("Eu me chamo Daniel Matos")//esses console.log mostra o que eu escrever entre os parenteses no console do navegador


    //                                        CLONAR

    //selecionar que campo primeiro, porque o computador não deduz nada
    const newFieldContainder = document.querySelector('.schedule-item')//eu usei uma var para guardar o clone em algum lugar. o cont é de constante, eu quer que o valor de newFieldContainder seja sempre constante 
    //duplicar o campo com o objeto node, que é usado para estrutruras HTML, lembrar sempre daquilo de pais e filhos, pacotes e caixas, como uma árvore mesmo. Esse node inclui um clone, pórem se o nó for verdadeiro ele irá copiar também as ramificações, que são bem uteis considerando que eu peguei uma div. Por isso eu coloco true
    .cloneNode(true)


    //                                        Limpar os dados


    //que campos? Devo selecionar dentro do newFieldContainder, ou seja, o .schedule-item todos os inputs(resultados)
    const fields = newFieldContainder.querySelectorAll("input")//agora o fields recebe todas as respostas dados no .schedule-item
    
    //para saber se é verdade: 
    console.log(fields[0].value)
    console.log(fields[1].value)
    //ele vai me retornar uma lista de nosn os nos sempre vem entre [] e começam com o número 1, logo é: [input 0, input 1]
    
        //primeiro jeito de limpar:
    //fields[0].value = ""
    //pegar cada valor e fazer com que ele passe a valer null
    //fields[1].value = ""

        //segundo jeito de limpar:
    //selecionar
    fields
    //estrutura de repetição, para que toda vez que for ter o fields ele fazer o que está dentro
    .forEach(function(field) {//eu coloco esse fields para mostrar o que vai ser repetido, essa função será aplicada ao field do momento,que recebe o fields, esse é como se fosse um comentário da função

        //esse objeto irineu pega para sí o valor do fields e o value zera ele e passa para o fields

        console.log(field)

        field.value = ''  //eu tenho que usar esse field, porque aí ele pega o fields, passa para ele, deixa o fields buscar outro valor e ainda zera o valor. Ele basicamente altera o valor

    })


    
    //                                        COLOCAR NA PÁGINA

    //primeiro se deve selecionar onde colocar o clone 
    document.querySelector('#schedule-items')
    //é importante notar que eu selecionei o pai do item que foi clonado, eu escolhi a caixa grande
    //agora eu devo fazer um comando para o seletor, que no caso é colocar o filho
    .appendChild(newFieldContainder)
}

