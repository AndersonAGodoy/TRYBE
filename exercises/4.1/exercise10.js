let custoProduto = 100;
let valorVenda = 130;

let custoProdutoImposto = custoProduto +  (custoProduto * 0.2);
let lucro = (valorVenda - custoProdutoImposto) * 1000;

if( custoProduto < 0 && valorVenda < 0 ) {
    console.log("Erro, não é possível continuar");
} else {
    console.log(lucro.toFixed(2))
}


