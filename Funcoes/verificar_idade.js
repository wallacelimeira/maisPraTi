const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Verificar maioridade
function verificarIdade(idade) {
  const i = Number(idade);
  if (Number.isNaN(i) || i <= 0) return "Idade inválida";
  if (i >= 18) return "Você é maior de idade";
  return "Você é menor de idade";
}

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

async function main() {
  console.log("================================");
  console.log("     VERIFICAR MAIORIDADE      ");
  console.log("================================\n");

  const idade = await pergunta("Digite sua idade: ");
  console.log(verificarIdade(idade) + "\n");

  rl.close();
}

if (require.main === module) {
  main();
}

module.exports = { verificarIdade };
