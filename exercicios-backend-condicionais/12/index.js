const diaDaSemana = 3;
let verificador;

switch(diaDaSemana){
    case 1:
        verificador = 'Segunda';
    break;
    case 2:
        verificador = 'Terça';
    break;
    case 3:
        verificador = 'Quarta';
    break;
    case 4:
        verificador = 'Quinta';
    break;
    case 5:
        verificador = 'Sexta';
    break;
    case 6:
        verificador = 'Sabado';
    break;
    case 7:
        verificador = 'Domingo';
    break;
    default:
        verificador = 'Dia da semana não é valido'
    break;

}
console.log(verificador)