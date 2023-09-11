//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 3;
let verificador;
if (quantidadeDeAguaIngerida < 1.5){
    verificador = 'Risco Alto - Você está ingerindo pouquissima água, beba mais água!'
}else if (quantidadeDeAguaIngerida <= 3){
    verificador = 'Risco Moderado - Você está ingerindo pouca água, beba mais'
}else if (quantidadeDeAguaIngerida > 3){
    verificador = '	Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!'
}
console.log(verificador)