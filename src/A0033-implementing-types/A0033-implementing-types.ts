type TipoPessoa = {
    nome: string;
    nomeCompleto: () => string;
};

type TipoSobrenome = {
    sobrenome: string;
};

class Pessoa implements TipoPessoa, TipoSobrenome {
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
