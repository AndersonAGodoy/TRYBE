let margarida = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "sim"
};

let patinhas = {
  personagem:"Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "e O último MacPatinhas",
  recorrente:"sim"
}

for( i in margarida && patinhas) {
  if (i !== "recorrente"){
    console.log(margarida[i] + " e " + patinhas[i])
  } else if( margarida[i] !== patinhas[i]) {
    console.log(margarida[i] + " e " + patinhas[i])
  } else {
    console.log("Ambos são Recorrentes");
  }
}

