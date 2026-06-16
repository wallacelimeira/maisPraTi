const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const contatos = [
  { nome: "Ana Lima",    telefone: "(85) 99001-1111", email: "ana@email.com"    },
  { nome: "Bruno Melo",  telefone: "(85) 99002-2222", email: "bruno@email.com"  },
  { nome: "Carla Dias",  telefone: "(85) 99003-3333", email: "carla@email.com"  },
  { nome: "Diego Nunes", telefone: "(85) 99004-4444", email: "diego@email.com"  },
];

function listarContatos() {
  console.log("\n  Agenda de contatos:");
  contatos.forEach((c, i) => {
    console.log(`\n  [${i + 1}] ${c.nome}`);
    console.log(`      Tel  : ${c.telefone}`);
    console.log(`      Email: ${c.email}`);
  });
}

async function buscarContato() {
  const busca = (await pergunta("  Nome para buscar: ")).trim().toLowerCase();
  let encontrado = null;

  for (const c of contatos) {
    if (c.nome.toLowerCase().includes(busca)) {
      encontrado = c;
      break;
    }
  }

  if (encontrado) {
    console.log(`\n  Contato encontrado:`);
    console.log(`    Nome  : ${encontrado.nome}`);
    console.log(`    Tel   : ${encontrado.telefone}`);
    console.log(`    Email : ${encontrado.email}`);
  } else {
    console.log("  Contato não encontrado.");
  }
}

async function adicionarContato() {
  const nome     = (await pergunta("  Nome: ")).trim();
  const telefone = (await pergunta("  Telefone: ")).trim();
  const email    = (await pergunta("  Email: ")).trim();

  if (!nome || !telefone || !email) {
    console.log("  Dados incompletos.");
    return;
  }
  contatos.push({ nome, telefone, email });
  console.log(`  "${nome}" adicionado à agenda.`);
}

async function main() {
  console.log("================================");
  console.log("  EXERCÍCIO 9 — AGENDA          ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Listar contatos (forEach)");
    console.log("2. Buscar contato (for...of)");
    console.log("3. Adicionar contato");
    console.log("4. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      listarContatos();
    } else if (op === "2") {
      await buscarContato();
    } else if (op === "3") {
      await adicionarContato();
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