const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pesoIdeal(alt, sexo) {
  if (sexo.toLowerCase() === "m") {
    return 72.7 * alt - 58;
  } else {
    return 62.1 * alt - 44.7;
  }
}

rl.question("Altura (m): ", (inputAlt) => {
  rl.question("Sexo (M para masculino / F para feminino): ", (sexo) => {
    const alt = parseFloat(inputAlt);

    if (isNaN(alt) || alt <= 0) {
      console.log("Altura inválida.");
    } else if (!["m", "f"].includes(sexo.trim().toLowerCase())) {
      console.log("Sexo inválido. Use M ou F.");
    } else {
      const peso = pesoIdeal(alt, sexo.trim());
      console.log(`Peso ideal: ${peso.toFixed(2)} kg`);
    }

    rl.close();
  });
});