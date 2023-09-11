const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos
let totalDeRendimentosEmReal = totalDeRendimentos / 100;

//seu código aqui

if (aposentada){
    console.log("ISENTA")
}
if(portadoraDeDoenca){
    console.log("ISENTA")
}
if (totalDeRendimentosEmReal > 28559.70){
    console.log("PEGA LEAO")
}else{
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
}