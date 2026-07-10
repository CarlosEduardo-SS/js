const GLOBAL_URL = "https://6a5032c2f45d5352b6121b52.mockapi.io/produtos";

async function carregarProdutos() {
  const resposta = await fetch(GLOBAL_URL);
  const produtos = await resposta.json();
}

function listarProdutos(produtos) {
  let html = "";
  for (const produto of produtos) {
    html += `
      <tr>
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>${produto.valorUnitario}</td>
        <td>${calcularTotal(produto.quantidade, produto.valorUnitario)}</td>
        <td></td>
      </tr>
    `;
  }

  const tbody = document.querySelector("#table_produtos tbody");
  tbody.innerHTML = html;
}

function calcularTotal(quantidade, valorUnitario) {
  return "VALOR CALCULADO";
}

carregarProdutos();
