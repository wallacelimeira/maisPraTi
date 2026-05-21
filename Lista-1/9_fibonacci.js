let a = 0, b = 1;
const fibonacci = [a, b];

for (let i = 2; i < 10; i++) {
  const proximo = a + b;
  fibonacci.push(proximo);
  a = b;
  b = proximo;
}

console.log("Primeiros 10 termos de Fibonacci:");
console.log(fibonacci.join(", "));