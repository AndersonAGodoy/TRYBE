const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

const expected = mySum([1, -2, -3, 4]);

assert.equal(expected, 10);
assert.equal(expected, 10);
