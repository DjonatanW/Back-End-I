import express from 'express'
import bcrypt from 'bcrypt'

import { validateBibliotecariaRegistration } from './../middlewares/validation'

const router = express.Router()

const bibliotecarias = []

router.post('/create', validateBibliotecariaRegistration, async (request, response) => {
  try {
    const { name, password } = request.body

    const hasheadPassword = await bcrypt.hash(password, 10)

    const newBibliotecaria = {
      id: bibliotecarias.length + 1,
      name,
      password: hasheadPassword
    }

    bibliotecarias.push(newBibliotecaria)

    return response.status(201).json({
      message: `Bibliotecária cadastrada com sucesso! Seu número de registro é ${newBibliotecaria.id}`
    })

  } catch(error) {
    return response.status(500).json({
      message: `Erro ao registrar bibliotecária. ${error}`
    })
  }
})

router.get('/:id', (request, response) => {
  try {
    const {id} = request.params

    if (!id) {
      return response.status(404).json({
        message: 'Bibliotecária não encontada.'
      })
    }

    const bibliotecariaFilter = bibliotecarias.find(bibliotecaria => bibliotecaria.id === id)

    if (!bibliotecariaFilter) {
      return response.status(404).json({
        message: 'Bibliotecária não encontada.'
      })
    }

    response.status(200).json({
      message: `A bibliotecária com esse registro é ${bibliotecariaFilter.name}`
    })
  } catch(error) {
    return response.status(500).json({
      message: `Erro ao buscar bibliotecária. ${error}`
    })
  }
})

export default router
