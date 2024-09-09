const idade = 16

if (idade < 13) {
  console.log('Criança')
} else if (idade < 18) {
  console.log('Adolescente')
} else {
  console.log('Adulto')
}

numero = 8

switch (true) {
  case (numero > 5):
    console.log('O número é maior que 5.')
    break
  case (numero === 5):
    console.log('O número é igual a 5')
    break
  default:
    console.log('O número é menor que 5')
}

const idade2 = 20
const status = (idade2 >= 18) ? 'Adulto' : 'Menor'

console.log(status)
