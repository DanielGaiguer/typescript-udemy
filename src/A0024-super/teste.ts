export class Pessoa {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        private readonly idade: number,
    ) {}
}

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        public readonly serie: string,
    ) {
        super(nome, sobrenome, idade);
    }
}

const aluno1 = new Aluno('Daniel', 'Gaiguer', 16, 'A0001');

console.log(aluno1);
