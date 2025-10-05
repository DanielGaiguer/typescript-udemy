//Array<T> - T[]
//Voce pode utilizar um dos dois acima, o segundo e o array, e deste tipo, o T
export function MultiplicaArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

export function concactenaStrings(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

const result = MultiplicaArgs(1, 2, 3);
const concatenacao = concactenaStrings('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);

//readonly

const array1: readonly string[] = ['Daniel', 'Gaiguer'];
const array2: ReadonlyArray<string> = ['Daniel', 'Gaiguer'];

console.log(array1);
console.log(array2);
