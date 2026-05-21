function contarOcorrencias(arr) {
  const contagem = {};
  for (const item of arr) {
    contagem[item] = (contagem[item] || 0) + 1;
  }
  return contagem;
}

const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
const resultado = contarOcorrencias(frutas);
console.log("Contagem de ocorrências:");
console.log(resultado);