async function buscarCep() {
  const cepDigitado = document.querySelector("#cep").value;
  const url = `https://viacep.com.br/ws/${cepDigitado}/json/`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  popularInputs(dados);
}

function popularInputs(dados) {
  document.querySelector("#logradouro").value = dados.logradouro;
  document.querySelector("#cidade").value = dados.localidade;
  document.querySelector("#bairro").value = dados.bairro;
  document.querySelector("#estado").value = dados.estado;
  document.querySelector("#regiao").value = dados.regiao;
}
