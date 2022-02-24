// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

//A. Ele pede um número ao usuario, e testa se o numero é par
//B. Numeros pares
//C. Numeros impares


//2. a. Serve para identificar os preços das frutas
//   b. 2.25
//   c. O preço da fruta Pêra é R$  5

//3. a. Pedindo ao Usuário para digitar um número
//   b. Esse número passou no teste
//      dará erro
//   c. sim dará erro, pois a estrutura não esta correta, para imprimir a segunda mensagem de secreta teriamos que colocar um else e o console.log dentro do escopo.




// EXERCÍCIOS DE ESCRITA DE CÓDIGOS



// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// const perguntaIdade = Number (prompt("Digite sua idade."))

    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


// if ( perguntaIdade < 18) {
//     console.log ("Você não pode dirigir.")
// } else if ( perguntaIdade >= 18) {
//         console.log ("Você pode dirigir")
//     }


//     2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
   

//     const perguntaHorarioDeEstudo = prompt ("Digite o horário em que estuda. Digite M para manhã, V para vespertino ou N para noturno.")

//     if (perguntaHorarioDeEstudo.toUpperCase() === "M") {
//         console.log ("Bom Dia!")
//     }
//     else if (perguntaHorarioDeEstudo.toUpperCase() === "V") {
//         console.log ("Boa tarde!")
//     }
//     else if (perguntaHorarioDeEstudo.toUpperCase() === "N") {
//         console.log ("Boa Noite!")
//     }


//     3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
   
//     const perguntaHorarioDeEstudo = prompt ("Digite o horário em que estuda. Digite M para manhã, V para vespertino ou N para noturno.")

//     switch (perguntaHorarioDeEstudo) {
//         case "M" : 
//             console.log ("Bom Dia!") 
//             break;
//             case "V" : 
//             console.log ("Boa tarde!")
//             case "N":
//             console.log ("Boa Noite!")
//         default:
//             break;
//     }

//     4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

//     const perguntaGenero = prompt("Qual o gênero do filme que iremos assistir?")

//     const perguntaValorIngresso = Number (prompt("Quanto custa o ingresso?"))


// if (perguntaGenero.toUpperCase () === "FANTASIA" && perguntaValorIngresso < 15 ) {
//     console.log ("Bom Filme!")
// }

// else {
// console.log("Escolha outro filme")
// }



// DESAFIOS

// 1
//     const perguntaGenero = prompt("Qual o gênero do filme que iremos assistir?")

//     const perguntaValorIngresso = Number (prompt("Quanto custa o ingresso?"))

   

// if (perguntaGenero.toUpperCase () === "FANTASIA" && perguntaValorIngresso < 15 ) {
//     const perguntaLanche = prompt ("Qual lanchinho vai comprar?")
//     console.log (`Bom Filme! e aproveite seu/sua ${perguntaLanche}` )
// }

// else {
// console.log("Escolha outro filme")
// }




//  2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;

// const nomeCompleto = prompt("Digite seu nome completo")

// - Tipo de jogo: IN indica internacional; e DO indica doméstico;

// const tipoDeJogo = prompt("Qual tipo de jogo você quer assistir? Digite IN para internacional ou DO para doméstico")

// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final

// const etapaDoJogo = prompt("Digite SF para semi-final\n DT para decisão de terceiro lugar e \n FI se for final")

// - Categoria: pode ser as opções 1, 2, 3 ou 4;

// const categoria = Number (prompt ("Categoria 1, 2, 3 ou 4?"))

// - Quantidade de ingressos

// const quantidadeIngresso = Number(prompt("Qual a quantidade de ingressos?"))


// if (tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "SF" && categoria === 1) {
//   const valorFinal = quantidadeIngresso * 1320.00
//    console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Semi-Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 1320.00
// Valor Total: R$ ${valorFinal}.00 `)
// }

// else if(tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "SF" && categoria === 2) {
//     const valorFinal = quantidadeIngresso * 880.00
//      console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Semi-Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 880.00
// Valor Total: R$ ${valorFinal}.00 `)
//   }

//   else if(tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "SF" && categoria === 3) {
//     const valorFinal = quantidadeIngresso * 550.00
//      console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Semi-Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 550.00
// Valor Total: R$ ${valorFinal}.00 `)
//   }

  
//   else if(tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "SF" && categoria === 4) {
//     const valorFinal = quantidadeIngresso * 220.00
//      console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Semi-Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 220.00
// Valor Total: R$ ${valorFinal}.00 `)
//   }


//   if (tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "DT" && categoria === 1) {
//     const valorFinal = quantidadeIngresso * 660.00
//      console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Decisão Terceiro Lugar
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 660.00
// Valor Total: R$ ${valorFinal}.00 `)
//   }
  
//   else if(tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "DT" && categoria === 2) {
//       const valorFinal = quantidadeIngresso * 440.00
//        console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Decisão Terceiro Lugar
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 440.00
// Valor Total: R$ ${valorFinal}.00 `)
//     }

