/* eslint-disable @typescript-eslint/no-explicit-any */
// Voce pode utilizar o decorador de metodo para assistir, ou para editar as coisas dentro do metodo
// As coisas que sao diferentes do decorador de classe são: O momento que ele e chamado, neste caso é na hora da criacao do metodo, e o retorno deve ser um PropertyDescriptor ou Any, ou nada
function decorador(
    classPrototype: any,
    nomeMetodo: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
    console.log(classPrototype);
    console.log(nomeMetodo);
    console.log(descriptor);
    return {
        value: function (...args: string[]) {
            return args[0].toUpperCase();
        },
    };
}

export class UmaPessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    @decorador
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
