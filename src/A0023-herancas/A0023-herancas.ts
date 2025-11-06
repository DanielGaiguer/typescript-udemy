export class Pessoa {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        private readonly idade: number,
        protected cpf: string,
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getnomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
    getnomeCompleto(): string {
        return 'Isso vem do Aluno: ' + this.nome + ' ' + this.sobrenome;
    }
}
export class Cliente extends Pessoa {
    getnomeCompleto(): string {
        return 'Isso vem do Cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Daniel', 'Gaiguer', 16, '000.000.000-00');
const aluno = new Aluno('Daniel', 'Gaiguer', 16, '000.000.000-00');
const cliente = new Cliente('Daniel', 'Gaiguer', 16, '000.000.000-00');

console.log(pessoa.getnomeCompleto());
console.log(aluno.getnomeCompleto());
console.log(cliente.getnomeCompleto());
