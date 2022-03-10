//Interpretação
//1 - Ele imprime 


//2 -  Vai imprimir um array com os 3 nomes 


//3 - vai imprimir os nomes  e apelidos diferentes de Chijo


// Escrita

//1-
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]


//  const nomeDogs = pets.map ((nome) => {
//    console.log (nome.nome)
//  })

//  const hotDogs = pets.filter ((cofap)=>{
//     return cofap.raca === "Salsicha"

//  })
//  console.log (hotDogs)

//  const soPoodle = pets.filter ((achar)=>{
//     return achar.raca === "Poodle"
//  })

//  const descPoodle = soPoodle.map ((poodle)=>{
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`
//  })

//  console.log (descPoodle)

//2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]


// //a
//  const nomeItens = produtos.map((item)=>{
//      console.log (item.nome)
//  })

 
// //b
 
//  const nomeComDsconto = produtos.map ((item2)=>{
//     const desc = item2.preco * 0.05
//     const descTot = item2.preco - desc
    
//     console.log (`nome: ${item2.nome}, preço: ${descTot}` )
//  })


// //c
 
// const bebidas = produtos.filter ((categoria)=>{
//     return categoria.categoria === "Bebidas"
// })

// console.log (bebidas)

// //d

// const procuraYpe = produtos.filter (marca =>
// marca.nome.includes ("Ypê") )
// console.log (procuraYpe)


// //e

// const compreYpe = procuraYpe.map ((ype) =>{
//     console.log(`Compre ${ype.nome} por ${ype.preco}`)

// }) 



//Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]


//  const ordemAlfabetica = pokemons.sort(function(a, b) {
//     if(a.nome < b.nome) {
//       return -1;
//     } else {
//       return true;
//     }
//   });
//   console.log(ordemAlfabetica);

//   const tipoPoke = pokemons.map((pokeTipo) =>{
//    return pokeTipo.tipo 


//   })

// let noRepete = [new Set(tipoPoke)]
// console.log (noRepete)