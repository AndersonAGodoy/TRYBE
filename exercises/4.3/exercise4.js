let n = 5;

for (let i = 1; i <= n-2; i += 1) {
  let linha = "";
  for( let j = n-i-1; j >=0; j -= 1) {
    linha += " ";
  }
  for (k = 0; k < i; k +=1) {
    linha += "*";
  }
  for (l = 1; l < i; l += 1) {
    linha += "*";
  }
  console.log(linha)
}
