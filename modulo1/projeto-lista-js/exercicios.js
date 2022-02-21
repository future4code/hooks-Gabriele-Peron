// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const mensagemAltura = Number(prompt("Digite a altura do seu retângulo"))
  const mensagemLargura = Number(prompt("Agora digite a altura")) 
console.log(mensagemAltura*mensagemLargura)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Em que ano estamos?"))
const anoNascimentoUsuario = Number(prompt("Em que ano você nasceu?"))
console.log(anoAtual-anoNascimentoUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nomeUsuario = prompt ("Digite seu nome?")
let idadeUsuario = prompt ("Digite sua idade")
let emailUsuario = prompt ("Digite seu e-mail")
console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

const cor1 = prompt("Digite sua cor favorita")
const cor2 = prompt("Digite sua segunda cor favorita")
const cor3 = prompt("Agora digite a terceira cor favorita")
console.log ([cor1, cor2, cor3])



}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const ingressosAVender=custo/valorIngresso
return ingressosAVender
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length == string2.length


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimoArray=array[array.length -1]

return ultimoArray
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const arrayNumeros = array
const primeiroNumero=array.shift()
const ultimoNumero=array.pop()
const incluindoPrimeiroNoUltimo=array.push(primeiroNumero)
const incluindoUltimoNoPrimeiro=array.unshift(ultimoNumero)

return arrayNumeros
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() == string2.toUpperCase()
}

//EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtualDesafio=Number(prompt("Digite o ano Atual"))
  const anoNascimentoUsuarioDesafio=Number(prompt("Em que ano voĉe nasceu?"))
  const anoIdentidade=Number(prompt("Digite o ano em que tirou sua identidade"))
  
  const resultadoIdade= anoAtualDesafio-anoNascimentoUsuarioDesafio
  const renovacao = anoAtualDesafio-anoIdentidade 
  
  const idade1 = resultadoIdade <= 20 && renovacao >=5
  const idade2 = resultadoIdade > 20 && resultadoIdade <=50 && renovacao >=10
  const idade3 = resultadoIdade > 50 && renovacao >15

  const renovaOunao = idade1 || idade2 || idade3
  console.log (renovaOunao)
   
} 
  

// // EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


const ehbissexto1 = ano % 400 === 0
const ehbissexto2 = ano % 4 === 0 && ano % 100 !== 0
const resposta = ehbissexto1 || ehbissexto2
return resposta



}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const perguntaIdade = prompt("Você tem mais de 18 anos?")
const perguntaGraduação = prompt("Você possui ensino médio completo?")
const perguntaDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
const maiorDeIdade = perguntaIdade ==="sim"
const ensinoMedio = perguntaGraduação ==="sim"
const temTempo = perguntaDisponibilidade==="sim"

const respostas = maiorDeIdade && ensinoMedio && temTempo

console.log (respostas)
}