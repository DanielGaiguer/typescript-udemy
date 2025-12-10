/* eslint-disable @typescript-eslint/no-explicit-any */
// A sua função só serve para receber os parametros, mas a funcao decoradora e a funcao de retorno.
// Entao a sua funcao precisa necessariamente retornar uma funcao decoradora
function inverteNomeECor(param1: string, param2: string) {
    // Closure
    return function inverteNomeECor<T extends new (...args: any[]) => any>(
        target: T,
    ): T {
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

@inverteNomeECor('Valor1', 'Valor2')
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
