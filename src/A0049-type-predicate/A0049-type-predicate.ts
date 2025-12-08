// Nos principios Solid, existem funcoes e classes bem pequenas, uma delas, sao as funcoes para a checagem de tipos.
export function isNumber(value: unknown): value is number {
    return typeof value === 'number'; //Isso é um Type Guard
}

console.log(isNumber('123'));
console.log(isNumber(123));

export function soma<T>(...args: T[]): number {
    const retorno = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);

    return retorno;
}

console.log(soma(1, 2, 3));
// console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1])); // Desta forma nao e mais possivel nas versoes atuais
console.log(soma<number | string>(1, 2, 3, 'a', 'b', 'c', 1));
console.log(soma('a', 'b', 'c'));
