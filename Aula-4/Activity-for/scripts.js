do {
  numero = parseInt(prompt("Digite um número qualquer."));
}while (isNaN(numero) || numero <= 0) {
}

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} X ${i} = ${(numero * i)}`)
}

let y = 0
while (y != 10) {
  y++
  console.log(`${numero} X ${y} = ${(numero * y)}`)
  
}

let z = 0
do {
  z++
console.log(`${numero} X ${z} = ${(numero * z)}`)
  
}while (z != 10) {
}