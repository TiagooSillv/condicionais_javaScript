//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
let valorDoDesconto;
if (tipoDePagamento == 'credito'){

    valorDoDesconto = valorDoProduto * 0.05;

}else if(tipoDePagamento == 'cheque'){
    valorDoDesconto = valorDoProduto * 0.03;
}else if(tipoDePagamento == 'dinheiro'){
    valorDoDesconto = valorDoProduto * 0.10;
}
let valorTotal = valorDoProduto - valorDoDesconto;

console.log(`O valor total a ser pago é de ${(valorTotal.toFixed(2))}`)