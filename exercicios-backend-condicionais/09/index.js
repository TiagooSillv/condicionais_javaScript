const nota = 8.5;
let estudando;
if (nota < 4){estudando = 'E'}
else if(nota <= 5.9){estudando = 'D'}
else if (nota <= 7.9){estudando = 'C.'}
else if (nota <= 8.9 ){ estudando = 'B'}
else if (nota > 8.9){ estudando = 'A'}

console.log(`O estudando obteve conceito ${estudando}`)