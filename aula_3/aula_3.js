const usuarios = ["Luiz", "João", "Maria", "Pedro", "Henrique", "Manoel"];

// console.log(usuarios[3]);

// let i = 0;
// for (const usuario of usuarios) {
//   i++;
//   console.log(`${i} - Usuário atual: ${usuario}`);
// }

// const carros = [
//   {
//     modelo: "Fusca",
//     marca: "VW",
//     ano: 1975,
//     cor: "Branco",
//   },

//   {
//     modelo: "Chevette",
//     marca: "Chevrolet",
//     ano: 1980,
//     cor: "Preto",
//   },
// ];

// console.log(carros[0].modelo);
// console.log(carros[1].modelo);

const alunos = [
  {
    nome: "Carlos",
    idade: 18,
    email: "carloseduardosilvasantos2008@gmail.com",
    telefone: "47 99758-4210",
    cpf: "10580657930",
    foto: null,
  },
  {
    nome: "Beatriz",
    idade: 19,
    email: "beatrizstueber@gmail.com",
    telefone: "47 98445-5983",
    cpf: "00000000000",
    foto: null,
  },
  {
    nome: "Pablo",
    idade: 47,
    email: "pabloescobar@gmail.com",
    telefone: "47 91684-4712",
    cpf: "77777777777",
    foto: null,
  },
];

// console.log(alunos);

function popularTabela() {
  console.log("iniciar carregamento da tabela");

  const tbody = document.querySelector("#table_alunos tbody");

  console.log(tbody);

  let html = "";
  for (const aluno of alunos) {
    html += `
      <tr>
        <td>${aluno.nome}</td>
        <td>${aluno.idade}</td>
        <td>${aluno.email}</td>
        <td>${aluno.telefone}</td>
      </tr>
    `;
  }

  console.log(html);

  tbody.innerHTML = html;
}

popularTabela();
