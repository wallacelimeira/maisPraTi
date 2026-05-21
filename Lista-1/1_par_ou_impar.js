const readline = require("readline");

const rl = readline.createInterface({input: process.stdin,output: process.stdout});

rl.question("Digite um número inteiro: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Valor inválido. Digite um número inteiro.");
  } else if (numero % 2 === 0) {
    console.log(`${numero} é PAR.`);
  } else {
    console.log(`${numero} é ÍMPAR.`);
  }

  rl.close();
});