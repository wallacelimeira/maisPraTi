const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("\n=== MENU ===");
console.log("1 - Dizer olá");
console.log("2 - Mostrar data atual");
console.log("3 - Encerrar programa");

rl.question("\nEscolha uma opção: ", (opcao) => {
  switch (opcao.trim()) {
    case "1":
      console.log("Olá! Seja bem-vindo!");
      break;
    case "2":
      console.log(`Data atual: ${new Date().toLocaleDateString("pt-BR")}`);
      break;
    case "3":
      console.log("Encerrando o programa...");
      break;
    default:
      console.log("Opção inválida.");
  }

  rl.close();
});