//Activity 1 
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00]

console.log(salarios.findIndex(salario => salario > 7500))
console.log(salarios.filter(salario => salario > 8000))

// Activity 2

const rainbowJames = ["Vermelho", "Laranja", "Preto", "Azul"]
console.log(rainbowJames)
rainbowJames.splice(2,1)
console.log(rainbowJames)
rainbowJames.splice(2, 0, "Amarelo", "Verde")
console.log(rainbowJames)
rainbowJames.splice(rainbowJames.length, 0, "Roxo")
console.log(rainbowJames)

// Activity 3
let pessoas = []
let continuar = true

while (continuar) {
  const nome = prompt('Digite um nome')
  
  let idade = 0 
  do {
    idade = parseInt(prompt('Digite a idade'))
    if (isNaN(idade) || idade <= 0) {
      alert('Idade digita inválida. Favor informar a idade novamente')
    }
  } while (isNaN(idade) || idade <= 0)
  {
  }
  let salario = 0.00 
  let trabalha = confirm('A pessoa trabalha')
  if (trabalha) {
    do {
      salario = parseFloat(prompt('Digite o salário'))
      if (isNaN(salario) || salario <= 0) {
        alert('Salário digito inválido. Favor informar o salário novamente')
      }
    } while (isNaN(salario) || salario <= 0)
    {
    }  
  }
  pessoas.push({
    nome,
    idade,
    trabalha,
    salario
  })
  continuar = confirm('Deseja continuar?')
  if (!continuar) {
    break
  }
}

pessoasDesempregadas = pessoas.filter(pessoa => !pessoa.trabalha)
pessoasEmpregadasSalarioMenor = pessoas.filter(pessoa => pessoa.trabalha && pessoa.salario < 2500)
pessoasEmpregadasSalarioMaior = pessoas.filter(pessoa => pessoa.trabalha && pessoa.salario >= 2500)

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
