
function checkStrings(stringWord, stringEnding) {

  if(stringWord.length > stringEnding.length) {
    let endEqual = true;

    for(let i = 0; i < stringWord.length; i += 1) {
      if (stringWord[stringWord.length-1] !== stringEnding[stringEnding.length-1]){
        equal = false;
      }
    }

    return endEqual;
  }
  
}

console.log(checkStrings("Trybe", "be"))