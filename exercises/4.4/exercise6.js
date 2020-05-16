function verificaPalimdromo(str) {

  let newStr = str.split('').reverse().join('');

  if(newStr === str) {
    return true;
  } else {
    return false;
  } 
  
}

console.log(verificaPalimdromo("arara"));

verificaPalimdromo("Desenvolvimento")

// sem utilizar funções auxiliadoras
function verificaPalimdromo2(str) {
  let newStr2 = "";
  
  for(let i = str.length - 1; i >=0; i -= 1) {
    newStr2 += str[i];
  }
  if ( newStr2 === str){
    return true;
  }  else {
    return false
  }
}

console.log(verificaPalimdromo2("arara"));
