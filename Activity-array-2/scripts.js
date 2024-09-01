//Activity 1
let vetorElementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for (let i = 0; i < 15; i++) {
  if (vetorElementos[i] % 2 === 0) {
    console.log(vetorElementos[i])
  }
}

//Activity 2
let vetorSoma = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let somaVetor = 0

for (let i = 0; i < 20; i++) {
  somaVetor += vetorSoma[i]
}
console.log(`Soma dos elementos do vetor é:${somaVetor}`)

//Activity 3
let numerosPerfeitos = []
let numero = 2

while (numerosPerfeitos.length < 4) {
  let somaDivisores = 1

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      somaDivisores += i
    }
  }

  if (somaDivisores === numero) {
    numerosPerfeitos.push(numero)
  }

  numero++
}

console.log(`Primeiros 4 números perfeitos: ${numerosPerfeitos}`)

// Activity 4
let lista = [3, 8, 1, 5, 9, 7, 2, 6, 4, 0]
let numeroUsuario = 5

let encontrado = false

for (let i = 0; i < 10; i++) {
  if (lista[i] === numeroUsuario) {
    encontrado = true
    break
  } 
}

if (encontrado) {
    console.log('O número está na lista.')
} else {
    console.log('O número não está na lista.')
}

//Activity 5
let nomes = [];

for (let i = 0; i < 5; i++) {
  let nome = prompt('Digite um nome:')
  nomes.push(nome)
}

console.log(`Nomes na ordem original: ${nomes}`)

nomes.reverse()

console.log(`Nomes na ordem inversa: ${nomes}`)
