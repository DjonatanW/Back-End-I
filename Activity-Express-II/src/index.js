import express, { request, response } from 'express'
import {v4 as uuidv4} from 'uuid'
import bcrypt from 'bcrypt'

const app = express()

app.use(express.json())

const cars = [
  {id: "1", model: "Civic", mark: "Honda", ano: "2014/2015", color: "Azul", price: 40000},
  {id: "2", model: "Corolla", mark: "Toyota", ano: "2018/2019", color: "Cinza", price: 150000}
]

app.post('/cars', (request,response) => {

  const {model,mark,year,color,price} = request.body
  if (!model) {
    return response.status(400).json({
      message: 'Modelo é obrigatório'
    })
  }

  if (!mark) {
  return response.status(400).json({
  message: 'Marca é obrigatório' 
  })
  }

  if (!year) {
    return response.status(400).json({
    message: 'Ano é obrigatório' 
    })
  }

  if (!color) {
    return response.status(400).json({
    message: 'Cor é obrigatório' 
    })
  }

  if (!price) {
    return response.status(400).json({
    message: 'Preço é obrigatório' 
    })
  }


  const newCar = {
    id: uuidv4(),
    model,
    mark,
    year,
    color,
    price
  }

  cars.push(newCar)

  return response.status(201).json({
  message: 'Carro cadastrado com sucesso.',
  newCar
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})

app.get('/getAllCars', (request,response) => {


  const filterCars = cars
  
  if (filterCars.length === 0) {
    return response.status(404).json({
      message: 'Nenhum carro encontrado'
    })
  }
  
  return response.status(200).json({filterCars})
})

app.get('/filterCars', (request,response) => {

  const {filter} = request.query

  let filterCars = cars.filter(car => car.mark === filter)

  if (filterCars.length === 0) {
    return response.status(404).json({
      message: 'Nenhum carro encontrado'
    })
  }
  
  return response.status(200).json({filterCars})
})

app.put('/cars/:id', (request,response) => {
  const{id} = request.params
  const {color, price} = request.body

  const car = cars.find(car => car.id === id)

  if (!car) {
    return response.status(400).json({
    message: 'Veículo, não encontrado.' 
  })
  }

  car.color = color
  car.price = price

  return response.status(200).json({
    message: 'Veículo atualizado com sucesso.',
    car
  })

})

app.delete('/cars/:id', (request,response) => {
  const{id} = request.params

  const carIndex = cars.findIndex(car => car.id === id)

  if (carIndex === -1) {
    return response.status(404).json({
      message: 'Veículo não encontrado' 
    })
  }

  const [deleteCar] = cars.splice(carIndex,1)

  return response.status(200).json({
  message: 'Veículo excluído com sucesso.',
  car: deleteCar
  })

})

const adminUser =[]

app.post('/signup', async (request, response) => {
  try {
    const {username,email, password} = request.body

    if (!username || !email || !password) {
      return response.status(400).json({
        message: 'Credenciais inválidas' 
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = adminUser.find(user => user.email === email)
    if (existingUser) {
      return response.status(400).json({
        message: 'Usuário já existe.'
      })
    }
    
    const newUser = {
      id: uuidv4(),
      username,
      email,
      password: hashedPassword
    }

    adminUser.push(newUser)
    return response.status(201).json({
      message: 'Usuário cadastrado com sucesso.'
    })
  } catch(error) {
    response.status(500).json({
      message: `Erro ao registrar usuário. ${error}`
    })
  }
})

app.post('/login', async (request, response) =>{
  try {
    const {email, password} = request.body
    
    const user = adminUser.find(user => user.email === email)

    if (!user) {
      return response.status(404).json({
        message: 'Usuário não encontrado'
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
      message: `Erro ao registrar Usuário. ${error}`
    })
  }
})