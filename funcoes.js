function separarPorAno(array, idadeComparada, anoLetivo) {

    let alunoAtual = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i].idade == idadeComparada) {
            alunoAtual.push(array[i]);
            array[i].ano = anoLetivo
        }

    }

    return alunoAtual;
}

function google(array, nomeAluno) {

    let nomePesquisado = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i].nome == nomeAluno) {
            nomePesquisado.push(array[i]);
        }

    }

    return nomePesquisado;
}

function listaDeChamada(a, b) {

    let A = a.nome.toUpperCase()
    let B = b.nome.toUpperCase()

    return A == B ? 0 : A > B ? 1 : -1
}

module.exports = separarPorAno, google, listaDeChamada