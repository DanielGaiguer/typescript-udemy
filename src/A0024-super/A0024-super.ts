// SuperClasse
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

// SubClasses
export class Aluno extends Pessoa {
    // caso voce precise reescrever um construtor de uma superclasse, voce tem por obrigacao que chamar o contrutor dessa superclasse, neste exemplo:
    //  Lembrando que o contructor nao esta sendo reescrito, mas sim apenas recebendo valores, e escrevendo os paramentros a mais necessarios
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string,
    ) {
        // Aqui, esta sendo chamado o construtor de Pessoa, com o metodo super()
        super(nome, sobrenome, idade, cpf);
    }

    getnomeCompleto(): string {
        console.log('Fazendo Algo antes');
        const result = super.getnomeCompleto();
        return result + 'TESTEEEE';
    }
}

export class Cliente extends Pessoa {
    getnomeCompleto(): string {
        return 'Isso vem do Cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Daniel', 'Gaiguer', 16, '000.000.000-00');
const aluno = new Aluno('Daniel', 'Gaiguer', 16, '000.000.000-00', '0001');
const cliente = new Cliente('Daniel', 'Gaiguer', 16, '000.000.000-00');

console.log(pessoa.getnomeCompleto());
console.log(aluno.getnomeCompleto());
console.log(cliente.getnomeCompleto());
console.log(aluno);
