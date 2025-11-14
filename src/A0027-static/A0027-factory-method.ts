// SuperClasse
export class Pessoa {
    static idadePadrao = 0;
    static cpfPadrao = '000.000.00-00';

    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        public readonly idade: number,
        public cpf: string,
    ) {}

    MetodoNormal(): void {
        console.log(Pessoa.idadePadrao);
        console.log(Pessoa.cpfPadrao);
    }

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(
            nome,
            sobrenome,
            Pessoa.idadePadrao,
            Pessoa.cpfPadrao,
        );
    }
}

const pessoa1 = new Pessoa('Daniel', 'Gaiguer', 16, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('Valdo', 'Gaiguer');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.MetodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
