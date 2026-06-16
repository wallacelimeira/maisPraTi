const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

// Nó da lista ligada
function criarNo(valor) {
  return { valor, proximo: null };
}

// Lista ligada
const lista = { cabeca: null };

function adicionar(tarefa) {
  const novoNo = criarNo(tarefa);
  if (!lista.cabeca) {
    lista.cabeca = novoNo;
  } else {
    let atual = lista.cabeca;
    while (atual.proximo) {
      atual = atual.proximo;
    }
    atual.proximo = novoNo;
  }
  console.log(`  Tarefa "${tarefa}" adicionada.`);
}

function remover(tarefa) {
  if (!lista.cabeca) {
    console.log("  Lista vazia.");
    return;
  }

  if (lista.cabeca.valor === tarefa) {
    lista.cabeca = lista.cabeca.proximo;
    console.log(`  Tarefa "${tarefa}" removida.`);
    return;
  }

  let atual = lista.cabeca;
  while (atual.proximo) {
    if (atual.proximo.valor === tarefa) {
      atual.proximo = atual.proximo.proximo;
      console.log(`  Tarefa "${tarefa}" removida.`);
      return;
    }
    atual = atual.proximo;
  }

  console.log(`  Tarefa "${tarefa}" não encontrada.`);
}

function exibir() {
  if (!lista.cabeca) {
    console.log("  Lista: [ vazia ]");
    return;
  }
  const tarefas = [];
  let atual = lista.cabeca;
  while (atual) {
    tarefas.push(atual.valor);
    atual = atual.proximo;
  }
  console.log(`  Lista: ${tarefas.map((t, i) => `[${i + 1}] ${t}`).join(" → ")}`);
  console.log(`  Total: ${tarefas.length} tarefa(s)`);
}

async function main() {
  console.log("================================");
  console.log("  EXERCÍCIO 12 — LISTA LIGADA   ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Adicionar tarefa");
    console.log("2. Remover tarefa");
    console.log("3. Exibir lista");
    console.log("4. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      const tarefa = (await pergunta("  Nome da tarefa: ")).trim();
      if (!tarefa) { console.log("  Nome inválido."); continue; }
      adicionar(tarefa);
      exibir();

    } else if (op === "2") {
      exibir();
      const tarefa = (await pergunta("  Nome da tarefa a remover: ")).trim();
      if (!tarefa) { console.log("  Nome inválido."); continue; }
      remover(tarefa);
      exibir();

    } else if (op === "3") {
      exibir();

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