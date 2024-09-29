import express, { response } from 'express'

import bcrypt from 'bcrypt'

import {v4 as uuidv4} from 'uuid'

const app = express()

app.use(express.json())

const trips = [
  {id: 1, nameTrip: 'Teste', priceTrip: 7000, quantityOnPromotion: 1}
]

// http://localhost:3000/trips
app.post('/trip', (request,response) => {
  
  const {nameTrip, priceTrip, quantityOnPromotion} = request.body

  if (!nameTrip) {
    return response.status(400).json({
      message: 'Nome da viagem é obrigatório'
    })
  }

  if (!priceTrip) {
    return response.status(400).json({
      message: 'Preço da viagem é obrigatório'
    })
  }

  const newTrip = {
    id: trips.length + 1,
    nameTrip,
    priceTrip,
    quantityOnPromotion: quantityOnPromotion ?? 0
  }

  trips.push(newTrip)
  
  return response.status(201).json({
    message: 'Viagem adicionada com sucesso',
    trips: newTrip
  })
})

app.get('/trip', (request,response) => {
  //const {filter} = request.query

  const filterTrips = trips

  if (filterTrips.length === 0) {
    return response.status(404).json({
      message: 'Nenhuma viagem encontrado'
    })
  }

  return response.status(200).json({filterTrips})
})



app.delete('/trip/:id', (request,response) => {
  const {id} = request.params

  const tripIndex = trips.findIndex(trip => trip.id === parseInt(id))

  if (tripIndex === -1) {
    return response.status(404).json({
      message:'Viagem não encontrado'
    })
  }

  const [deleteTrip] = trips.splice(tripIndex, 1 )

  return response.status(200).json({
    message: 'Viagem excluida com sucesso.',
    trip: deleteTrip
  })
})

const adminTrip =[]

app.post('/signup', async (request, response) => {
  try {
    const {username, password} = request.body

    const hashedPassword = await bcrypt.hash(password, 10)
    const existingTrip = adminTrip.find(trip => trip.username === username)
    if (existingTrip) {
      return response.status(400).json({
        message: 'Admin já existe.'
      })
    }

    const newTrip = {
      id: uuidv4(),
      username,
      password: hashedPassword
    }

    adminTrip.push(newTrip)
    return response.status(201).json({
      message: 'Admin cadastrado com sucesso.',
      newTrip
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
    
    const user = adminTrip.find(trip => trip.username === username)

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



