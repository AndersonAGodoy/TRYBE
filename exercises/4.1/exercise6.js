let nomePeca = "Bispo";

nomePeca = nomePeca.toLowerCase();

if(nomePeca == nomePeca) {
    console.log(`O ${nomePeca} se move em diagonal`);
} else if (nomePeca !== nomePeca) {
    console.log("a peça não existe");
} else {
    console.log("Nada funcionou");
}