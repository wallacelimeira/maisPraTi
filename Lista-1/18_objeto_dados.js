function filtrarArrays(obj) {
  const resultado = {};
  for (const chave in obj) {
    if (Array.isArray(obj[chave])) {
      resultado[chave] = obj[chave];
    }
  }
  return resultado;
}

const dados = {
  nome: "Carlos",
  idade: 25,
  hobbies: ["futebol", "leitura"],
  notas: [8, 9, 7],
  cidade: "Recife",
};

const apenasArrays = filtrarArrays(dados);
console.log("Propriedades que são arrays:");
console.log(apenasArrays);