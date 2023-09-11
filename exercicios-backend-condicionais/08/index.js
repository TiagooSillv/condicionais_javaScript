const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;


if(possuiPatologia){
    console.log("Acesso Negado")
}
if(idade < 12){

    console.log("Acesso Negado")
}
if(altura < 150){
    console.log("Acesso Negado")
}
if (ehEstudante || (idade < 18 && idade > 12)){
    console.log("10 reais")
}else{
    console.log("20 reais")
}