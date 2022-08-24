const person = (name:string, date:string):string => {
  const splitDate:string[] = date.split("/")
  const day:string = splitDate[0]
  const month:string = splitDate[1]
  const year:string = splitDate[2]
  return `Olá me chamo ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}.`
}

console.log (person("Gabriele","14/05/1984"))


//Eu preciso rever algumas aulas para poder resolver o restante dos exercicios, preferi não fazer a copiar.