const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const historico = [];

function visitar(pagina) {
  historico.push(pagina);
  console.log(`  Visitando: ${pagina}`);
  console.log(`  Página atual: ${paginaAtual()}`);
}

function voltar() {
  if (historico.length <= 1) {
    console.log("  Não há página anterior.");
    return;
  }
  const saiu = historico.pop();
  console.log(`  Voltando de: ${saiu}`);
  console.log(`  Página atual: ${paginaAtual()}`);
}

function paginaAtual() {
  return historico.length ? historico[historico.length - 1] : "(nenhuma)";
}

function exibirHistorico() {
  if (historico.length === 0) {
    console.log("  Histórico vazio.");
    return;
  }
  console.log("\n  Histórico (topo = atual):");
  for (let i = historico.length - 1; i >= 0; i--) {
    const marcador = i === historico.length - 1 ? " atual" : "";
    console.log(`  ${historico.length - i}. ${historico[i]}${marcador}`);
  }
}

async function main() {
  console.log("================================");
  console.log("   EXERCÍCIO 10 — NAVEGADOR     ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log(`\n  Página atual: ${paginaAtual()}`);
    console.log("\n1. Visitar página (push)");
    console.log("2. Voltar (pop)");
    console.log("3. Página atual (peek)");
    console.log("4. Ver histórico");
    console.log("5. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      const url = (await pergunta("  URL: ")).trim();
      if (!url) { console.log("  URL inválida."); continue; }
      visitar(url);

    } else if (op === "2") {
      voltar();

    } else if (op === "3") {
      console.log(`  Página atual: ${paginaAtual()}`);

    } else if (op === "4") {
      exibirHistorico();

    } else if (op === "5") {
      sair = true;
    } else {
      console.log("  Opção inválida.");
    }
  }

  console.log("\nPrograma encerrado.");
  rl.close();
}

main();