const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
  function wordLengths(words) {
    let newArray = [];
    for( let i = 0; i < words.length; i += 1 ){
      newArray.push(words[i].length)
    };
    return newArray;
  }
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);