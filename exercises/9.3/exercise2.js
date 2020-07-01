const elevados = new Promise ((resolve, reject) => {
    const numbers = [];
    for(let i = 1; i < 10; i += 1) {
      let makeNumber = ((Math.random()*50).toFixed(0));
      numbers.push(makeNumber * makeNumber)
    }
    const soma = numbers.reduce((total, number) => total += number);
    if(soma < 8000) resolve(soma)
    else reject()
  })


elevados.then ( message => {
  const arrDivision = []
  arrDivision.push(message/2)
  arrDivision.push(message/3)
  arrDivision.push(message/5)
  arrDivision.push(message/10)
  return arrDivision
})
.then(data =>{
  console.log(data.reduce((total, number) => total += number))
})
.catch( error => console.log('É mais que oito mil! essa promise deve estar quebrada!'))