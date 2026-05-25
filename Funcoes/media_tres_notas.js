const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Média de três notas
function mediaTresNotas(nota1, nota2, nota3) {
  const soma = Number(nota1) + Number(nota2) + Number(nota3);
  return soma / 3;
}

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

async function main() {
  console.log("================================");
  console.log("     MÉDIA DE TRÊS NOTAS       ");
  console.log("================================\n");

  const nota1 = await pergunta("Digite a 1ª nota: ");
  const nota2 = await pergunta("Digite a 2ª nota: ");
  const nota3 = await pergunta("Digite a 3ª nota: ");

  const media = mediaTresNotas(nota1, nota2, nota3);
  console.log(`\n  Notas: ${nota1} | ${nota2} | ${nota3}`);
  console.log(`  Média: ${media.toFixed(2)}\n`);

  rl.close();
}

if (require.main === module) {
  main();
}

module.exports = { mediaTresNotas };
