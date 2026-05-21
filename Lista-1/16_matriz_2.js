// Matriz 6x8 com valores aleatórios entre -5 e 5
const M = Array.from({ length: 6 }, () =>
  Array.from({ length: 8 }, () => Math.floor(Math.random() * 11) - 5)
);

console.log("Matriz M (6x8):");
M.forEach((linha, i) => console.log(`Linha ${i + 1}: [${linha.join(", ")}]`));

const C = M.map((linha) => linha.filter((val) => val < 0).length);

console.log("\nVetor C (quantidade de negativos por linha):");
C.forEach((qtd, i) => console.log(`Linha ${i + 1}: ${qtd} negativo(s)`));