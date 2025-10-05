//A tupla seria um array com tipos bem especificos e de tamannho fixo
//Tuple
const dadosCliente1: readonly [number, string] = [1, 'Daniel'];
const dadosCliente2: [number, string, string] = [1, 'Daniel', 'Gaiguer'];
const dadosCliente3: [number, string, string?] = [1, 'Daniel']; //Opcional
const dadosCliente4: [number, string, ...string[]] = [1, 'Daniel', 'Gaiguer']; //usando Rest operator

dadosCliente1[0] = 100; //Pode ser alterado, desde de que seja do mesmo tipo

//dadosCliente1[1] = 100; Da erro neste caso

dadosCliente1[1] = 'Menezes';

//dadosCliente1[2] = 'Gaiguer'; //Da erro, ja que ele esta contando que tem uma tupla definindo o tipo do indice2

//dadosCliente1.pop(); //Nao e um comportamento esperado do typescript, ja que ele espera ter dois valores, para evitar isso devemos usar readonly, assim nao e possivel alterar o array

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly Array

const array1: readonly string[] = ['Daniel', 'Gaiguer'];
const array2: ReadonlyArray<string> = ['Daniel', 'Gaiguer'];

console.log(array1);
console.log(array2);
