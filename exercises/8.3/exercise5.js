const assert = require('assert')

let myList = [1, 2, 3];
const swap = () =>{
  let mylist2 = [3, 2, 1];
  myList = mylist2;
  return myList
}

console.log(swap())

const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)
    
