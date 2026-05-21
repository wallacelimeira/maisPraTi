const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

class FilaImpressao {
  constructor() { this.items = []; }
  enqueue(doc) { this.items.push(doc); }
  dequeue() { return this.items.length ? this.items.shift() : null; }
  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
}

const fila = new FilaImpressao();

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

function mostrarFila() {
  if (fila.isEmpty()) {
    console.log("  Fila: [ vazia ]");
  } else {
    console.log(`  Fila: [ ${fila.items.join(" | ")} ]  (frente → fundo)`);
    console.log(`  Próximo: "${fila.items[0]}"  |  Total: ${fila.size()}`);
  }
}

async function main() {
  console.log("================================");
  console.log("     FILA DE IMPRESSÃO          ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Adicionar tarefa");
    console.log("2. Imprimir próximo");
    console.log("3. Ver fila");
    console.log("4. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      const nome = await pergunta("Nome do documento: ");
      if (!nome.trim()) {
        console.log("  ✗ Nome inválido.");
      } else {
        fila.enqueue(nome.trim());
        console.log(`  ✓ "${nome.trim()}" adicionado.`);
        mostrarFila();
      }

    } else if (op === "2") {
      if (fila.isEmpty()) {
        console.log("  ✗ Não há tarefas na fila.");
      } else {
        const doc = fila.dequeue();
        console.log(`  🖨  Imprimindo: "${doc}"`);
        if (fila.isEmpty()) {
          console.log("  ✓ Não há mais tarefas na fila.");
        } else {
          mostrarFila();
        }
      }

    } else if (op === "3") {
      mostrarFila();

    } else if (op === "4") {
      sair = true;

    } else {
      console.log("  ✗ Opção inválida.");
    }
  }

  console.log("\nPrograma encerrado.");
  rl.close();
}

main();