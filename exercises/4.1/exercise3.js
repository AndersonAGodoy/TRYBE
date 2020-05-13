let x = 2;
let y = 20;
let z = 10;
let resultado = 0;

if (x > y && x > z) {
    resultado = x;
} else if (y > x && y > z) {
    resultado = y;
} else {
    resultado = z;
}

console.log(resultado);

