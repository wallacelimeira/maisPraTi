const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const produto = {
  nome: "Teclado Mecânico",
  preco: 299.90,
  categoria: "Periféricos",
  quantidade: 15,
};

function exibirPropriedades(obj) {
  console.log("\n  Propriedades do produto:");
  for (const chave in obj) {
    console.log(`  ${chave}: ${obj[chave]}`);
  }
}

function exibirPrecoFinal() {
  if (produto.desconto === undefined) {
    console.log("  Nenhum desconto cadastrado ainda.");
  } else {
    const final = produto.preco - (produto.preco * produto.desconto) / 100;
    console.log(`  Preço original : R$ ${produto.preco.toFixed(2)}`);
    console.log(`  Desconto       : ${produto.desconto}%`);
    console.log(`  Preço final    : R$ ${final.toFixed(2)}`);
  }
}

async function main() {
  console.log("================================");
  console.log("     EXERCÍCIO 1 — PRODUTO      ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Exibir propriedades (for...in)");
    console.log("2. Adicionar/alterar desconto");
    console.log("3. Exibir preço final");
    console.log("4. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      exibirPropriedades(produto);

    } else if (op === "2") {
      const val = await pergunta("Desconto (%): ");
      const n = parseFloat(val);
      if (isNaN(n) || n < 0 || n > 100) {
        console.log("  Valor inválido.");
      } else {
        produto.desconto = n;
        console.log(`  Desconto de ${n}% adicionado.`);
      }

    } else if (op === "3") {
      exibirPrecoFinal();

    } else if (op === "4") {
      sair = true;
    } else {
      console.log("  Opção inválida.");
    }
  }

  console.log("\nPrograma encerrado.");
  rl.close();
}

main();