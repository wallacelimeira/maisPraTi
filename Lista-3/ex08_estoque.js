const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const produtos = [
  { nome: "Notebook",   preco: 3500, quantidade: 8  },
  { nome: "Mouse",      preco: 89,   quantidade: 25 },
  { nome: "Monitor",    preco: 1200, quantidade: 5  },
  { nome: "Headset",    preco: 250,  quantidade: 12 },
];

function exibirRelatorio() {
  let totalGeral = 0;
  console.log("\n  " + "PRODUTO".padEnd(14) + "PREÇO".padEnd(12) + "QTD".padEnd(8) + "TOTAL ESTOQUE");
  console.log("  " + "-".repeat(50));

  produtos.forEach((p) => {
    const totalProduto = p.preco * p.quantidade;
    totalGeral += totalProduto;
    console.log(
      "  " +
      p.nome.padEnd(14) +
      `R$ ${p.preco.toFixed(2)}`.padEnd(12) +
      String(p.quantidade).padEnd(8) +
      `R$ ${totalProduto.toFixed(2)}`
    );
  });

  console.log("  " + "-".repeat(50));
  console.log(`  ${"TOTAL GERAL".padEnd(34)}R$ ${totalGeral.toFixed(2)}`);
}

async function adicionarProduto() {
  const nome = (await pergunta("  Nome: ")).trim();
  if (!nome) { console.log("  Nome inválido."); return; }
  const preco = parseFloat(await pergunta("  Preço (R$): "));
  const qtd   = parseInt(await pergunta("  Quantidade: "));
  if (isNaN(preco) || preco < 0 || isNaN(qtd) || qtd < 0) {
    console.log("  Valores inválidos.");
    return;
  }
  produtos.push({ nome, preco, quantidade: qtd });
  console.log(`  "${nome}" adicionado ao estoque.`);
}

async function atualizarEstoque() {
  console.log("\n  Produtos: " + produtos.map((p, i) => `${i + 1}. ${p.nome}`).join("  "));
  const idx = parseInt(await pergunta("  Número do produto: ")) - 1;
  if (isNaN(idx) || idx < 0 || idx >= produtos.length) {
    console.log("  Produto inválido.");
    return;
  }
  const qtd = parseInt(await pergunta(`  Nova quantidade (atual: ${produtos[idx].quantidade}): `));
  if (isNaN(qtd) || qtd < 0) { console.log("  Quantidade inválida."); return; }
  produtos[idx].quantidade = qtd;
  console.log(`  Estoque de "${produtos[idx].nome}" atualizado para ${qtd}.`);
}

async function main() {
  console.log("================================");
  console.log("   EXERCÍCIO 8 — ESTOQUE        ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Relatório de estoque (forEach)");
    console.log("2. Adicionar produto");
    console.log("3. Atualizar quantidade");
    console.log("4. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      exibirRelatorio();
    } else if (op === "2") {
      await adicionarProduto();
    } else if (op === "3") {
      await atualizarEstoque();
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