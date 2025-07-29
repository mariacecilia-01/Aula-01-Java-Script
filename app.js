/**************************************************************************** 
 * Objetivo: Iniciar os primeiros comandos em Node.JS
 * Autor: Maria Cecilia
 * Data: 29/07/2025
 * Versão: 1.0
*****************************************************************************/

/*comentário em bloco*/
//comentário em linha

//Import da biblioteca para fazer entrada de dados via terminal
//(Iremos utilizar ela de forma provisória)
var readline = require('readline')

//criando um objeto de entradaDeDados para captar ou printar dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o seu nome: ',function(nome){
    var nomeUsuário = nome

    if(nomeUsuário == ''){
        console.log('Não foi possível processar a solicitação')
    }else{
        //String()-> Converte um objeto em String
        //toUpperCase() - Converte o conteúdo de uma string em MAIÚSCULO
    console.log('O nome digitado foi: ' + String(nomeUsuário).toUpperCase())
    console.log(nome)
    }

    entradaDeDados.close() //Fecha a interface de entrada de dados do readline
})

/*
console.log('aula 01 de  Node.JS')

//Declarando variável
var nome = '666'

//Exemplo de concatenação de dados (simbolo de (+))
console.log('O nome digitado foi ' + nome)

//Exemplo de concatenação de método reduzido
console.log(`O nome digitado foi ${nome}`)

//type of -> permite mostrar o tipo de dados de um objeto ou variável
console.log(typeof(nome))*/