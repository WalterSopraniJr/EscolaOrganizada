const listaAlunos = require('./listaAlunos')
const primeiroAno = []
const segundoAno = []
const terceiroAno = []
const quartoAno = []
const quintoAno = []



function separaPorAno(array, idade, anoLetivo) {

    for (let index = 0; index <= array.length; index++) {
        //console.log(`aluno avaliado ${array[index].nome}, idade: ${array[index].idade}`)
        //console.log(array[index])
        let alunoAtual = array[index]

        if (array[index].idade == idade) {
            console.log(anoLetivo[index])
            anoLetivo.push(index) 
            return anoLetivo         
               
        } else {
            index++
        }
      
    }

    console.log(`Os alunos do ano são: ${anoLetivo}`)

    return array
}

console.log(separaPorAno(listaAlunos, 7, primeiroAno))
//console.log(`Os alunos do primeiro ano são: ${primeiroAno}`)
