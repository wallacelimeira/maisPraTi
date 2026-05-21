const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const qtd = 3; // Alterar para 80

function lerFuncionario(i) {
  if (i > qtd) {
    rl.close();
    return;
  }
  console.log(`\n--- Funcionário ${i} ---`);
  rl.question("Matrícula: ", (matricula) => {
    rl.question("Nome: ", (nome) => {
      rl.question("Salário bruto: R$ ", (inputSalario) => {
        const salarioBruto = parseFloat(inputSalario);
        const deducaoINSS = salarioBruto * 0.12;
        const salarioLiquido = salarioBruto - deducaoINSS;

        console.log(`\n========= CONTRACHEQUE =========`);
        console.log(`Matrícula:       ${matricula.trim()}`);
        console.log(`Nome:            ${nome.trim()}`);
        console.log(`Salário bruto:   R$ ${salarioBruto.toFixed(2)}`);
        console.log(`Dedução INSS:    R$ ${deducaoINSS.toFixed(2)}`);
        console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
        console.log(`================================`);

        lerFuncionario(i + 1);
      });
    });
  });
}

lerFuncionario(1);