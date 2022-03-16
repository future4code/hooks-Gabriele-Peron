// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((pares) => {
        return pares % 2 === 0
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pares = array.filter((numPar) => {
        return numPar = numPar % 2 === 0

    })
    return pares.map((num) => {
        return num * num
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)

    // Obrigada Helanny por falar para pesquisar sobre Math max e Math min...hehe, mas eu fiz usando for também


    // let numMaior = array[0]
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] > numMaior) {
    //         numMaior = array[i]
    //     }
    // } return numMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numMaior
    let numMenor

    if (num1 > num2) {
        numMaior = num1
        numMenor = num2
    } else {
        numMaior = num2
        numMenor = num1
    }
    let maiorDivisivelMenor = numMaior % numMenor == + 0
    let diferenca = numMaior - numMenor

    return {
        maiorNumero: numMaior,
        maiorDivisivelPorMenor: maiorDivisivelMenor,
        diferenca: diferenca
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for (let total = 0; array.length < n; total++) {
        if (total % 2 === 0) {
            array.push(total)
        }
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    //const filme = {
    //     nome: 'O Diabo Veste Prada',
    //     ano: 2006,
    //     diretor: 'David Frankel',
    //     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    // }
    // // const separaAtor = filme.atores.map((item, index)=>{
    // //     if(index === 0){
    // //       return  item
    // //     } else {
    // //       return  " "+item
    // //     }

    // // })


    // // return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${separaAtor}.`
    // return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome: "ANÔNIMO"
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}