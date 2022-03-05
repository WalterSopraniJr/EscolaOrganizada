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

module.exports = separarPorAno