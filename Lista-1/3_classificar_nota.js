const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Digite a nota (0 a 10): ", (input) => {
  const nota = parseFloat(input);

  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Nota inválida. Digite um valor entre 0 e 10.");
  } else if (nota >= 7) {
    console.log(`Nota ${nota}: APROVADO.`);
  } else if (nota >= 5) {
    console.log(`Nota ${nota}: RECUPERAÇÃO.`);
  } else {
    console.log(`Nota ${nota}: REPROVADO.`);
  }

  rl.close();
});