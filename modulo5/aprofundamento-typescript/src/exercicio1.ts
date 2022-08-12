//a-
// const myString: string = 14
// dá erro tipo string não pode ser atribuido number

// b-

// const myNumber: number | string = 14

// usando operador OU 


//c- 
// const personOne:{name: string, age: number, favoriteColor: string} = {
//   name: "",
//   age: 26,
//   favoriteColor: ""
// }

// const personTwo:{name: string, age: number, favoriteColor: string} = {
//   name: "",
//   age: 26,
//   favoriteColor: ""
// }

// const personThree:{name: string, age: number, favoriteColor: string} = {
//   name: "",
//   age: 26,
//   favoriteColor: ""
// }


type Person = {
  name: string,
  age: number,
  favoriteColor: string
}


//d-
 enum Colors {
  VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
 }