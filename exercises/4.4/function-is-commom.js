let array = [2, 3, 2, 5, 8, 2, 3];

function seRepete(array) {

  let numbers = {};

  for(i in array) {

    if(i in numbers) {
      numbers[array[i]] += 1;
    } else {
      numbers[array[i]] = 1;
    }
  }

  let maisRepetidos = 0;
  let qtdRepetidos = 0;
  
  for( i in numbers) {
    if( numbers[i] >= maisRepetidos) {
      maisRepetidos = i;
      qtdRepetidos = numbers[i] ;
    }
  }
  return maisRepetidos;
}

console.log(seRepete(array));