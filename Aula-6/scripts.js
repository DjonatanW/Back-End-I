const listaDeCompras = ['Maçã', 'Banana', 'Uva']
console.log(listaDeCompras)
const fruta = listaDeCompras[0]
console.log(fruta)

const alunos = ['João', 'Marcelo', 'Lucas']
// verificar tamanho do array
console.log(alunos.length)

alunos[3] = 'Carla'
console.log(alunos)
alunos[alunos.length] = 'Djonatan'
console.log(alunos)

const array = [1,2,3,4]

//Não pode trocar de tipo
//array = 'Dj'

for (let i = 0; i < listaDeCompras.length; i++) {
  console.log(listaDeCompras[i])
}

for(const item of listaDeCompras) {
  console.log(item)
}

let indice = 0
while (indice < listaDeCompras.length) {
  console.log(listaDeCompras[indice])
  indice++
}

indice = 0
do {
  console.log(listaDeCompras[indice])
  indice++
} while(indice < listaDeCompras.length)

  //Adiciona no final do array
listaDeCompras.push('Laranja')
console.log(listaDeCompras)

//Adiciona o elemento no inicio do array
listaDeCompras.unshift('Morango')
console.log(listaDeCompras)

//Remove a última posição
listaDeCompras.pop()
console.log(listaDeCompras)

//Remove o primeiro elemento do array
// listaDeCompras.shift()
// console.log(listaDeCompras)

//Retorna o Indice de onde está o elemento
// const indice2 = listaDeCompras.indexOf('Banana')
// console.log(indice2)

// Agrupa todos os elementos em um só 
const numeros = [10, 20, 30, 40, 50, 60]
console.log(numeros.join())
console.log(numeros.join(' . '))

console.log(listaDeCompras)

console.log(listaDeCompras.slice(0, 2))

delete listaDeCompras[2]
console.log(listaDeCompras)

const linguagem = []

linguagem[0] = 'JavaScript'
linguagem[1] = 'Python'
linguagem[2] = 'Java'
linguagem[3] = 'C#'

console.log(linguagem)

linguagem.forEach((fruta, indice, array) => {
  console.log(fruta,indice)
  console.log(array)
}) 

let continuar = confirm("Deseja inserir outra nota?")
