const listaAlunos = require('./listaAlunos')

//const listaLivros = require('./array')

function encontraMenores(pivo, array) {
    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {
        let alunoAtual = array[atual]
        // o pivo não é declarado como variavel, ele é declarado no console.log e no if utiliza o preço para comparar
        if(alunoAtual.nasc < pivo.nasc) {
            menores++
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores)
    return array
}

function trocaLugar(array, de, para) {
    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
    
}

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)]
    console.log(pivo)
    encontraMenores(pivo, array)
    let alunosMenores = 0

    for(let analisando = 0; analisando <= array.length; analisando++) {
        let atual = array[analisando];
        if(atual.nasc < pivo.nasc && atual !== pivo) {
            trocaLugar(array, analisando, alunosMenores)
            alunosMenores++
        }
    }

    return array
}

console.log(divideNoPivo(listaAlunos))
console.log(encontraMenores(listaAlunos[2], listaAlunos))

module.exports = trocaLugar
