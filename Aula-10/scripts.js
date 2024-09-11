const arrayVazio = []

const arrayComValores = [1, 2, 3]

console.log(arrayComValores[arrayComValores.length - 1])

const arr = [1, 2,3, 4, 5, 6]

arr.push(3)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(0)
console.log(arr)

arr.shift()
console.log(arr)

arr.forEach(function(valor, indice, arr) {
  console.log(indice , valor, arr)
})

for (const valor of arr) {
  console.log(valor)
}

arr.forEach((valor, indice) => {
  console.log(valor, indice)
})

arr.forEach((valor, indice) => console.log(valor, indice))

arr.map((valor, indice) => console.log(valor * 2, indice))

const newArray = arr.map(function(valor) {
  return valor * 2 
})

console.log(newArray)

console.log(arr)

console.log(arr.filter(valor => valor >= 4))

console.log(arr.find(valor => valor >= 3))
console.log(arr.findIndex(valor => valor >= 6))

console.log(arr.some(valor => valor >= 7))
arr.splice(1, 2)
console.log(arr)
arr.slice(1,3)
console.log(arr)
