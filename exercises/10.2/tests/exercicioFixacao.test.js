const service = require('../exercicioFixacao');

let randomNumber = () => Math.floor(Math.random() * 100)
let isDivisible = (number) =>(randomNumber() % number) === 0

test('#isDivisible', () => {
  randomNumber = jest.fn();
  isDivisible(2);
  expect(randomNumber).toHaveBeenCalled()
})