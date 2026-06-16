const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function calcularVendas(vendas) {
  let total = 0;
  for (let i = 0; i < vendas.length; i++) {
    total += vendas[i];
  }
  return total;
}

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

async function main() {
  console.log("================================");
  console.log("    TOTAL DE VENDAS DIÁRIAS     ");
  console.log("================================\n");

  const entrada = await pergunta("Digite os valores de vendas separados por vírgula (ex: 100,200,150,300): ");
  const vendas = entrada.split(",").map(v => Number(v.trim())).filter(v => !Number.isNaN(v));

  if (vendas.length === 0) {
    console.log("  Nenhum valor válido inserido.\n");
  } else {
    const total = calcularVendas(vendas);
    console.log(`\n  Vendas: [ ${vendas.join(" | ")} ]`);
    console.log(`  Total acumulado: R$ ${total.toFixed(2)}\n`);
  }

  rl.close();
}

if (require.main === module) {
  main();
}

module.exports = { calcularVendas };
