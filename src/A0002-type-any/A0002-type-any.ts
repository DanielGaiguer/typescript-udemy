//E uma falta de tipo ou qualquer tipo
//Utilize any apenas em ultimo caso
function showMassage(msg: any) {
    return msg;
}

console.log(showMassage([1, 2, 3]));
console.log(showMassage('Olá'));
console.log(showMassage(1));
