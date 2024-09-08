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

//Activity 4

let pessoas = []


let continuar = true
while (continuar) {
  let pessoaFuncionario = {}
  pessoaFuncionario.nome = prompt('Digite um nome')
  
  pessoaFuncionario.idade = 0 
  do {
    pessoaFuncionario.idade = parseInt(prompt('Digite a idade'))
    if (isNaN(pessoaFuncionario.idade) || pessoaFuncionario.idade <= 0) {
      alert('Idade digita inválida. Favor informar a idade novamente')
    }
  } while (isNaN(pessoaFuncionario.idade) || pessoaFuncionario.idade <= 0)
  {
  }
  pessoaFuncionario.salario = 0.00 
  pessoaFuncionario.trabalha = confirm('A pessoa trabalha')
  if (pessoaFuncionario.trabalha) {
    do {
      pessoaFuncionario.salario = parseFloat(prompt('Digite o salário'))
      if (isNaN(pessoaFuncionario.salario) || pessoaFuncionario.salario <= 0) {
        alert('Salário digito inválido. Favor informar o salário novamente')
      }
    } while (isNaN(pessoaFuncionario.salario) || pessoaFuncionario.salario <= 0)
    {
    }  
  }
  pessoas.push(pessoaFuncionario)
  continuar = confirm('Deseja continuar?')
  if (!continuar) {
    break
  }
}
let pessoasDesempregadas = []
let pessoasEmpregadasSalarioMenor = []
let pessoasEmpregadasSalarioMaior = []
for (const pessoa of pessoas) {
  if (!pessoa.trabalha) {
    pessoasDesempregadas.push(pessoa)
  } else if (pessoa.salario < 2500) {
    pessoasEmpregadasSalarioMenor.push(pessoa)
  } else if (pessoa.salario >= 2500) {
    pessoasEmpregadasSalarioMaior.push(pessoa)
  }
}

console.log('Pessoas desempregadas:')
for (const pessoa of pessoasDesempregadas) {
  console.log(`Nome:${pessoa.nome}, Idade:${pessoa.idade}`)
}

console.log('Pessoas empregadas com salários menores que 2500:')
for (const pessoa of pessoasEmpregadasSalarioMenor) {
  console.log(`Nome:${pessoa.nome}, Idade:${pessoa.idade}, Salário:${pessoa.salario.toFixed(2)}`)
}

console.log('Pessoas empregadas com salários maiores que 2500:')
for (const pessoa of pessoasEmpregadasSalarioMaior) {
  console.log(`Nome:${pessoa.nome}, Idade:${pessoa.idade}, Salário:${pessoa.salario.toFixed(2)}`)
}