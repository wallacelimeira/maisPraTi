const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const fila = [];

function chegarPaciente(nome) {
  fila.push(nome);
  console.log(`  ${nome} entrou na fila. Posição: ${fila.length}º`);
  exibirFila();
}

function chamarProximo() {
  if (fila.length === 0) {
    console.log("  Não há pacientes na fila.");
    return;
  }
  const paciente = fila.shift();
  console.log(`  Chamando: ${paciente}`);
  exibirFila();
}

function exibirFila() {
  if (fila.length === 0) {
    console.log("  Fila: [ vazia ]");
  } else {
    console.log(`  Fila: [ ${fila.join(" → ")} ]  (${fila.length} paciente(s))`);
    console.log(`  Próximo: "${fila[0]}"`);
  }
}

async function main() {
  console.log("================================");
  console.log("    EXERCÍCIO 11 — CLÍNICA      ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Chegar paciente (enqueue)");
    console.log("2. Chamar próximo (dequeue)");
    console.log("3. Ver fila");
    console.log("4. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      const nome = (await pergunta("  Nome do paciente: ")).trim();
      if (!nome) { console.log("  Nome inválido."); continue; }
      chegarPaciente(nome);

    } else if (op === "2") {
      chamarProximo();

    } else if (op === "3") {
      exibirFila();

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