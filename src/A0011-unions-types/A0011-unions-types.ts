//Unions types, seria indicar que a variavel ou o retorno da funcao tem mais de um tipo, pode ser declarado isto utilizando o sinal de pipe |
// string | number | boolean
function addOrConcat(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
    //return a + b; // Sinal de mais pode ser usado tanto como soma, ou concatenacao, desta forma pura ele vai dar um erro, ja que para o ts, o mais pode ser usado exclusivamente para soma
}

console.log(addOrConcat(10, 30));
console.log(addOrConcat('10', '30'));
console.log(addOrConcat('10', 30));
console.log(addOrConcat(10, '30'));
