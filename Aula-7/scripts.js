
//Sem o uso de objetos
let nomes = []
let emails = []
let telefones = []


nomes.push('Djonatan')
emails.push('djonatan11021996@gmail.com')
telefones.push('999999999')

console.log(nomes[0])
console.log(emails[0])
console.log(telefones[0])

const pessoa = {
  id: 1,
  primeiroNome: 'Djonatan',
  ultimoNome: 'Weber',
  idade: 28,
  temFilhos: false,
  endereco: {
    rua: 'nome da rua',
    cidade: 'Bom Principio'
  },
  tecnologia: ['Javascript','React']
}

console.log(typeof pessoa)
console.log(pessoa)
console.log(pessoa.id)
console.log(pessoa.primeiroNome)
console.log(pessoa.idade)

const carro = {}

carro.marca = 'Chevrolet'
carro.modelo = 'Prisma'
carro.ano = 2008
carro.cor = 'Vermelho'

const titulo = 'Roube como um artista'
const autor = 'Austin Kleon'
const publicacao = 2015

const livro = {
  titulo,
  autor,
  publicacao,
  'ano-publicacao': 2021
}

console.log(livro)

livro.titulo = 'Mostre seu trabalho'

console.log(livro)
console.log(livro["publicacao"])

console.log(livro['publi' + 'cacao'])

delete livro.titulo
console.log(livro)



const aluno = {
  nome: 'Djonatan', 
  idade: 18,
  curso: 'Web Full Stack'
}

console.log(aluno.nome)
aluno.nota = 10
console.log(aluno)
aluno.curso = 'PS Web Full Stack'
console.log(aluno)
console.log(`O aluno ${aluno.nome} é ${aluno.idade >= 18 ? 'maior' : 'menor'} de 18 anos.`)

let ponto1 = {x: 0, y: 0}
let ponto2 = {x: 0, y: 0}

console.log(ponto1 === ponto2) 
  
let ponto3 = {x: 0, y: 0}
let ponto4 = ponto3
console.log(ponto4 === ponto3)

ponto3.x = 30

console.log(ponto3)
console.log(ponto4)

let nome = 'DJ'
let nome2 = nome

console.log(nome)
console.log(nome2)

nome = 'DJO'

console.log(nome)
console.log(nome2)

const livro3 = {
  titulo: 'Clean Code',
  autor: 'Robert C. Martin',
  paginas: 500,
  idioma: 'English',
  estaDisponivel: true
}

for (const key in livro3) {
  console.log(key)
}

const pessoa4 = {
  id: 1,
  nome: 'Djonatan'
}

for (const key in pessoa4) {
  console.log(key)
  console.log(pessoa4[key])
}

const livro5 = {}
for (const key in livro3) {
  livro5[key] = livro3[key]
}
console.log(livro5)
console.log(livro3)



const carros = []
const carro2 = {
   marca: 'Ford',
   modelo: 'Fiesta',
   ano: 2020,
   cor: 'Branco'
}

const carro3 = {
  marca: 'GM',
  modelo: 'Prisma',
  ano: 2008,
  cor: 'Branco'
}

const carro4 = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2024,
  cor: 'Preto'
}
carros.push(carro2, carro3, carro4)

console.log(carros)

for (let i = 0; i < carros.length; i++) {
  console.log(`Marca: ${carros[i].marca}, Modelo: ${carros[i].modelo}, Ano: ${carros[i].ano}, Cor: ${carros[i].cor}`)
}

for (const carro of carros) {
  console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}, Cor: ${carro.cor}`)
}

const pessoas2 = []
const quantidadePessoas = Number(prompt('Quantas pessoas deseja cadastrar?'))

for ( let i = 0; i < quantidadePessoas; i++) {
  const nome = prompt('Digite o nome da pessoa')
  const idade = prompt('Digite a idade da pessoa')
  const cidade = prompt('Digite a cidade da pessoa')

  pessoas2.push( {
    nome,
    idade,
    cidade
  })
}
console.log(pessoas2)

//while

let continuar = true
const pessoas3 = []
while (continuar) {  
  
  const nome = prompt('Digite o nome da pessoa')
  const idade = prompt('Digite a idade da pessoa')
  const cidade = prompt('Digite a cidade da pessoa')

  pessoas3.push( {
    nome,
    idade,
    cidade
  })
  
  continuar = confirm('Deseja continuar cadastrando?')
  if (!continuar) {
    break
  }
}
console.log(pessoas3)