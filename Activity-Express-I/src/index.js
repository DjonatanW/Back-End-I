import express, { response } from 'express'
import {v4 as uuidv4} from 'uuid'
const app = express()

app.use(express.json())

const cars = [
  {id: 1, model: "Civic", mark: "Honda", ano: "2014/2015", color: "Azul", price: 40.000},
  {id: 2, model: "Corolla", mark: "Toyota", ano: "2018/2019", color: "Cinza", price: 150.000}
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

