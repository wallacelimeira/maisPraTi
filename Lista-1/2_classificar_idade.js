const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Digite a idade da pessoa: ", (input) => {
  const idade = parseInt(input);

  if (isNaN(idade) || idade < 0) {
    console.log("Idade inválida. Digite um número positivo.");
  } else if (idade <= 12) {
    console.log(`Idade ${idade}: CRIANÇA.`);
  } else if (idade <= 17) {
    console.log(`Idade ${idade}: ADOLESCENTE.`);
  } else if (idade <= 59) {
    console.log(`Idade ${idade}: ADULTO.`);
  } else {
    console.log(`Idade ${idade}: IDOSO.`);
  }

  rl.close();
});