let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let isOdd = [];

for ( i = 0; i < numbers.length; i += 1 ) {
  if(numbers[i] % 2 !== 0) {
    isOdd += 1;
  }   
}

if (isOdd % 2 !== 0) {
  console.log(isOdd.length);
} else {
  console.log("não existe números ímpares")
}