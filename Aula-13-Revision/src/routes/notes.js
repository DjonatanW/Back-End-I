import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import {users} from './users'

const router = express.Router()

const notes = []

router.get('/:userId', (request, response) => {
  const {userId} = request.params

  const user = users.find(user => user.id === userId)

  if (!user) {
    return response.status(404).json({
      message: 'Usuário não encontado.'
    })
  }

  const userNotes = notes.filter(note => note.userId === userId)

  if (userNotes.length === 0) {
    return response.status(404).json({
      message: 'Notas não encontadas.'
    })
  }

  response.status(200).json({
    message: 'Notas filtradas com sucesso.',
    userNotes
  })
})


router.post('/create', (request, response) => {
  const { title, description, userId } = request.body

  const user = users.find(user => user.id === userId)

  if (!user) {
    return response.status(404).json({
      message: 'Usuário não encontado.'
    })
  }

  const newNote = {
    id: uuidv4(),
    title,
    description,
    userId
  }

  notes.push(newNote)

  return response.status(201).json({
    message: 'Recado cadastrado com sucesso.',
    note: newNote
  })
})

router.put('/:id', (request, response) => {
  const { id } = request.params
  const { title, description } = request.body

  const note = notes.find(note => note.id === id)
  if (!note) {
    return response.status(404).json({
      message: 'Recado não encontrado'
    })
  }

  note.title = title
  note.description = description

  return response.status(200).json({
    message: 'Recado atualizado com sucesso.',
    note
  })
})

router.delete('/:id', (request,response) => {
  const { id } = request.params

  const noteIndex = notes.findIndex(note => note.id === id)
  if (noteIndex === -1) {
    return response.status(404).json({
      message: 'Recado não encontrado'
    })
  }

  //const deletetedNote = notes.splice(noteIndex, 1)[1]
  const [ deletetedNote ] = notes.splice(noteIndex, 1)
  
  return response.status(200).json({
    message: 'Recado deletado com sucesso.',
    deletetedNote
  })

})

export default router