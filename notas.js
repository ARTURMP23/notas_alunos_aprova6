
const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 6 },
    { nome: 'Ana', nota: 9 },
    { nome: 'Carlos', nota: 4 }
  ];
  

  function alunosAprovados(arr) {
    return arr.filter(aluno => aluno.nota >= 6);
  }
  

  const aprovados = alunosAprovados(alunos);
  

  console.log('Alunos aprovados:');
  console.log(aprovados);


  

  //node notas.js

  