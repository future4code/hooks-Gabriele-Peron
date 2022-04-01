´´function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  ´´let quantidadeNumero = 0
  ´´if(arrayDeNumeros.includes (numeroEscolhido)){
    ´´for(let numero of arrayDeNumeros){
      ´´if (numero === numeroEscolhido){
        ´´quantidadeNumero++
      }
    }
    ´´return `O número ${numeroEscolhido} aparece ${quantidadeNumero}x`
  }´´else{
    ´´return "Número não encontrado"
  }
}
