const listaAlunos = require('./listaAlunos')
const primeiroAno = []
const segundoAno = []
const terceiroAno = []
const quartoAno = []
const quintoAno = []


function separaPorAno(array) {

    for (let index = 0; index <= array.length; index++) {
        let atual = array[index]
        let idadeComparada = 7

        if (atual.idade == idadeComparada) {
           primeiroAno.push(atual) 
           console.log(`Aluno analisado ${atual}`)
        }
    }
    
}

console.log(separaPorAno(listaAlunos))