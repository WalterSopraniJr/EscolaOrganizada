const listaAlunos = require('./listaAlunos')

function adicionaAluno() {
    const nomeInserido = document.getElementById("nome")
    const nascInserido = document.getElementById("nasc")

    listaAlunos.push(
        {nome: "nomeInserido",
        nasc: "nascInserido"}
    )

    console.log(listaAlunos)

    return listaAlunos
}
