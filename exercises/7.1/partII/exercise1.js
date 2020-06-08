function factorial(n) {
  let contador = 1;

  for(let i = n; i > 1; i -= 1) {
    contador = contador * i;
  }
  console.log(contador);
}

factorial(5);

const fatorial = (n) => n === 0 || n === 1 ? 1 : n * fatorial(n-1)

console.log(fatorial(8))