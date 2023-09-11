//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;
let rendaMensalEmReais = rendaMensalEmCentavos / 100;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;
let totalJaPagoPeloAlunoEmReais = totalJaPagoPeloAluno / 100;

let verificador ; 

if (totalJaPagoPeloAlunoEmReais >= 18_000){
    verificador = 'Não precisa pagar pois o já atingiu o valor de 18.000R$'
}else if(mesesDecorridos > 60){
    verificador = 'Não precisa pagar pois o já atingiu o tempo da divída'
}else if(rendaMensalEmReais < 2000){
    verificador = 'Não precisa pagar pois não atingiu o valor nescessario'
}else{
    console.log(`O valor da parcela vai ser de ${rendaMensalEmReais * 0.18} este mês`)
}


