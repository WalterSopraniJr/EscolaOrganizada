const listaAlunos = require('./listaAlunos')

function adicionaAluno(e) {
    e.preventDefault();
  
    const nomeInserido = document.getElementById("nome").value;
    const nascInserido = document.getElementById("nasc").value;
  
    if (nomeInserido === "" || nascInserido === "")
      return console.log("dados faltando");
    listaAlunos.push({ nome: nomeInserido, nasc: nascInserido });
  
    console.log(listaAlunos);
    return listaAlunos;
  }
  
  const button = document.getElementById("buttonSubmit");