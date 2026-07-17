const GLOBAL_URL = "https://6a5032c2f45d5352b6121b52.mockapi.io/produtos";

async function carregarProdutos() {
  try {
    const resposta = await fetch(GLOBAL_URL);
    const produtos = await resposta.json();

    listarProdutos(produtos);
  } catch (error) {
    console.error(error);
    alert("Não foi possível carregar os dados.");
  }
}

function listarProdutos(produtos) {
  let html = "";
  for (const produto of produtos) {
    html += `
      <tr>
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>${produto.preco}</td>
        <td>${calcularTotal(produto.quantidade, produto.preco)}</td>
        <td>
          <button class="btn btn-danger" onclick="removerProduto(${produto.id})">
          Remover
          </button>
        </td>
      </tr>
    `;
  }

  const tbody = document.querySelector("#table_produtos tbody");
  tbody.innerHTML = html;
}

function calcularTotal(quantidade, preco) {
  return quantidade * preco;
}

async function removerProduto(id) {
  if (!confirm("Realmente deseja apagar esse produto?")) {
    return;
  }

  const url = `${GLOBAL_URL}/${id}`;

  try {
    await fetch(url, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
    alert("Não foi possível carregar os dados.");
  } finally {
    carregarProdutos();
  }
}

async function cadastrarProduto() {
  const produto = {
    nome: document.querySelector("#nome").value,
    preco: Number(document.querySelector("#preco").value),
    quantidade: Number(document.querySelector("#quantidade").value),
  };

  try {
    await fetch(GLOBAL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(produto),
    });

    carregarProdutos();
  } catch (error) {
    console.error(error);
    alert("Não foi possível cadastrar esse produto");
  }
}

carregarProdutos();
