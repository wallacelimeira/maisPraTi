const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const personagem1 = { nome: "Guerreiro", vida: 120, ataque: 85, defesa: 60 };
const personagem2 = { nome: "Mago",      vida: 80,  ataque: 110, defesa: 40 };

function exibirLadoALado() {
  const chaves = ["nome", "vida", "ataque", "defesa"];
  console.log("\n  " + "ATRIBUTO".padEnd(12) + personagem1.nome.padEnd(14) + personagem2.nome);
  console.log("  " + "-".repeat(36));
  for (const chave of chaves) {
    console.log(
      "  " +
      chave.padEnd(12) +
      String(personagem1[chave]).padEnd(14) +
      String(personagem2[chave])
    );
  }
}

function determinarVencedor() {
  const poder1 = personagem1.vida + personagem1.ataque + personagem1.defesa;
  const poder2 = personagem2.vida + personagem2.ataque + personagem2.defesa;
  console.log(`\n  Poder total de ${personagem1.nome}: ${poder1}`);
  console.log(`  Poder total de ${personagem2.nome}: ${poder2}`);
  if (poder1 > poder2) {
    console.log(`  Vencedor: ${personagem1.nome}!`);
  } else if (poder2 > poder1) {
    console.log(`  Vencedor: ${personagem2.nome}!`);
  } else {
    console.log("  Empate!");
  }
}

async function editarAtributo(personagem) {
  console.log(`\n  Editando ${personagem.nome}:`);
  for (const chave of ["vida", "ataque", "defesa"]) {
    const val = await pergunta(`  ${chave} (atual: ${personagem[chave]}): `);
    const n = parseInt(val);
    if (!isNaN(n) && n >= 0) personagem[chave] = n;
  }
  console.log("  Atributos atualizados.");
}

async function main() {
  console.log("================================");
  console.log("   EXERCÍCIO 2 — PERSONAGENS    ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Exibir atributos lado a lado (for...in)");
    console.log("2. Determinar maior poder total");
    console.log("3. Editar atributos do Personagem 1");
    console.log("4. Editar atributos do Personagem 2");
    console.log("5. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      exibirLadoALado();
    } else if (op === "2") {
      determinarVencedor();
    } else if (op === "3") {
      await editarAtributo(personagem1);
    } else if (op === "4") {
      await editarAtributo(personagem2);
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