const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const nomes = [];

function lerNome(i) {
  if (i > 7) {
    console.log("\nNomes em ordem INVERSA:");
    for (let j = nomes.length - 1; j >= 0; j--) {
      console.log(nomes[j]);
    }
    rl.close();
    return;
  }
  rl.question(`Nome ${i}: `, (nome) => {
    nomes.push(nome.trim());
    lerNome(i + 1);
  });
}

lerNome(1);