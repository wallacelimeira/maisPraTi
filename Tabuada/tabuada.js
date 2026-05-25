const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Função que gera a tabuada
function gerarTabuada(numero) {
  const n = Number(numero);
  if (Number.isNaN(n)) return "Número inválido";
  
  let resultado = `\nTabuada do ${n}:\n`;
  for (let i = 1; i <= 10; i++) {
    resultado += `  ${n} × ${i} = ${n * i}\n`;
  }
  return resultado;
}

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

async function main() {
  console.log("================================");
  console.log("         TABUADA                ");
  console.log("================================\n");

  const numero = await pergunta("Digite um número para ver a tabuada: ");
  console.log(gerarTabuada(numero));

  rl.close();
}

if (require.main === module) {
  main();
}

module.exports = { gerarTabuada };
