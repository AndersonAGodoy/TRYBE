let romanAndArabe = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}


function transformRomanosInNumbers (romanos) {
  let arrayApoio = [];
  let resultadoFinal = 0;

  for(let i = 0; i < romanos.length; i += 1) {
    arrayApoio.push(romanAndArabe[romanos[i]]);
  }

  for(let j = 0; j < arrayApoio.length; j += 1) {
    if(j < arrayApoio.length - 1) {
      if(arrayApoio[j] >= arrayApoio[j + 1]){
        resultadoFinal += arrayApoio[j];
      } else {
        resultadoFinal -= arrayApoio[j];
      }
    }else {
      resultadoFinal +=  arrayApoio[j];
    }
  }
  return resultadoFinal;
}

console.log(transformRomanosInNumbers('IX'.toUpperCase()))