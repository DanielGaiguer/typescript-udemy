// SuperClasse
export class Pessoa {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        private readonly idade: number,
        protected _cpf: string,
    ) {
        this.cpf = _cpf; //Desta forma o setter e chamado diretamente
    }

    set cpf(cpf: string) {
        console.log('setter chamado');
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, '');
    }
}

const pessoa = new Pessoa('Daniel', 'Gaiguer', 16, '000.000.000-00');
pessoa.cpf = '111.111.111-11'; // Setter e chamado apos o sinal de atribuicao "="
console.log(pessoa.cpf); //Getter e chamado desta forma, como um parametro
