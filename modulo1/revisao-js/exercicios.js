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
    const soPares = array.filter((pares) => {
        if (pares % 2 === 0) {
            return pares
        }
    })
    return soPares


    //DESAFio

    // const arrayPar = []
    // for (let i = 0; i < array.length; i++) {

    //     if (array[i] % 2 === 0) {
    //         arrayPar.push(array[i])
    //     }
    // }
    // return arrayPar
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
    for (let pares = 0; array.length < n; pares++) {
        if (pares % 2 === 0) {
            array.push(pares)
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
    array = array.sort((a, b) => a - b)
    let novoArray = [array[array.length - 2], array[1]]
    return novoArray
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
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
    let autorizada = []
    for (let pessoa of pessoas)
        if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            autorizada.push(pessoa)
        }
    return autorizada
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoAutorizada = []
    for (let pessoa of pessoas)
        if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            naoAutorizada.push(pessoa)
        }
    return naoAutorizada

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let cliente of contas) {
        for (let compras of cliente.compras) {
            cliente.saldoTotal = cliente.saldoTotal - compras
        }
        cliente.compras = []
        return contas
    }


}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordena = consultas.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1
        } else {
            return true
        }
    })
    return ordena


    // Pesquisando achei outra forma

    // return consultas.sort((a, b) => {
    //     return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)

    // });


}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}

