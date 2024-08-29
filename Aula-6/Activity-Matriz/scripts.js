const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for (let i = 0; i < matriz.length; i++) {
  for (let y = 0; y < matriz[i].length; y++) {
    console.log(matriz[i][y])
  }
}

for (const i of matriz) {
  for (const valorElemento of i) {
    console.log(valorElemento)
  }
}

let anoVenceu = [1959, 1962, 1970, 1994, 2002]
for(const ano of anoVenceu) {
  console.log(`O Brasil ganhou a copa de ${anoVenceu}.`)  
}

console.log(`O Brasil ganhou a copa de ${anoVenceu.join(' , ')}.`)

let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

for(const tipoFruta of frutas) {
  if (tipoFruta === 'Pera') {
    break
  } 
}

let ultimafruta = frutas[frutas.length-1]
console.log(ultimafruta)
console.log(frutas)
