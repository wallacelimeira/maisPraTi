const tamanho = 7;
const MI = [];

for (let i = 0; i < tamanho; i++) {
  MI[i] = [];
  for (let j = 0; j < tamanho; j++) {
    MI[i][j] = i === j ? 1 : 0;
  }
}

console.log("Matriz Identidade 7x7:");
MI.forEach((linha) => console.log(linha.join(" ")));