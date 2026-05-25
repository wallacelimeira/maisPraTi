const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

async function main() {
  console.log("================================");
  console.log("     MÉDIA DE NOTAS             ");
  console.log("================================\n");

  const entrada = await pergunta("Digite as notas separadas por vírgula (ex: 8,7,9,10,6): ");
  const notas = entrada.split(",").map(n => Number(n.trim())).filter(n => !Number.isNaN(n));

  if (notas.length === 0) {
    console.log("  ✗ Nenhuma nota válida inserida.\n");
  } else {
    const media = calcularMedia(notas);
    console.log(`\n  Notas: [ ${notas.join(" | ")} ]`);
    console.log(`  Média: ${media.toFixed(2)}\n`);
  }

  rl.close();
}

if (require.main === module) {
  main();
}

module.exports = { calcularMedia };
