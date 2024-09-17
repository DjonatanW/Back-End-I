users = []
users.push({id: 1, 
            name: 'admin', 
            email: 'admin', 
            password: 'admin'
          })
          
function newUser() {
  let userRegistry = true
  while (userRegistry) {
    const id = users.length + 1
    const name = prompt("Informe o nome do usuário:")
    const email = prompt("Informe o e-mail:")
    const password =  prompt("Informe a senha:")
    
    userRegistry = users.find(user => user.email === email)
    if (userRegistry) {
      alert('E-mail já cadastrado. Digite outro e-mail')
      continue
    } 
    users.push({id,name,email,password})
  }
  
}

function listUsers() {
  users.forEach((usuario, indice) => {
    console.log(`${indice}. Nome:${usuario.name}, email:${usuario.email}, password: ${usuario.password}`)
  })
}

function autenticacao() {
  const email = prompt('Digite o email')
  const password = prompt('Digite a senha')
  let autorizado = users.some(user => user.email === email && user.password === password)

  return autorizado
}

function encerrarPrograma() {
  console.log('Programa encerrado') 
}

let opcao = 0
let autenticado = autenticacao()
if (!autenticado) {
  console.log('Usuário não permitido')
  encerrarPrograma()
}
while(opcao != 5) {
 
  opcao = parseInt(prompt(
  `Escolha uma opção:
   1 - Adicionar Usuário
   2 - Listar usuários
   3 - Trocar de Usuário
   5 - Sair`))
  switch (opcao) {
    case 1:
      newUser()
      break
    case 2:
      listUsers()
      break
    case 3:
      autenticacao()
      break
    case 4:
      // const indice = parseInt(prompt('Digite a posição que o livro se encontra para excluir'))
      // excluirLivro(indice)
      break
    case 5:
      encerrarPrograma()
      break
    default:
      alert('Opção inválida')
      break
  }
}