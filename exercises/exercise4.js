const assert = require('assert')
const { captureRejectionSymbol } = require('events')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo

const {bornIn} = people;

const filterPeople = () => {
  const personsWhoBornIn = people.filter(person => person.nationality === 'Australian' && person.bornIn < 2001);
  return personsWhoBornIn;
}

const filteredPeople = filterPeople(people)

console.log(filteredPeople)

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })
    