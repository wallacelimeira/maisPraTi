const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Digite um número para calcular o fatorial: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 0) {
    console.log("Número inválido. Digite um inteiro não negativo.");
  } else {
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
      fatorial *= i;
    }
    console.log(`${n}! = ${fatorial}`);
  }

  rl.close();
});