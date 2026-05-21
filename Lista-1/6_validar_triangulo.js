const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Lado A: ", (ia) => {
  rl.question("Lado B: ", (ib) => {
    rl.question("Lado C: ", (ic) => {
      const a = parseFloat(ia);
      const b = parseFloat(ib);
      const c = parseFloat(ic);

      if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        console.log("Valores inválidos.");
      } else if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
          console.log("Forma um triângulo EQUILÁTERO.");
        } else if (a === b || a === c || b === c) {
          console.log("Forma um triângulo ISÓSCELES.");
        } else {
          console.log("Forma um triângulo ESCALENO.");
        }
      } else {
        console.log("Os lados fornecidos NÃO formam um triângulo.");
      }

      rl.close();
    });
  });
});