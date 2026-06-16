const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const funcionario = {
  nome: "Ana Paula",
  cargo: "Desenvolvedora",
  salario: 5000,
  anosExperiencia: 4,
};

function exibirDados() {
  console.log("\n  Dados do funcionário:");
  for (const chave in funcionario) {
    const label = chave === "anosExperiencia" ? "anos de experiência" : chave;
    const valor = chave === "salario"
      ? `R$ ${funcionario[chave].toFixed(2)}`
      : funcionario[chave];
    console.log(`  ${label}: ${valor}`);
  }
}

function calcularBonus() {
  const anos = funcionario.anosExperiencia;
  let percentual;
  if (anos <= 2)      percentual = 5;
  else if (anos <= 5) percentual = 10;
  else                percentual = 15;

  const bonus = (funcionario.salario * percentual) / 100;
  console.log(`\n  Anos de experiência : ${anos}`);
  console.log(`  Percentual de bônus : ${percentual}%`);
  console.log(`  Bônus anual         : R$ ${bonus.toFixed(2)}`);
}

async function editarFuncionario() {
  console.log("\n  (deixe em branco para manter o valor atual)");

  const nome = await pergunta(`  Nome (atual: ${funcionario.nome}): `);
  if (nome.trim()) funcionario.nome = nome.trim();

  const cargo = await pergunta(`  Cargo (atual: ${funcionario.cargo}): `);
  if (cargo.trim()) funcionario.cargo = cargo.trim();

  const salario = await pergunta(`  Salário (atual: ${funcionario.salario}): `);
  const s = parseFloat(salario);
  if (!isNaN(s) && s > 0) funcionario.salario = s;

  const anos = await pergunta(`  Anos de experiência (atual: ${funcionario.anosExperiencia}): `);
  const a = parseInt(anos);
  if (!isNaN(a) && a >= 0) funcionario.anosExperiencia = a;

  console.log("  Dados atualizados.");
}

async function main() {
  console.log("================================");
  console.log("   EXERCÍCIO 3 — FUNCIONÁRIO    ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Listar dados (for...in)");
    console.log("2. Calcular bônus anual");
    console.log("3. Editar funcionário");
    console.log("4. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      exibirDados();
    } else if (op === "2") {
      calcularBonus();
    } else if (op === "3") {
      await editarFuncionario();
    } else if (op === "4") {
      sair = true;
    } else {
      console.log("  Opção inválida.");
    }
  }

  console.log("\nPrograma encerrado.");
  rl.close();
}

main();