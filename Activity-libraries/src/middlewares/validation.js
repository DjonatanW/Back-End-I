export function validateBibliotecariaRegistration(request, response, next) {
  const {name, password } = request.body


  if (!name || !password) {
    return response.status(400).json({
      message: 'O preenchimento dos campos é obrigatório.'
    })
  }

  next()
  
}