//     else if(tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "DT" && categoria === 3) {
//         const valorFinal = quantidadeIngresso * 330.00
//          console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Decisão Terceiro Lugar
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 330.00
// Valor Total: R$ ${valorFinal}.00 `)
//       }

//       else if(tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "DT" && categoria === 4) {
//         const valorFinal = quantidadeIngresso * 170.00
//          console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Decisão Terceiro Lugar
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 170.00
// Valor Total: R$ ${valorFinal}.00 `)
//       }

//       if (tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "FI" && categoria === 1) {
//         const valorFinal = quantidadeIngresso * 1980.00
//          console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 1980.00
// Valor Total: R$ ${valorFinal}.00 `)
//       }
      
//       else if(tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "FI" && categoria === 2) {
//           const valorFinal = quantidadeIngresso * 1320.00
//            console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 1320.00
// Valor Total: R$ ${valorFinal}.00 `)
//         }

//         else if(tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "FI" && categoria === 3) {
//             const valorFinal = quantidadeIngresso * 880.00
//              console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 880.00
// Valor Total: R$ ${valorFinal}.00 `)
//           }

//           else if(tipoDeJogo.toUpperCase() === "DO" && etapaDoJogo.toUpperCase() === "FI" && categoria === 4) {
//             const valorFinal = quantidadeIngresso * 330.00
//              console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Doméstico
// Etapa do jogo: Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: R$ 330.00
// Valor Total: R$ ${valorFinal}.00 `)
//           }


//           //-------------INTERNACIONAL--------------


// if (tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "SF" && categoria === 1) {
//     const valorFinal = (quantidadeIngresso * 1320.00) * 4.10
//      console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Semi-Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 1320.00
// Valor Total: U$ ${valorFinal}.00 `)
//   }
  
//   else if(tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "SF" && categoria === 2) {
//       const valorFinal = (quantidadeIngresso * 880.00) * 4.10
//        console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Semi-Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 880.00
// Valor Total: U$ ${valorFinal}.00 `)
//     }
  
//     else if(tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "SF" && categoria === 3) {
//       const valorFinal = (quantidadeIngresso * 550.00) * 4.10
//        console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Semi-Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 550.00
// Valor Total: U$ ${valorFinal}.00 `)
//     }
  
    
//     else if(tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "SF" && categoria === 4) {
//       const valorFinal = (quantidadeIngresso * 220.00) * 4.10
//        console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Semi-Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 220.00
// Valor Total: U$ ${valorFinal}.00 `)
//     }
  
    
//     if (tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "DT" && categoria === 1) {
//       const valorFinal = (quantidadeIngresso * 660.00) * 4.10
//        console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Decisão Terceiro Lugar
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 660.00
// Valor Total: U$ ${valorFinal}.00 `)
//     }
    
//     else if(tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "DT" && categoria === 2) {
//         const valorFinal = (quantidadeIngresso * 440.00) * 4.10
//          console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Decisão Terceiro Lugar
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 440.00
// Valor Total: U$ ${valorFinal}.00 `)
//       }
  
//       else if(tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "DT" && categoria === 3) {
//           const valorFinal = (quantidadeIngresso * 330.00) * 4.10
//            console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Decisão Terceiro Lugar
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 330.00
// Valor Total: U$ ${valorFinal}.00 `)
//         }
  
//         else if(tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "DT" && categoria === 4) {
//           const valorFinal = (quantidadeIngresso * 170.00) * 4.10
//            console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Decisão Terceiro Lugar
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 170.00
// Valor Total: U$ ${valorFinal}.00 `)
//         }
  
//         if (tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "FI" && categoria === 1) {
//           const valorFinal = (quantidadeIngresso * 1980.00) * 4.10
//            console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 1980.00
// Valor Total: U$ ${valorFinal}.00 `)
//         }
        
//         else if(tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "FI" && categoria === 2) {
//             const valorFinal = (quantidadeIngresso * 1320.00) * 4.10
//              console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 1320.00
// Valor Total: U$ ${valorFinal}.00 `)
// }
  
//           else if(tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "FI" && categoria === 3) {
//               const valorFinal = (quantidadeIngresso * 880.00) * 4.10
//                console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 880.00
// Valor Total: U$ ${valorFinal}.00 `)
// }  
//             else if(tipoDeJogo.toUpperCase() === "IN" && etapaDoJogo.toUpperCase() === "FI" && categoria === 4) {
//               const valorFinal = (quantidadeIngresso * 330.00) * 4.10
//                console.log (`---Dados da compra---
// Nome do cliente: ${nomeCompleto}
// Tipo do Jogo: Internacional
// Etapa do jogo: Final
// Categoria: ${categoria}
// Quantidade de ingressos: ${quantidadeIngresso}
// ---Valores---
// Valor do ingresso: U$ 330.00
// Valor Total: U$ ${valorFinal}.00 `)
//     }
            
           