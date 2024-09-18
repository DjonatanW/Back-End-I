const data = [
  {
  nome: 'Roger Medeiros',
  sexo: 'M',
  salario: 3250,
  },
  {
  nome: 'Carolina Silva',
  sexo: 'F',
  salario: 1200,
  },
  {
  nome: 'Cristina Avila',
  sexo: 'F',
  salario: 8100,
  },
  {
  nome: 'Gustavo Hoffman',
  sexo: 'M',
  salario: 5200.35,
  },
  {
  nome: 'Eva Trindade',
  sexo: 'F',
  salario: 2501,
  },
  {
  nome: 'Andre Mathias',
  sexo: 'M',
  salario: 1750,
  },
  {
  nome: 'Joice Castro da Silva',
  sexo: 'F',
  salario: 3350.25,
  },
];

function printerTotalPersons() {
  data.forEach((person, index) =>
    console.table(`${index}: Nome:${person.nome}, Sexo:${person.sexo}, Salário:${person.salario}`)
  )
}
 
function printerFemaleGender() {
  let personsFemale = data.filter(person => person.sexo ==='F')
  personsFemale.forEach((person, index) => 
    console.table(`${index + 1}: Nome:${person.nome}, Sexo:${person.sexo}, Salário:${person.salario}`) 
)}

function printerSumSalary() {
  let sum = data.reduce((soma, user) => {
    return soma + user.salario
  }, 0)
  console.log(`A soma dos salários é R$${sum.toLocaleString('pt-BR', { minimumFractionDigits: 2 , maximumFractionDigits: 2})}`);
}

function printerAverageSalary() {
  let sum = data.reduce((soma, user) => {
    return soma + user.salario
  }, 0)
  console.log(`A média dos salários é R$${(sum / data.length).toLocaleString('pt-BR', { minimumFractionDigits: 2 , maximumFractionDigits: 2})}`);
}

function printerSumSalaryMale() {
  let sum = data.reduce((soma,user) => {
    return user.sexo === 'M' ? soma + user.salario : soma
  },0)
  
  console.log(`A soma dos salários masculinos é R$${sum.toLocaleString('pt-BR', { minimumFractionDigits: 2 , maximumFractionDigits: 2})}`);
}

function printerAverageSalaryMale() {
  let {sum, count} = data.reduce((acc,user) => {
    if (user.sexo === 'M') {
      acc.sum += user.salario
      acc.count ++
    }
    return acc
  },{sum:0, count: 0})
  
  let average = count > 0 ? sum / count : 0
  console.log(`A média dos salários masculinos é R$${average.toLocaleString('pt-BR', { minimumFractionDigits: 2 , maximumFractionDigits: 2})}`);
}

function printerExistsSalaryBigger7000() { 
  let existsSalary = data.includes(person => person.salario > 7000)
  console.log(`Existe salário maior de 7.000 ${existsSalary}`)
}


let opcao = 1
while (opcao != 0) {
  opcao = parseInt(prompt(
    `Escolha uma opção:
     1 - Listar todos
     2 - Listar sexo Feminino
     3 - Listar a soma de salário de todos 
     4 - Listar média de salário de todos 
     5 - Listar soma de salário do sexo masculino
     6 - Listar média do salário masculino
     7 - Verificar se exsite salário maior de 7.000
     8 - Posição da pessoa 'Eva Trindade
     9 - Listar pessoas com o sobrenome 'Silva' 
    10 - Imprimir todos os nomes usando MAP
     0 - Sair`
  ))
  
  switch (opcao) {
    case 1:
      printerTotalPersons()
      break
    case 2:
      printerFemaleGender()
      break
    case 3:
      printerSumSalary()
      break 
    case 4:
      printerAverageSalary()
      break
    case 5:
      printerSumSalaryMale()
      break
    case 6:
      printerAverageSalaryMale()
      break
      case 7:
        printerExistsSalaryBigger7000()
        break
  }
}

