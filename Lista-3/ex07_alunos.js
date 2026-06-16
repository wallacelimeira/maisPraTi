const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const alunos = [
  { nome: "Ana",     nota: 8.5 },
  { nome: "Bruno",   nota: 5.0 },
  { nome: "Carla",   nota: 9.2 },
  { nome: "Diego",   nota: 3.8 },
  { nome: "Elisa",   nota: 6.0 },
  { nome: "Felipe",  nota: 4.5 },
];

function classificar(nota) {
  if (nota >= 7)      return "Aprovado";
  else if (nota >= 5) return "Recuperação";
  else                return "Reprovado";
}

function listarAlunos() {
  console.log("\n  " + "NOME".padEnd(12) + "NOTA".padEnd(8) + "SITUAÇÃO");
  console.log("  " + "-".repeat(32));
  for (const aluno of alunos) {
    const sit = classificar(aluno.nota);
    const icone = sit === "Aprovado" ? "✓" : sit === "Recuperação" ? "⚠" : "✗";
    console.log(`  ${aluno.nome.padEnd(12)}${aluno.nota.toFixed(1).padEnd(8)}${icone} ${sit}`);
  }
}

function calcularMedias() {
  const aprovados   = [];
  const reprovados  = [];

  alunos.forEach((a) => {
    const sit = classificar(a.nota);
    if (sit === "Aprovado")  aprovados.push(a.nota);
    if (sit === "Reprovado") reprovados.push(a.nota);
  });

  const media = (arr) => arr.length
    ? (arr.reduce((s, n) => s + n, 0) / arr.length).toFixed(2)
    : "—";

  console.log(`\n  Aprovados (${aprovados.length})  — média: ${media(aprovados)}`);
  console.log(`  Reprovados (${reprovados.length}) — média: ${media(reprovados)}`);
}

async function adicionarAluno() {
  const nome = (await pergunta("  Nome: ")).trim();
  if (!nome) { console.log("  Nome inválido."); return; }
  const nota = parseFloat(await pergunta("  Nota (0–10): "));
  if (isNaN(nota) || nota < 0 || nota > 10) { console.log("  Nota inválida."); return; }
  alunos.push({ nome, nota });
  console.log(`  ${nome} adicionado — ${classificar(nota)}`);
}

async function main() {
  console.log("================================");
  console.log("     EXERCÍCIO 7 — ALUNOS       ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Classificar alunos (for...of)");
    console.log("2. Médias de aprovados/reprovados (forEach)");
    console.log("3. Adicionar aluno");
    console.log("4. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      listarAlunos();
    } else if (op === "2") {
      calcularMedias();
    } else if (op === "3") {
      await adicionarAluno();
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