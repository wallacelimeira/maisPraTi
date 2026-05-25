const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function procurarValor(array, valor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      return true;
    }
  }
  return false;
}

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

async function main() {
  console.log("================================");
  console.log("   PROCURAR VALOR NO ARRAY      ");
  console.log("================================\n");

  const entradaArray = await pergunta("Digite os números separados por vírgula (ex: 10,15,20,25,30): ");
  const array = entradaArray.split(",").map(n => Number(n.trim())).filter(n => !Number.isNaN(n));

  if (array.length === 0) {
    console.log("Nenhum número válido inserido.\n");
    rl.close();
    return;
  }

  const entradaBusca = await pergunta("Digite o número que deseja procurar: ");
  const numeroProcurado = Number(entradaBusca.trim());

  if (Number.isNaN(numeroProcurado)) {
    console.log("Número inválido.\n");
  } else {
    const encontrado = procurarValor(array, numeroProcurado);
    console.log(`\n  Array: [ ${array.join(" | ")} ]`);
    if (encontrado) {
      console.log(`Número ${numeroProcurado} encontrado!\n`);
    } else {
      console.log(`Número ${numeroProcurado} não encontrado.\n`);
    }
  }

  rl.close();
}

if (require.main === module) {
  main();
}

module.exports = { procurarValor };
