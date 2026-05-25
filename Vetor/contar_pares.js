const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function contarPares(array) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      contador++;
    }
  }
  return contador;
}

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

async function main() {
  console.log("================================");
  console.log("   CONTAGEM DE NÚMEROS PARES    ");
  console.log("================================\n");

  const entrada = await pergunta("Digite os números separados por vírgula (ex: 1,2,3,4,5,6): ");
  const array = entrada.split(",").map(n => Number(n.trim())).filter(n => !Number.isNaN(n));

  if (array.length === 0) {
    console.log("  ✗ Nenhum número válido inserido.\n");
  } else {
    const pares = contarPares(array);
    console.log(`\n  Array: [ ${array.join(" | ")} ]`);
    console.log(`  Quantidade de números pares: ${pares}\n`);
  }

  rl.close();
}

if (require.main === module) {
  main();
}

module.exports = { contarPares };
