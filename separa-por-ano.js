const listaAlunos = require('./listaAlunos')
const primeiroAno = []
const segundoAno = []
const terceiroAno = []
const quartoAno = []
const quintoAno = []


function separarPorAno (array, idadeComparada, anoLetivo) {

    let alunoAtual = [];

    for(let i = 0; i < array.length; i++) {

        if(array[i].idade == idadeComparada) {
            alunoAtual.push(array[i]);
            array[i].ano = anoLetivo
        }

    }

    return alunoAtual;
}


    primeiroAno.push(separarPorAno(listaAlunos, 7, 1));
    console.log("Os alunos cadastrados no primeiro ano são:")
    console.log(primeiroAno)

    segundoAno.push(separarPorAno(listaAlunos, 8, 2));
    console.log("Os alunos cadastrados no segundo ano são:")
    console.log(segundoAno)

    terceiroAno.push(separarPorAno(listaAlunos, 9, 3));
    console.log("Os alunos cadastrados no terceiro ano são:")
    console.log(terceiroAno)

    quartoAno.push(separarPorAno(listaAlunos, 10, 4));
    console.log("Os alunos cadastrados no quarto ano são:")
    console.log(quartoAno)

    quintoAno.push(separarPorAno(listaAlunos,11, 5));
    console.log("Os alunos cadastrados no quinto ano são:")
    console.log(quintoAno)

   
