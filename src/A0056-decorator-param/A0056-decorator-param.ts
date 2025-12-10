/* eslint-disable @typescript-eslint/no-explicit-any */
// Decorador de parametros, so funcionam para assistir o que ele e, o que ele tem
function decorador(
    classPrototype: any,
    nomeMetodo: string | symbol | undefined,
    index: number,
): any {
    console.log(classPrototype);
    console.log(nomeMetodo);
    console.log(index);
}
export class UmaPessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(
        @decorador nome: string,
        @decorador sobrenome: string,
        @decorador idade: number,
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    metodo(@decorador msg: string): string {
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
