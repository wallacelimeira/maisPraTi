const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const inventario = {
  espada: 1,
  poção: 5,
  escudo: 2,
  flecha: 12,
  bomba: 0,
};

function listarInventario() {
  console.log("\n  Inventário:");
  for (const item in inventario) {
    const qtd = inventario[item];
    const status = qtd === 0 ? " (esgotado)" : "";
    console.log(`  ${item.padEnd(12)}: ${qtd}${status}`);
  }
}

async function usarItem() {
  listarInventario();
  const nome = (await pergunta("\n  Item para usar: ")).trim().toLowerCase();

  if (!(nome in inventario)) {
    console.log("  Item não encontrado no inventário.");
    return;
  }

  if (inventario[nome] === 0) {
    console.log(`  Item esgotado: "${nome}".`);
  } else {
    inventario[nome]--;
    console.log(`  Usou 1x "${nome}". Restam: ${inventario[nome]}`);
  }
}

async function adicionarItem() {
  const nome = (await pergunta("  Nome do item: ")).trim().toLowerCase();
  if (!nome) { console.log("  Nome inválido."); return; }
  const qtd = parseInt(await pergunta("  Quantidade: "));
  if (isNaN(qtd) || qtd < 0) { console.log("  Quantidade inválida."); return; }
  inventario[nome] = (inventario[nome] || 0) + qtd;
  console.log(`  Adicionado ${qtd}x "${nome}". Total: ${inventario[nome]}`);
}

async function main() {
  console.log("================================");
  console.log("   EXERCÍCIO 4 — INVENTÁRIO     ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Listar inventário (for...in)");
    console.log("2. Usar item");
    console.log("3. Adicionar item");
    console.log("4. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      listarInventario();
    } else if (op === "2") {
      await usarItem();
    } else if (op === "3") {
      await adicionarItem();
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