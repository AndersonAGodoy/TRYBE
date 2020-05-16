let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let comparador = names[0];

for(let i = 0; i < names.length; i += 1) {
  if(names[i].length > comparador.length) {
    comparador = names[i];
  }
}
console.log(comparador);