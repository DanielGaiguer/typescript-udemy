type TipoNome = {
    nome: string;
    nomeCompleto: () => string;
};

type TipoSobrenome = {
    sobrenome: string;
};

export class Pessoa implements TipoNome, TipoSobrenome {
    constructor(
        public nome: string,
        public sobrenome: string,
    ) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Daniel', 'Gaiguer');
console.log(pessoa.nomeCompleto());
