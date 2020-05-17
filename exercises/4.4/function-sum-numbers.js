
function somarNumeros(number) {
  let sum = 0;
  for (let i = 0 ; i <= number; i ++) {
    sum += i;
  }
  return sum;
}

console.log(somarNumeros(255));