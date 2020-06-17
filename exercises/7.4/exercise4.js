const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:
  function addAllnumbers(numbers){
    let newNumbers = 0;
    for(let i = 0; i < numbers.length; i += 1) {
      newNumbers += numbers[i];
    }
    return newNumbers;
  }
//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);