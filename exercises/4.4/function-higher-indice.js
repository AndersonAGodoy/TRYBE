

function verificaIndiceMaiorNumero(array) {
  let comparador= 0;
  let index = 0;
  
  for (let i = 0; i < array.length; i += 1) {
    if( array[i] > comparador) {
      comparador = array[i];
    }
  }
  for(let j = 0; j < array.length; j +=1) {
    if(comparador === array[j]) {
      index = j;
    }
  }
  console.log(index);
}

verificaIndiceMaiorNumero([2, 3, 6, 7, 10, 1]);


// com facilitadores
function verificaIndiceMaiorNumero(array) {
  let comparador= 0;
  let index = 0;
  
  for (let i = 0; i < array.length; i += 1) {
    if( array[i] > comparador) {
      comparador = array[i];
      index = array.indexOf(comparador);
    }
  }
  console.log(index);
}

verificaIndiceMaiorNumero([2, 3, 6, 7, 10, 1]);
