import express, { response } from 'express'

const app = express()

// interceptador -> middleware
const myLogger = (request, response, next) => {
  console.log('Logged')
  next()
}

// middleware gloobal -> Todas as rotas serão interceptadas
app.use(myLogger)


const adminMiddleware = (request, response, next) => {
  console.log('Middleware admin')
  next()
}

app.get('/admin', adminMiddleware, (request, response) => {
  response.json({
    message:'Página admin!'
  })
})

app.get('/', (request, response)=>{
  response.json({
    message:'Hello, middleware!'
  })
})

app.get('/users', (request, response)=>{
  response.json({
    message:'Lista de usuários!'
  })
})


app.listen(3000)