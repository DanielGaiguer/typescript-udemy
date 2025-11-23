// Overload de funcoes e dizer que uma funcao se comporta de maneira diferente dependendo da quantidade de parametros recebidos por ela

type Adder = {
    (x: number): number;
    (x: number, y: number): number;
    (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
    if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
    return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
