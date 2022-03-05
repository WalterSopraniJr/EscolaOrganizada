const listaAlunos = require('./listaAlunos')
const separarPorAno = require('./funcoes')

let primeiroAno = []
let segundoAno = []
let terceiroAno = []
let quartoAno = []
let quintoAno = []

let resultadoPesquisa = []

//------------Coloca-Lista-em-Ordem-Alfabética------------

listaAlunos.sort( function(a, b) {

    return (a.nome.toUpperCase() > b.nome.toUpperCase()) ? 1 : ((b.nome.toUpperCase() > a.nome.toUpperCase()) ? -1 : 0);
 
});
console.log("Todos os alunos da escola: ", listaAlunos)


//--------------Separa-Lista-de-Alunos------------------
//A separação é a partir da idade, separando as turmas para o ano letivo.

primeiroAno.push(separarPorAno(listaAlunos, 7, 1));
console.log("Lista de chamada do primeiro ano:")
console.log(primeiroAno)

segundoAno.push(separarPorAno(listaAlunos, 8, 2));
console.log("Lista de chamada do segundo ano:")
console.log(segundoAno)

terceiroAno.push(separarPorAno(listaAlunos, 9, 3));
console.log("Lista de chamada do terceiro ano:")
console.log(terceiroAno)

quartoAno.push(separarPorAno(listaAlunos, 10, 4));
console.log("Lista de chamada do quarto ano:")
console.log(quartoAno)

quintoAno.push(separarPorAno(listaAlunos, 11, 5));
console.log("Lista de chamada do quinto ano:")
console.log(quintoAno)



//---------------------Pesquisa-Aluno--------------------
//O aluno pesquisado em questão é o Roger Santos, podendo ser alterado para 
//procurar por qualquer outro aluno na escola.


function google(array, nomeAluno) {

    let nomePesquisado = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i].nome == nomeAluno) {
            nomePesquisado.push(array[i]);
        } 
    }
    return nomePesquisado;
}

resultadoPesquisa.push(google(listaAlunos, "Roger Santos"))
console.log("Resultado da busca:", resultadoPesquisa)
console.log(resultadoPesquisa)
