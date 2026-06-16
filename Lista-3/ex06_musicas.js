const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pergunta(msg) {
  return new Promise((resolve) => rl.question(msg, resolve));
}

const musicas = [
  { titulo: "Bohemian Rhapsody", artista: "Queen",         duracao: 354 },
  { titulo: "Hotel California",  artista: "Eagles",        duracao: 391 },
  { titulo: "Stairway to Heaven",artista: "Led Zeppelin",  duracao: 482 },
  { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracao: 301 },
];

function formatarTempo(segundos) {
  const m = Math.floor(segundos / 60).toString().padStart(2, "0");
  const s = (segundos % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function listarMusicas() {
  console.log("\n  Playlist:");
  for (const m of musicas) {
    console.log(`  ${m.artista} — ${m.titulo} (${formatarTempo(m.duracao)})`);
  }
}

function duracaoTotal() {
  let total = 0;
  musicas.forEach((m) => { total += m.duracao; });
  console.log(`\n  Duração total: ${formatarTempo(total)} (${musicas.length} músicas)`);
}

async function adicionarMusica() {
  const titulo  = (await pergunta("  Título: ")).trim();
  const artista = (await pergunta("  Artista: ")).trim();
  const min     = parseInt(await pergunta("  Duração — minutos: "));
  const seg     = parseInt(await pergunta("  Duração — segundos: "));

  if (!titulo || !artista || isNaN(min) || isNaN(seg)) {
    console.log("  Opção inválida.");
    return;
  }

  musicas.push({ titulo, artista, duracao: min * 60 + seg });
  console.log(`  "${titulo}" adicionada.`);
}

async function main() {
  console.log("================================");
  console.log("     EXERCÍCIO 6 — MÚSICAS      ");
  console.log("================================");

  let sair = false;
  while (!sair) {
    console.log("\n1. Listar músicas (for...of)");
    console.log("2. Duração total (forEach)");
    console.log("3. Adicionar música");
    console.log("4. Sair");

    const op = (await pergunta("Opção: ")).trim();

    if (op === "1") {
      listarMusicas();
    } else if (op === "2") {
      duracaoTotal();
    } else if (op === "3") {
      await adicionarMusica();
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