const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Digite o peso (kg): ", (inputPeso) => {
  rl.question("Digite a altura (m): ", (inputAltura) => {
    const peso = parseFloat(inputPeso);
    const altura = parseFloat(inputAltura);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      console.log("Valores inválidos.");
    } else {
      const imc = peso / (altura * altura);
      console.log(`\nIMC: ${imc.toFixed(2)}`);

      if (imc < 18.5) {
        console.log("Categoria: BAIXO PESO.");
      } else if (imc < 25) {
        console.log("Categoria: PESO NORMAL.");
      } else if (imc < 30) {
        console.log("Categoria: SOBREPESO.");
      } else {
        console.log("Categoria: OBESIDADE.");
      }
    }

    rl.close();
  });
});