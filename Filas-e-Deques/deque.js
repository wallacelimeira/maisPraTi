const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

class Deque {
  constructor() { this.items = []; }
  addFront(e) { this.items.unshift(e); }
  addBack(e) { this.items.push(e); }
  removeFront() { return this.items.length ? this.items.shift() : null; }
  removeBack() { return this.items.length ? this.items.pop() : null; }
  peekFront() { return this.items[0] ?? null; }
  peekBack() { return this.items[this.items.length - 1] ?? null; }
  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
}

const deque = new Deque();

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

function mostrarDeque() {
  if (deque.isEmpty()) {
    console.log("  Deque: [ vazio ]");
  } else {
    console.log(`  Deque: [ ${deque.items.join(" | ")} ]  (frente → fundo)`);
    console.log(`  Frente: "${deque.peekFront()}"  |  Fundo: "${deque.peekBack()}"  |  Tamanho: ${deque.size()}`);
  }
}

async function main() {
  console.log("================================");
  console.log("            DEQUE               ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. addFront()    — inserir na frente");
    console.log("2. addBack()     — inserir no fundo");
    console.log("3. removeFront() — remover da frente");
    console.log("4. removeBack()  — remover do fundo");
    console.log("5. peekFront() / peekBack()");
    console.log("6. isEmpty() / size()");
    console.log("7. Ver deque");
    console.log("8. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      const val = await pergunta("Valor para addFront: ");
      if (!val.trim()) { console.log("  Valor inválido."); continue; }
      deque.addFront(val.trim());
      console.log(`  "${val.trim()}" inserido na frente.`);
      mostrarDeque();

    } else if (op === "2") {
      const val = await pergunta("Valor para addBack: ");
      if (!val.trim()) { console.log("  Valor inválido."); continue; }
      deque.addBack(val.trim());
      console.log(`  "${val.trim()}" inserido no fundo.`);
      mostrarDeque();

    } else if (op === "3") {
      if (deque.isEmpty()) { console.log("  Deque vazio."); continue; }
      const r = deque.removeFront();
      console.log(`  Removido da frente: "${r}"`);
      mostrarDeque();

    } else if (op === "4") {
      if (deque.isEmpty()) { console.log("  Deque vazio."); continue; }
      const r = deque.removeBack();
      console.log(`  Removido do fundo: "${r}"`);
      mostrarDeque();

    } else if (op === "5") {
      console.log(`  peekFront() = ${deque.peekFront() ?? "null (vazio)"}`);
      console.log(`  peekBack()  = ${deque.peekBack()  ?? "null (vazio)"}`);

    } else if (op === "6") {
      console.log(`  isEmpty() = ${deque.isEmpty()}`);
      console.log(`  size()    = ${deque.size()}`);

    } else if (op === "7") {
      mostrarDeque();

    } else if (op === "8") {
      sair = true;

    } else {
      console.log("  Opção inválida.");
    }
  }

  console.log("\nPrograma encerrado.");
  rl.close();
}

main();