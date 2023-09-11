//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
let cont;
let valorDaparcela = valorDoProduto / quantidadeDoParcelamento;

for (cont = 0; valorPago != 0; cont ++){

    let verificador = valorPago - valorDaparcela;

}
console.log(`Restam ${quantidadeDoParcelamento - cont}`)
