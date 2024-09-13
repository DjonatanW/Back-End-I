/*
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

const numeroAleatorio = Math.floor(Math.random() * 10) + 1
let tentativas = 0
let acertou = false

while(!acertou) {
  const numero = parseInt(prompt('Digite um número'))
  tentativas ++
  if (numero === numeroAleatorio) {
    alert(`Parabéns você acertou em ${tentativas} tentativas`)
    acertou = true
  } else {
    alert('Tente novamente!')
  } 

}

const numeroAleatorio2 = Math.floor(Math.random() * 10) + 1
let tentativas2 = 0
let acertou2 = false

do {
  const numero = parseInt(prompt('Digite um número'))
  tentativas ++
  if (numero === numeroAleatorio2) {
    alert(`Parabéns você acertou em ${tentativas2} tentativas`)
    acertou2 = true
  } else {
    alert('Tente novamente!')
  } 
}while(!acertou2) {
}

for (let tentativas = 0; !acertou; tentativas++) {

}
*/
const frutas = ['Maça', 'Banana', 'Uva']
for (const fruta of frutas) {
  console.log(fruta)
}

const livro = {
  titulo: 'A única coisa',
  numeroPaginas: 250,
  idioma: 'english'
}

for (const chave in livro) {
  console.log(livro[chave])
}
