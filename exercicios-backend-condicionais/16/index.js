//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 18;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;
let verificador;

if (possuiResponsavel){
    verificador = 'Rematrícula realizada com sucesso'
}else{
    if (idadeDoAluno > 17){
        verificador = 'Rematrícula realizada com sucesso'
    }else{
        verificador = 'Rematrícula não foi realizada'
    }

}
console.log(verificador)