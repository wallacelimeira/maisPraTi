function totalVendasPorVendedor(vendas) {
  const resumo = {};
  for (const venda of vendas) {
    resumo[venda.vendedor] = (resumo[venda.vendedor] || 0) + venda.valor;
  }
  return resumo;
}

const vendas = [
  { vendedor: "Lucas", valor: 500 },
  { vendedor: "Ana", valor: 300 },
  { vendedor: "Lucas", valor: 200 },
  { vendedor: "Ana", valor: 450 },
  { vendedor: "Anamara", valor: 700 },
];

const resumo = totalVendasPorVendedor(vendas);
console.log("Total de vendas por vendedor:");
for (const vendedor in resumo) {
  console.log(`${vendedor}: R$ ${resumo[vendedor].toFixed(2)}`);
}