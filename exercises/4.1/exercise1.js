let x = 10;
let y = 15;

let soma;
let subtracao;
let multiplicacao;
let divisao;
let modulo;

soma = x + y;
subtracao = x - y;
multiplicacao = x * y;
divisao = x /y;
modulos = x % y;

console.log(`soma = ${soma}, subtração =  ${subtracao}, multiplicaçao =  ${multiplicacao}, divisão = ${divisao}, Resto da divisão =  ${modulo}`);

// refatorando 

 function somar(x, y){
   return x + y;
 }

 function subtrair (x, y) {
   return x - y;
 }

 function multiplcar(x, y) {
   return x * y;
 }

 function dividir (x, y) {
   return x / y;
 }

 function modulo (x, y) {
   return x % y;
 }

 console.log(somar(10,5), subtrair(10,5), multiplcar(10,5), dividir(10,5, modulo(10,5)))