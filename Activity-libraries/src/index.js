import express from 'express'
import cors from 'cors'

import bibliotecariaRouter from './routes/bibliotecaria'

const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())

app.use('/bibliotecaria', bibliotecariaRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  
})