const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const nomes = [];
const idades = [];

function lerPessoa(i) {
  if (i > 9) {
    console.log("\nMenores de idade:");
    let encontrou = false;
    for (let j = 0; j < 9; j++) {
      if (idades[j] < 18) {
        console.log(`Nome: ${nomes[j]} | Idade: ${idades[j]}`);
        encontrou = true;
      }
    }
    if (!encontrou) console.log("Nenhuma pessoa menor de idade.");
    rl.close();
    return;
  }
  rl.question(`Nome da pessoa ${i}: `, (nome) => {
    rl.question(`Idade de ${nome.trim()}: `, (idade) => {
      nomes.push(nome.trim());
      idades.push(parseInt(idade));
      lerPessoa(i + 1);
    });
  });
}

lerPessoa(1);