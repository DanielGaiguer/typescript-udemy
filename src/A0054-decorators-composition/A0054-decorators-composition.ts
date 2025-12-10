/* eslint-disable @typescript-eslint/no-explicit-any */

type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
    return function (target: Constructor) {
        console.log('Sou o decorador e recebi', target);
        return class extends target {
            cor: string;
            name: string;
            constructor(...args: any[]) {
                super(...args);
                this.name = this.inverte(args[0]);
                this.cor = this.inverte(args[1]);
            }

            inverte(valor: string): string {
                return (
                    valor.split('').reverse().join('') +
                    ' ' +
                    param1 +
                    ' ' +
                    param2
                );
            }
        };
    };
}

function outroDecorador(param1: string) {
    return function (target: Constructor) {
        console.log('Sou o segundo decorador' + param1);
        return target;
    };
}

@outroDecorador('Parametro do outro decorador') // 2
@inverteNomeECor('Valor1', 'Valor2') //1
export class Animal {
    constructor(
        public name: string,
        public cor: string,
    ) {
        console.log('Sou a classe');
    }
}

const animal = new Animal('cachorro', 'roxo');
console.log(animal);
