const caractere = 'o';
let verificador;

switch(caractere){
    case 'a':
        verificador = "Vogal minuscúla";
        break;
    case 'e':
        verificador = "Vogal minuscúla"
        break;
    case 'i':
        verificador = "Vogal minuscúla";
        break;
    case 'o':
        verificador = "Vogal minuscúla";
        break;
    case 'u':
        verificador = "Vogal minuscúla";
        break;
    default:
        let tipoNumero = typeof(caractere);
        if (tipoNumero === 'number'){
            verificador = 'Número'
        }else{

            switch(caractere){
                case 'A':
                    verificador = "Vogal Maiúscula";
                break;
                case 'E':
                    verificador = "Vogal Maiúscula";
                break;
                case 'I':
                    verificador = "Vogal Maiúscula";
                break;
                case 'O':
                    verificador = "Vogal Maiúscula";
                break;
                case 'U':
                    verificador = "Vogal Maiúscula";
                break;
                default:
                    verificador = 'Consoante';
                break;
            }
        }
}
console.log(verificador)