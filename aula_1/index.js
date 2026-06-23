function somar() {
  const num1 = Number(prompt("Digite o primeiro número"));
  const num2 = Number(prompt("Digite o segundo número"));

  const soma = num1 + num2;

  alert(`O resultado da soma é ${soma}`);
}

function multiplicar() {
  const num1 = Number(prompt("Digite o primeiro número"));
  const num2 = Number(prompt("Digite o número multiplicador"));

  const mult = num1 * num2;

  alert(`O resultado da multiplicação é ${mult}`);
}

function somarInputs() {
  const num1 = Number(document.querySelector("#num1_soma").value);
  const num2 = Number(document.querySelector("#num2_soma").value);
  const resultado = document.querySelector("#resultado_soma");
  const soma = num1 + num2;
  resultado.textContent = `O resultado da soma é ${soma}`;
}
