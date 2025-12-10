/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Decoradores de propriedade permite que retorne um PropertyDescriptor, tendo acesso a writable, configurable, enumerable, podemos configurar value e nesse caso de propriedades podemos configurar getter e setter, o que e o mais importante, podendo alterar o valor, ou validar o valor.

function decorador(classPrototype: any, nome: string | symbol): any {
    let valorPropriedade: any;
    return {
        get: () => valorPropriedade,
        set: (valor: any) => {
            if (typeof valor === 'string') {
                valorPropriedade = valor.split('').reverse().join('');
                return;
            }
            valorPropriedade = valor;
        },
    };
}

export class UmaPessoa {
    @decorador
    nome: string;
    @decorador
    sobrenome: string;
    @decorador
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    get nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome) return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(' ');
    }
}

const pessoa = new UmaPessoa('Daniel', 'gaiguer', 17);
const metodo = pessoa.metodo('Ola mundo');
console.log(metodo);
