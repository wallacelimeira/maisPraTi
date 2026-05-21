function mesclarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { nome: "Ana", idade: 20, cidade: "São Paulo" };
const obj2 = { cidade: "Campina Grande", profissao: "Engenheira" };

const combinado = mesclarObjetos(obj1, obj2);
console.log("Objeto combinado (obj2 tem precedência):");
console.log(combinado);