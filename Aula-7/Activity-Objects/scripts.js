const biblioteca = []

const livros1 = {
  titulo: 'Código Limpo',
  autor: 'Robert C. Martin',
  numeroPaginas: 400,
  FoiLido: true
}

const livros2 = {
  titulo: 'Manual de DevOps',
  autor: 'Gene Kim',
  numeroPaginas: 450,
  FoiLido: false
}

const livros3 = {
  titulo: 'Engenharia de Sofware',
  autor: 'Roger Pressman',
  numeroPaginas: 450,
  FoiLido: false
}

biblioteca.push(livros1, livros2, livros3)

for (const livro of biblioteca) {
  console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Número de páginas: ${livro.numeroPaginas}, Foi lido: ${livro.FoiLido ? 'Sim' : 'Não'}`)
}

const novaBiblioteca = []
for (const livro of biblioteca) {
  if (livro.autor === 'Roger Pressman') {
    novaBiblioteca.push(livro)
  }
}

console.log(novaBiblioteca)
console.log(biblioteca)

for (const livro of novaBiblioteca) {
  biblioteca.push(livro)
}
console.log(novaBiblioteca)
console.log(biblioteca)

for (const livro of biblioteca) {
  if (livro.titulo === 'Manual de DevOps') {
     livro.FoiLido = true
  }
}

for (const livro of biblioteca) {
  console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Número de páginas: ${livro.numeroPaginas}, Foi lido: ${livro.FoiLido ? 'Sim' : 'Não'}`)
}