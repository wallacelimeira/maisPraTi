const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function calculadora(num1, num2, operador) {
  const a = Number(num1);
  const b = Number(num2);
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Erro: divisão por zero" : a / b;
    default:
      return "Operador inválido";
  }
}

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

async function main() {
  console.log("================================");
  console.log("         CALCULADORA            ");
  console.log("================================\n");
  console.log("Operadores: + (soma) | - (subtração) | * (multiplicação) | / (divisão)\n");

  const num1 = await pergunta("Digite o 1º número: ");
  const operador = await pergunta("Digite o operador (+, -, *, /): ");
  const num2 = await pergunta("Digite o 2º número: ");

  const resultado = calculadora(num1, num2, operador);
  console.log(`\n  ${num1} ${operador} ${num2} = ${resultado}\n`);

  rl.close();
}

if (require.main === module) {
  main();
}

module.exports = { calculadora };
