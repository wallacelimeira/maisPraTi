const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const dados = [];

function pesquisaSalariosEFilhos(dados) {
  const total = dados.length;
  const somaSalarios = dados.reduce((acc, p) => acc + p.salario, 0);
  const somaFilhos = dados.reduce((acc, p) => acc + p.filhos, 0);
  const maiorSalario = Math.max(...dados.map((p) => p.salario));
  const abaixo350 = dados.filter((p) => p.salario <= 350).length;

  return {
    mediaSalario: somaSalarios / total,
    mediaFilhos: somaFilhos / total,
    maiorSalario,
    percentualAbaixo350: (abaixo350 / total) * 100,
  };
}

console.log("Digite os dados. Salário 0 para encerrar.");

function lerDados() {
  rl.question("Salário: R$ ", (inputSalario) => {
    const salario = parseFloat(inputSalario);
    if (salario === 0) {
      if (dados.length === 0) {
        console.log("Nenhum dado informado.");
      } else {
        const r = pesquisaSalariosEFilhos(dados);
        console.log(`\nMédia de salários:     R$ ${r.mediaSalario.toFixed(2)}`);
        console.log(`Média de filhos:       ${r.mediaFilhos.toFixed(2)}`);
        console.log(`Maior salário:         R$ ${r.maiorSalario.toFixed(2)}`);
        console.log(`Com salário até R$350: ${r.percentualAbaixo350.toFixed(1)}%`);
      }
      rl.close();
    } else {
      rl.question("Número de filhos: ", (inputFilhos) => {
        dados.push({ salario, filhos: parseInt(inputFilhos) });
        lerDados();
      });
    }
  });
}

lerDados();