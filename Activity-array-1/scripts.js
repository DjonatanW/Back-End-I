//Activity 1
let nomes = ['Carla', 'Juliana', 'Simone', 'Pamela']
for(const nome of nomes) {
  document.write(`${nome}<br>`)
}

//Activity 2
let numeros = [1, 2, 3, 4, 5]
let soma = 0 
for(const numero of numeros) {
  soma += numero
}
document.write(`${soma}<br>`)

//Activity 3
let frutas = ['Morango', 'Banana', 'Maçã']
frutas.push('Bergamota')

frutas.pop()

frutas.unshift('Laranja')

frutas.shift()

document.write(frutas)

