import express, { response } from 'express'
import cors from 'cors'

import bcrypt from 'bcrypt'

import {v4 as uuidv4} from 'uuid'

const app = express()

// api publica, qualquer origem pode acessar
// app.use(cors())
// app.use(cors({
//   origin: ['http://example.com', 'http://seufrontend.com']
// }))
app.use(express.json())

// Endpoint de teste
// app.get('/', (request, response) => {
//   response.send('Olá, express!')
// })

const users = [
  {id:1, name: 'Alice', available: true},
  {id:2, name: 'Bob', available: false},
  {id:3, name: 'Carol', available: true}
]

// http://localhost:3000/users
// app.get('/users', (request, response) => {
//   if (users.length === 0) {
//     return response.status(404).json({
//       message:'Nenhum usuário não encontrado'
//     })
//   }
//   return response.json(users)
// })

// http://localhost:3000/users
app.post('/users', (request,response) => {

  const {name, available} = request.body

  if (!name) {
    return response.status(400).json({
      message: 'Nome de usuário é obrigatório.'
    })
  }
  const newUser = {
    id: users.length + 1,
    name,
    available: available ?? true
  }

  users.push(newUser)
  return response.status(201).json({
    message: 'Usuário adicionado com sucesso',
    user: newUser
  })
})

//http://lacalhost:3000/users/2
app.put('/users/:id', (request,response) => {

  const {id} = request.params // pegando parametros da rota
  const {name: updateUser, available} = request.body // pegando o corpo da requisição

  const user = users.find(user => user.id === parseInt(id))

  if (!user) {
    return response.status(404).json({
      message: 'Usuário não encontrado.'
    })
  }

  user.name = updateUser
  user.available = available

  return response.status(200).json({
    message: 'Usuário atualizado com sucesso',
    user
  })
})

// http://lacalhost:3000/users?filtro=ativo
app.get('/users', (request, response) => {
  const {filtro} = request.query

  let filteredUsers

  if (filtro === 'ativo') {
    filteredUsers = users.filter(user => user.available === true)
  } else if (filtro === 'inativo') {
    filteredUsers = users.filter(user => user.available === false)
  } else {
    filteredUsers = users
  }

  if (filteredUsers.length === 0) {
    return response.status(404).json({
      message: 'Nenhum usuário encontrado'
    })
  }

  return response.status(200).json({filteredUsers})

})

app.delete('/users/:id', (request,response) => {
  const {id} = request.params

  const userIndex = users.findIndex(user => user.id === parseInt(id))

  if (userIndex === -1) {
    return response.status(404).json({
      message:'Usuário não encontrado'
    })
  }

  // const deleteUser = users.splice(userIndex, 1)[0]
  // para deletar mais de um elemento
  // const [deleteUser, outraVariavel] = users.splice(userIndex, 2 )
  const [deleteUser] = users.splice(userIndex, 1 )

  // status  code no-content
  // return response.status(204) 
  return response.status(200).json({
    message: 'Usuário excluido com sucesso.',
    user: deleteUser
  })
})

const adminUser =[]

app.post('/signup', async (request, response) => {
  try {
    const {username, password} = request.body

    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = adminUser.find(user => user.username === username)
    if (existingUser) {
      return response.status(400).json({
        message: 'Usuário já existe.'
      })
    }

    const newUser = {
      id: uuidv4(),
      username,
      password: hashedPassword
    }

    adminUser.push(newUser)
    return response.status(201).json({
      message: 'Admin cadastrado com sucesso.',
      newUser
    })
  } catch(error) {
    response.status(500).json({
      message: `Erro ao registrar admin. ${error}`
    })
  }
})

app.post('/login', async (request, response) =>{
  try {
    const {username, password} = request.body
    
    const user = adminUser.find(user => user.username === username)

    if (!user) {
      return response.status(404).json({
        message: 'Admin não encontrado'
      })
    }

    const isMath = await bcrypt.compare(password, user.password)

    if (!isMath) {
      return response.status(400).json({
        message: 'Credenciais inválidas'
      })
    }

    return response.status(200).json({
      message: 'Login feito com sucesso.'
    })

  } catch(error) {
    response.status(500).json({
      message: `Erro ao registrar admin. ${error}`
    })
  }
})


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})




