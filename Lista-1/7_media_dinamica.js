const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const numeros = [];

console.log("Digite números decimais. Digite 0 para encerrar.");

function lerNumero() {
  rl.question("Número: ", (input) => {
    const n = parseFloat(input);
    if (n === 0) {
      if (numeros.length === 0) {
        console.log("Nenhum número foi informado.");
      } else {
        const soma = numeros.reduce((acc, n) => acc + n, 0);
        const media = soma / numeros.length;
        console.log(`Média aritmética: ${media.toFixed(2)}`);
      }
      rl.close();
    } else {
      if (!isNaN(n)) numeros.push(n);
      lerNumero();
    }
  });
}

lerNumero();