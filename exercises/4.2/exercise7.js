let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let verificadorNumeroMenor = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
  if(numbers[i] < verificadorNumeroMenor) {
    verificadorNumeroMenor = numbers[i];
  }
}

console.log(verificadorNumeroMenor)