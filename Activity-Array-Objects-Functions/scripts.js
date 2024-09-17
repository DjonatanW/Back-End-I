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
      

  }
}

