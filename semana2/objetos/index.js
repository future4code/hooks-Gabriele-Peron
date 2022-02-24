// EXERCÍCIOS DE INTERPRETAÇÃO

//1
    //a. Matheus Nachtergaele
        // Virginia Cavendish
        // canal: "Globo", horario: "14h"



//2
    //a. nome: 'Juca', idade: 3, raca: 'SRD'
    //   nome: 'Juba', idade: 3, raca: 'SRD'
    //   nome: 'Jubo', idade: 3, raca: 'SRD'

   //b.  copia as propriedades de um determinado objeto.


//3
    //a. false
    //   undefined

    //b. False, pq a função puxou a informação "backender" do objeto "pessoa" e undefined pq não havia a proprieade "altura" declara no objeto

    


//Exercícios de Escrita


//1 a.
// const pessoa = {
//     nome: "Gabriele",
//     apelidos: ["gabi", "gá", "gábi"]
// }


// function apelidos(objeto){
    
//  console.log (`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]} `)
    
// }
// apelidos(pessoa)


//  //b.
//  const novoApelido = {
//      ...pessoa,
//     apelidos: ["bibi", "sei lá", "não to pensando"]
//  }
//      apelidos(novoApelido)


//2. a.

// const pessoa1 = {
//     nome: "Fábio",
//     idade: 41,
//     profissao: "comerciante"
// }

//     const pessoa2={
//         nome:"Rodinei",
//         idade: 8,
//     profissao:"estudante"
//     }
  
// //    // b.

//  function dadosUsuario (informacoes){
//      return [
//          informacoes.nome,
//          informacoes.nome.length,
//          informacoes.idade,
//          informacoes.profissao,
//          informacoes.profissao.length

//      ]
//  }
// console.log (dadosUsuario (pessoa1))
// console.log (dadosUsuario(pessoa2))

//3.  a.

//  const carrinho=[]

// //b.

// const fruta1 = {
//     nome:"morango",
//     disponibilidade: true
// }

// const fruta2 = {
//    nome: "laranja",
//    disponibilidade: false 
// }

// const fruta3 = {
//     nome: "banana", 
//     disponibilidade: true
// }

//c.

// function colocaNoCarrinho (fruta) {
//     carrinho.push(fruta)
//     }

// colocaNoCarrinho(fruta1)
// colocaNoCarrinho(fruta2)
// colocaNoCarrinho(fruta3)


//d.

// console.log (carrinho)





// DESAFIOS

// function desafio (){
//     const perguntaNome = prompt("Digite seu nome.")
//     const perguntaIdade = Number(prompt("Digite sua idade."))
//     const perguntaProfissao = prompt("Qual sua profissão?")
    
//     const respostas = {
//         nome: perguntaNome,
//         idade: perguntaIdade,
//         profissao: perguntaProfissao
// }

// console.log (respostas)

// }

// desafio()



//2.

// function filmes(){
//     const filme1 = {
//         nome: "matrix",
//         anoLancamento: 1998
//     }

//     const filme2 = {
//         nome: "rei arthur",
//         anoLancamento: 2008
//     }

//     const  quemLancouPrimeiro = filme1.anoLancamento < filme2.anoLancamento

//     const mesmoAnoDeLancamento = filme1.anoLancamento === filme2.anoLancamento

// console.log (`O filme ${filme1.nome} foi lançado antes do filme ${filme2.nome}: ${quemLancouPrimeiro}`)

// console.log (`O filme ${filme1.nome} foi lançado no mesmo ano do filme ${filme2.nome}: $${mesmoAnoDeLancamento}`)

// }

// filmes()


 

// const carrinho=[]

// const fruta1 = {
//     nome:"morango",
//     disponibilidade: true
// }

// const fruta2 = {
//    nome: "laranja",
//    disponibilidade: true 
// }

// const fruta3 = {
//     nome: "banana", 
//     disponibilidade: true
// }



// function colocaNoCarrinho (fruta) {
//     carrinho.push(fruta)
//     }

// colocaNoCarrinho(fruta1)
// colocaNoCarrinho(fruta2)
// colocaNoCarrinho(fruta3)


// console.log(carrinho)


// //3.

// function controleDeEstoque (fruta) {
//     return [fruta.disponibilidade = !fruta.disponibilidade]
// }


// console.log(controleDeEstoque(fruta2))
