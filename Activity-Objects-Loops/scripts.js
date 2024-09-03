//Activity 1 
const produto = {
  descricao: 'Mouse',
  preco: 90
}

console.log(`Descrição: ${produto.descricao}, Preço: ${produto.preco}.`)

//Activcity 2
const notebook = {
  processador: 'i7',
  memoria: '16GB',
  preco: 5000,
  hd: '1TB',
  ssd: '256GB'
}

console.log(`Processador:${notebook.processador}, Memória: ${notebook.memoria}, Preço:${notebook.preco}, HD: ${notebook.hd}, SSD: ${notebook.ssd}.`)

//Activity 3 
const alunos = []
const aluno1 = {
  nome: 'Djonatan',
  nota1: 10,
  nota2: 9
}

const aluno2 = {
  nome: 'Vini',
  nota1: 8,
  nota2: 9
}

alunos.push(aluno1, aluno2)

let mediaAlunos = 0 
for (const aluno of alunos) {
  console.log(`Aluno ${aluno.nome}, teve a primeira nota: ${aluno.nota1}, e segunda nota: ${aluno.nota2} com média de ${((aluno.nota1 + aluno.nota2) / 2).toFixed(2)}.`)
  mediaAlunos+= (aluno.nota1 + aluno.nota2) / 2
}

console.log(`A média da turma foi ${mediaAlunos / alunos.length}`)
