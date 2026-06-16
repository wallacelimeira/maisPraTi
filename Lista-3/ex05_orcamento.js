const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const orcamento = {
  alimentação:  { planejado: 800,  gasto: 950  },
  transporte:   { planejado: 300,  gasto: 280  },
  lazer:        { planejado: 400,  gasto: 420  },
  saúde:        { planejado: 200,  gasto: 150  },
};

function exibirOrcamento() {
  console.log("\n  " + "CATEGORIA".padEnd(16) + "PLANEJADO".padEnd(14) + "GASTO".padEnd(14) + "STATUS");
  console.log("  " + "-".repeat(58));

  let totalPlanejado = 0;
  let totalGasto = 0;

  for (const cat in orcamento) {
    const { planejado, gasto } = orcamento[cat];
    const status = gasto <= planejado ? "dentro" : "acima";
    console.log(
      "  " +
      cat.padEnd(16) +
      `R$ ${planejado.toFixed(2)}`.padEnd(14) +
      `R$ ${gasto.toFixed(2)}`.padEnd(14) +
      status
    );
    totalPlanejado += planejado;
    totalGasto += gasto;
  }

  const saldo = totalPlanejado - totalGasto;
  console.log("  " + "-".repeat(58));
  console.log(`  Total planejado : R$ ${totalPlanejado.toFixed(2)}`);
  console.log(`  Total gasto     : R$ ${totalGasto.toFixed(2)}`);
  console.log(`  Saldo do mês    : R$ ${saldo.toFixed(2)} ${saldo >= 0 ? "(positivo)" : "(negativo)"}`);
}

async function editarCategoria() {
  const categorias = Object.keys(orcamento);
  console.log("\n  Categorias: " + categorias.join(", "));
  const cat = (await pergunta("  Categoria: ")).trim().toLowerCase();

  if (!(cat in orcamento)) { console.log("  Categoria não encontrada."); return; }

  const plan = parseFloat(await pergunta(`  Valor planejado (atual: ${orcamento[cat].planejado}): `));
  const gasto = parseFloat(await pergunta(`  Valor gasto (atual: ${orcamento[cat].gasto}): `));

  if (!isNaN(plan) && plan >= 0) orcamento[cat].planejado = plan;
  if (!isNaN(gasto) && gasto >= 0) orcamento[cat].gasto = gasto;
  console.log("  Categoria atualizada.");
}

async function main() {
  console.log("================================");
  console.log("  EXERCÍCIO 5 — ORÇAMENTO MÊS  ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Exibir orçamento e saldo (for...in)");
    console.log("2. Editar categoria");
    console.log("3. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      exibirOrcamento();
    } else if (op === "2") {
      await editarCategoria();
    } else if (op === "3") {
      sair = true;
    } else {
      console.log("  Opção inválida.");
    }
  }

  console.log("\nPrograma encerrado.");
  rl.close();
}

main();