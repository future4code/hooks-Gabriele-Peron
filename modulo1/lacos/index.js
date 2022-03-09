//Interpretação

//Escrita
//1
// const perguntaPets = Number(prompt("Quantos pets vocẽ tem?"))
// let totalPets = 0
// const nomesPets=[]

// if (perguntaPets === 0){
// console.log ("Que pena! Você pode adotar um pet!")
// }else{
// while (totalPets < perguntaPets){
//     totalPets++
//     perguntaNomesPets = prompt ("qual o nome deles?")
//     nomesPets.push(perguntaNomesPets)
// }
// }
// console.log(nomesPets)



//2
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// //a
// function imprime(array) {
//   for (let i = 0; i < arrayOriginal.length; i++) {
//     let imprimeIndice = arrayOriginal[i];

//     console.log(imprimeIndice);
//   }
// }

// imprime(arrayOriginal);

// //b
// function divideArray(dividir) {
//   for (let i = 0; i < arrayOriginal.length; i++) {
//     let divisao = arrayOriginal[i] / 10;

//     console.log(divisao);
//   }
// }
// divideArray(arrayOriginal);

// //c
// function soPares (numeroPar){
//    const arrayPar = []
//     for (let i = 0 ; i < arrayOriginal.length; i++){
      
//       if (numeroPar [i] %2 === 0){
//      arrayPar.push(numeroPar[i])
//       }
//    }
//    console.log (arrayPar)
// }
// soPares(arrayOriginal)

// //d
// function novoArray(string) {
//   for (let i = 0; i < arrayOriginal.length; i++) {
//     let novoArray = arrayOriginal[i];
//     console.log(`o elemento do index, ${i}, é: ${novoArray}`);
//   }
// }

// novoArray(arrayOriginal);

// //e
// function descobrirMaiorMenor(array) {
//   let numMaior = arrayOriginal [0]
//   let numMenor = arrayOriginal [0]
//     for (let i = 0; i < arrayOriginal.length; i++) {
//     if (array[i] > numMaior){
//         numMaior = array[i]
//     }else if(array[i] < numMenor){
//         numMenor = array[i]
    
//     }
//   }
//   console.log (`O maior número é ${numMaior} e o menor é ${numMenor}`)
// }
// descobrirMaiorMenor(arrayOriginal)