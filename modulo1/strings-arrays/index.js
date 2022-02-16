/* EXERCICIOS DE INTERPRETAÇÃO

    1-
        a. undefined
        b. null
        c. 11
        d. 3
        e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        f. 9

    
    2-
        SUBI NUM ONIBUS EM MIRROCOS

*/

// EXERCÍCIOS DE ESCRITA


//const nomeUsuario = prompt("Digite seu nome")
//const emailDoUsuario = prompt("Agora digite seu e-mail")
//console.log (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeUsuario}.`)


//2

/*



let comidas = ["churrasco", "lasanha", "macarrão", "nhoque", "legumes"]
console.log(comidas)

console.log (`Essas são minhas comidas preferidas: 
${comidas [0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)

const comidaUsuario = prompt("Qual sua comida preferida?")
let comidaPreferidaUsuario=1
comidas [comidaPreferidaUsuario] =comidaUsuario
console.log (comidas)

*/



//3
/*
let listaDeTarefas = []

let tarefa1 = prompt("Tarefa 1")
listaDeTarefas.push (tarefa1)
let tarefa2 = prompt("Tarefa 2")
listaDeTarefas.push (tarefa2)
let tarefa3 = prompt("Tarefa 3")
listaDeTarefas.push (tarefa3)

console.log([tarefa1, tarefa2, tarefa3])

 const tarefaRealizada = Number(prompt("Digite o numero da tarefa realizada, 0, 1 ou 2"))

 listaDeTarefas.splice (Number(tarefaRealizada),1)
console.log(listaDeTarefas)
*/



//DESAFIOS


//1
/*
const fraseNormal = prompt("Escreva uma frase aqui")
const separandoParaArray = fraseNormal.split(/[\s,]+/)
console.log(separandoParaArray)

Nesse Caso eu procurei e encontrei um exemplo usando .split(/[\s,]+/), porém não entendi a combinação (/[\s,]+/) é uma decoreba ou tem algum sentindo? Eu até entendi o .split em si, a combinação não encontrei nada. 

*/

//2
/*
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
 const indice = frutas.indexOf("Abacaxi")
const tamanhoArray = frutas.length
console.log(`A palavra "Abacaxi" está no índice de número ${indice} e o tamanho do array é ${tamanhoArray}.`)

*/
