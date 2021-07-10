const livros = require("./database");

const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro (S/N) ?');

if(entradaInicial.toLocaleUpperCase() == 'S') {
  console.log("Essas são as categorias disponíveis: ")
  console.log("Ação | Terror | Suspense")

  const entradaCategoria = readline.question("Qual categoria vocẽ escolhe: ")
  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  console.table(retorno)
} 
else {
  const livrosOrdenados = livros.sort((a,b) => a.pagina - b.pagina )
  console.log("Esses são todos os livros disponíveis:")
  console.table(livrosOrdenados)
}