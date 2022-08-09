const operationMath = process.argv[2]

const number1 = Number(process.argv[3])

const number2 = Number(process.argv[4])


const sum = number1 + number2

const sub = number1 - number2

const mult = number1 * number2

const div = number1 / number2

switch (operationMath.toLowerCase()) {
  case 'add':
    console.log(sum)
    break
  case 'sub':
    console.log(sub)
    break
  case 'mult':
    console.log(mult)
    break
  case 'div':
    console.log(div)

    break
}
