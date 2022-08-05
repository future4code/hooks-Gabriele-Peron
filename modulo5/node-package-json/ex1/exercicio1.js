const name = process.argv[2]

const age = Number(process.argv[3])

const ageAdd = age + 7

//console.log(`Olá, ${name}! Você tem ${age} anos.`)

console.log(
  `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageAdd}`
)
