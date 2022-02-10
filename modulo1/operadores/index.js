/*
1-
a. false
b.false
c.true
d.boolean

2-  23

3-

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = Number (primeiroNumero) + Number (segundoNumero)


console.log(soma)

*/

//Exercicio de escrita


//1

let idadeDoUsuario = Number (prompt("Digite sua Idade"))
let idadeMelhorAmigo = Number (prompt("Digite a Idade do seu(sua) Melhor Amigo(a)"))
let maisVelho = idadeDoUsuario > idadeMelhorAmigo
let diferençaDeIdade = idadeDoUsuario - idadeMelhorAmigo

console.log("Sua idade", idadeDoUsuario, "anos")
console.log("Idade do seu melhor amigo", idadeMelhorAmigo, "anos")
console.log("Você é mais velho que seu amigo?", maisVelho)
console.log( "A diferença de idade entre vocês dois é de", diferençaDeIdade, "anos")


//2

let numeroPar = Number (prompt("Digite um número par"))
let restoDivisao = numeroPar % 2
 console.log ("Seu numero par foi", numeroPar, "se o dividirmos por 2 o resto da divisão será", restoDivisao)

 //resultado sempre será 0, pois todo numero par divido por 2 não sobra resto, porem se colocarmos um numero impar teremos resto


 //3    

 let idadeUser = prompt ("Digite sua idade")
 let idadeMeses = Number(idadeUser) * 12
 let idadeDias = Number (idadeUser) * 365
 let idadeHoras = Number (idadeUser) * 24*365


 console.log (idadeUser, "anos, você tem", idadeMeses, "meses,", idadeDias, "dias e ", idadeHoras, "horas de vida.")


 // 4

 let digiteNumero = prompt("Digite um número")
 let digiteOutroNumero = prompt ("Digite mais um Numero")

 let maiorNumero = Number (digiteNumero) > (digiteOutroNumero)
console.log (digiteNumero, digiteOutroNumero)
console.log("O primeiro número é maior que o segundo?", maiorNumero)

let igual = Number (digiteNumero) === (digiteOutroNumero)
console.log("O primeiro número é igual ao  segundo?", maiorNumero)

let divisao = Number (digiteNumero) / (digiteOutroNumero)
console.log("O primeiro número é divisivel pelo segundo?", maiorNumero)

let divisao2 = Number (digiteNumero) / (digiteNumero)
console.log ("O segundo número é divisivel pelo primeiro?", maiorNumero)




// DESAFIO 1

let temp1 = (77-32)*(5/9) + 273.15
console.log(temp1, "°K")

let temp2 = (80)*(9/5)+32
console.log(temp2, "°F")

let temp3 = (30)*(9/5)+32
let temp4 = (temp3-32)*(5/9) + 273.15
console.log(temp3, "°F", temp4, "°K")

//DESAFIO 2

let kw1=280*0.05
console.log("R$", kw1)

let kw2=kw1*0.85
console.log("R$", kw2)

//DESAFIO 3

let lb = 20/2.205
console.log("20lb equivalem a", lb, "Kg")

let onca= 10.5/35.274
console.log("10.5oz equivalem a", onca, "Kg")

let milhas= 100*1609.34
console.log("100 milhas equivalem a", milhas, "metros")

let pes=50/3.281
console.log("50 pés equivalem a", pes, "metros")

let galao=103.56*3.785
console.log("103.56gal equivalem a", galao, "litros")

let xic=(450*6)/25
console.log("450xic equivalem a", xic, "litros")



let pergunta = Number (prompt("Quantas milhas você quer converter para metros?"))
let resultado1= pergunta*1609.34
console.log(pergunta, "milhas equivalem a", resultado1, "metros") 









