const higherString = (longestWord) => {
  const arrayOfWords = longestWord.split(" ");
  let comparador = arrayOfWords[0];
  for (let i = 0; i < arrayOfWords.length; i += 1) {
    if (arrayOfWords[i].length > comparador.length) {
      comparador = arrayOfWords[i];
    }
  }
  return comparador;
};

console.log(
  higherString("Antônio foi no banheiro e não sabemos o que aconteceu")
);
