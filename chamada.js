const listaAlunos = require('./listaAlunos')
const primeiroAno = require('./separaPorAno')
const segundoAno = require('./separaPorAno')
const terceiroAno = require('./separaPorAno')
const quartoAno = require('./separaPorAno')
const quintoAno = require('./separaPorAno')

const listaDeChamada = require('./funcoes')

primeiroAno.sort(listaDeChamada)
console.log("Lista de chamada do Primeiro Ano.")
console.log(primeiroAno)

segundoAno.sort(listaDeChamada)
console.log("Lista de chamada do Segundo Ano.")
console.log(segundoAno)

//terceiroAno.sort(listaDeChamada)
console.log("Lista de chamada do Terceiro Ano.")
console.log(terceiroAno.sort(listaDeChamada))

quartoAno.sort(listaDeChamada)
console.log("Lista de chamada do Quarto Ano.")
console.log(quartoAno)

quintoAno.sort(listaDeChamada)
console.log("Lista de chamada do Quinto Ano.")
console.log(quintoAno)
